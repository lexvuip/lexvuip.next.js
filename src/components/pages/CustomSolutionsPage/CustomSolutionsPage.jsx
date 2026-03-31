'use client';

import './CustomSolutionsPage.css';
import Footer from '../../layout/Footer';
import FAQSection from '../../sections/FAQSection';
import TestimonialSection from '../../sections/TestimonialSection';
import AboutStats from '../../sections/AboutStats';
import AboutReveal from '../../ui/AboutReveal';
import ServiceCard from '../../ui/ServiceCard';
import Button from '../../ui/Button';
import ServicesHeroParallax from '../../ui/ServicesHeroParallax';
import CountUp from 'react-countup';

function CustomSolutionsPage() {
	const services = [
		{
			image: '/assets/stockimages/desingpatentdrawing.jpg',
			title: 'Tailored Support',
			desc: 'Custom solutions for unique IP and paralegal needs, adapting to your firm\'s specific workflow and reporting style.',
		},
		{
			image: '/assets/stockimages/utilitypatentdrawing.jpg',
			title: 'Workflow Automation',
			desc: 'Efficiency-driven automation for legal processes, helping your team stay ahead of schedules and filings.',
		},
		{
			image: '/assets/stockimages/customworkflow.jpg',
			title: 'Special Consulting',
			desc: 'Expert consulting for complex legal projects that require specialized technical or procedural knowledge.',
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
						<Button href="/contact" arrow>Get In Touch</Button>
					</div>
				</div>
				<ServicesHeroParallax imageSrc="/assets/stockimages/customworkflow.jpg" alt="Custom Solutions Hero" />
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
											<span className="stat-label-tiny">TAILORED INTEGRATION</span>
										</div>
										<div className="stat-value-container">
											<CountUp end={100} duration={3} className="stat-value" suffix="%" />
											<span className="stat-unit">ADAPTIVE</span>
										</div>
										<p className="stat-description-tiny">Bespoke workflows for premier law firms</p>
									</div>
								</div>
								<div className="stat-card-secondary top-right">
									<div className="stat-card-mini">
										<span className="mini-value">ACTIVE</span>
										<span className="mini-label">Collaboration</span>
									</div>
								</div>
								<div className="stat-card-secondary bottom-left">
									<div className="stat-card-mini">
										<span className="mini-value">FAST</span>
										<span className="mini-label">Turnaround</span>
									</div>
								</div>
								<div className="impact-glow"></div>
							</div>
						</div>
						<div className="impact-content-column about-content">
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
									Whether it's a specific reporting method or a unique 
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

export default CustomSolutionsPage;
