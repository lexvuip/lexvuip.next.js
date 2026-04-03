import React from 'react';
import Footer from '../../layout/Footer';

function TermsOfServicePage() {
	return (
		<div className="policy-page-luxury">
			<section className="policy-hero-section">
				<div className="policy-hero-content">
					<div className="luxury-label-group">
						<span className="gold-line"></span>
						<span className="luxury-label">Legal Notice</span>
					</div>
					<h1 className="policy-hero-title">
						Terms <span className="italic-serif">of Service</span>
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
							Welcome to LexVuIP. By using our services, you agree to these terms.
						</p>
					</div>
                    {/* Add content here */}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default TermsOfServicePage;
