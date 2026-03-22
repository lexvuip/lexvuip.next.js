import React from 'react';
import '../styles/AboutSection.css';
import AboutStats from './AboutStats';
import AboutReveal from './AboutReveal';
import AboutContactButton from './AboutContactButton';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<section id="about" className="about-section">
			<AboutReveal>
				<div className="about-container">
					<div className="about-left-column">
						<div className="our-journey-header">
							<div className="our-journey-arrow-container">
								<span className="our-journey-arrow"></span>
								<span className="our-journey-arrow"></span>
								<span className="our-journey-arrow"></span>
							</div>
							<h2 className="our-journey-title-small">ABOUT</h2>
						</div>
						<div className="about-video-container">
							<video
								className="about-video"
								src="/videos/about_video.mp4"
								autoPlay
								loop
								muted
								playsInline
								controls
							>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					<div className="about-right-column">
						<div className="about-content">
							<h2 className="about-title">
								At LexVu, we take the busywork off your plate so you can focus on winning the case and protecting what matters most.
							</h2>
							<p className="about-description">
								With over 25 years supporting attorneys worldwide, we deliver precise patent drawings, compliant filings, and end-to-end paralegal support - fast, accurate, and always aligned with your strategy.
							</p>
							<p className="about-description">
								Our paralegal services handle the administrative grind - docketing, eFiling, trial prep, client coordination. Our IP services cover every stage of patent and trademark support - from precise USPTO, EPO, PCT, and WIPO-compliant utility and design drawings to accurate, on-demand revisions, so you can keep your energy where it matters most: building strategies and winning cases.
							</p>
							<p className="about-description">
								Whether you're protecting an invention, prosecuting a trademark, or preparing for trial, we deliver clarity, compliance, and confidence - without you having to chase vendors, reformat documents, or worry about deadlines.
							</p>
							<p className="about-description">
								At LexVuIP, we believe legal work should be spent on arguments, not admin. Our job is to make sure your focus stays on the win.
							</p>
							<div className="about-actions">
								<AboutContactButton
									className="about-contact-btn"
									text="Get In Touch"
								/>
							</div>
						</div>
					</div>
				</div>
			</AboutReveal>
			<div className="about-divider" />
			<div className="about-image-row">
				<Image
					className="about-image"
					src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
					alt="Drawing on tablet"
                    fill
                    sizes="80vw"
                    style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className="about-divider" />
			<AboutStats />
		</section>
	);
}
