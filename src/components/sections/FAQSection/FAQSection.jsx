'use client';
import React, { useEffect, useRef, useState } from 'react';
import './FAQSection.css';
import { defaultFaqs } from '../../../data/faqs';

const REGION = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const telLink = REGION === 'IN' ? 'tel:+919110726310' : 'tel:+18562142512';
const telDisplay = REGION === 'IN' ? '+91 91107 26310' : '+1 856 214 2512';

function FAQSection({ faqs = defaultFaqs }) {
	const [openIdx, setOpenIdx] = useState(0);
	const sectionRef = useRef(null);
	const pillRef = useRef(null);

	const handleToggle = (idx) => {
		setOpenIdx((prev) => (prev === idx ? null : idx));
	};

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Staggered scroll-reveal for the panel and accordion list
		const revealEls = section.querySelectorAll('.rv');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);
		revealEls.forEach((el, k) => {
			el.style.transitionDelay = `${k * 120}ms`;
			observer.observe(el);
		});

		// Mouse-follow tilt for the Get In Touch pill (fine pointers, motion allowed)
		const pill = pillRef.current;
		let canHover = false;
		if (pill && window.matchMedia) {
			canHover =
				matchMedia('(hover:hover) and (pointer:fine)').matches &&
				!matchMedia('(prefers-reduced-motion: reduce)').matches;
		}
		let onMove, onLeave;
		if (canHover) {
			onMove = (e) => {
				const r = pill.getBoundingClientRect();
				const x = (e.clientX - r.left - r.width / 2) * 0.14;
				const y = (e.clientY - r.top - r.height / 2) * 0.22;
				pill.style.setProperty('--mx', x.toFixed(1) + 'px');
				pill.style.setProperty('--my', y.toFixed(1) + 'px');
			};
			onLeave = () => {
				pill.style.setProperty('--mx', '0px');
				pill.style.setProperty('--my', '0px');
			};
			pill.addEventListener('mousemove', onMove);
			pill.addEventListener('mouseleave', onLeave);
		}

		return () => {
			observer.disconnect();
			if (canHover && pill) {
				pill.removeEventListener('mousemove', onMove);
				pill.removeEventListener('mouseleave', onLeave);
			}
		};
	}, []);

	return (
		<section id="faq" className="faq-section" ref={sectionRef} aria-labelledby="faq-heading">
			<div className="faq-wrap">
				<div className="faq-side rv">
					<div className="faq-orb" aria-hidden="true"></div>
					<div className="faq-eye">QUESTIONS</div>
					<h2 id="faq-heading" className="faq-heading">
						<em>Frequently</em>Asked Questions
					</h2>
					<p className="faq-lead">
						Anything else you'd like to know? Get in touch with our team and
						we'd be happy to discuss your questions.
					</p>
					<a className="faq-pill" href="/contact" ref={pillRef}>
						GET IN TOUCH{' '}
						<span className="faq-ar" aria-hidden="true">
							<i>&rarr;</i>
							<i>&rarr;</i>
						</span>
					</a>
					<p className="faq-alt">
						Prefer to talk? Call <a href={telLink}>{telDisplay}</a>
					</p>
				</div>

				<div className="faq-list rv">
					{faqs.map((faq, idx) => (
						<div
							className={`faq-item${openIdx === idx ? ' open' : ''}`}
							key={idx}
						>
							<h3 className="faq-item-heading">
								<button
									type="button"
									className="faq-q"
									aria-expanded={openIdx === idx}
									aria-controls={`faq-panel-${idx}`}
									id={`faq-header-${idx}`}
									onClick={() => handleToggle(idx)}
								>
									<span className="faq-n">{String(idx + 1).padStart(2, '0')}</span>
									<span className="faq-t">{faq.question}</span>
									<span className="faq-ic" aria-hidden="true"></span>
								</button>
							</h3>
							<div
								className="faq-a"
								id={`faq-panel-${idx}`}
								role="region"
								aria-labelledby={`faq-header-${idx}`}
							>
								<div>
									<p>{faq.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
