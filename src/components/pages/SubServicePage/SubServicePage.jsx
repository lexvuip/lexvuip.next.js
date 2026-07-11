'use client';

import './SubServicePage.css';
import Footer from '../../layout/Footer';
import TestimonialSection from '../../sections/TestimonialSection';
import FAQSection from '../../sections/FAQSection';
import AboutStats from '../../sections/AboutStats';
import AboutReveal from '../../ui/AboutReveal';
import Button from '../../ui/Button';
import ServicesHeroParallax from '../../ui/ServicesHeroParallax';
import Breadcrumbs from '../../ui/Breadcrumbs';
import Counter from '../../ui/Counter';

const categoryConfigs = {
	ip: {
		svgType: 'hexagon',
		statLabel: 'PRECISION FIRST',
		statValue: 99,
		statSuffix: '%',
		statUnit: 'ACCURACY',
		statDesc: 'Flawless compliance for 25+ years',
		miniCardTop: { value: 'USPTO', label: 'Compliant' },
		miniCardBottom: { value: 'WIPO', label: 'Global' }
	},
	paralegal: {
		svgType: 'crosshairs',
		statLabel: 'OPERATIONAL EXCELLENCE',
		statValue: 121,
		statSuffix: 'K+',
		statUnit: 'PROJECTS',
		statDesc: 'Seamless legal support delivered globally',
		miniCardTop: { value: '25+', label: 'Years' },
		miniCardBottom: { value: 'GLOBAL', label: 'Support' }
	},
	custom: {
		svgType: 'grid',
		statLabel: 'TAILORED INTEGRATION',
		statValue: 100,
		statSuffix: '%',
		statUnit: 'ADAPTIVE',
		statDesc: 'Bespoke workflows for premier law firms',
		miniCardTop: { value: 'ACTIVE', label: 'Collaboration' },
		miniCardBottom: { value: 'FAST', label: 'Turnaround' }
	}
};

const BlueprintSVG = ({ type }) => {
	if (type === 'hexagon') {
		return (
			<svg viewBox="0 0 400 400" className="blueprint-svg">
				<polygon points="200,60 340,140 340,260 200,340 60,260 60,140" className="blueprint-shape" />
				<line x1="200" y1="60" x2="200" y2="340" className="blueprint-line" />
				<line x1="60" y1="200" x2="340" y2="200" className="blueprint-line" />
				<circle cx="200" cy="200" r="80" className="blueprint-circle" />
				<circle cx="200" cy="60" r="4" fill="var(--color-gold)" opacity="0.6" />
				<circle cx="340" cy="140" r="4" fill="var(--color-gold)" opacity="0.6" />
				<circle cx="340" cy="260" r="4" fill="var(--color-gold)" opacity="0.6" />
				<circle cx="200" cy="340" r="4" fill="var(--color-gold)" opacity="0.6" />
				<circle cx="60" cy="260" r="4" fill="var(--color-gold)" opacity="0.6" />
				<circle cx="60" cy="140" r="4" fill="var(--color-gold)" opacity="0.6" />
			</svg>
		);
	}
	
	if (type === 'crosshairs') {
		return (
			<svg viewBox="0 0 400 400" className="blueprint-svg">
				<circle cx="200" cy="200" r="140" className="blueprint-circle" />
				<circle cx="200" cy="200" r="90" className="blueprint-circle" />
				<circle cx="200" cy="200" r="40" className="blueprint-circle" />
				<line x1="200" y1="30" x2="200" y2="370" className="blueprint-line" />
				<line x1="30" y1="200" x2="370" y2="200" className="blueprint-line" />
				<line x1="80" y1="80" x2="320" y2="320" className="blueprint-line-diagonal" />
				<line x1="320" y1="80" x2="80" y2="320" className="blueprint-line-diagonal" />
				<circle cx="200" cy="200" r="5" fill="var(--color-gold)" />
				<circle cx="200" cy="60" r="3" fill="var(--color-gold)" opacity="0.5" />
				<circle cx="200" cy="340" r="3" fill="var(--color-gold)" opacity="0.5" />
				<circle cx="60" cy="200" r="3" fill="var(--color-gold)" opacity="0.5" />
				<circle cx="340" cy="200" r="3" fill="var(--color-gold)" opacity="0.5" />
			</svg>
		);
	}
	
	return (
		<svg viewBox="0 0 400 400" className="blueprint-svg">
			<rect x="80" y="80" width="240" height="240" className="blueprint-shape" />
			<rect x="120" y="120" width="160" height="160" className="blueprint-shape" />
			<rect x="160" y="160" width="80" height="80" className="blueprint-shape" />
			<line x1="60" y1="200" x2="340" y2="200" className="blueprint-line" />
			<line x1="200" y1="60" x2="200" y2="340" className="blueprint-line" />
			<line x1="80" y1="80" x2="320" y2="320" className="blueprint-line-diagonal" />
			<line x1="320" y1="80" x2="80" y2="320" className="blueprint-line-diagonal" />
			<circle cx="200" cy="200" r="3" fill="var(--color-gold)" />
			<circle cx="80" cy="80" r="3" fill="var(--color-gold)" opacity="0.5" />
			<circle cx="320" cy="80" r="3" fill="var(--color-gold)" opacity="0.5" />
			<circle cx="80" cy="320" r="3" fill="var(--color-gold)" opacity="0.5" />
			<circle cx="320" cy="320" r="3" fill="var(--color-gold)" opacity="0.5" />
		</svg>
	);
};

function SubServicePage({ service, category = 'ip' }) {
	if (!service) return null;

	const { title, description, image, content } = service;
	const config = categoryConfigs[category] || categoryConfigs.ip;

	return (
		<main className="services-page-luxury sub-service-page">
			{/* Hero Section */}
			<section className="services-hero-section">
				<div className="services-hero-content">
					<Breadcrumbs />
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
				<ServicesHeroParallax imageSrc={image} alt={`${title} - LexVuIP professional service illustration`} />
			</section>

			{/* Impact Section / Value Prop */}
			<section className="services-impact-section">
				<AboutReveal>
					<div className="impact-container">
						<div className="impact-visual-column about-left-column">
							<div className="impact-visual-canvas">
								<div className="impact-grid-overlay"></div>
								<div className="blueprint-visual">
									<BlueprintSVG type={config.svgType} />
								</div>
								<div className="stat-card-primary">
									<div className="stat-card-glass">
										<div className="stat-header">
											<span className="gold-dot"></span>
											<span className="stat-label-tiny">{config.statLabel}</span>
										</div>
										<div className="stat-value-container">
											<Counter end={config.statValue} duration={3} className="stat-value" suffix={config.statSuffix} />
											<span className="stat-unit">{config.statUnit}</span>
										</div>
										<p className="stat-description-tiny">{config.statDesc}</p>
									</div>
								</div>
								<div className="stat-card-secondary top-right">
									<div className="stat-card-mini">
										<span className="mini-value">{config.miniCardTop.value}</span>
										<span className="mini-label">{config.miniCardTop.label}</span>
									</div>
								</div>
								<div className="stat-card-secondary bottom-left">
									<div className="stat-card-mini">
										<span className="mini-value">{config.miniCardBottom.value}</span>
										<span className="mini-label">{config.miniCardBottom.label}</span>
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