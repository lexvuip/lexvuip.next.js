export const dynamic = 'force-dynamic';

const CAL_API_BASE = 'https://api.cal.com/v2';
const MAX_BOOKINGS_PER_IP = 5;
const RATE_WINDOW_MS = 60000;
const bookingAttempts = new Map();

function isRateLimited(ip) {
	const now = Date.now();
	const recent = (bookingAttempts.get(ip) || []).filter(ts => now - ts < RATE_WINDOW_MS);
	if (recent.length >= MAX_BOOKINGS_PER_IP) {
		bookingAttempts.set(ip, recent);
		return true;
	}
	recent.push(now);
	bookingAttempts.set(ip, recent);
	if (bookingAttempts.size > 2000) {
		for (const [key, stamps] of bookingAttempts) {
			if (stamps.every(ts => now - ts >= RATE_WINDOW_MS)) {
				bookingAttempts.delete(key);
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
	const apiKey = process.env.CALCOM_API_KEY;
	const username = process.env.CALCOM_USERNAME;
	const eventTypeSlug = process.env.CALCOM_EVENT_TYPE_SLUG;
	if (!apiKey || !username || !eventTypeSlug) {
		return Response.json(
			{ error: 'Booking is not configured yet. Please contact us by phone or email.' },
			{ status: 503 }
		);
	}
	return { apiKey, username, eventTypeSlug };
}

export async function POST(request) {
	const config = validateConfig();
	if (config instanceof Response) return config;

	const ip = getIp(request);
	if (isRateLimited(ip)) {
		return Response.json(
			{ error: 'Too many booking attempts. Please wait a minute and try again.' },
			{ status: 429 }
		);
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: 'Invalid request.' }, { status: 400 });
	}

	const start = typeof body.start === 'string' ? new Date(body.start) : null;
	if (!start || Number.isNaN(start.getTime())) {
		return Response.json({ error: 'A valid selected time is required.' }, { status: 400 });
	}
	const startUtc = start.toISOString();

	const timeZone = typeof body.timeZone === 'string' && body.timeZone.length <= 64
		? body.timeZone
		: null;
	if (!timeZone || !/^[A-Za-z0-9_+\-./]+$/.test(timeZone)) {
		return Response.json({ error: 'Invalid timezone.' }, { status: 400 });
	}

	const name = typeof body.name === 'string' ? body.name.trim().slice(0, 120) : '';
	if (!name) {
		return Response.json({ error: 'Please enter your full name.' }, { status: 400 });
	}

	const email = typeof body.email === 'string' ? body.email.trim().slice(0, 254) : '';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
	}

	const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
	if (phone && !/^[+0-9 ()-]{6,20}$/.test(phone)) {
		return Response.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
	}

	const guests = Array.isArray(body.guests)
		? body.guests.filter(g => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)).slice(0, 3)
		: [];

	const calBody = {
		start: startUtc,
		username: config.username,
		eventTypeSlug: config.eventTypeSlug,
		attendee: {
			name,
			email,
			timeZone,
			language: 'en',
			...(phone ? { phoneNumber: phone } : {})
		},
		...(guests.length ? { guests } : {})
	};

	try {
		const res = await fetch(`${CAL_API_BASE}/bookings`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${config.apiKey}`,
				'cal-api-version': '2026-02-25'
			},
			body: JSON.stringify(calBody)
		});
		const calRes = await res.json().catch(() => null);

		if (res.ok && calRes?.status === 'success') {
			const data = calRes.data || {};
			return Response.json({
				status: 'success',
				data: {
					uid: data.uid,
					start: data.start,
					end: data.end,
					title: data.title,
					location: data.location
				}
			});
		}

		const calMessage = typeof calRes?.error?.message === 'string' ? calRes.error.message : '';
		if (res.status === 409 || /taken|conflict|unavailable/i.test(calMessage)) {
			return Response.json(
				{ error: 'That slot was just booked by someone else. Please select another time.' },
				{ status: 409 }
			);
		}
		if (res.status === 429) {
			return Response.json(
				{ error: 'Too many bookings right now. Please try again in a few minutes.' },
				{ status: 429 }
			);
		}
		if (res.status >= 400 && res.status < 500) {
			return Response.json(
				{ error: calMessage || 'Your booking was not accepted. Please check your details and try again.' },
				{ status: 400 }
			);
		}
		return Response.json(
			{ error: 'Booking failed. Please try again shortly or email inbox@lexvuip.com.' },
			{ status: 502 }
		);
	} catch {
		return Response.json(
			{ error: 'Booking failed. Please try again shortly or email inbox@lexvuip.com.' },
			{ status: 502 }
		);
	}
}
