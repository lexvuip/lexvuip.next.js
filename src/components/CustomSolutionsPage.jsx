'use client'
import React from 'react';
import '../styles/CustomSolutionPage.css';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import AboutReveal from './AboutReveal';
import AboutContactButton from './AboutContactButton';
import ServicesHeroParallax from './ServicesHeroParallax';
import AboutStats from './AboutStats';
import Image from 'next/image';

function CustomSolutionsPage() {
	const services = [
		{
			image: '/assets/stockimages/desingpatentdrawing.jpg',
			title: 'Tailored Support',
			desc: 'Custom solutions for unique IP and paralegal needs, adapting to your firm’s specific workflow and reporting style.',
			number: '01',
		},
		{
			image: '/assets/stockimages/utilitypatentdrawing.jpg',
			title: 'Workflow Automation',
			desc: 'Efficiency-driven automation for legal processes, helping your team stay ahead of schedules and filings.',
			number: '02',
		},
		{
			image: '/assets/stockimages/customworkflow.jpg',
			title: 'Special Consulting',
			desc: 'Expert consulting for complex legal projects that require specialized technical or procedural knowledge.',
			number: '03',
		},
	];

	return (
		<main className="services-page-luxury">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<h1 className="services-hero-title">
						Custom Solutions for
						<br />
						Your <span className="italic">Firm</span>
					</h1>
					<p className="services-hero-description">
						Every firm has its own way of working. We adapt to yours, providing 
						accurate, timely support that feels like a natural extension of 
						your team.
					</p>
					<div className="services-hero-actions">
						<AboutContactButton 
							className="services-hero-btn" 
							text={<>Get In Touch <span className="arrow">→</span></>} 
						/>
					</div>
				</div>
				<ServicesHeroParallax imageSrc="/assets/stockimages/customworkflow.jpg" alt="Custom Solutions Hero" />
			</section>

			{/* Impact Section */}
			<section className="services-impact-section">
				<AboutReveal>
					<div className="impact-container">
						<div className="impact-visual-column">
							<div className="impact-image-wrapper">
								<Image
									src="/assets/stockimages/lawer.jpg"
									alt="Custom Solutions"
									fill
									style={{ objectFit: 'cover' }}
								/>
								<div className="impact-overlay"></div>
							</div>
						</div>
						<div className="impact-content-column">
							<div className="luxury-label-group">
								<span className="gold-line"></span>
								<span className="luxury-label">TAILORED INTEGRATION</span>
							</div>
							<h2 className="impact-title">
								<span className="italic-serif">Seamlessly</span> Adapting to 
								Your Unique Legal Workflows.
							</h2>
							<div className="impact-description">
								<p>
									Whether it’s a specific reporting method or a unique 
									communication style, we integrate directly into your process. 
									The result is support that keeps you ahead of schedule.
								</p>
								<p>
									Our goal is to remove bottlenecks and provide clarity, 
									allowing you to focus on the high-level strategy while we 
									handle the technical execution.
								</p>
							</div>
							<div className="impact-cta">
								<AboutContactButton className="luxury-outline-btn" text="Design your Solution" />
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
							<span className="luxury-label">OUR CUSTOM SERVICES</span>
							<span className="gold-line"></span>
						</div>
						<h2 className="catalog-main-title">Bespoke Legal Support</h2>
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
			<FAQSection />
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

export default CustomSolutionsPage;
