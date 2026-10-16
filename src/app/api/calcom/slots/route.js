export const dynamic = 'force-dynamic';

const CAL_API_BASE = 'https://api.cal.com/v2';

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

export async function GET(request) {
	const config = validateConfig();
	if (config instanceof Response) return config;

	const { searchParams } = new URL(request.url);
	const start = searchParams.get('start');
	const end = searchParams.get('end');
	const timeZone = searchParams.get('timeZone') || 'UTC';

	if (!start || !end || !/^\d{4}-\d{2}-\d{2}$/.test(start) || !/^\d{4}-\d{2}-\d{2}$/.test(end)) {
		return Response.json(
			{ error: 'start and end must be YYYY-MM-DD dates.' },
			{ status: 400 }
		);
	}
	if (!/^[A-Za-z0-9_+\-./]+$/.test(timeZone)) {
		return Response.json({ error: 'Invalid timezone.' }, { status: 400 });
	}

	const params = new URLSearchParams({
		username: config.username,
		eventTypeSlug: config.eventTypeSlug,
		start,
		end,
		timeZone
	});

	try {
		const res = await fetch(`${CAL_API_BASE}/slots?${params}`, {
			headers: {
				Authorization: `Bearer ${config.apiKey}`,
				'cal-api-version': '2024-09-04'
			}
		});
		const body = await res.json().catch(() => null);
		if (!res.ok || !body || body.status !== 'success') {
			return Response.json(
				{ error: 'Could not load available slots. Please try again shortly.' },
				{ status: 502 }
			);
		}
		return Response.json({ status: 'success', data: body.data || {} });
	} catch {
		return Response.json(
			{ error: 'Could not load available slots. Please try again shortly.' },
			{ status: 502 }
		);
	}
}
