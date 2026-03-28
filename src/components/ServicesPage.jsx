import React from 'react';
import '../styles/ServicesPage.css';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import AboutContactButton from './AboutContactButton';
import ServicesHeroParallax from './ServicesHeroParallax';
import AboutReveal from './AboutReveal';
import Image from 'next/image';

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
						<AboutContactButton className="services-hero-btn" text={<>Get In Touch <span className="arrow">→</span></>} />
					</div>
				</div>
				
				<ServicesHeroParallax />
			</section>

			{/* Asymmetrical Impact Section */}
			<section className="services-impact-section">
				<AboutReveal>
					<div className="impact-container">
						<div className="impact-visual-column">
							<div className="impact-image-wrapper">
								<Image
									src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
									alt="Legal precision"
									fill
									style={{ objectFit: 'cover' }}
								/>
								<div className="impact-overlay"></div>
							</div>
						</div>
						<div className="impact-content-column">
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
								<AboutContactButton className="luxury-outline-btn" text="Get In Touch" />
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
