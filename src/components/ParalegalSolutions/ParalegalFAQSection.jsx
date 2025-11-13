'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../../styles/FAQSection.css';

const faqs = [
	{
		question: 'What type of paralegal support do you provide?',
		answer: 'We handle case management, docketing, e-filings, trial preparation, deposition coordination, and compliance monitoring. We also offer custom workflow support. Whether it`s routine filings or high-stakes trial prep, we step in where you need us most.',
	},
	{
		question: 'How do I start working with you?',
		answer:
			'Just send over the task or case details, documents, deadlines, or a quick note. We will review everything, confirm the next steps, and get started right away. There`s no onboarding hassle or lengthy setup.',
	},
	{
		question: 'How quickly can you turn things around?',
		answer:
			'Most tasks are completed within 24 to 48 hours. For urgent filings or last-minute trial prep, we can move on the same day. The goal is to ensure you don`t wait and nothing falls through the cracks.',
	},
	{
		question: 'What case types do you support?',
		answer:
			'We assist with civil litigation, eviction cases, intellectual property matters, and more. Our role is to lighten your load, whether that means organizing discovery, prepping exhibits, or tracking deadlines.',
	},
	{
		question: 'How do you handle confidentiality and compliance?',
		answer:
			'Your cases remain protected. We work under strict confidentiality rules, follow court guidelines closely, and are happy to sign NDAs. Every detail is treated as if it were our own case.',
	},
	{
		question: 'How do you price your services?',
		answer:
			'We offer clear hourly or project-based rates, depending on your needs. There are no long contracts or hidden fees. You get straightforward pricing, with the flexibility to adjust support as needed.',
	},
];

function ParalegalFAQSection() {
	const [openIdx, setOpenIdx] = useState(null);
	const contentRefs = useRef([]);

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
						Anything else you’d like to know? Get in touch with our team and
						we’d be happy to discuss your questions.
					</div>
					<button
						className="faq-contact-btn faq-animate-btn"
						onClick={() => (window.location.href = '/contact')}
					>
						Get In Touch <span className="faq-arrow">→</span>
					</button>
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

export default ParalegalFAQSection;
