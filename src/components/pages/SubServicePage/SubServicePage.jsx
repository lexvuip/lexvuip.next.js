'use client';

import './SubServicePage.css';
import Footer from '../../layout/Footer';
import TestimonialSection from '../../sections/TestimonialSection';
import FAQSection from '../../sections/FAQSection';
import AboutStats from '../../sections/AboutStats';
import AboutReveal from '../../ui/AboutReveal';
import Button from '../../ui/Button';
import ServicesHeroParallax from '../../ui/ServicesHeroParallax';
import CountUp from 'react-countup';

function SubServicePage({ service }) {
	if (!service) return null;

	const { title, description, image, content } = service;

	return (
		<main className="services-page-luxury sub-service-page">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<div className="luxury-label-group central">
						<span className="gold-line"></span>
						<span className="luxury-label">DETAILED SERVICE</span>
						<span className="gold-line"></span>
					</div>
					<h1 className="services-hero-title">
						{title}
					</h1>
					<p className="services-hero-description">
						{description}
					</p>
					<div className="services-hero-actions">
						<Button href="/contact" arrow>Consult our Experts</Button>
					</div>
				</div>
				<ServicesHeroParallax imageSrc={image} alt={title} />
			</section>

			{/* Impact Section / Value Prop */}
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
									</svg>
								</div>
								<div className="stat-card-primary">
									<div className="stat-card-glass">
										<div className="stat-header">
											<span className="gold-dot"></span>
											<span className="stat-label-tiny">TECHNICAL AUTHORITY</span>
										</div>
										<div className="stat-value-container">
											<CountUp end={100} duration={3} className="stat-value" suffix="%" />
											<span className="stat-unit">COMPLIANT</span>
										</div>
										<p className="stat-description-tiny">Adhering to the highest global standards</p>
									</div>
								</div>
								<div className="impact-glow"></div>
							</div>
						</div>
						<div className="impact-content-column about-content">
							<div className="luxury-label-group">
								<span className="gold-line"></span>
								<span className="luxury-label">VALUE PROPOSITION</span>
							</div>
							<h2 className="impact-title">
								<span className="italic-serif">Precision</span> Focused. 
								<br />Results Driven.
							</h2>
							<div className="impact-description">
								<p>{content.valueProp}</p>
								<div className="pillar-list">
									{content.pillars.map((pillar, idx) => (
										<div key={idx} className="pillar-item">
											<span className="gold-dot"></span>
											<p>{pillar}</p>
										</div>
									))}
								</div>
							</div>
							<div className="impact-cta">
								<Button href="/contact" variant="secondary">Design your Solution</Button>
							</div>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* Stats Section */}
			<section className="services-stats-luxury-section">
				<AboutStats />
			</section>

			{/* Keywords Section - Subtle for SEO */}
			<section className="keywords-subtle-section">
				<div className="container">
					<div className="keyword-tag-group">
						{content.primaryKeywords.map((kw, idx) => (
							<span key={idx} className="keyword-tag">#{kw.replace(/\s+/g, '')}</span>
						))}
					</div>
				</div>
			</section>

			<TestimonialSection />
			<FAQSection />
			<Footer />
		</main>
	);
}

export default SubServicePage;
