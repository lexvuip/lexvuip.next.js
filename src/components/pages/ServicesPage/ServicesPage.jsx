'use client';

import dynamic from 'next/dynamic';
import './ServicesPage.css';
import Footer from '../../layout/Footer';
import Button from '../../ui/Button';
import ServicesHeroParallax from '../../ui/ServicesHeroParallax';
import AboutReveal from '../../ui/AboutReveal';
import ServiceCard from '../../ui/ServiceCard';
import Counter from '../../ui/Counter';
import { ipServices, paralegalServices, customServices, patentProtectionServices, brandCreativeProtectionServices, enforcementStrategyServices, advisoryServicesData } from '../../../data/services';

const TestimonialSection = dynamic(
	() => import('../../sections/TestimonialSection'),
	{
		loading: () => <div className="section-loading">Loading testimonials...</div>,
		ssr: false,
	}
);

const FAQSection = dynamic(
	() => import('../../sections/FAQSection'),
	{
		loading: () => <div className="section-loading">Loading FAQ...</div>,
		ssr: false,
	}
);

function ServicesPage() {
	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const isIndia = region === 'IN';

	return (
		<main className="services-page-luxury">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<h1 className="services-hero-title">
						{isIndia ? 'Comprehensive IP & Legal Services' : 'Patent Drawings & Paralegal Services'}
						<br />
						{isIndia ? "for India's Innovators" : <>for <span className="italic">IP Attorneys</span> Worldwide</>}
					</h1>
					{isIndia && (
						<p className="services-hero-tagline">
							Built for startups, inventors, individual innovators, and educational institutions.
						</p>
					)}
					<p className="services-hero-description">
						{isIndia
							? 'From patent prosecution to drawings, trademark filing to litigation support, our team is trained across the full IP lifecycle. We deliver precise, compliant IP support fast, accurate, and always aligned with your strategy.'
							: 'For more than 25 years, we\'ve partnered with intellectual property professionals through their most critical cases—delivering precise, compliant IP support, strengthening patent and trademark filings, and helping shape the future of innovation protection.'}
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
										<defs>
											<filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
												<feGaussianBlur stdDeviation="2" result="blur" />
												<feComposite in="SourceGraphic" in2="blur" operator="over" />
											</filter>
										</defs>
										
										{/* Measurement lines & Technical marks */}
										<g className="technical-marks" opacity="0.6">
											<line x1="50" y1="50" x2="70" y2="50" className="blueprint-line" />
											<line x1="50" y1="50" x2="50" y2="70" className="blueprint-line" />
											<line x1="330" y1="50" x2="350" y2="50" className="blueprint-line" />
											<line x1="350" y1="50" x2="350" y2="70" className="blueprint-line" />
											<line x1="50" y1="330" x2="50" y2="350" className="blueprint-line" />
											<line x1="50" y1="350" x2="70" y2="350" className="blueprint-line" />
											<line x1="330" y1="350" x2="350" y2="350" className="blueprint-line" />
											<line x1="350" y1="330" x2="350" y2="350" className="blueprint-line" />
											
											{/* Crosshair */}
											<circle cx="200" cy="200" r="2" fill="var(--color-gold)" />
										</g>

										{/* Main Blueprint Shapes */}
										<circle cx="200" cy="200" r="140" className="blueprint-circle" />
										<path d="M60,200 L340,200" className="blueprint-line" />
										<path d="M200,60 L200,340" className="blueprint-line" />
										<rect x="100" y="100" width="200" height="200" className="blueprint-rect" />
										<path d="M100,100 L300,300" className="blueprint-line-diagonal" />
										<path d="M300,100 L100,300" className="blueprint-line-diagonal" />
										
										{/* Floating dots / Intersection markers */}
										<g className="blueprint-accents">
											<circle cx="200" cy="60" r="3" className="blueprint-dot" />
											<circle cx="200" cy="340" r="3" className="blueprint-dot" />
											<circle cx="60" cy="200" r="3" className="blueprint-dot" />
											<circle cx="340" cy="200" r="3" className="blueprint-dot" />
											
											<circle cx="100" cy="100" r="2" className="blueprint-dot-small" />
											<circle cx="300" cy="100" r="2" className="blueprint-dot-small" />
											<circle cx="100" cy="300" r="2" className="blueprint-dot-small" />
											<circle cx="300" cy="300" r="2" className="blueprint-dot-small" />
										</g>

										{/* Secondary Orbiting Circle */}
										<circle cx="200" cy="200" r="170" className="blueprint-circle-outer" strokeDasharray="10 20" />
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
											<Counter end={25} duration={3} className="stat-value" suffix="+" />
											<span className="stat-unit">YEARS</span>
										</div>
										<p className="stat-description-tiny">Pioneering IP support since 2002</p>
										<div className="stat-decoration"></div>
									</div>
								</div>

								{/* Secondary Floating Accents */}
								<div className="stat-card-secondary top-right">
									<div className="stat-card-mini">
										<span className="mini-value">{isIndia ? 'IPO' : 'GLOBAL'}</span>
										<span className="mini-label">Compliance</span>
									</div>
								</div>
								
								<div className="stat-card-secondary bottom-left">
									<div className="stat-card-mini">
										<span className="mini-value">
											<Counter end={121} duration={2.5} suffix="K+" />
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
								{isIndia ? (
									<>Full-Spectrum IP Protection <span className="italic-serif">Built</span> Around Your Success.</>
								) : (
									<><span className="italic-serif">Protecting</span> Innovation, Strengthening Filings, and Delivering IP Excellence.</>
								)}
							</h2>
							<div className="impact-description">
								<p>
									{isIndia
										? 'From patent prosecution to drawings, trademark filing to litigation support, we deliver end-to-end IP services tailored for the Indian innovation ecosystem — startups, inventors, and institutions alike.'
										: 'We help patent attorneys and IP law firms safeguard their clients\' innovations with strategic clarity. Every drawing, trademark rendering, and filing meets the highest global standards.'}
								</p>
								<p>
									{isIndia
										? 'With 25+ years of specialized expertise, we handle the technical and procedural details so you can focus on building and protecting your innovation.'
										: 'With 25+ years of specialized expertise, we handle the technical and procedural details so you can focus on winning approvals.'}
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
						<h2 className="catalog-main-title">
							{isIndia ? 'Comprehensive IP & Legal Services' : 'Comprehensive Legal Support'}
						</h2>
					</div>

					{isIndia ? (
						<>
							{/* A. Patent Protection */}
							{patentProtectionServices.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">Patent <span className="italic-serif">Protection</span></h3>
										<div className="category-line"></div>
									</div>
									<div className="services-grid-luxury">
										{patentProtectionServices.map((service, idx) => (
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
							)}

							{/* B. Brand & Creative Protection */}
							{brandCreativeProtectionServices.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">Brand & Creative <span className="italic-serif">Protection</span></h3>
										<div className="category-line"></div>
									</div>
									<div className="services-grid-luxury">
										{brandCreativeProtectionServices.map((service, idx) => (
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
							)}

							{/* C. Enforcement & Strategy */}
							{enforcementStrategyServices.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">Enforcement & <span className="italic-serif">Strategy</span></h3>
										<div className="category-line"></div>
									</div>
									<div className="services-grid-luxury">
										{enforcementStrategyServices.map((service, idx) => (
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
							)}

							{/* D. Advisory Services */}
							{advisoryServicesData.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">Advisory <span className="italic-serif">Services</span></h3>
										<div className="category-line"></div>
									</div>
									<div className="services-grid-luxury">
										{advisoryServicesData.map((service, idx) => (
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
							)}
						</>
					) : (
						<>
							{/* Paralegal Solutions Category */}
							{paralegalServices.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">Paralegal <span className="italic-serif">Solutions</span></h3>
										<div className="category-line"></div>
									</div>
									<div className="services-grid-luxury">
										{paralegalServices.map((service, idx) => (
											<ServiceCard
												key={idx}
												image={service.image}
												title={service.title}
												desc={service.description}
												href={`/service/paralegalsolutions/${service.slug}`}
											/>
										))}
									</div>
								</div>
							)}

							{/* IP Solutions Category */}
							{ipServices.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">IP <span className="italic-serif">Solutions</span></h3>
										<div className="category-line"></div>
									</div>
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
							)}

							{/* Custom Solutions Category */}
							{customServices.length > 0 && (
								<div className="service-category-group">
									<div className="category-header">
										<h3 className="category-title">Custom <span className="italic-serif">Solutions</span></h3>
										<div className="category-line"></div>
									</div>
									<div className="services-grid-luxury">
										{customServices.map((service, idx) => (
											<ServiceCard
												key={idx}
												image={service.image}
												title={service.title}
												desc={service.description}
												href={`/service/customsolutions/${service.slug}`}
											/>
										))}
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</section>

			{/* Who We Serve - India only */}
			{isIndia && (
				<section className="who-we-serve-section">
					<div className="who-we-serve-container">
						<div className="luxury-label-group central">
							<span className="gold-line"></span>
							<span className="luxury-label">WHO WE SERVE</span>
							<span className="gold-line"></span>
						</div>
						<h2 className="who-we-serve-title">
							Built for India's <span className="italic-serif">Innovation</span> Ecosystem
						</h2>
						<div className="who-we-serve-grid">
							<div className="who-we-serve-card">
								<h3>Startups</h3>
								<p>Portfolio strategy, fast filing turnarounds, and advisory support that scales with you.</p>
							</div>
							<div className="who-we-serve-card">
								<h3>Inventors & Individual Innovators</h3>
								<p>Guidance from first disclosure to granted patent, without the jargon.</p>
							</div>
							<div className="who-we-serve-card">
								<h3>Educational Institutions</h3>
								<p>Support for research commercialization, student and faculty inventions, and institutional IP policy.</p>
							</div>
						</div>
						<div className="who-we-serve-cta">
							<Button href="/contact">Request a Consultation</Button>
						</div>
					</div>
				</section>
			)}

			<TestimonialSection />
			<FAQSection />
			<Footer />
		</main>
	);
}

export default ServicesPage;
