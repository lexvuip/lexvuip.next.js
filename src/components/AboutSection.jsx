'use client';
import React from 'react';
import '../styles/AboutSection.css';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function AboutSection() {
	const [startCount, setStartCount] = useState(false);
	const [contentRevealed, setContentRevealed] = useState(false);
	const [leftColRevealed, setLeftColRevealed] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector('.about-stats-row');
			const rect = section?.getBoundingClientRect();
			if (rect?.top < window.innerHeight && !startCount) {
				setStartCount(true);
			}
		};

		// Call once after mount to trigger if already in view
		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [startCount]);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector('.about-content');
			if (!section) return;
			const rect = section.getBoundingClientRect();
			if (rect.top < window.innerHeight * 0.85 && !contentRevealed) {
				setContentRevealed(true);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [contentRevealed]);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector('.about-left-column');
			if (!section) return;
			const rect = section.getBoundingClientRect();
			if (rect.top < window.innerHeight * 0.85 && !leftColRevealed) {
				setLeftColRevealed(true);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [leftColRevealed]);

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

			// Compute progress of container within viewport [0,1]
			const start = viewportHeight; // when top is at bottom of viewport
			const end = -rect.height; // when bottom is above viewport
			const progress = Math.min(
				1,
				Math.max(0, (start - rect.top) / (start - end))
			);

			// Map progress to translateY range (subtle movement)
			const maxShift = 30; // px; adjust for more/less parallax
			const translateY = (progress - 0.5) * 2 * maxShift; // range [-maxShift, +maxShift]
			image.style.setProperty('--parallax-y', `${translateY.toFixed(2)}px`);
			rafId = null;
		};

		const onScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(updateParallax);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		// Initial position
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<div className={`about-left-column ${leftColRevealed ? 'revealed' : ''}`}>
					<div className="our-journey-header">
						<div className="our-journey-arrow-container">
							<span className="our-journey-arrow"></span>
							<span className="our-journey-arrow"></span>
							<span className="our-journey-arrow"></span>
						</div>
						<h2 className="our-journey-title-small">ABOUT</h2>
					</div>
				</div>
				<div className="about-right-column">
					<div className={`about-content ${contentRevealed ? 'revealed' : ''}`}>
						<h2 className="about-title">
							At LexVu, we take the busywork off your plate so you can focus on winning the case and protecting what matters most.
						</h2>
						<p className="about-description">
							With over 25 years supporting attorneys worldwide, we deliver precise patent drawings, compliant filings, and end-to-end paralegal support - fast, accurate, and always aligned with your strategy.
						</p>
						<p className="about-description">
							Our paralegal services handle the administrative grind - docketing, eFiling, trial prep, client coordination. Our IP services cover every stage of patent and trademark support - from precise USPTO, EPO, PCT, and WIPO-compliant utility and design drawings to accurate, on-demand revisions, so you can keep your energy where it matters most: building strategies and winning cases.
						</p>
						<p className="about-description">
							Whether you're protecting an invention, prosecuting a trademark, or preparing for trial, we deliver clarity, compliance, and confidence - without you having to chase vendors, reformat documents, or worry about deadlines.
						</p>
						<p className="about-description">
							At LexVuIP, we believe legal work should be spent on arguments, not admin. Our job is to make sure your focus stays on the win.
						</p>
						<div className="about-actions">
							<button
								className="about-contact-btn"
								onClick={() => router.push('/contact')}
							>
								Get In Touch
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="about-divider" />
			<div className="about-image-row">
				<img
					className="about-image"
					src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
					alt="Drawing on tablet"
				/>
			</div>
			<div className="about-divider" />
			<div className="about-stats-row">
				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0s' }}
				>
					<div className="about-stat-value">
						{startCount && <CountUp end={25} duration={2.5} suffix="+ Yr" />}
					</div>
					<div className="about-stat-label">
						Serving Individuals & Businesses
					</div>
				</div>
				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0.12s' }}
				>
					<div className="about-stat-value">
						{startCount && <CountUp end={46} duration={2.5} suffix="+" />}
					</div>
					<div className="about-stat-label">
						Technical Fields & Sectors Covered
					</div>
				</div>

				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0.24s' }}
				>
					<div className="about-stat-value">
						{startCount && <CountUp end={98} duration={2.0} suffix="%" />}
					</div>
					<div className="about-stat-label">Client Satisfaction Worldwide</div>
				</div>

				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0.36s' }}
				>
					<div className="about-stat-value">
						{startCount && (
							<CountUp end={121177} duration={1.5} separator="," suffix="+" />
						)}
					</div>
					<div className="about-stat-label">
						Combined Legal projects Successfully Delivered
					</div>
				</div>
			</div>
			{/* <div className="about-divider" /> */}
		</section>
	);
}

export default AboutSection;
