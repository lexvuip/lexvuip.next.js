import React from 'react';
import '../styles/SecurityPage.css';
import FotterSection from './FotterSection';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="security-page-luxury">
      <section className="security-hero-section">
        <div className="security-hero-content">
          <div className="luxury-label-group">
            <span className="gold-line"></span>
            <span className="luxury-label">Security & Privacy First</span>
          </div>
          <h1 className="security-hero-title">
            Protecting Your Intellectual Property with{' '}
            <span className="italic-serif">Uncompromising Standards</span>
          </h1>
          <p className="security-hero-description">
            At LexVuIP, we recognize that your data is your most valuable asset.
            Our security framework is built on a foundation of trust,
            transparency, and multi-layered defense. We have implemented a
            comprehensive suite of technical and organizational measures to
            ensure that every document, drawing, and communication remains
            completely confidential and secure throughout its lifecycle.
          </p>
          <Link href="/contact" className="security-hero-btn">
            Learn More About Our Safety Measures
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section className="security-pillars-section">
        <div className="security-pillars-container">
          <div className="pillars-header">
            <div className="luxury-label-group central">
              <span className="gold-line"></span>
              <span className="luxury-label">Security Pillars</span>
              <span className="gold-line"></span>
            </div>
            <h2 className="pillars-main-title">
              Multi-Layered <span className="italic-serif">Protection</span>
            </h2>
          </div>

          <div className="security-pillars-grid">
            <article className="security-pillar-card">
              <div className="pillar-visual">
                <div className="pillar-icon-wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="pillar-number">01</div>
              </div>
              <div className="pillar-content">
                <h3>Infrastructure Hardening</h3>
                <p>
                  Our operational environment is fortified against unauthorized
                  entry. We utilize segmented networks and strict identity
                  management to ensure that sensitive data is only accessible to
                  authorized personnel.
                </p>
                <ul className="pillar-features">
                  <li>
                    <span className="feature-dot"></span>
                    24/7 Monitored Access Control
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Hardware Port Lockdown for Removable Media
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Multi-factor Biometric Authentication for Secure Zones
                  </li>
                </ul>
              </div>
            </article>

            <article className="security-pillar-card">
              <div className="pillar-visual">
                <div className="pillar-icon-wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="pillar-number">02</div>
              </div>
              <div className="pillar-content">
                <h3>Ethical & Contractual Obligations</h3>
                <p>
                  Confidentiality is a legal mandate at LexVuIP. Every member of
                  our team is bound by rigorous non-disclosure agreements that
                  align with the highest industry standards for legal and patent
                  support.
                </p>
                <ul className="pillar-features">
                  <li>
                    <span className="feature-dot"></span>
                    Comprehensive Non-Disclosure Agreements (NDA)
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Binding Confidentiality Clauses in all Contracts
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Continuous Security Awareness and Ethical Conduct Training
                  </li>
                </ul>
              </div>
            </article>

            <article className="security-pillar-card">
              <div className="pillar-visual">
                <div className="pillar-icon-wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="pillar-number">03</div>
              </div>
              <div className="pillar-content">
                <h3>Secure Communication Channels</h3>
                <p>
                  We protect information in transit using industry-standard
                  encryption protocols. Our digital workflows are designed to
                  prevent data leakage and ensure end-to-end integrity.
                </p>
                <ul className="pillar-features">
                  <li>
                    <span className="feature-dot"></span>
                    End-to-End Encrypted Data Transmission
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Restricted External Web and Email Access
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Proactive Blocking of Unauthorized File-Sharing Platforms
                  </li>
                </ul>
              </div>
            </article>

            <article className="security-pillar-card">
              <div className="pillar-visual">
                <div className="pillar-icon-wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </div>
                <div className="pillar-number">04</div>
              </div>
              <div className="pillar-content">
                <h3>Data Lifecycle Management</h3>
                <p>
                  Our commitment to privacy extends to the disposal of information.
                  We follow strict protocols for the permanent destruction of both
                  physical and digital assets once they are no longer required.
                </p>
                <ul className="pillar-features">
                  <li>
                    <span className="feature-dot"></span>
                    Certified Secure Shredding of Physical Documents
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Verifiable Digital Data Sanitization Post-Project
                  </li>
                  <li>
                    <span className="feature-dot"></span>
                    Support for Direct Collaboration via Client-Hosted Servers
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="security-assurance-section">
        <div className="assurance-container">
          <div className="assurance-visual">
            <div className="assurance-shield">
              <svg viewBox="0 0 100 100" className="shield-graphic">
                <path
                  className="shield-path"
                  d="M50 5 L90 20 L90 50 Q90 80 50 95 Q10 80 10 50 L10 20 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  className="shield-inner"
                  d="M50 15 L80 27 L80 50 Q80 72 50 85 Q20 72 20 50 L20 27 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <circle className="shield-center" cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path className="shield-check" d="M42 50 L48 56 L58 44" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="shield-glow"></div>
            </div>
          </div>
          
          <div className="assurance-content">
            <div className="luxury-label-group">
              <span className="gold-line"></span>
              <span className="luxury-label">Our Commitment</span>
            </div>
            <h2 className="assurance-title">
              Trust Through <span className="italic-serif">Transparency</span>
            </h2>
            <p className="assurance-description">
              Our security infrastructure is designed to exceed industry standards
              while maintaining complete transparency with our clients. Every protocol,
              every access point, and every data handling procedure is documented
              and available for your review.
            </p>
            <div className="assurance-stats">
              <div className="assurance-stat">
                <div className="stat-number">256<span className="stat-unit">bit</span></div>
                <div className="stat-label">Encryption Standard</div>
              </div>
              <div className="assurance-stat">
                <div className="stat-number">99.9<span className="stat-unit">%</span></div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
              <div className="assurance-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Security Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-cta-section">
        <div className="security-cta-content">
          <div className="luxury-label-group central">
            <span className="gold-line"></span>
            <span className="luxury-label">Get Started</span>
            <span className="gold-line"></span>
          </div>
          <h2>Discuss Our Compliance Standards</h2>
          <p>
            Need more specific details about our security protocols? Our team is
            available to provide deeper insights into how we protect your information.
          </p>
          <Link href="/contact" className="security-cta-btn">
            Get In Touch
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <FotterSection />
    </div>
  );
}