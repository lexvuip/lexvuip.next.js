'use client';

import './IpSolutionsPage.css';
import Footer from '../../layout/Footer';
import TestimonialSection from '../../sections/TestimonialSection';
import FAQSection from '../../sections/FAQSection';
import AboutStats from '../../sections/AboutStats';
import AboutReveal from '../../ui/AboutReveal';
import ServiceCard from '../../ui/ServiceCard';
import Button from '../../ui/Button';
import ServicesHeroParallax from '../../ui/ServicesHeroParallax';
import Counter from '../../ui/Counter';
import { ipServices } from '../../../data/services';

function IpSolutionsPage() {
	return (
		<main className="services-page-luxury">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<h1 className="services-hero-title">
						IP Solutions Built
						<br />
						for <span className="italic">Innovation</span>
					</h1>
					<p className="services-hero-description">
						For over 25 years, we've partnered with IP attorneys to provide 
						precise, compliant patent and trademark drawings that strengthen 
						filings and protect intellectual property worldwide.
					</p>
					<div className="services-hero-actions">
						<Button href="/contact" arrow>Get In Touch</Button>
					</div>
				</div>
				<ServicesHeroParallax imageSrc="/assets/stockimages/homepage-1920.webp" alt="Comprehensive IP solutions including patent drawings and trademark support" />
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
											<span className="stat-label-tiny">PRECISION FIRST</span>
										</div>
										<div className="stat-value-container">
											<Counter end={99} duration={3} className="stat-value" suffix="%" />
											<span className="stat-unit">ACCURACY</span>
										</div>
										<p className="stat-description-tiny">Flawless compliance for 25+ years</p>
									</div>
								</div>
								<div className="stat-card-secondary top-right">
									<div className="stat-card-mini">
										<span className="mini-value">USPTO</span>
										<span className="mini-label">Compliant</span>
									</div>
								</div>
								<div className="stat-card-secondary bottom-left">
									<div className="stat-card-mini">
										<span className="mini-value">WIPO</span>
										<span className="mini-label">Global</span>
									</div>
								</div>
								<div className="stat-card-secondary bottom-right">
									<div className="stat-card-mini">
										<span className="mini-value">EPO</span>
										<span className="mini-label">European</span>
									</div>
								</div>
								<div className="impact-glow"></div>
							</div>
						</div>
						<div className="impact-content-column about-content">
							<div className="luxury-label-group">
								<span className="gold-line"></span>
								<span className="luxury-label">PRECISION & EXPERTISE</span>
							</div>
							<h2 className="impact-title">
								<span className="italic-serif">Protecting</span> Your 
								Intellectual Property with Unmatched Detail.
							</h2>
							<div className="impact-description">
								<p>
									Every line and curve matters in IP law. Our team combines deep 
									technical knowledge with careful attention to USPTO and 
									international standards.
								</p>
								<p>
									We ensure your drawings are not just compliant, but clear and 
									effective, driving faster approvals and stronger protection 
									for your innovations.
								</p>
							</div>
							<div className="impact-cta">
								<Button href="/contact" variant="secondary">Consult our Experts</Button>
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
							<span className="luxury-label">OUR IP SERVICES</span>
							<span className="gold-line"></span>
						</div>
						<h2 className="catalog-main-title">Specialized IP Support</h2>
					</div>

					<div className="service-category-group">
						<div className="services-grid-luxury">
							{ipServices.map((service, idx) => (
								<ServiceCard 
									key={idx}
									image={service.image}
									title={service.title}
									desc={service.description}
									href={`/service/ipsolutions/${service.slug}`}
								/>
								))}
						</div>
					</div>
				</div>
			</section>

			<TestimonialSection />
			<FAQSection />
			<Footer />
		</main>
	);
}

export default IpSolutionsPage;
