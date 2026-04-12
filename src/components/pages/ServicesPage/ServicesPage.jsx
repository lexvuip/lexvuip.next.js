'use client';

import dynamic from 'next/dynamic';
import './ServicesPage.css';
import Footer from '../../layout/Footer';
import Button from '../../ui/Button';
import ServicesHeroParallax from '../../ui/ServicesHeroParallax';
import AboutReveal from '../../ui/AboutReveal';
import ServiceCard from '../../ui/ServiceCard';
import CountUp from 'react-countup';

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
	return (
		<main className="services-page-luxury">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<h1 className="services-hero-title">
						Patent Drawings & Paralegal Services
						<br />
						for <span className="italic">IP Attorneys</span> Worldwide
					</h1>
					<p className="services-hero-description">
						For more than 25 years, we've partnered with intellectual property
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
									We help patent attorneys and IP law firms safeguard their clients' 
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
						image="/assets/stockimages/caseManagement-1920.webp"
						title="Case Management"
						desc="End-to-end management ensuring every milestone is met with precision."
						href="/service/paralegalsolutions/case-docketing-management"
					/>
					<ServiceCard
						image="/assets/stockimages/docketingManagement-1920.webp"
						title="Docketing Management"
						desc="Efficient tracking and management of critical IP deadlines."
						href="/service/paralegalsolutions/case-docketing-management"
					/>
					<ServiceCard
						image="/assets/stockimages/eFillingServices-1920.webp"
						title="E-Filing Services"
						desc="Seamless electronic filing for patents and trademarks."
						href="/service/paralegalsolutions/efiling-compliance"
					/>
					<ServiceCard
						image="/assets/stockimages/contactManagementServices-1920.webp"
						title="Contact Management"
						desc="Organized and secure case information management."
						href="/service/paralegalsolutions/document-management"
					/>
					<ServiceCard
						image="/assets/stockimages/trailPreparation-1920.webp"
						title="Trial Preparation"
						desc="Comprehensive support for trial document and evidence prep."
						href="/service/paralegalsolutions/trial-prep-deposition"
					/>
					<ServiceCard
						image="/assets/stockimages/lawer-1920.webp"
						title="Deposition Coordination"
						desc="Expert logistics and support for global depositions."
						href="/service/paralegalsolutions/trial-prep-deposition"
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
						image="/assets/stockimages/utilitypatentdrawing-1920.webp"
						title="Utility Patent Drawings"
						desc="USPTO, EPO, and WIPO-compliant utility illustrations."
						href="/service/ipsolutions/utility-patent-drawings"
					/>
					<ServiceCard
						image="/assets/stockimages/desingpatentdrawing-1920.webp"
						title="Design Patent Drawings"
						desc="Accurate, visually compelling design patent illustrations."
						href="/service/ipsolutions/design-patent-drawings"
					/>
					<ServiceCard
						image="/assets/stockimages/trademarkdesign-1920.webp"
						title="Trademark Support"
						desc="Comprehensive search, filing, and drawing services."
						href="/service/ipsolutions/trademark-support"
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
						image="/assets/stockimages/desingpatentdrawing-1920.webp"
						title="Tailored Support"
						desc="Custom solutions for unique IP and paralegal needs."
						href="/service/customsolutions/tailored-support"
					/>
					<ServiceCard
						image="/assets/stockimages/utilitypatentdrawing-1920.webp"
						title="Workflow Automation"
						desc="Efficiency-driven automation for legal processes."
						href="/service/customsolutions/workflow-automation"
					/>
					<ServiceCard
						image="/assets/stockimages/customworkflow-1920.webp"
						title="Special Consulting"
						desc="Expert consulting for complex legal projects."
						href="/service/customsolutions/special-consulting"
					/>
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

export default ServicesPage;
