import React from 'react';
import Footer from '../../layout/Footer';

function CookiePolicyPage() {
	return (
		<div className="policy-page-luxury">
			<section className="policy-hero-section">
				<div className="policy-hero-content">
					<div className="luxury-label-group">
						<span className="gold-line"></span>
						<span className="luxury-label">Legal Notice</span>
					</div>
					<h1 className="policy-hero-title">
						Cookie <span className="italic-serif">Policy</span>
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
							This Cookie Policy explains how LexVuIP uses cookies and similar technologies to recognize you when you visit our website.
						</p>
					</div>
                    {/* Add content here */}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CookiePolicyPage;
