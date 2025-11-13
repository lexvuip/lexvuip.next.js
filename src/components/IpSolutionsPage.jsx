'use client'
import React from 'react';
import '../styles/IpSolutionsPage.css';
// Using public paths for images instead of imports
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function IpSolutionsPage() {
	const router = useRouter();
	const [startCount, setStartCount] = useState(false);

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

	// Add parallax effect for hero image
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

	const services = [
		{
			image: '/assets/stockimages/utilitypatentdrawing.jpg',
			title: 'Design',
			subtitle: 'Patents',
			headingOne: "Precision That Protects",
			descOne: 'For design patents, every line and curve matters. We create drawings that highlight the unique visual qualities of your product while following USPTO and international standards closely.',
			headingTwo: "Showcase Your Vision",
			descTwo: "Our drawings do more than just document your design; they improve it. By making its distinct features clear, we help examiners recognize what sets your product apart.",
			headingThree: "Tailored Service",
			descThree: "No two designs are the same. That's why we adjust our approach to fit your specific needs, ensuring accuracy, originality, and protection for your intellectual property.",
			bullets: [
				'36,353+ Projects Completed Successfully'
			],
		},
		{
			image: '/assets/stockimages/desingpatentdrawing.jpg',
			title: 'Utility',
			subtitle: 'Patents',
			headingOne: "Technical Expertise You Can Trust",
			descOne: 'Our team combines deep engineering knowledge with careful attention to detail. We create utility patent drawings that clearly show every function and component of your invention.',
			headingTwo: "Clarity That Drives Approval",
			descTwo: "From reference numbers to arrowheads, every element is crafted to meet USPTO, PCT, and WIPO requirements. This helps examiners understand your invention quickly and boosts your application's chance of success.",
			headingThree: "Collaborative Process",
			descThree: "We work closely with you at every step. We ensure the drawings meet technical standards and reflect the true nature of your innovation.",
			bullets: [
				'78,765+ Projects Completed Successfully'
			],
		},
		{
			image: '/assets/stockimages/trademarkdesign.jpg',
			title: 'Trademark',
			subtitle: 'Support',
			headingOne: "Your Brand, Defined Clearly",
			descOne: 'We create trademark drawings that capture the essence of your identity while meeting the exact requirements for legal protection.',
			headingTwo: "Visual Strength, Legal Power",
			descTwo: "Our work boosts brand recognition and acts as a protective layer. It prevents unauthorized use and ensures consistency across all applications.",
			headingThree: "Aligned With Your Vision",
			descThree: "We collaborate with you to reflect your brand's voice. We ensure that your trademark is not only compliant but also connects with your audience.",
			bullets: [
				'6,059+ Projects Completed Successfully'
			],
		},
	];
	return (
		<section className="services-hero-section">
			<div className="services-hero-content">
				<h1 className="services-hero-title">
					Legal Services Built
					<br />
					Around Your <span className="italic">Needs</span>
				</h1>
				<p className="services-hero-description">
					For over two decades, we've stood with clients through their most pivotal moments, providing trusted legal support, winning major cases, and shaping futures through law.
				</p>
				<button className="services-hero-btn" onClick={() => router.push('/contact')}>
					Get In Touch <span className="arrow">→</span>
				</button>
			</div>
			<div className="services-hero-image-row">
				<img
				src="/assets/stockimages/ipSolutionsServiceHeroImage.jpg"
				alt="Law building"
				className="services-hero-image"
			/>
			</div>

			{/* New Section: Stats and Description */}
			<section className="services-stats-section">
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

				{/* New Legal Services Section */}
				<section className="legal-services-section">
					<div className="legal-services-header">
						<div className="legal-services-badge">OUR LEGAL SERVICES</div>
						<h2 className="legal-services-title">
							Trusted <span className="italic">expertise</span> across the legal
							spectrum — tailored to your unique needs.
						</h2>
					</div>
					<div className="separate-legal-services-cards-row">
						{services.map((service, idx) => (
							<div className="separate-legal-service-card" key={idx}>
								<img
									src={service.image}
									alt={service.title + ' ' + service.subtitle}
									className="separate-legal-service-image"
								/>
								<div className="separate-legal-service-content">
									<h3 className="separate-legal-service-title">
										<span className="italic">{service.title}</span>{' '}
										{service.subtitle}
									</h3>
									<h4>{service.headingOne}</h4>
									<p className="separate-legal-service-desc">{service.descOne}</p>
									<h4>{service.headingTwo}</h4>
									<p className="separate-legal-service-desc">{service.descTwo}</p>
									<h4>{service.headingThree}</h4>
									<p className="separate-legal-service-desc">{service.descThree}</p>
									<ul className="separate-legal-service-list">
										{service.bullets.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</section>
			</section>
			<TestimonialSection />
			<FAQSection />
			<FotterSection />
		</section>
	);
}

export default IpSolutionsPage;
