'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function ServicesHeroParallax({ 
	imageSrc = "/assets/stockimages/lawer.jpg", 
	alt = "Legal Services" 
}) {
	useEffect(() => {
		const container = document.querySelector('.services-hero-image-row');
		const image = document.querySelector('.services-hero-image');
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
		<div className="services-hero-image-row">
			<div className="services-hero-image-container">
				<Image
					src={imageSrc}
					alt={alt}
					fill
					priority
					className="services-hero-image"
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</div>
	);
}
