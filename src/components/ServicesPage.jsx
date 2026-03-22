import React from 'react';
import '../styles/ServicesPage.css';
import FotterSection from './FotterSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import AboutContactButton from './AboutContactButton';
import ServicesHeroParallax from './ServicesHeroParallax';
import Image from 'next/image';

export default function ServicesPage() {
	return (
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
				<AboutContactButton className="services-hero-btn" text={<>Get In Touch <span className="arrow">→</span></>} />
			</div>
			
            <ServicesHeroParallax />

			{/* New Section: Stats and Description */}
			<section className="services-stats-section">
				<div className="services-stats-content">
					<div className="services-stats-left">
						<h2 className="services-stats-title">
							<span className="italic">Protecting</span> Innovation,
							Strengthening Fillings, and
							<br />
							Delivering IP Excellence for Over Two{' '}
							<span className="italic">Decades</span>
						</h2>
						<AboutContactButton className="services-hero-btn stats-btn" text={<>Get In Touch <span className="arrow">→</span></>} />
					</div>
					<div className="services-stats-right">
						<p>
							We help patent attorneys, trademark counsel, and IP law firms
							worldwide safeguard their clients’ innovations with precision,
							compliance, and strategic clarity. Whatever the jurisdiction, we
							stand by your side—ensuring every patent drawing, trademark
							rendering, and IP filing meets the highest global standards.
						</p>
						<p>
							With over 25 years of specialized IP expertise, we provide
							attorneys with accuracy, confidence, and tailored IP support—so
							you can focus on strategy while we handle the technical and
							procedural details that win approvals.
						</p>
					</div>
				</div>

				{/* New Legal Services Section */}
				<section className="legal-services-section">
					<div className="legal-services-header">
						<div className="legal-services-badge">OUR LEGAL SERVICES</div>
						<h2 className="legal-services-title">
							Meet our <span className="italic">Services</span>
						</h2>
					</div>

					{/* Paralegal Solutions */}
					<h3 className="legal-services-group-title">
						Paralegal <span className="italic">Solutions</span>
					</h3>
					<div className="legal-services-cards-row services-leadership-style">
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/caseManagement.jpg"
								alt="case Management"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Case Management</h4>
								<p className="legal-service-desc">
									We manage your case end-to-end, keeping everything on track
									and you informed.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/docketingManagement.jpg"
								alt="Docketing Management"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Docketing Management</h4>
								<p className="legal-service-desc">
									Efficient tracking and management of all IP deadlines and
									filings.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/eFillingServices.jpg"
								alt="E-Filing Services"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">E-Filing Services</h4>
								<p className="legal-service-desc">
									Seamless electronic filing for patents, trademarks, and legal
									docs.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/contactManagementServices.jpg"
								alt="Contact Management Services"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">
									Contact Management Services
								</h4>
								<p className="legal-service-desc">
									Organized, up-to-date contact and case information management.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/trailPreparation.jpg"
								alt="Trial Preparation"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Trial Preparation</h4>
								<p className="legal-service-desc">
									Comprehensive support for trial document and evidence prep.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/lawer.jpg"
								alt="Deposition Coordination"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Deposition Coordination</h4>
								<p className="legal-service-desc">
									Scheduling, logistics, and support for dpositions.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/complianceSupport.jpg"
								alt="Compliance Support"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Compliance Support</h4>
								<p className="legal-service-desc">
									Ensuring regulatory and procedural compliance for all filings.
								</p>
							</div>
						</div>
					</div>

					{/* IP Solutions */}
					<h3 className="legal-services-group-title">
						IP <span className="italic">Solutions</span>
					</h3>
					<div className="legal-services-cards-row services-leadership-style">
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/utilitypatentdrawing.jpg"
								alt="Utility Patent Drawings"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Utility Patent Drawings</h4>
								<p className="legal-service-desc">
									Professional, compliant utility patent drawings for global
									filings.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/desingpatentdrawing.jpg"
								alt="Design Patent Drawings"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Design Patent Drawings</h4>
								<p className="legal-service-desc">
									Accurate, visually compelling design patent illustrations.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/trademarkdesign.jpg"
								alt="Trademark Support"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Trademark Support</h4>
								<p className="legal-service-desc">
									Comprehensive trademark search, filing, and drawing services.
								</p>
							</div>
						</div>
					</div>

					{/* Custom Solutions */}
					<h3 className="legal-services-group-title">
						Custom <span className="italic">Solutions</span>
					</h3>
					<div className="legal-services-cards-row services-leadership-style">
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/desingpatentdrawing.jpg"
								alt="Custom Solutions"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">
									Tailored IP & Paralegal Support
								</h4>
								<p className="legal-service-desc">
									Custom solutions for unique IP and paralegal needs.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/utilitypatentdrawing.jpg"
								alt="Workflow Automation"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">Workflow Automation</h4>
								<p className="legal-service-desc">
									Automate repetitive legal and IP processes for efficiency.
								</p>
							</div>
						</div>
						<div className="legal-service-card">
						<div className="legal-service-image-container">
							<Image
								src="/assets/stockimages/customworkflow.jpg"
								alt="Special Projects & Consulting"
								fill
								className="legal-service-image"
								style={{ objectFit: 'cover' }}
							/>
						</div>
							<div className="legal-service-content">
								<h4 className="legal-service-title">
									Special Projects & Consulting
								</h4>
								<p className="legal-service-desc">
									Expert consulting and project support for legal teams.
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>
			<TestimonialSection />
			<FAQSection />
			<FotterSection />
		</section>
	);
}
