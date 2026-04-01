'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * @param {React.RefObject} ref - React ref for the target element
 * @param {number} [threshold=0.85] - The viewport threshold (0-1) at which element is considered visible
 * @returns {boolean} True if element is visible in viewport
 */
function useScrollReveal(ref, threshold = 0.85) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const element = ref.current;

		const handleScroll = () => {
			const rect = element.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			
			if (rect.top < viewportHeight * threshold) {
				setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Check initial visibility
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [ref, threshold]);

	return isVisible;
}

export default useScrollReveal;
