'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/FAQSection.css';
import { useRouter } from 'next/navigation';

const faqs = [
	{
		question: 'What type of patent drawings do you provide?',
		answer:
			'We provide Utility, Design, Provisional, and Trademark patent drawings, fully compliant with USPTO and WIPO guidelines. From simple flowcharts to complex mechanical illustrations — we’ve got it covered.',
	},
	{
		question: 'How do I start a project with LexVuIP?',
		answer:
			'Simply share your idea in any format — sketch, CAD file, PDF, or even a photo. We’ll review and provide a timeline and quote. Once approved, we start illustrating.',
	},
	{
		question: 'How long does it take to complete a drawing?',
		answer:
			'Most projects are delivered within 2–4 business days, depending on the complexity. If you’re on a tight deadline, we also offer an express service at no additional cost.',
	},
	{
		question: 'What file formats do you accept and deliver?',
		answer:
			'We accept sketches, hand-drawn scans, CAD, PPT, or even rough diagrams. Final files are delivered in PDF or JPEG, formats ready for direct patent office submission.',
	},
	{
		question: 'Do you sign NDAs or keep client data confidential?',
		answer:
			'Absolutely. Confidentiality is our top priority. We’re happy to sign NDAs and ensure your innovation remains secure throughout the process.',
	},
	{
		question: 'How do you price your services?',
		answer:
			"Our pricing depends on the type and complexity of the drawings. We offer transparent and competitive rates, with no hidden costs. You’ll always know what you're paying for.",
	},
];

// const avatars = [
// 	'https://randomuser.me/api/portraits/women/44.jpg',
// 	'https://randomuser.me/api/portraits/men/32.jpg',
// 	'https://randomuser.me/api/portraits/women/68.jpg',
// ];

function FAQSection() {
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
						Anything else you’d like to know? Get in touch with our team and
						we’d be happy to discuss your questions.
					</div>
					<button
						className="faq-contact-btn faq-animate-btn"
						onClick={() => router.push('/contact')}
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

export default FAQSection;
