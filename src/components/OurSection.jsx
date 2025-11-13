'use client';
import React, { useEffect, useRef } from 'react';
import '../styles/OurSection.css';
// Images will be referenced directly from public directory
import { useRouter } from 'next/navigation';


const services = [
	{
		number: 1,
		title: (
			<>
				<em>Paralegal Support</em> That Keeps Your Practice Moving
			</>
		),
		description:
			'Our experienced remote paralegal team manages Docketing, E-Filing, and Contact Records with meticulous attention to detail—while also supporting Trial Preparation, Deposition Coordination, and Compliance so you can focus on advocacy, not administration.',
		image: '/assets/stockimages/lawer.jpg',
		alt: 'Utility Patent Drawings',
	},
	{
		number: 2,
		title: (
			<>
				Comprehensive <em>IP Solutions</em> for Global Attorneys
			</>
		),
		description:
			'From intricate Utility Patent Drawings to visually precise Design Patent Illustrations and globally compliant Trademark Support, we deliver intellectual property assets that meet USPTO, EPO, and WIPO standards—ensuring your filings are clear, compliant, and strategically positioned for success.',
		image: '/assets/stockimages/utilitypatentdrawing.jpg',
		alt: 'Utility Patent Drawings',
	},
	{
		number: 3,
		title: (
			<>
				Tailored <em>Support for Unique Legal</em> Workflows
			</>
		),
		description:
			'Whether you need a dedicated resource for high-volume filings, specialized illustration styles, or firm-specific compliance tasks, we integrate seamlessly into your processes—delivering accurate, on-time support that aligns perfectly with your team’s standards and client expectations.',
		image: '/assets/stockimages/desingpatentdrawing.jpg',
		alt: 'Design Patent Illustrations',
	},
];

function OurSection() {
	const listRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		const container = listRef.current;
		if (!container) return;

		const cards = Array.from(container.querySelectorAll('.our-service-card'));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
						observer.unobserve(entry.target);
					}
				});
			},
			{ root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
		);

		cards.forEach((card, index) => {
			card.classList.add('reveal-on-scroll');
			card.style.setProperty('--reveal-delay', `${index * 0.12}s`);
			observer.observe(card);
		});

		return () => observer.disconnect();
	}, []);

	// In-view animation for label and title
	useEffect(() => {
		const section = document.getElementById('services');
		if (!section) return;
		const targets = section.querySelectorAll('.our-label, .our-title');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);
		targets.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;

		const container = listRef.current;
		if (!container) return;

		const wrappers = Array.from(
			container.querySelectorAll('.our-service-image-wrapper')
		);
		let rafId = null;

		const updateParallax = () => {
			wrappers.forEach((wrapper) => {
				const img = wrapper.querySelector('.our-service-image');
				if (!img) return;
				const rect = wrapper.getBoundingClientRect();
				const viewportHeight =
					window.innerHeight || document.documentElement.clientHeight;
				// Only compute when visible to avoid jank
				if (rect.bottom < 0 || rect.top > viewportHeight) return;

				const start = viewportHeight; // top at bottom of viewport
				const end = -rect.height; // bottom above viewport
				const progress = Math.min(
					1,
					Math.max(0, (start - rect.top) / (start - end))
				);
				const maxShift = 24; // px for subtle movement
				const translateY = (progress - 0.5) * 2 * maxShift;
				img.style.setProperty('--parallax-y', `${translateY.toFixed(2)}px`);
			});
			rafId = null;
		};

		const onScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(updateParallax);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		// Initial run
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<section id="services" className="our-section">
			<div className="our-container">
				<div className="our-label">Our Services</div>
				<h2 className="our-title">
					“Paralegal Support and Practical IP across the spectrum – built around your success”
				</h2>
				<div className="our-services-list" ref={listRef}>
					{services.map((service, idx) => (
						<div className="our-service-card" key={idx}>
							<div className="our-service-number">{service.number}.</div>
							<div className="our-service-content">
								<div className="our-service-title">{service.title}</div>
								<div className="our-service-description">
									{service.description}
								</div>
							</div>
							<div className="our-service-image-wrapper">
								<img
									className="our-service-image"
									src={service.image}
									alt={service.alt}
								/>
							</div>
						</div>
					))}
				</div>
				<div className="our-learnmore-row" onClick={() => router.push('/services')}>
					<button className="our-learnmore-btn" >Learn More</button>
				</div>
			</div>
		</section>
	);
}

export default OurSection;
