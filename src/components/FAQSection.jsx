'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/FAQSection.css';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { defaultFaqs } from '../data/faqs';

function FAQSection({ faqs = defaultFaqs }) {
	const [openIdx, setOpenIdx] = useState(null);
	const contentRefs = useRef([]);
	const router = useRouter();

	const handleToggle = (idx) => {
		setOpenIdx((prev) => (prev === idx ? null : idx));
	};

	// Observe FAQ heading, desc, button for in-view animation
	useEffect(() => {
		const section = document.getElementById('faq');
		if (!section) return;

		const animated = section.querySelectorAll(
			'.faq-animate-heading, .faq-animate-desc, .faq-animate-btn'
		);

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

		animated.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<section id="faq" className="faq-section">
			<div className="faq-container">
				<div className="faq-left">
					<h2 className="faq-heading faq-animate-heading">
						<span className="faq-heading-italic">Frequently</span> Asked
						<br />
						Questions
					</h2>
<div className="faq-desc faq-animate-desc">
						Anything else you'd like to know? Get in touch with our team and
						we'd be happy to discuss your questions.
					</div>
					<Button href="/contact" arrow>Get In Touch</Button>
					{/* <div className="faq-avatars">
						{avatars.map((src, idx) => (
							<img className="faq-avatar" src={src} alt="avatar" key={idx} />
						))}
					</div> */}
				</div>
				<div className="faq-right">
					{faqs.map((faq, idx) => (
						<div
							className={`faq-accordion${openIdx === idx ? ' open' : ''}`}
							key={idx}
						>
							<button
								type="button"
								className="faq-question-row"
								aria-expanded={openIdx === idx}
								aria-controls={`faq-panel-${idx}`}
								id={`faq-header-${idx}`}
								onClick={() => handleToggle(idx)}
							>
								<span className="faq-question">{faq.question}</span>
								<span className="faq-dropdown-icon" aria-hidden="true">
									▼
								</span>
							</button>

							<div
								id={`faq-panel-${idx}`}
								role="region"
								aria-labelledby={`faq-header-${idx}`}
								className="faq-answer-wrapper"
								ref={(el) => (contentRefs.current[idx] = el)}
								style={{
									maxHeight:
										openIdx === idx
											? `${contentRefs.current[idx]?.scrollHeight || 0}px`
											: '0px',
								}}
							>
								<div className="faq-answer">{faq.answer}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
