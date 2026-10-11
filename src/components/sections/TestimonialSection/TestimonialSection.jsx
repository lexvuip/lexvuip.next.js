'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import './TestimonialSection.css';

const TESTIMONIALS = [
	{
		tag: 'PATENT DRAWINGS',
		title: 'Exceptional Quality & Compliance',
		text:
			"LexVuIP delivered drawings that were not only visually precise but perfectly aligned with USPTO and WIPO guidelines. Their team's technical skill and IP knowledge gave our application a strong foundation. Working with them felt like gaining",
		highlight: 'a strategic partner, not just a vendor.',
		name: 'Laura S.',
		role: 'Patent drawings client'
	},
	{
		tag: 'FAST TURNAROUND',
		title: 'Fast, Accurate, and Reliable',
		text:
			'We had a tight deadline for a utility patent filing and LexVuIP came through with speed and accuracy. Their drawings required',
		highlight: 'no revisions — a rare feat.',
		textAfter:
			' Communication was smooth, and their professionalism shone through every step. A team we trust completely.',
		name: 'James K.',
		role: 'Utility patent filing'
	},
	{
		tag: 'GLOBAL STANDARDS',
		title: 'Trusted IP Experts',
		text:
			"LexVuIP has become our go to for all IP illustration needs. Their knowledge of global standards is unmatched, and their attention to detail is outstanding. Whether for design or utility patents,",
		highlight: 'they always deliver work that enhances our filings.',
		textAfter: '',
		name: 'Priya N.',
		role: 'IP illustration client'
	},
	{
		tag: 'PARALEGAL SUPPORT',
		title: 'A Seamless Experience',
		text:
			"From the first interaction, LexVuIP's process was clear, efficient, and highly professional. Their team understood our technical requirements and delivered elegant, standards-compliant drawings that elevated our submission. We've since partnered with them on multiple filings and every time,",
		highlight: 'the results are excellent.',
		textAfter: '',
		name: 'Michael D.',
		role: 'Multiple filings'
	},
	{
		tag: 'IP ILLUSTRATION',
		title: 'IP Visualization Done Right',
		text:
			'LexVuIP blends deep IP expertise with artistic precision. Their illustrations speak the language of both inventors and examiners.',
		highlight: 'They not only meet global standards — they set them.',
		textAfter:
			' For firms serious about IP protection, partnering with LexVuIP is a smart, strategic move.',
		name: 'Anita R.',
		role: 'Design & utility patents'
	},
	{
		tag: 'LITIGATION SUPPORT',
		title: 'Consistent Dedication & Quality',
		text:
			'Your availability during urgent requirements, commitment to meeting deadlines, attention to detail, and the quality of your work have not gone unnoticed. These qualities are the reason we continue to rely on you for important projects, and',
		highlight: 'we genuinely appreciate your contribution.',
		textAfter: '',
		name: 'Robert C.',
		role: 'Litigation support client'
	}
];

const AUTO_MS = 6000;

function TestimonialSection() {
	const trackRef = useRef(null);
	const tickRef = useRef(null);
	const [current, setCurrent] = useState(0);
	const [paused, setPaused] = useState(false);
	const total = TESTIMONIALS.length;

	const detectCenter = useCallback(() => {
		const track = trackRef.current;
		if (!track) return;
		const mid = track.scrollLeft + track.clientWidth / 2;
		let best = 0;
		let distance = Number.POSITIVE_INFINITY;
		Array.from(track.children).forEach((card, index) => {
			const offset = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
			if (offset < distance) {
				distance = offset;
				best = index;
			}
		});
		setCurrent(prev => (prev === best ? prev : best));
	}, []);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return undefined;

		function handleScroll() {
			clearTimeout(tickRef.current);
			tickRef.current = setTimeout(detectCenter, 60);
		}

		function centerCurrent() {
			const card = track.children[current] || track.children[0];
			if (card) {
				track.scrollTo({
					left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
					behavior: 'auto'
				});
			}
		}

		track.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', centerCurrent);
		centerCurrent();

		return () => {
			track.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', centerCurrent);
			clearTimeout(tickRef.current);
		};
	}, [current, detectCenter]);

	function goTo(index) {
		const track = trackRef.current;
		if (!track) return;
		const clamped = Math.max(0, Math.min(total - 1, index));
		const card = track.children[clamped];
		if (!card) return;
		track.scrollTo({
			left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
			behavior: 'smooth'
		});
		setCurrent(clamped);
	}

	function handleKeyDown(event) {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			goTo(current - 1);
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			goTo(current + 1);
		}
	}

	useEffect(() => {
		if (paused) return undefined;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
		const id = setInterval(() => {
			goTo(current + 1 === total ? 0 : current + 1);
		}, AUTO_MS);
		return () => clearInterval(id);
	}, [current, paused, total]);

	useEffect(() => {
		const elements = document.querySelectorAll('.tstm-rv');
		if (!('IntersectionObserver' in window)) {
			elements.forEach(element => element.classList.add('in'));
			return undefined;
		}
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		elements.forEach((element, index) => {
			element.style.transitionDelay = `${index * 120}ms`;
			observer.observe(element);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<section className="tstm-section" aria-labelledby="tstm-heading">
			<div
				className="tstm-wrap"
				role="region"
				aria-roledescription="carousel"
				aria-label="Client testimonials"
			>
				<div className="tstm-head tstm-rv">
					<div className="tstm-eye">What our clients say</div>
					<h2 id="tstm-heading" className="tstm-title">
						Clients who value <em>precision</em> and partnership
					</h2>
				</div>

				<div
					className="tstm-track tstm-rv"
					ref={trackRef}
					tabIndex={0}
					aria-live="polite"
					onKeyDown={handleKeyDown}
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
					onTouchStart={() => setPaused(true)}
					onTouchEnd={() => setPaused(false)}
					onFocus={() => setPaused(true)}
					onBlur={() => setPaused(false)}
				>
					{TESTIMONIALS.map((testimonial, index) => (
						<figure
							key={testimonial.name}
							className={`tstm-card${index === current ? ' on' : ''}`}
							aria-hidden={index === current ? 'false' : 'true'}
							onClick={() => index !== current && goTo(index)}
						>
							<div className="tstm-card-top">
								<span className="tstm-mark" aria-hidden="true">&ldquo;</span>
								<span className="tstm-chip">{testimonial.tag}</span>
							</div>
							<h3 className="tstm-card-title">{testimonial.title}</h3>
							<blockquote className="tstm-quote">
								{testimonial.text}
								<em> {testimonial.highlight}</em>
								{testimonial.textAfter || ''}
							</blockquote>
							<figcaption className="tstm-card-foot">
								<span className="tstm-avatar" aria-hidden="true">{testimonial.name.charAt(0)}</span>
								<span>
									<span className="tstm-name">{testimonial.name}</span>
									<span className="tstm-role">{testimonial.role}</span>
								</span>
							</figcaption>
						</figure>
					))}
				</div>

				<div className="tstm-controls tstm-rv">
					<div className="tstm-mid">
						<div className="tstm-bar" aria-hidden="true">
							<span style={{ width: `${((current + 1) / total) * 100}%` }} />
						</div>
					</div>
				</div>

				<div className="tstm-cta tstm-rv">
					<span>Have a filing that needs this level of care?</span>
					<a className="tstm-pill" href="/contact">
						Start a conversation <span>&rarr;</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default TestimonialSection;
