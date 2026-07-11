import './PrivacyPage.css';
import Footer from '../../layout/Footer';

function PrivacyPolicyPage() {
	return (
		<div className="policy-page-luxury">
			<section className="policy-hero-section">
				<div className="policy-hero-content">
					<div className="luxury-label-group">
						<span className="gold-line"></span>
						<span className="luxury-label">Legal Notice</span>
					</div>
					<h1 className="policy-hero-title">
						Privacy <span className="italic-serif">Policy</span>
					</h1>
					<p className="policy-hero-description">
						Last updated: January 2025
					</p>
				</div>
			</section>

			<section className="policy-content-section">
				<div className="policy-content-container">
					<div className="policy-intro">
						<p>
							LexVuIP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
						</p>
					</div>

					<div className="policy-section">
						<h2>1. Information We Collect</h2>
						<h3>Personal Information</h3>
						<p>We may collect personal information that you voluntarily provide to us when you:</p>
						<ul>
							<li>Fill out contact forms on our website</li>
							<li>Subscribe to our newsletter or communications</li>
							<li>Request information about our services</li>
							<li>Engage our legal support services</li>
						</ul>
						<p>This information may include:</p>
						<ul>
							<li>Name and contact information (email, phone, address)</li>
							<li>Professional affiliation and job title</li>
							<li>Information related to your legal needs</li>
							<li>Communication preferences</li>
						</ul>

						<h3>Automatically Collected Information</h3>
						<p>When you visit our website, we may automatically collect certain information including:</p>
						<ul>
							<li>IP address and device information</li>
							<li>Browser type and version</li>
							<li>Pages visited and time spent on our site</li>
							<li>Referring website addresses</li>
						</ul>
					</div>

					<div className="policy-section">
						<h2>2. How We Use Your Information</h2>
						<p>We use the information we collect to:</p>
						<ul>
							<li>Provide and maintain our services</li>
							<li>Respond to your inquiries and requests</li>
							<li>Send you relevant communications and updates</li>
							<li>Improve our website and user experience</li>
							<li>Comply with legal obligations</li>
							<li>Protect our rights and the rights of our clients</li>
						</ul>
					</div>

					<div className="policy-section">
						<h2>3. Information Sharing and Disclosure</h2>
						<p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
						<ul>
							<li>With your explicit consent</li>
							<li>With service providers who assist in our operations</li>
							<li>To comply with legal requirements or court orders</li>
							<li>To protect our rights, property, or safety</li>
						</ul>
						<p>All third-party service providers are bound by confidentiality agreements and data protection obligations.</p>
					</div>

					<div className="policy-section">
						<h2>4. Data Security</h2>
						<p>We implement robust security measures to protect your information, including:</p>
						<ul>
							<li>256-bit encryption for data transmission</li>
							<li>Multi-factor authentication for access control</li>
							<li>Regular security audits and monitoring</li>
							<li>Comprehensive non-disclosure agreements with all personnel</li>
							<li>Secure destruction protocols for physical and digital documents</li>
						</ul>
						<p>For more details, please review our <a href="/security">Security Page</a>.</p>
					</div>

					<div className="policy-section">
						<h2>5. Your Rights</h2>
						<p>You have the right to:</p>
						<ul>
							<li>Access the personal information we hold about you</li>
							<li>Request corrections to inaccurate information</li>
							<li>Request deletion of your personal information</li>
							<li>Opt-out of marketing communications</li>
							<li>Request a copy of your data in a portable format</li>
						</ul>
						<p>To exercise these rights, please contact us using the information provided below.</p>
					</div>

					<div className="policy-section">
						<h2>6. Cookies</h2>
						<p>We use cookies and similar technologies to enhance your browsing experience. For detailed information about our use of cookies, please see our <a href="/cookie-policy">Cookie Policy</a>.</p>
					</div>

					<div className="policy-section">
						<h2>7. Third-Party Links</h2>
						<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
					</div>

					<div className="policy-section">
						<h2>8. Children's Privacy</h2>
						<p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
					</div>

					<div className="policy-section">
						<h2>9. Changes to This Policy</h2>
						<p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.</p>
					</div>

					<div className="policy-section">
						<h2>10. Contact Us</h2>
						<p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
						<div className="contact-details">
							<p><strong>LexVuIP</strong></p>
							<p>Email: privacy@lexvuip.com</p>
							<p>Phone: +1 (555) 123-4567</p>
							<p><a href="/contact">Contact Form</a></p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default PrivacyPolicyPage;