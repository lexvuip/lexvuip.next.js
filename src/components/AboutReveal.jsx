'use client';

import { useEffect, useState } from 'react';

export default function AboutReveal({ children }) {
	const [contentRevealed, setContentRevealed] = useState(false);
	const [leftColRevealed, setLeftColRevealed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const contentSection = document.querySelector('.about-content');
			if (contentSection) {
				const rect = contentSection.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.85 && !contentRevealed) {
					setContentRevealed(true);
				}
			}

			const leftSection = document.querySelector('.about-left-column');
			if (leftSection) {
				const rect = leftSection.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.85 && !leftColRevealed) {
					setLeftColRevealed(true);
				}
			}
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [contentRevealed, leftColRevealed]);

	useEffect(() => {
		const container = document.querySelector('.about-image-row');
		const image = document.querySelector('.about-image');
		if (!container || !image) return;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;

		let rafId = null;

		const updateParallax = () => {
			const rect = container.getBoundingClientRect();
			const viewportHeight =
				window.innerHeight || document.documentElement.clientHeight;

			const start = viewportHeight;
			const end = -rect.height;
			const progress = Math.min(
				1,
				Math.max(0, (start - rect.top) / (start - end))
			);

			const maxShift = 30;
			const translateY = (progress - 0.5) * 2 * maxShift;
			image.style.setProperty('--parallax-y', `${translateY.toFixed(2)}px`);
			rafId = null;
		};

		const onScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(updateParallax);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<div className={`about-reveal-wrapper ${contentRevealed ? 'content-revealed' : ''} ${leftColRevealed ? 'left-revealed' : ''}`}>
			{children}
		</div>
	);
}
