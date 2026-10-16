'use client'
import React, { useState } from 'react';
import './ContactForm.css';

const INITIAL_FORM = { firstname: '', lastname: '', email: '', phone: '', message: '' };

function ContactForm() {
	const [form, setForm] = useState(INITIAL_FORM);
	const [honeypot, setHoneypot] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [submitted, setSubmitted] = useState(false);

	function handleFieldChange(field, value) {
		setForm(prev => ({ ...prev, [field]: value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (submitting) return;
		setSubmitting(true);
		setSubmitError(null);
		try {
			const res = await fetch('/api/contact/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...form, companyUrl: honeypot })
			});
			const body = await res.json().catch(() => ({}));
			if (res.ok && body.status === 'success') {
				setSubmitted(true);
			} else {
				setSubmitError(body.error || 'Could not send your message. Please try again.');
			}
		} catch {
			setSubmitError('Could not send your message. Please check your connection and try again.');
		} finally {
			setSubmitting(false);
		}
	}

	function resetForm() {
		setForm(INITIAL_FORM);
		setSubmitted(false);
		setSubmitError(null);
	}

	if (submitted) {
		return (
			<div className="contact-form-panel contact-form-success" role="status">
				<div className="contact-form-success-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
						<polyline points="20 6 9 17 4 12" />
					</svg>
				</div>
				<p className="contact-form-success-heading">Message <span className="italic-serif">Received</span></p>
				<p className="contact-form-success-note">
					Thank you for reaching out. Our team will review your message and get back to you shortly.
				</p>
				<button type="button" className="contact-form-reset" onClick={resetForm}>
					Send Another Message
				</button>
			</div>
		);
	}

	return (
		<div className="contact-form-panel">
			<form onSubmit={handleSubmit} noValidate>
				<div className="contact-form-grid">
					<div className="contact-form-field">
						<label htmlFor="contact-firstname">First Name *</label>
						<input
							id="contact-firstname"
							type="text"
							required
							maxLength={100}
							value={form.firstname}
							onChange={e => handleFieldChange('firstname', e.target.value)}
						/>
					</div>
					<div className="contact-form-field">
						<label htmlFor="contact-lastname">Last Name *</label>
						<input
							id="contact-lastname"
							type="text"
							required
							maxLength={100}
							value={form.lastname}
							onChange={e => handleFieldChange('lastname', e.target.value)}
						/>
					</div>
					<div className="contact-form-field">
						<label htmlFor="contact-email">Email *</label>
						<input
							id="contact-email"
							type="email"
							required
							maxLength={254}
							value={form.email}
							onChange={e => handleFieldChange('email', e.target.value)}
						/>
					</div>
					<div className="contact-form-field">
						<label htmlFor="contact-phone">Phone *</label>
						<input
							id="contact-phone"
							type="tel"
							required
							maxLength={20}
							value={form.phone}
							onChange={e => handleFieldChange('phone', e.target.value)}
						/>
					</div>
					<div className="contact-form-field contact-form-field-full">
						<label htmlFor="contact-message">Message</label>
						<textarea
							id="contact-message"
							rows={5}
							maxLength={1500}
							value={form.message}
							onChange={e => handleFieldChange('message', e.target.value)}
						/>
					</div>
				</div>
				<div className="contact-form-honeypot" aria-hidden="true">
					<label htmlFor="contact-company-url">Company URL</label>
					<input
						id="contact-company-url"
						type="text"
						tabIndex={-1}
						autoComplete="off"
						value={honeypot}
						onChange={e => setHoneypot(e.target.value)}
					/>
				</div>
				<button type="submit" className="contact-form-submit" disabled={submitting}>
					{submitting ? 'Sending…' : 'Send Message'}
				</button>
				{submitError && <p className="contact-form-error" role="alert">{submitError}</p>}
			</form>
		</div>
	);
}

export default ContactForm;
