'use client';

import { useState, useCallback } from 'react';

/**
 * Custom hook for managing boolean state with toggle functionality
 * @param {boolean} [initialValue=false] - The initial value for the toggle state
 * @returns {[boolean, function, function]} An array containing:
 *   - value: The current boolean value
 *   - toggle: Function to toggle the value
 *   - setValue: Function to directly set the value
 */
function useToggle(initialValue = false) {
	const [value, setValue] = useState(initialValue);

	const toggle = useCallback(() => {
		setValue(prev => !prev);
	}, []);

	return [value, toggle, setValue];
}

export default useToggle;
