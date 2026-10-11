'use client'
import React, { useEffect, useState } from 'react';
import './ContactPage.css';
import Footer from '../../layout/Footer';
import BookingSection from './BookingSection';
import ContactForm from './ContactForm';

function ContactPage() {
	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const isIndia = region === 'IN';
	const whatsappNumber = isIndia ? '919110726310' : '18562142512';
	const whatsappMessage = isIndia
		? 'Hi LexVuIP India, I would like to learn more about your IP and paralegal services.'
		: 'Hi LexVu, I would like to learn more about your IP and paralegal services.';
	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		if (!isFormOpen) return undefined;
		document.body.style.overflow = 'hidden';
		const handleKeyDown = event => {
			if (event.key === 'Escape') setIsFormOpen(false);
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isFormOpen]);

	function handleOverlayClick(event) {
		if (event.target === event.currentTarget) setIsFormOpen(false);
	}

	return (
		<div className="contact-page-luxury">
			<section className="contact-hero-section">
				<div className="contact-hero-content">
					<div className="hero-label">
						<span>Get in Touch</span>
					</div>

					<div className="animate-hero-text">
						<h1 className="contact-hero-title">
							Contact Our<br />
							<span className="italic-serif">IP &amp; Legal Support Team</span>
						</h1>

						<p className="contact-hero-subtitle">
							Experience bespoke intellectual property solutions and paralegal services designed for the modern legal landscape.
						</p>

						<div className="contact-hero-actions">
							<button type="button" className="contact-hero-btn" onClick={() => setIsFormOpen(true)}>
								Contact Us
							</button>
							<a
								href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-hero-phone"
							>
								<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
								</svg>
								{isIndia ? 'WhatsApp +91 91107 26310' : 'WhatsApp 856-214-2512'}
							</a>
							<a href={isIndia ? 'tel:+919110726310' : 'tel:+18562142512'} className="contact-hero-phone">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								{isIndia ? 'Call +91 91107 26310' : 'Call 856-214-2512'}
							</a>
						</div>
					</div>
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
							<button type="button" className="contact-us-btn" onClick={() => setIsFormOpen(true)}>
								Contact Us
							</button>
						</div>

						{isFormOpen && (
							<div className="contact-modal-overlay" onClick={handleOverlayClick} role="presentation">
								<div className="contact-modal" role="dialog" aria-modal="true" aria-label="Contact us">
									<button
										type="button"
										className="contact-modal-close"
										onClick={() => setIsFormOpen(false)}
										aria-label="Close"
									>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
											<line x1="18" y1="6" x2="6" y2="18" />
											<line x1="6" y1="6" x2="18" y2="18" />
										</svg>
									</button>
									<ContactForm />
								</div>
							</div>
						)}
					</div>

					<div className="contact-info-section">
						<div className="info-header">
							<div className="info-label">Direct Reach</div>
							<h2>{isIndia ? 'India ' : 'Global '}<span className="italic-serif">Headquarters</span></h2>
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
									{isIndia ? (
										<a
											href="https://www.google.com/maps/place/LEXVUIP/@17.4221343,78.4998628,17z/data=!3m1!4b1!4m6!3m5!1s0x8ecb21e5e200899d:0x5e39f5aebc5ba305!8m2!3d17.4221343!4d78.4998628"
											target="_blank"
											rel="noopener noreferrer"
											className="info-link"
										>
											6-4-455/16/a/1, Krishna Nagar Colony,<br />
											Balaji residency, Bholakpur, Bhoiguda,<br />
											Hyderabad, Secunderabad,<br />
											Telangana 500080
										</a>
									) : (
										<p>6260 139th AVE.<br />NE 66 Redmond, WA 98052</p>
									)}
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
									<a href={isIndia ? 'tel:+919110726310' : 'tel:+18562142512'} className="info-link">
										{isIndia ? '+91 91107 26310' : '856-214-2512'}
									</a>
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

			<BookingSection />

			<section className="contact-cta-section">
				<div className="cta-content">
					<h2>Prefer a Direct Conversation?</h2>
					<p>Schedule a consultation with our team to discuss your specific requirements.</p>
					<a href={isIndia ? 'tel:+919110726310' : 'tel:+18562142512'} className="cta-phone-btn">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
						</svg>
						Call Us Now
					</a>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default ContactPage;
