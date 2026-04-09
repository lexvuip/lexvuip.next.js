'use client';

import './AboutSection.css';
import AboutStats from '../AboutStats';
import AboutReveal from '../../ui/AboutReveal';
import Button from '../../ui/Button';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<section id="about" className="about-section">
			<AboutReveal>
				{/* Luxury Header Group */}
				<div className="about-header-group">
					<div className="about-label-wrapper">
						<span className="about-label-line"></span>
						<span className="about-label">OUR LEGACY & VISION</span>
					</div>
					<h2 className="about-hero-title">
						A Heritage of Precision. <br />
						<span className="italic-serif">Strategically</span> Crafted for Success.
					</h2>
				</div>

				<div className="about-main-composition">
					{/* Left Column: Video & Visuals */}
					<div className="about-visual-column about-left-column">
						<div className="about-video-wrapper">
							<video
								className="about-video-luxury"
								src="/videos/about_video.mp4"
								autoPlay
								loop
								muted
								playsInline
								poster="/videos/about_video_poster.jpg"
								title="LexVuIP Intellectual Property and Paralegal Solutions Overview Video"
							>
								<track
									kind="captions"
									srcLang="en"
									src="/videos/about_video_captions.vtt"
									label="English captions"
									default
								/>
								Your browser does not support the video tag.
							</video>
							<div className="video-overlay-border"></div>
						</div>
						
						{/* Floating Heritage Tag */}
						<div className="heritage-tag">
							<span className="heritage-year">25+</span>
							<span className="heritage-text">Years of Global <br/>Legal Support</span>
						</div>
					</div>

					{/* Right Column: Narrative Content */}
					<div className="about-narrative-column about-content">
						<div className="narrative-inner">
							<h3 className="narrative-subtitle">
								At LexVu, we take the busywork off your plate so you can focus on winning the case and protecting what matters most.
							</h3>
							
							<div className="narrative-body">
								<p>
									With over 25 years supporting attorneys worldwide, we deliver precise patent drawings, compliant filings, and end-to-end paralegal support - fast, accurate, and always aligned with your strategy.
								</p>
								<p>
									Our paralegal services handle the administrative grind - docketing, eFiling, and trial prep - while our IP services cover USPTO, EPO, PCT, and WIPO-compliant utility and design drawings.
								</p>
								<p className="narrative-highlight">
									We believe legal work should be spent on arguments, not admin. Our mission is to ensure your focus stays on the win.
								</p>
							</div>

							<div className="about-cta-wrapper">
								<Button href="/contact" variant="secondary">Request a Consultation</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Immersive Visual Break */}
				<div className="about-immersive-row about-image-row">
					<div className="immersive-container">
<Image
						className="about-image"
						src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
						alt="LexVuIP legal professionals providing patent drawings and paralegal support services in a modern law office"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{ objectFit: 'cover' }}
						priority
					/>
						<div className="image-vignette"></div>
					</div>
				</div>

				{/* Stats Section with Refined Integration */}
				<AboutStats />
			</AboutReveal>
		</section>
	);
}
