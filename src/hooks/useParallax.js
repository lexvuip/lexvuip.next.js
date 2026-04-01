'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom hook for parallax scroll effects on images
 * @param {React.RefObject} containerRef - Ref to the container element
 * @param {React.RefObject} imageRef - Ref to the image element to apply parallax
 */
function useParallax(containerRef, imageRef) {
	const rafIdRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current || !imageRef.current) return;

		// Check for reduced motion preference
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		const container = containerRef.current;
		const image = imageRef.current;

		const updateParallax = () => {
			const rect = container.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			
			// Calculate progress (0 when entering viewport, 1 when leaving)
			const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
			
			// Max shift of 30 pixels
			const maxShift = 30;
			const translateY = (progress - 0.5) * maxShift;
			
			image.style.setProperty('--parallax-y', `${translateY}px`);
		};

		const handleScroll = () => {
			if (rafIdRef.current) {
				cancelAnimationFrame(rafIdRef.current);
			}
			rafIdRef.current = requestAnimationFrame(updateParallax);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });
		
		// Initial call
		updateParallax();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
			if (rafIdRef.current) {
				cancelAnimationFrame(rafIdRef.current);
			}
		};
	}, [containerRef, imageRef]);
}

export default useParallax;
