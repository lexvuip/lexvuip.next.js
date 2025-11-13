'use client'
import React, { useState , useEffect} from 'react';
import '../styles/ContactUs.css';
import FooterSection from '../components/FotterSection';

function ContactUs() {
	useEffect(() => {
		// Load HubSpot form script
		const script = document.createElement('script');
		script.src = 'https://js-na2.hsforms.net/forms/embed/243609401.js';
		script.defer = true;
		document.body.appendChild(script);

		return () => {
			// Cleanup script when component unmounts
			document.body.removeChild(script);
		};
	}, []);
	// const [formData, setFormData] = useState({
	// 	fullName: '',
	// 	email: '',
	// 	phone: '',
	// 	subject: '',
	// 	message: '',
	// });
	// const [message, setMessage] = useState('');
	// const [loading, setLoading] = useState(false);

	// const handleChange = (e) => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	setLoading(true);
	// 	setMessage('');

	// 	const webAppUrl =
	// 		'https://script.google.com/macros/s/AKfycbyi7tB5BqBGbm1YnQwHL0qsAZ9Kku2fP7dyt4xcjO9XgdFlGyFNbzCle74mJ--9Jl4rYQ/exec';

	// 	const formEncoded = new URLSearchParams();
	// 	formEncoded.append('fullName', formData.fullName);
	// 	formEncoded.append('email', formData.email);
	// 	formEncoded.append('phone', formData.phone);
	// 	formEncoded.append('subject', formData.subject);
	// 	formEncoded.append('message', formData.message);

	// 	console.log(formEncoded);

	// 	try {
	// 		await fetch(webAppUrl, {
	// 			method: 'POST',
	// 			mode: 'no-cors', // Needed for Google Apps Script
	// 			headers: {
	// 				'Content-Type': 'application/x-www-form-urlencoded',
	// 			},
	// 			body: formEncoded.toString(),
	// 		});

	// 		setMessage("Thank you! We'll be in touch.");
	// 		setFormData({
	// 			fullName: '',
	// 			email: '',
	// 			phone: '',
	// 			subject: '',
	// 			message: '',
	// 		});
	// 	} catch (error) {
	// 		console.error('Submission error:', error);
	// 		setMessage('Something went wrong. Please try again.');
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<section className="contact-section">
			<div
				className="contact-header-bg"
				style={{ backgroundImage: `url(/assets/stockimages/lawer.jpg)` }}
			>
				<div className="contact-header-content">
					<h1 className="contact-title">
						Let’s Talk About Your {' '}
						<span className="contact-title-emphasis"> Legal Support Needs</span>
					</h1>
				</div>
			</div>
			<div className="contact-container">
				<div className="contact-form-container">
					{/* <h2 className="contact-form-title">Send Us a Message</h2>
					<p className="contact-form-description">
						Tell us a little about your IP matter, and one of our specialists
						will reach out to you shortly.
					</p> */}
					{/* <form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								id="fullName"
								name="fullName"
								placeholder="Full Name"
								required
								value={formData.fullName}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email Address"
								required
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="Phone Number"
								required
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Title of your project"
								required
								value={formData.subject}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<textarea
								id="message"
								name="message"
								placeholder="Tell us more about your project"
								rows="5"
								required
								value={formData.message}
								onChange={handleChange}
							></textarea>
						</div>
						<button type="submit" className="submit-btn" disabled={loading}>
							{loading ? 'Sending...' : 'Submit'}
						</button>
					</form>
					{message && <p className="form-message">{message}</p>} */}
					<div className="hs-form-frame" 
						 data-region="na2" 
						 data-form-id="5e9773c3-00d2-4a9e-959c-0a2d1e4022aa" 
						 data-portal-id="243609401">
					</div>
				</div>
			</div>
			<div className="contact-info">
				<div className="info-item">
					<h3>Address</h3>
					<p>
						6260 139th AVE.
						<br />
						NE 66 Redmond, WA 98052
					</p>
				</div>
				<div className="info-item">
					<h3>Phone</h3>
					<p>856-214-2512</p>
				</div>
				<div className="info-item">
					<h3>Email</h3>
					<a
						href="mailto:inbox@lexvuip.com?subject=New Inquiry"
						className="contact_link"
					>
						inbox@lexvuip.com
					</a>
				</div>
			</div>
			<FooterSection />
		</section>
	);
}

export default ContactUs;
