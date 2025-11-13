'use client';
import React from 'react';
import { useEffect } from 'react';
import '../styles/ServicesPage.css';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';

function ServicesPage() {
	const services = [
		{
			image: '/assets/stockimages/lawer.jpg',
			title: 'Criminal',
			subtitle: 'Defense',
			desc: 'Our attorneys bring decades of criminal defense experience to defend your rights, challenge evidence, and build a strategic case',
			bullets: [
				'950+ clients defended',
				'Felonies, DUIs, white-collar',
				'Strong, rights-focused defense',
			],
		},
		{
			image: '/assets/stockimages/lawer.jpg',
			title: 'Immigration',
			subtitle: 'Law',
			desc: 'From family-based petitions and work visas to green cards and naturalization, we guide individuals and businesses through every step, helping you achieve lawful status and long-term security.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
		{
			image: '/assets/stockimages/lawer.jpg',
			title: 'Immigration',
			subtitle: 'Law',
			desc: 'From family-based petitions and work visas to green cards and naturalization, we guide individuals and businesses through every step, helping you achieve lawful status and long-term security.',
			bullets: [
				'1,100+ cases resolved',
				'Divorce, custody, adoption',
				'Compassionate advocacy',
			],
		},
	];
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

	return (
		<section className="services-hero-section">
			<div className="services-hero-content">
				<h1 className="services-hero-title">
					Legal Solutions Designed
					<br />
					for <span className="italic">IP Attorneys</span> Worldwide
				</h1>
				<p className="services-hero-description">
					For more than 25 years, we’ve partnered with intellectual property
					professionals through their most critical cases—delivering precise,
					compliant IP support, strengthening patent and trademark filings, and
					helping shape the future of innovation protection.
				</p>
				<button className="services-hero-btn">
					Get In Touch <span className="arrow">→</span>
				</button>
			</div>
			<div className="services-hero-image-row">
				<img
					src="/assets/stockimages/lawer.jpg"
					alt="Law building"
					className="services-hero-image"
				/>
			</div>

			{/* New Section: Stats and Description */}
			<section className="services-stats-section">
				<div className="services-stats-content">
					<div className="services-stats-left">
						<h2 className="services-stats-title">
							<span className="italic">Protecting</span> Innovation,
							Strengthening Fillings, and
							<br />
							Delivering IP Excellence for Over Two{' '}
							<span className="italic">Decades</span>
						</h2>
						<button className="services-hero-btn stats-btn">
							Get In Touch <span className="arrow">→</span>
						</button>
					</div>
					<div className="services-stats-right">
						<p>
							We help patent attorneys, trademark counsel, and IP law firms
							worldwide safeguard their clients’ innovations with precision,
							compliance, and strategic clarity. Whatever the jurisdiction, we
							stand by your side—ensuring every patent drawing, trademark
							rendering, and IP filing meets the highest global standards.
						</p>
						<p>
							With over 25 years of specialized IP expertise, we provide
							attorneys with accuracy, confidence, and tailored IP support—so
							you can focus on strategy while we handle the technical and
							procedural details that win approvals.
						</p>
					</div>
				</div>

				{/* New Legal Services Section */}
				<section className="legal-services-section">
					<div className="legal-services-header">
						<div className="legal-services-badge">OUR LEGAL SERVICES</div>
						<h2 className="legal-services-title">
							Meet our <span className="italic">Services</span>
						</h2>
					</div>

					{/* Paralegal Solutions */}
					<h3 className="legal-services-group-title">
						Paralegal <span className="italic">Solutions</span>
					</h3>
					<div className="legal-services-cards-row services-leadership-style">
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/caseManagement.jpg"
							alt="case Management"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Case Management</h4>
								<p className="legal-service-desc">
									We manage your case end-to-end, keeping everything on track
									and you informed.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/docketingManagement.jpg"
							alt="Docketing Management"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Docketing Management</h4>
								<p className="legal-service-desc">
									Efficient tracking and management of all IP deadlines and
									filings.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/eFillingServices.jpg"
							alt="E-Filing Services"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">E-Filing Services</h4>
								<p className="legal-service-desc">
									Seamless electronic filing for patents, trademarks, and legal
									docs.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/contactManagementServices.jpg"
							alt="Contact Management Services"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">
									Contact Management Services
								</h4>
								<p className="legal-service-desc">
									Organized, up-to-date contact and case information management.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/trailPreparation.jpg"
							alt="Trial Preparation"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Trial Preparation</h4>
								<p className="legal-service-desc">
									Comprehensive support for trial document and evidence prep.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/lawer.jpg"
							alt="Deposition Coordination"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Deposition Coordination</h4>
								<p className="legal-service-desc">
									Scheduling, logistics, and support for depositions.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/complianceSupport.jpg"
							alt="Compliance Support"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Compliance Support</h4>
								<p className="legal-service-desc">
									Ensuring regulatory and procedural compliance for all filings.
								</p>
							</div>
						</div>
					</div>

					{/* IP Solutions */}
					<h3 className="legal-services-group-title">
						IP <span className="italic">Solutions</span>
					</h3>
					<div className="legal-services-cards-row services-leadership-style">
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/utilitypatentdrawing.jpg"
							alt="Utility Patent Drawings"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Utility Patent Drawings</h4>
								<p className="legal-service-desc">
									Professional, compliant utility patent drawings for global
									filings.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/desingpatentdrawing.jpg"
							alt="Design Patent Drawings"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Design Patent Drawings</h4>
								<p className="legal-service-desc">
									Accurate, visually compelling design patent illustrations.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/trademarkdesign.jpg"
							alt="Trademark Support"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Trademark Support</h4>
								<p className="legal-service-desc">
									Comprehensive trademark search, filing, and drawing services.
								</p>
							</div>
						</div>
					</div>

					{/* Custom Solutions */}
					<h3 className="legal-services-group-title">
						Custom <span className="italic">Solutions</span>
					</h3>
					<div className="legal-services-cards-row services-leadership-style">
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/desingpatentdrawing.jpg"
							alt="Custom Solutions"
							className="legal-service-image"
							/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">
									Tailored IP & Paralegal Support
								</h4>
								<p className="legal-service-desc">
									Custom solutions for unique IP and paralegal needs.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/utilitypatentdrawing.jpg"
							alt="Workflow Automation"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Workflow Automation</h4>
								<p className="legal-service-desc">
									Automate repetitive legal and IP processes for efficiency.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<img
							src="/assets/stockimages/customworkflow.jpg"
							alt="Special Projects & Consulting"
							className="legal-service-image"
						/>
							<div className="legal-service-content">
								<h4 className="legal-service-title">
									Special Projects & Consulting
								</h4>
								<p className="legal-service-desc">
									Expert consulting and project support for legal teams.
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>
			<TestimonialSection />
			<FAQSection />
			<FotterSection />
		</section>
	);
}

export default ServicesPage;
