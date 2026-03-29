'use client';

import React from 'react';
import '../styles/ServicesPage.css';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import Button from './Button';
import ServicesHeroParallax from './ServicesHeroParallax';
import AboutReveal from './AboutReveal';
import Image from 'next/image';
import CountUp from 'react-countup';

export default function ServicesPage() {
	return (
		<main className="services-page-luxury">
			{/* Restored Hero Section - No Reveal for Hero */}
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
					<div className="services-hero-actions">
						<Button href="/contact" arrow>Get In Touch</Button>
					</div>
				</div>
				
				<ServicesHeroParallax />
			</section>

			{/* Asymmetrical Impact Section */}
			<section className="services-impact-section">
				<AboutReveal>
					<div className="impact-container">
						<div className="impact-visual-column about-left-column">
							<div className="impact-visual-canvas">
								{/* Technical Grid Background */}
								<div className="impact-grid-overlay"></div>
								
								{/* Animated Patent Blueprint */}
								<div className="blueprint-visual">
									<svg viewBox="0 0 400 400" className="blueprint-svg">
										<circle cx="200" cy="200" r="140" className="blueprint-circle" />
										<path d="M60,200 L340,200" className="blueprint-line" />
										<path d="M200,60 L200,340" className="blueprint-line" />
										<rect x="100" y="100" width="200" height="200" className="blueprint-rect" />
										<path d="M100,100 L300,300" className="blueprint-line-diagonal" />
										<path d="M300,100 L100,300" className="blueprint-line-diagonal" />
										{/* Small detailing */}
										<circle cx="200" cy="60" r="3" fill="var(--color-gold)" opacity="0.5" />
										<circle cx="200" cy="340" r="3" fill="var(--color-gold)" opacity="0.5" />
										<circle cx="60" cy="200" r="3" fill="var(--color-gold)" opacity="0.5" />
										<circle cx="340" cy="200" r="3" fill="var(--color-gold)" opacity="0.5" />
									</svg>
								</div>

								{/* Main Stat Card - Glassmorphism */}
								<div className="stat-card-primary">
									<div className="stat-card-glass">
										<div className="stat-header">
											<span className="gold-dot"></span>
											<span className="stat-label-tiny">ESTABLISHED EXPERTISE</span>
										</div>
										<div className="stat-value-container">
											<CountUp end={25} duration={3} className="stat-value" suffix="+" />
											<span className="stat-unit">YEARS</span>
										</div>
										<p className="stat-description-tiny">Pioneering IP support since 1999</p>
										<div className="stat-decoration"></div>
									</div>
								</div>

								{/* Secondary Floating Accents */}
								<div className="stat-card-secondary top-right">
									<div className="stat-card-mini">
										<span className="mini-value">GLOBAL</span>
										<span className="mini-label">Compliance</span>
									</div>
								</div>
								
								<div className="stat-card-secondary bottom-left">
									<div className="stat-card-mini">
										<span className="mini-value">
											<CountUp end={121} duration={2.5} suffix="K+" />
										</span>
										<span className="mini-label">Projects</span>
									</div>
								</div>

								{/* Luxury Background Glow */}
								<div className="impact-glow"></div>
							</div>
						</div>
						<div className="impact-content-column about-content">
							<div className="luxury-label-group">
								<span className="gold-line"></span>
								<span className="luxury-label">STRATEGIC IMPACT</span>
							</div>
							<h2 className="impact-title">
								<span className="italic-serif">Protecting</span> Innovation, 
								Strengthening Filings, and Delivering IP Excellence.
							</h2>
							<div className="impact-description">
								<p>
									We help patent attorneys and IP law firms safeguard their clients’ 
									innovations with strategic clarity. Every drawing, trademark rendering, 
									and filing meets the highest global standards.
								</p>
								<p>
									With 25+ years of specialized expertise, we handle the technical 
									and procedural details so you can focus on winning approvals.
								</p>
							</div>
							<div className="impact-cta">
								<Button href="/contact">Get In Touch</Button>
							</div>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* Modernized Services Catalog */}
			<section className="services-catalog-section">
				<div className="catalog-container">
					<div className="catalog-header">
						<div className="luxury-label-group central">
							<span className="gold-line"></span>
							<span className="luxury-label">SERVICE CATALOG</span>
							<span className="gold-line"></span>
						</div>
						<h2 className="catalog-main-title">Comprehensive Legal Support</h2>
					</div>

					{/* Paralegal Solutions Category */}
					<div className="service-category-group">
						<div className="category-header">
							<h3 className="category-title">Paralegal <span className="italic-serif">Solutions</span></h3>
							<div className="category-line"></div>
						</div>
						
						<div className="services-grid-luxury">
							<ServiceCard 
								image="/assets/stockimages/caseManagement.jpg"
								title="Case Management"
								desc="End-to-end management ensuring every milestone is met with precision."
								number="01"
							/>
							<ServiceCard 
								image="/assets/stockimages/docketingManagement.jpg"
								title="Docketing Management"
								desc="Efficient tracking and management of critical IP deadlines."
								number="02"
							/>
							<ServiceCard 
								image="/assets/stockimages/eFillingServices.jpg"
								title="E-Filing Services"
								desc="Seamless electronic filing for patents and trademarks."
								number="03"
							/>
							<ServiceCard 
								image="/assets/stockimages/contactManagementServices.jpg"
								title="Contact Management"
								desc="Organized and secure case information management."
								number="04"
							/>
							<ServiceCard 
								image="/assets/stockimages/trailPreparation.jpg"
								title="Trial Preparation"
								desc="Comprehensive support for trial document and evidence prep."
								number="05"
							/>
							<ServiceCard 
								image="/assets/stockimages/lawer.jpg"
								title="Deposition Coordination"
								desc="Expert logistics and support for global depositions."
								number="06"
							/>
						</div>
					</div>

					{/* IP Solutions Category */}
					<div className="service-category-group">
						<div className="category-header">
							<h3 className="category-title">IP <span className="italic-serif">Solutions</span></h3>
							<div className="category-line"></div>
						</div>
						
						<div className="services-grid-luxury">
							<ServiceCard 
								image="/assets/stockimages/utilitypatentdrawing.jpg"
								title="Utility Patent Drawings"
								desc="USPTO, EPO, and WIPO-compliant utility illustrations."
								number="01"
							/>
							<ServiceCard 
								image="/assets/stockimages/desingpatentdrawing.jpg"
								title="Design Patent Drawings"
								desc="Accurate, visually compelling design patent illustrations."
								number="02"
							/>
							<ServiceCard 
								image="/assets/stockimages/trademarkdesign.jpg"
								title="Trademark Support"
								desc="Comprehensive search, filing, and drawing services."
								number="03"
							/>
						</div>
					</div>

					{/* Custom Solutions Category */}
					<div className="service-category-group">
						<div className="category-header">
							<h3 className="category-title">Custom <span className="italic-serif">Solutions</span></h3>
							<div className="category-line"></div>
						</div>
						
						<div className="services-grid-luxury">
							<ServiceCard 
								image="/assets/stockimages/desingpatentdrawing.jpg"
								title="Tailored Support"
								desc="Custom solutions for unique IP and paralegal needs."
								number="01"
							/>
							<ServiceCard 
								image="/assets/stockimages/utilitypatentdrawing.jpg"
								title="Workflow Automation"
								desc="Efficiency-driven automation for legal processes."
								number="02"
							/>
							<ServiceCard 
								image="/assets/stockimages/customworkflow.jpg"
								title="Special Consulting"
								desc="Expert consulting for complex legal projects."
								number="03"
							/>
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
