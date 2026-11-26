'use client';

import { useEffect } from 'react';
import { trackEvent } from '../../lib/analytics';

export default function AnalyticsCtaTracker() {
	useEffect(() => {
		function handleClick(event) {
			const el = event.target.closest('[data-cta]');
			if (!el) return;
			trackEvent('cta_click', {
				cta_text: el.dataset.cta,
				cta_location: window.location.pathname,
			});
		}
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);

	return null;
}
