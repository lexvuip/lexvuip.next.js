'use client'
import React from 'react';
import '../styles/ParalegalSolutionsPage.css';
import FAQSection from './FAQSection';
import { paralegalFaqs } from '../data/faqs';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import AboutReveal from './AboutReveal';
import Button from './Button';
import ServicesHeroParallax from './ServicesHeroParallax';
import AboutStats from './AboutStats';
import Image from 'next/image';
import CountUp from 'react-countup';

function ParaLegalSolutions() {
	const services = [
		{
			image: '/assets/stockimages/caseManagement.jpg',
			title: 'Case Management',
			desc: 'End-to-end management ensuring every milestone from intake to resolution is met with absolute precision.',
			number: '01',
		},
		{
			image: '/assets/stockimages/docketingManagement.jpg',
			title: 'Docketing Management',
			desc: 'Expert tracking of hearings, filings, and court deadlines to give you real-time visibility and peace of mind.',
			number: '02',
		},
		{
			image: '/assets/stockimages/eFillingServices.jpg',
			title: 'E-Filing Services',
			desc: 'Seamless electronic filing for local and federal courts, ensuring accuracy and timely confirmations.',
			number: '03',
		},
		{
			image: '/assets/stockimages/contactManagementServices.jpg',
			title: 'Contact Management',
			desc: 'Organized and secure management of client and witness information for rapid access during case prep.',
			number: '04',
		},
		{
			image: '/assets/stockimages/trailPreparation.jpg',
			title: 'Trial Preparation',
			desc: 'Comprehensive support for trial binders, exhibits, and witness lists to ensure you walk into court fully prepared.',
			number: '05',
		},
		{
			image: '/assets/stockimages/lawer.jpg',
			title: 'Deposition Coordination',
			desc: 'Expert logistics, transcript management, and exhibit preparation for smooth deposition proceedings.',
			number: '06',
		},
		{
			image: '/assets/stockimages/complianceSupport.jpg',
			title: 'Compliance Support',
			desc: 'Continuous monitoring of court procedures and filing standards to protect your clients and keep cases moving.',
			number: '07',
		},
	];

	return (
		<main className="services-page-luxury">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<h1 className="services-hero-title">
						Paralegal Solutions for
						<br />
						<span className="italic">Advocacy</span>
					</h1>
					<p className="services-hero-description">
						For over two decades, we’ve provided attorneys with the technical 
						foundation needed to win cases—clearing the overload and keeping 
						every detail under control.
					</p>
					<div className="services-hero-actions">
						<Button href="/contact" arrow>Get In Touch</Button>
					</div>
				</div>
				<ServicesHeroParallax imageSrc="/assets/stockimages/lawer.jpg" alt="Paralegal Solutions Hero" />
			</section>

			{/* Impact Section */}
			<section className="services-impact-section">
				<AboutReveal>
					<div className="impact-container">
						<div className="impact-visual-column about-left-column">
							<div className="impact-visual-canvas">
								<div className="impact-grid-overlay"></div>
								<div className="blueprint-visual">
									<svg viewBox="0 0 400 400" className="blueprint-svg">
										<circle cx="200" cy="200" r="140" className="blueprint-circle" />
										<path d="M60,200 L340,200" className="blueprint-line" />
										<path d="M200,60 L200,340" className="blueprint-line" />
										<rect x="100" y="100" width="200" height="200" className="blueprint-rect" />
										<path d="M100,100 L300,300" className="blueprint-line-diagonal" />
										<path d="M300,100 L100,300" className="blueprint-line-diagonal" />
										<circle cx="200" cy="60" r="3" fill="var(--color-gold)" opacity="0.5" />
										<circle cx="200" cy="340" r="3" fill="var(--color-gold)" opacity="0.5" />
										<circle cx="60" cy="200" r="3" fill="var(--color-gold)" opacity="0.5" />
										<circle cx="340" cy="200" r="3" fill="var(--color-gold)" opacity="0.5" />
									</svg>
								</div>
								<div className="stat-card-primary">
									<div className="stat-card-glass">
										<div className="stat-header">
											<span className="gold-dot"></span>
											<span className="stat-label-tiny">OPERATIONAL EXCELLENCE</span>
										</div>
										<div className="stat-value-container">
											<CountUp end={121} duration={3} className="stat-value" suffix="K+" />
											<span className="stat-unit">PROJECTS</span>
										</div>
										<p className="stat-description-tiny">Seamless legal support delivered globally</p>
									</div>
								</div>
								<div className="stat-card-secondary top-right">
									<div className="stat-card-mini">
										<span className="mini-value">25+</span>
										<span className="mini-label">Years</span>
									</div>
								</div>
								<div className="stat-card-secondary bottom-left">
									<div className="stat-card-mini">
										<span className="mini-value">GLOBAL</span>
										<span className="mini-label">Support</span>
									</div>
								</div>
								<div className="impact-glow"></div>
							</div>
						</div>
						<div className="impact-content-column about-content">
							<div className="luxury-label-group">
								<span className="gold-line"></span>
								<span className="luxury-label">STRATEGIC SUPPORT</span>
							</div>
							<h2 className="impact-title">
								<span className="italic-serif">Strengthening</span> Cases with 
								Proven Precision and Experience.
							</h2>
							<div className="impact-description">
								<p>
									We help attorneys win more cases by clearing the overload and 
									keeping the details under control. Our hands-on support handles 
									filings, prep, and documentation.
								</p>
								<p>
									This means your time goes where it counts: building stronger 
									arguments and serving your clients, while we ensure nothing 
									important goes unnoticed.
								</p>
							</div>
							<div className="impact-cta">
								<Button href="/contact" variant="secondary">Connect with Us</Button>
							</div>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* Stats Section */}
			<section className="services-stats-luxury-section">
				<AboutStats />
			</section>

			{/* Catalog Section */}
			<section className="services-catalog-section">
				<div className="catalog-container">
					<div className="catalog-header">
						<div className="luxury-label-group central">
							<span className="gold-line"></span>
							<span className="luxury-label">OUR PARALEGAL SERVICES</span>
							<span className="gold-line"></span>
						</div>
						<h2 className="catalog-main-title">Comprehensive Legal Support</h2>
					</div>

					<div className="service-category-group">
						<div className="services-grid-luxury">
							{services.map((service, idx) => (
								<ServiceCard 
									key={idx}
									image={service.image}
									title={service.title}
									desc={service.desc}
									number={service.number}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			<TestimonialSection />
			<FAQSection faqs={paralegalFaqs} />
			<FotterSection />
		</main>
	);
}

function ServiceCard({ image, title, desc, number }) {
	return (
		<AboutReveal>
			<div className="luxury-service-card">
				<div className="card-visual">
					<div className="card-image-wrapper">
						<Image
							src={image}
							alt={title}
							fill
							style={{ objectFit: 'cover' }}
						/>
						<div className="card-overlay"></div>
						<span className="card-number">{number}</span>
					</div>
				</div>
				<div className="card-info">
					<h4 className="card-title">{title}</h4>
					<p className="card-description">{desc}</p>
					<div className="card-footer">
						<span className="footer-line"></span>
					</div>
				</div>
			</div>
		</AboutReveal>
	);
}

export default ParaLegalSolutions;
