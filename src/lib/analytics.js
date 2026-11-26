'use client';

import { sendGAEvent } from '@next/third-parties/google';

export function trackEvent(name, params = {}) {
	if (typeof window === 'undefined') return;
	try {
		sendGAEvent('event', name, params);
	} catch {
		// GA4 not configured — ignore
	}
	if (typeof window.clarity === 'function') {
		window.clarity('event', name);
	}
}
