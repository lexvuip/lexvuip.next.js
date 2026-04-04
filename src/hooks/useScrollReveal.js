'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * @param {React.RefObject} ref - React ref for the target element
 * @param {number} [threshold=0.85] - The viewport threshold (0-1) at which element is considered visible (desktop)
 * @returns {boolean} True if element is visible in viewport
 */
function useScrollReveal(ref, threshold = 0.85) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const element = ref.current;

		const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
		const effectiveThreshold = isMobile ? 0.3 : threshold;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: effectiveThreshold,
				rootMargin: '0px 0px -10% 0px',
			}
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [ref, threshold]);

	return isVisible;
}

export default useScrollReveal;
