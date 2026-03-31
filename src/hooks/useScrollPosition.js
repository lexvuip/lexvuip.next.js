'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting scroll position threshold
 * @param {number} [threshold=100] - The scroll threshold in pixels
 * @returns {boolean} True if scroll position exceeds threshold
 */
function useScrollPosition(threshold = 100) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > threshold);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Check initial scroll position
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [threshold]);

	return scrolled;
}

export default useScrollPosition;
