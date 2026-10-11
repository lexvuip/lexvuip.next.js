'use client'
import React, { useEffect, useRef, useState } from 'react';
import './ContactPage.css';
import Footer from '../../layout/Footer';
import BookingSection from './BookingSection';
import ContactForm from './ContactForm';
import BookingModal from './BookingModal';

const REGION = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';

const REGION_CONFIG = {
	IN: {
		embedUrl: 'https://maps.google.com/maps?q=17.4221343,78.4998628&z=17&output=embed',
		directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=17.4221343,78.4998628',
		mapsUrl: 'https://www.google.com/maps/search/?api=1&query=17.4221343,78.4998628',
		locationText:
			'6-4-455/16/a/1, Krishna Nagar Colony, Balaji Residency, Bholakpur, Bhoiguda, Hyderabad, Telangana 500080',
		dirTitle: 'LexVuIP · Bholakpur',
		dirSubtitle: 'Hyderabad, Telangana 500080',
		timeZone: 'Asia/Kolkata',
		phoneDisplay: '+91 91107 26310',
		phoneRaw: '+919110726310',
		hoursZone: 'IST'
	},
	GLOBAL: {
		embedUrl: 'https://maps.google.com/maps?q=6260%20139th%20Ave%20NE%2C%20Redmond%2C%20WA%2098052&z=15&output=embed',
		directionsUrl:
			'https://www.google.com/maps/dir/?api=1&destination=6260%20139th%20Ave%20NE%2C%20Redmond%2C%20WA%2098052',
		mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6260%20139th%20Ave%20NE%2C%20Redmond%2C%20WA%2098052',
		locationText: '6260 139th Ave NE 66, Redmond, WA 98052',
		dirTitle: 'LexVuIP · Redmond',
		dirSubtitle: 'Redmond, WA 98052',
		timeZone: 'America/Los_Angeles',
		phoneDisplay: '856-214-2512',
		phoneRaw: '8562142512',
		hoursZone: 'PST'
	}
};

const TOPICS = ['Trademark', 'Patent', 'Copyright', 'Legal notice', 'Something else'];

const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function ContactPage() {
	const isIndia = REGION === 'IN';
	const config = REGION_CONFIG[REGION];
	const telLink = isIndia ? 'tel:+919110726310' : 'tel:+18562142512';
	const whatsappNumber = isIndia ? '919110726310' : '18562142512';
	const whatsappMessage = isIndia
		? 'Hi LexVuIP India, I would like to learn more about your IP and paralegal services.'
		: 'Hi LexVu, I would like to learn more about your IP and paralegal services.';
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isBookingOpen, setIsBookingOpen] = useState(false);
	const [pickedOption, setPickedOption] = useState(null);
	const [topic, setTopic] = useState('Trademark');
	const [enquiry, setEnquiry] = useState({ name: '', phone: '', message: '' });
	const [copied, setCopied] = useState(null);
	const [openStatus, setOpenStatus] = useState(null);
	const [todayIndex, setTodayIndex] = useState(null);
	const nameRef = useRef(null);

	const chipClass = option => `contact-hero-chip${pickedOption === option ? ' on' : ''}`;
	const cardClass = (option, extra = '') =>
		`contact-option-card ${extra}${pickedOption === option ? ' pick' : ''}`.trim();

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

	useEffect(() => {
		const elements = document.querySelectorAll('.contact-main-rv');
		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							entry.target.classList.add('in');
							observer.unobserve(entry.target);
						}
					});
				},
				{ threshold: 0.1 }
			);
			elements.forEach((element, index) => {
				element.style.transitionDelay = `${index * 120}ms`;
				observer.observe(element);
			});
		} else {
			elements.forEach(element => element.classList.add('in'));
		}

		const parts = new Intl.DateTimeFormat('en-US', {
			timeZone: REGION_CONFIG[REGION].timeZone,
			weekday: 'short',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false
		}).formatToParts(new Date());
		const getPart = type => parts.filter(part => part.type === type)[0].value;
		const weekdayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[getPart('weekday')];
		const minutes = (parseInt(getPart('hour'), 10) % 24) * 60 + parseInt(getPart('minute'), 10);
		const isWeekday = weekdayIndex >= 1 && weekdayIndex <= 5;
		const isOpen = isWeekday && minutes >= 540 && minutes < 1080;
		setTodayIndex(weekdayIndex);
		setOpenStatus({
			isOpen,
			text: isOpen
				? 'Open now · until 18:00'
				: isWeekday && minutes < 540
					? 'Opens today at 09:00'
					: 'Closed · book a slot'
		});
	}, []);

	function handleWhatsAppSend() {
		const name = enquiry.name.trim();
		if (!name) {
			nameRef.current?.focus();
			return;
		}
		const message =
			`Hi ${isIndia ? 'LexVuIP India' : 'LexVu'}, I'm ${name}. I need help with: ${topic}.` +
			(enquiry.message.trim() ? ` ${enquiry.message.trim()}` : '') +
			(enquiry.phone.trim() ? ` Call me on ${enquiry.phone.trim()}.` : '');
		window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
	}

	async function handleCopy(value, key) {
		try {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				await navigator.clipboard.writeText(value);
			} else {
				const helper = document.createElement('textarea');
				helper.value = value;
				document.body.appendChild(helper);
				helper.select();
				document.execCommand('copy');
				helper.remove();
			}
			setCopied(key);
			setTimeout(() => setCopied(prev => (prev === key ? null : prev)), 1500);
		} catch {
			return;
		}
	}

	function dayClass(index) {
		const classes = ['contact-main-day'];
		if (index >= 1 && index <= 5) classes.push('w');
		if (todayIndex === index) classes.push('td');
		return classes.join(' ');
	}

	return (
		<div className="contact-page-luxury">
			<section className="contact-hero-section">
				<div className="contact-hero-content">
					<div className="contact-hero-intro">
						<div className="hero-label">
							<span>Get in Touch</span>
						</div>

						<div className="animate-hero-text">
							<h1 className="contact-hero-title">
								Contact Our{' '}
								<span className="italic-serif">IP &amp; Legal Support Team</span>
							</h1>

							<p className="contact-hero-subtitle">
								{isIndia
									? 'Trademark, patent, copyright and paralegal support across India. Pick the option that fits your situation. Every route reaches the same expert team.'
									: 'Trademark, patent, copyright and paralegal support for your cases. Pick the option that fits your situation. Every route reaches the same expert team.'}
							</p>
						</div>

						<div className="contact-hero-helper">
							<p>Not sure which to choose? I need to&hellip;</p>
							<div className="contact-hero-chips" role="group" aria-label="Find the best contact option">
								<button type="button" className={chipClass('call')} onClick={() => setPickedOption('call')}>
									Handle something urgent
								</button>
								<button type="button" className={chipClass('whatsapp')} onClick={() => setPickedOption('whatsapp')}>
									Ask a quick question
								</button>
								<button type="button" className={chipClass('book')} onClick={() => setPickedOption('book')}>
									Plan a filing or strategy
								</button>
							</div>
						</div>

						<div className="contact-hero-trust">
							<span>Free first guidance</span>
							<span>Confidential</span>
							<span>{isIndia ? 'Pan-India service' : 'Nationwide service'}</span>
						</div>
					</div>

					<div className="contact-hero-cards">
						<a href={isIndia ? 'tel:+919110726310' : 'tel:+18562142512'} className={cardClass('call')}>
							<span className="contact-option-shine" aria-hidden="true" />
							<div className="contact-option-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</div>
							<div>
								<div className="contact-option-for">Urgent? Call now</div>
								<h2>Speak to an IP expert</h2>
								<p>Notices, hearing dates, objections and deadlines.</p>
							</div>
							<span className="contact-option-go">{isIndia ? 'Call +91 91107 26310' : 'Call 856-214-2512'}</span>
						</a>

						<a
							href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
							target="_blank"
							rel="noopener noreferrer"
							className={cardClass('whatsapp', 'alt')}
						>
							<span className="contact-option-shine" aria-hidden="true" />
							<div className="contact-option-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="currentColor">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
								</svg>
							</div>
							<div>
								<div className="contact-option-for">Quick question? Message us</div>
								<h2>Chat on WhatsApp</h2>
								<p>Trademark checks, pricing, or sharing documents.</p>
							</div>
							<span className="contact-option-go">WhatsApp Us</span>
						</a>

						<button type="button" onClick={() => setIsBookingOpen(true)} className={cardClass('book', 'popular')}>
							<span className="contact-option-shine" aria-hidden="true" />
							<span className="contact-option-badge">Most Popular</span>
							<div className="contact-option-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
									<rect x="3" y="4" width="18" height="18" rx="2" />
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<line x1="3" y1="10" x2="21" y2="10" />
								</svg>
							</div>
							<div>
								<div className="contact-option-for">Planning ahead? Book a slot</div>
								<h2>Book a consultation</h2>
								<p>New filings, brand protection and IP strategy.</p>
							</div>
							<span className="contact-option-go">Book Appointment</span>
						</button>
					</div>
				</div>
			</section>

			<section className="contact-main-section">
				<div className="contact-main-wrap">
					<div className="contact-main-top">
						<div className="contact-main-form contact-main-rv">
							<div className="contact-main-eye">Get in Touch</div>
							<h2 className="contact-main-title">
								Start a <span className="italic-serif">Conversation</span>
							</h2>
							<p className="contact-main-lead">
								Share your requirements with our expert team. Tell us what you need and we&apos;ll reply
								with the right next step, whether it&apos;s a trademark, patent, copyright or a legal
								notice.
							</p>

							<p className="contact-main-q" id="contact-topic-label">I need help with</p>
							<div className="contact-main-chips" role="group" aria-labelledby="contact-topic-label">
								{TOPICS.map(topicOption => (
									<button
										key={topicOption}
										type="button"
										className={`contact-main-chip${topic === topicOption ? ' on' : ''}`}
										onClick={() => setTopic(topicOption)}
									>
										{topicOption}
									</button>
								))}
							</div>

							<div className="contact-main-fields">
								<input
									type="text"
									placeholder="Your name"
									autoComplete="name"
									maxLength={120}
									ref={nameRef}
									value={enquiry.name}
									onChange={event => setEnquiry(prev => ({ ...prev, name: event.target.value }))}
								/>
								<input
									type="tel"
									placeholder="Phone (optional)"
									autoComplete="tel"
									maxLength={20}
									value={enquiry.phone}
									onChange={event => setEnquiry(prev => ({ ...prev, phone: event.target.value }))}
								/>
								<textarea
									placeholder="Tell us a little more (optional)"
									maxLength={1000}
									value={enquiry.message}
									onChange={event => setEnquiry(prev => ({ ...prev, message: event.target.value }))}
								/>
							</div>

							<div className="contact-main-cta">
								<button type="button" className="contact-main-pill" onClick={handleWhatsAppSend}>
									Send on WhatsApp <span>&rarr;</span>
								</button>
								<p className="contact-main-or">
									or email <a href="mailto:inbox@lexvuip.com">inbox@lexvuip.com</a> ·{' '}
									<button type="button" className="contact-main-form-link" onClick={() => setIsFormOpen(true)}>
										detailed enquiry
									</button>
								</p>
							</div>
						</div>

						<div className="contact-main-map contact-main-rv">
							<svg
								className="contact-main-mapart"
								viewBox="0 0 700 470"
								preserveAspectRatio="xMidYMid slice"
								aria-hidden="true"
							>
								<rect width="700" height="470" fill="#eef0e6" />
								<g stroke="#fff" strokeWidth="14" fill="none">
									<path d="M0 150H700M0 320H700M200 0V470M480 0V470" />
								</g>
								<g stroke="#fff" strokeWidth="7" fill="none">
									<path d="M0 70H700M0 235H700M0 400H700M90 0V470M340 0V470M600 0V470" />
								</g>
								<rect x="210" y="170" width="120" height="110" fill="#dde6cf" />
								<g transform="translate(410,230)">
									<circle className="contact-main-ring" r="16" fill="#c9a227" opacity="0.5" />
									<g className="contact-main-pin">
										<path d="M0 0c-14-18-20-26-20-38a20 20 0 1 1 40 0c0 12-6 20-20 38z" fill="#0a1628" />
										<circle cy="-38" r="8" fill="#e6d190" />
									</g>
								</g>
							</svg>
							<iframe
								title="LexVuIP location on Google Maps"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								src={config.embedUrl}
							/>
							<div className={`contact-main-status${openStatus?.isOpen ? ' on' : ''}`}>
								{openStatus ? openStatus.text : 'Checking…'}
							</div>
							<div className="contact-main-dir">
								<div className="contact-main-dir-title">
									<b>{config.dirTitle}</b>
									<small>{config.dirSubtitle}</small>
								</div>
								<a
									className="contact-main-pill contact-main-pill-sm"
									href={config.directionsUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Directions <span>&rarr;</span>
								</a>
							</div>
						</div>
					</div>

					<div className="contact-main-info contact-main-rv">
						<div className="contact-main-it">
							<svg
								className="contact-main-ic"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
								<circle cx="12" cy="9.5" r="2.5" />
							</svg>
							<span className="contact-main-lb">Location</span>
							<span className="contact-main-big">{config.locationText}</span>
							<a className="contact-main-act" href={config.mapsUrl} target="_blank" rel="noopener noreferrer">
								Open in Google Maps &rarr;
							</a>
						</div>

						<div className="contact-main-it">
							<svg
								className="contact-main-ic"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
							</svg>
							<span className="contact-main-lb">Telephone</span>
							<a className="contact-main-big" href={telLink}>{config.phoneDisplay}</a>
							<div className="contact-main-acts">
								<a className="contact-main-act" href={telLink}>Call</a>
								<a
									className="contact-main-act"
									href={`https://wa.me/${whatsappNumber}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									WhatsApp
								</a>
								<button type="button" className="contact-main-act" onClick={() => handleCopy(config.phoneRaw, 'phone')}>
									{copied === 'phone' ? 'Copied ✓' : 'Copy'}
								</button>
							</div>
						</div>

						<div className="contact-main-it">
							<svg
								className="contact-main-ic"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect x="3" y="5" width="18" height="14" rx="2" />
								<path d="M3 7l9 6 9-6" />
							</svg>
							<span className="contact-main-lb">Electronic Mail</span>
							<a className="contact-main-big" href="mailto:inbox@lexvuip.com">inbox@lexvuip.com</a>
							<div className="contact-main-acts">
								<a className="contact-main-act" href="mailto:inbox@lexvuip.com">Write to us</a>
								<button type="button" className="contact-main-act" onClick={() => handleCopy('inbox@lexvuip.com', 'email')}>
									{copied === 'email' ? 'Copied ✓' : 'Copy'}
								</button>
							</div>
						</div>

						<div className="contact-main-it">
							<svg
								className="contact-main-ic"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="9" />
								<path d="M12 7v5l3 2" />
							</svg>
							<span className="contact-main-lb">Availability</span>
							<div className="contact-main-days" aria-hidden="true">
								{DAY_LABELS.map((label, index) => (
									<span key={`${label}-${index}`} className={dayClass(index)}>{label}</span>
								))}
							</div>
							<p className="contact-main-hr">
								<b>Mon — Fri</b>&nbsp;&nbsp;09:00 — 18:00 {config.hoursZone}
								<br />
								<b>Sat — Sun</b>&nbsp;&nbsp;By appointment only
							</p>
						</div>
					</div>
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
			</section>

			<BookingSection />

			<BookingModal open={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

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
