export const dynamic = 'force-dynamic';

const HUBSPOT_SUBMIT_BASE = 'https://api.hsforms.com/submissions/v3/integration/submit';
const MAX_SUBMISSIONS_PER_IP = 5;
const RATE_WINDOW_MS = 60000;
const submissionAttempts = new Map();

function isRateLimited(ip) {
	const now = Date.now();
	const recent = (submissionAttempts.get(ip) || []).filter(ts => now - ts < RATE_WINDOW_MS);
	if (recent.length >= MAX_SUBMISSIONS_PER_IP) {
		submissionAttempts.set(ip, recent);
		return true;
	}
	recent.push(now);
	submissionAttempts.set(ip, recent);
	if (submissionAttempts.size > 2000) {
		for (const [key, stamps] of submissionAttempts) {
			if (stamps.every(ts => now - ts >= RATE_WINDOW_MS)) {
				submissionAttempts.delete(key);
			}
		}
	}
	return false;
}

function getIp(request) {
	const forwarded = request.headers.get('x-forwarded-for');
	return forwarded ? forwarded.split(',')[0].trim() : 'unknown';
}

function validateConfig() {
	const portalId = process.env.HUBSPOT_PORTAL_ID;
	const formGuid = process.env.HUBSPOT_FORM_GUID;
	if (!portalId || !formGuid) {
		return Response.json(
			{ error: 'The contact form is not configured yet. Please reach us by phone or email.' },
			{ status: 503 }
		);
	}
	return { portalId, formGuid };
}

export async function POST(request) {
	const config = validateConfig();
	if (config instanceof Response) return config;

	const ip = getIp(request);
	if (isRateLimited(ip)) {
		return Response.json(
			{ error: 'Too many messages sent. Please wait a minute and try again.' },
			{ status: 429 }
		);
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: 'Invalid request.' }, { status: 400 });
	}

	if (typeof body.companyUrl === 'string' && body.companyUrl.trim()) {
		return Response.json({ status: 'success' });
	}

	const firstname = typeof body.firstname === 'string' ? body.firstname.trim().slice(0, 100) : '';
	if (!firstname) {
		return Response.json({ error: 'Please enter your first name.' }, { status: 400 });
	}

	const lastname = typeof body.lastname === 'string' ? body.lastname.trim().slice(0, 100) : '';
	if (!lastname) {
		return Response.json({ error: 'Please enter your last name.' }, { status: 400 });
	}

	const email = typeof body.email === 'string' ? body.email.trim().slice(0, 254) : '';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
	}

	const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
	if (!/^[+0-9 ()-]{6,20}$/.test(phone)) {
		return Response.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
	}

	const message = typeof body.message === 'string' ? body.message.trim().slice(0, 1500) : '';

	const origin = request.headers.get('origin');
	const hubspotBody = {
		submittedAt: Date.now(),
		fields: [
			{ objectTypeId: '0-1', name: 'firstname', value: firstname },
			{ objectTypeId: '0-1', name: 'lastname', value: lastname },
			{ objectTypeId: '0-1', name: 'email', value: email },
			{ objectTypeId: '0-1', name: 'phone', value: phone },
			...(message ? [{ objectTypeId: '0-1', name: 'message', value: message }] : [])
		],
		context: {
			pageName: 'Contact',
			...(origin ? { pageUri: `${origin}/contact` } : {})
		}
	};

	try {
		const res = await fetch(`${HUBSPOT_SUBMIT_BASE}/${config.portalId}/${config.formGuid}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(hubspotBody)
		});

		if (res.ok) {
			return Response.json({ status: 'success' });
		}

		const hubspotRes = await res.json().catch(() => null);
		console.error('HubSpot submission failed', res.status, JSON.stringify(hubspotRes));

		if (res.status === 429) {
			return Response.json(
				{ error: 'Too many messages right now. Please try again in a few minutes.' },
				{ status: 429 }
			);
		}
		return Response.json(
			{ error: 'Could not send your message. Please try again shortly or email inbox@lexvuip.com.' },
			{ status: 502 }
		);
	} catch {
		return Response.json(
			{ error: 'Could not send your message. Please try again shortly or email inbox@lexvuip.com.' },
			{ status: 502 }
		);
	}
}
