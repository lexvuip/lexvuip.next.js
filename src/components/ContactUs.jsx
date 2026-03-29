'use client'
import React, { useEffect } from 'react';
import '../styles/ContactUs.css';
import FotterSection from '../components/FotterSection';

function ContactUs() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://js-na2.hsforms.net/forms/embed/243609401.js';
		script.defer = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="contact-page-luxury">
			<section className="contact-hero-section">
				<div 
					className="contact-hero-bg" 
					style={{ backgroundImage: `url(/assets/stockimages/lawer.jpg)` }}
				></div>
				<div className="contact-hero-overlay"></div>
				<div className="contact-hero-pattern"></div>
				
				<div className="contact-hero-content">
					<div className="hero-label">
						<span>Get in Touch</span>
					</div>
					
					<div className="animate-hero-text">
						<h1 className="contact-hero-title">
							Let's Discuss Your<br />
							<span className="italic-serif">Legal Support Needs</span>
						</h1>
						
						<p className="contact-hero-subtitle">
							Experience bespoke intellectual property solutions and paralegal services designed for the modern legal landscape.
						</p>
					</div>
				</div>

				<div className="hero-scroll-indicator">
					<span className="scroll-text">Scroll</span>
					<div className="scroll-line"></div>
				</div>
			</section>

			<section className="contact-main-section">
				<div className="contact-main-container">
					<div className="contact-form-card">
						<div className="form-header">
							<h2>Start a <span className="italic-serif">Conversation</span></h2>
							<p className="form-intro">
								Share your requirements with our expert team. We pride ourselves on providing precise, sophisticated legal support tailored to your unique needs.
							</p>
						</div>
						<div 
							className="hs-form-frame" 
							data-region="na2" 
							data-form-id="5e9773c3-00d2-4a9e-959c-0a2d1e4022aa" 
							data-portal-id="243609401">
						</div>
					</div>

					<div className="contact-info-section">
						<div className="info-header">
							<div className="info-label">Direct Reach</div>
							<h2>Global <span className="italic-serif">Headquarters</span></h2>
						</div>
						
						<div className="contact-info-cards">
							<div className="contact-info-card">
								<div className="info-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div className="info-content">
									<span className="info-label-small">Location</span>
									<p>6260 139th AVE.<br />NE 66 Redmond, WA 98052</p>
								</div>
							</div>

							<div className="contact-info-card">
								<div className="info-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
									</svg>
								</div>
								<div className="info-content">
									<span className="info-label-small">Telephone</span>
									<a href="tel:+18562142512" className="info-link">856-214-2512</a>
								</div>
							</div>

							<div className="contact-info-card">
								<div className="info-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
										<polyline points="22,6 12,13 2,6" />
									</svg>
								</div>
								<div className="info-content">
									<span className="info-label-small">Electronic Mail</span>
									<a href="mailto:inbox@lexvuip.com?subject=New Inquiry" className="info-link">
										inbox@lexvuip.com
									</a>
								</div>
							</div>
						</div>

						<div className="contact-hours-card">
							<div className="hours-header">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
									<circle cx="12" cy="12" r="10" />
									<polyline points="12 6 12 12 16 14" />
								</svg>
								<span>Availability</span>
							</div>
							<div className="hours-grid">
								<div className="hours-row">
									<span className="day">Monday — Friday</span>
									<span className="time">09:00 — 18:00 PST</span>
								</div>
								<div className="hours-row">
									<span className="day">Saturday — Sunday</span>
									<span className="time closed">By Appointment Only</span>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="contact-cta-section">
				<div className="cta-content">
					<h2>Prefer a Direct Conversation?</h2>
					<p>Schedule a consultation with our team to discuss your specific requirements.</p>
					<a href="tel:+18562142512" className="cta-phone-btn">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
						</svg>
						Call Us Now
					</a>
				</div>
			</section>

			<FotterSection />
		</div>
	);
}

export default ContactUs;