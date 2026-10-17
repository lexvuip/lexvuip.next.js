'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import './AboutPage.css';
import Footer from '../../layout/Footer';

const TestimonialSection = dynamic(
	() => import('../../sections/TestimonialSection'),
	{
		loading: () => <div className="section-loading">Loading testimonials...</div>,
		ssr: false,
	}
);

const FAQSection = dynamic(
	() => import('../../sections/FAQSection'),
	{
		loading: () => <div className="section-loading">Loading FAQ...</div>,
		ssr: false,
	}
);

const REGION = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const IS_INDIA = REGION === 'IN';

const WHATSAPP_URL = `https://wa.me/${IS_INDIA ? '919110726310' : '18562142512'}`;
const PHONE_DISPLAY = IS_INDIA ? '+91 91107 26310' : '856-214-2512';

const PILLARS = [
	{
		num: '01',
		art: 'target',
		title: 'Our Mission',
		out: 'Every filing, drawing and deadline handled with care.',
		text: 'We aim to support attorneys with reliable, detail-oriented help in both intellectual property and litigation, so nothing slips through the cracks.',
		points: ['IP filings and drawings', 'Litigation support', 'Deadlines tracked and managed']
	},
	{
		num: '02',
		art: 'pen',
		title: 'Our Promise',
		out: 'Accurate, compliant, and on time. Every time.',
		text: 'We relieve the pressure on your desk. Whether you need patent figures designed or trial prep documents assembled, our work is accurate, compliant and delivered on time.',
		points: ['Patent figure design', 'Trial prep documents', 'Compliance-checked delivery']
	},
	{
		num: '03',
		art: 'bulb',
		title: 'Our Purpose',
		out: 'Fewer bottlenecks. Stronger partnerships.',
		text: 'To strengthen the work of attorneys by removing bottlenecks, protecting innovation, and building lasting partnerships rooted in trust, clarity and results.',
		points: ['Bottlenecks removed from your desk', 'Innovation protected', 'Clear, honest communication']
	}
];

function TargetArt() {
	return (
		<svg viewBox="0 0 48 48">
			<circle className="about-rip" cx="24" cy="24" r="4" />
			<circle className="about-rip d2" cx="24" cy="24" r="4" />
			<circle cx="24" cy="24" r="19" />
			<circle cx="24" cy="24" r="12" />
			<circle className="g" cx="24" cy="24" r="4" />
			<path className="g arrow" d="M24 24L40 8M40 8h-6M40 8v6" />
		</svg>
	);
}

function PenArt() {
	return (
		<svg viewBox="0 0 48 48">
			<path className="g wr" pathLength="1" d="M9 43h30" />
			<g className="pen">
				<path d="M31 6l11 11-22 22H9V28z" />
				<path className="g" d="M26 11l11 11" />
			</g>
		</svg>
	);
}

function BulbArt() {
	return (
		<svg viewBox="0 0 48 48">
			<circle className="glow" cx="24" cy="22" r="13" />
			<path d="M17 33c-4-3-6-6-6-11a13 13 0 1 1 26 0c0 5-2 8-6 11v4H17z" />
			<path className="g" d="M18 42h12" />
			<path className="g ray" d="M24 2v3" />
			<path className="g ray r2" d="M7 9l2.2 2.2" />
			<path className="g ray r3" d="M41 9l-2.2 2.2" />
			<path className="g ray r4" d="M3 22h3" />
			<path className="g ray r5" d="M42 22h3" />
		</svg>
	);
}

export default function AboutPage() {
	const [years, setYears] = useState(20);
	const visualRef = useRef(null);
	const countDoneRef = useRef(false);

	useEffect(() => {
		const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const elements = document.querySelectorAll('.about-rv');

		function runCount() {
			if (countDoneRef.current) return;
			countDoneRef.current = true;
			if (reduced) {
				setYears(20);
				return;
			}
			const duration = 1400;
			let start = null;
			function frame(now) {
				if (start === null) start = now;
				const progress = Math.min((now - start) / duration, 1);
				setYears(Math.round(20 * (1 - Math.pow(1 - progress, 3))));
				if (progress < 1) requestAnimationFrame(frame);
			}
			setYears(0);
			requestAnimationFrame(frame);
		}

		let observer;
		if ('IntersectionObserver' in window) {
			observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (!entry.isIntersecting) return;
						entry.target.classList.add('in');
						if (entry.target === visualRef.current) runCount();
						observer.unobserve(entry.target);
					});
				},
				{ threshold: 0.15 }
			);
			elements.forEach((element, index) => {
				element.style.transitionDelay = `${(index % 4) * 110}ms`;
				observer.observe(element);
			});
		} else {
			elements.forEach(element => element.classList.add('in'));
			runCount();
		}

		return () => observer?.disconnect();
	}, []);

	useEffect(() => {
		const visual = visualRef.current;
		if (!visual || !window.matchMedia) return undefined;
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

		let raf = null;
		function handleMove(event) {
			const rect = visual.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width;
			const y = (event.clientY - rect.top) / rect.height;
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				visual.classList.remove('off');
				visual.style.setProperty('--ry', `${((x - 0.5) * 9).toFixed(2)}deg`);
				visual.style.setProperty('--rx', `${((0.5 - y) * 7).toFixed(2)}deg`);
				visual.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
				visual.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
				visual.style.setProperty('--bx', `${((x - 0.5) * -22).toFixed(1)}px`);
				visual.style.setProperty('--by', `${((y - 0.5) * -16).toFixed(1)}px`);
			});
		}

		function handleLeave() {
			visual.classList.add('off');
			visual.style.setProperty('--rx', '0deg');
			visual.style.setProperty('--ry', '0deg');
			visual.style.setProperty('--bx', '0px');
			visual.style.setProperty('--by', '0px');
			visual.style.setProperty('--mx', '50%');
			visual.style.setProperty('--my', '50%');
		}

		visual.addEventListener('mousemove', handleMove);
		visual.addEventListener('mouseleave', handleLeave);
		return () => {
			visual.removeEventListener('mousemove', handleMove);
			visual.removeEventListener('mouseleave', handleLeave);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'LexVuIP',
		url: IS_INDIA ? 'https://lexvuip.in' : 'https://lexvuip.com',
		description:
			'IP and litigation support for attorneys: patent drawings, IP filings and trial-prep documents.',
		telephone: PHONE_DISPLAY,
		email: 'inbox@lexvuip.com',
		address: IS_INDIA
			? {
					'@type': 'PostalAddress',
					streetAddress: '6-4-455/16/a/1, Krishna Nagar Colony, Balaji Residency, Bholakpur, Bhoiguda',
					addressLocality: 'Hyderabad',
					addressRegion: 'Telangana',
					postalCode: '500080',
					addressCountry: 'IN'
				}
			: {
					'@type': 'PostalAddress',
					streetAddress: '6260 139th Ave NE 66',
					addressLocality: 'Redmond',
					addressRegion: 'WA',
					postalCode: '98052',
					addressCountry: 'US'
				},
		...(IS_INDIA
			? { geo: { '@type': 'GeoCoordinates', latitude: 17.4221343, longitude: 78.4998628 } }
			: {}),
		openingHours: 'Mo-Fr 09:00-18:00'
	};

	return (
		<div className="about-page-luxury">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<section className="about-hero" aria-labelledby="about-hero-title">
				<header className="about-hero-head about-rv">
					<div className="about-hero-eye">About LexVuIP</div>
					<h1 id="about-hero-title" className="about-hero-title">
						Precise IP Support. <em>Seamless Advocacy.</em>
					</h1>
					<p className="about-hero-lead">
						LexVuIP is a {IS_INDIA ? 'Hyderabad-based' : 'Washington-based'}{' '}
						<strong>IP and litigation support team</strong>. We provide the technical foundation, from
						patent drawings and IP filings to trial-prep documents, so attorneys can focus on what
						matters most: the art of advocacy.
					</p>
					<ul className="about-hero-facts">
						<li>{IS_INDIA ? 'Based in Hyderabad, India' : 'Based in Redmond, WA, USA'}</li>
						<li>Patent, trademark &amp; litigation support</li>
						<li>{IS_INDIA ? 'Mon – Fri, 09:00 – 18:00 IST' : 'Mon – Fri, 09:00 – 18:00 PST'}</li>
					</ul>
				</header>

				<div className="about-pillars">
					{PILLARS.map(pillar => (
						<article key={pillar.num} className="about-pillar about-rv">
							<div className="about-pillar-top">
								<span className="about-pillar-num">{pillar.num}</span>
								<div className="about-art" aria-hidden="true">
									{pillar.art === 'target' ? <TargetArt /> : pillar.art === 'pen' ? <PenArt /> : <BulbArt />}
								</div>
							</div>
							<h2 className="about-pillar-title">{pillar.title}</h2>
							<p className="about-pillar-out">{pillar.out}</p>
							<p className="about-pillar-text">{pillar.text}</p>
							<ul className="about-pillar-list">
								{pillar.points.map(point => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<div className="about-band about-rv">
					<p className="about-band-text">
						Have a filing or a deadline coming up? <em>Let&apos;s talk it through.</em>
					</p>
					<div className="about-band-actions">
						<a className="about-pill" href="/contact">
							Talk to our team <span>&rarr;</span>
						</a>
						<a className="about-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
							WhatsApp {PHONE_DISPLAY}
						</a>
					</div>
				</div>
			</section>

			<section className="about-heritage" aria-labelledby="about-heritage-title">
				<div className="about-heritage-wrap">
					<div className="about-heritage-visual about-rv" ref={visualRef}>
						<figure className="about-heritage-draw">
							<svg
								viewBox="0 0 400 400"
								role="img"
								aria-label="Illustrative patent drawing of a gear assembly with numbered reference lines"
							>
								<g transform="translate(190,190)">
									<g className="about-ah-gear">
										<circle r="92" fill="none" stroke="#f4f1e8" strokeWidth="16" strokeDasharray="17.5 10.4" opacity="0.9" />
										<circle className="about-ah-ln about-ah-dr" pathLength="1" r="84" />
										<circle className="about-ah-ln about-ah-dr" pathLength="1" r="56" />
										<circle className="about-ah-ln about-ah-dr" pathLength="1" r="16" />
										<path className="about-ah-ln about-ah-dr" pathLength="1" d="M-16 0H16M0 -16V16" />
										<path className="about-ah-ln about-ah-dr" pathLength="1" d="M0 -56V-84M0 56V84M-56 0H-84M56 0H84" />
									</g>
								</g>
								<path className="about-ah-gl about-ah-dr" pathLength="1" d="M246 134L318 76H356" />
								<path className="about-ah-gl about-ah-dr" pathLength="1" d="M190 190L120 322H78" />
								<path className="about-ah-gl about-ah-dr" pathLength="1" d="M280 232L340 292H362" />
								<text className="about-ah-num" x="358" y="72">10</text>
								<text className="about-ah-num" x="52" y="326">12</text>
								<text className="about-ah-num" x="364" y="296">14</text>
							</svg>
							<figcaption className="about-heritage-caption">FIG. 1 — ILLUSTRATIVE</figcaption>
						</figure>

						<div className="about-heritage-badge">
							<svg viewBox="0 0 48 48" aria-hidden="true">
								<path d="M24 6v34M12 40h24M10 14h28" />
								<path d="M10 14L4 28a6 6 0 0 0 12 0zM38 14l-6 14a6 6 0 0 0 12 0z" />
							</svg>
							<div className="about-heritage-count">
								{years}
								<sup>+</sup>
							</div>
							<p>years supporting attorneys, from patent illustration to full IP and litigation support.</p>
						</div>
					</div>

					<div>
						<div className="about-heritage-eye about-rv">The Heritage</div>
						<h2 id="about-heritage-title" className="about-heritage-title about-rv">
							From <em>Patent Drawings</em> Built on Precision to Legal Support Earned Through{' '}
							<em>Trust</em>
						</h2>
						<p className="about-heritage-lead about-rv">
							What started over two decades ago as a <strong>patent illustration practice</strong> has
							evolved into a trusted partner for attorneys in both intellectual property and litigation
							support. Over the years, we&apos;ve helped firms protect innovation with accurate drawings,
							trademarks and global IP documentation, while our role grew to cover the procedural work
							behind a case.
						</p>

						<div className="about-heritage-tn about-rv">
							<div className="about-heritage-tn-col">
								<small className="about-heritage-tn-label">Where we started</small>
								<b className="about-heritage-tn-title">Patent &amp; IP documentation</b>
								<ul className="about-heritage-tn-list">
									<li>Utility patent drawings</li>
									<li>Design patent drawings</li>
									<li>Trademarks</li>
									<li>Global IP documentation</li>
								</ul>
							</div>
							<div className="about-heritage-tn-col">
								<small className="about-heritage-tn-label">Where we are today</small>
								<b className="about-heritage-tn-title">Paralegal &amp; litigation support</b>
								<ul className="about-heritage-tn-list">
									<li>Drafting pleadings</li>
									<li>Preparing filings</li>
									<li>Managing dockets</li>
									<li>Supporting trial preparation</li>
								</ul>
							</div>
						</div>

						<blockquote className="about-heritage-quote about-rv">
							Our mission remains the same: to give attorneys the confidence that <span>every detail</span>,
							whether technical or procedural, is handled with accuracy and care.
						</blockquote>

						<div className="about-heritage-actions about-rv">
							<a className="about-heritage-pill" href="/services">
								Explore our services <span>&rarr;</span>
							</a>
							<a className="about-heritage-link" href="/contact">Talk to our team</a>
						</div>
					</div>
				</div>
			</section>

			<TestimonialSection />
			<FAQSection />
			<Footer />
		</div>
	);
}
