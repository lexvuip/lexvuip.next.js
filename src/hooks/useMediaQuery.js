'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive viewport detection using media queries
 * @param {string} query - CSS media query string (e.g., '(max-width: 768px)')
 * @returns {boolean} True if the media query matches
 */
function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		
		// Set initial value
		setMatches(mediaQueryList.matches);

		const handleChange = (event) => {
			setMatches(event.matches);
		};

		mediaQueryList.addEventListener('change', handleChange);

		return () => {
			mediaQueryList.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
}

export default useMediaQuery;
