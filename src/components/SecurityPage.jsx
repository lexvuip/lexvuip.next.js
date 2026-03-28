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
                    className="icon-creative-lock"
                    overflow="visible"
                  >
                    {/* Background radar pulse */}
                    <circle cx="12" cy="14" r="10" className="lock-radar" fill="none" strokeWidth="0.5" />
                    {/* Shackle */}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" className="lock-shackle" />
                    {/* Lock Body */}
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" className="lock-body" />
                    {/* Keyhole */}
                    <circle cx="12" cy="15" r="1.5" fill="currentColor" className="lock-keyhole-top" stroke="none" />
                    <path d="M11 16h2l-0.5 2h-1z" fill="currentColor" className="lock-keyhole-bottom" stroke="none" />
                    {/* Cyber scanline over lock */}
                    <line x1="1" y1="11" x2="23" y2="11" className="lock-scanline" stroke="currentColor" strokeWidth="1" />
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
                    className="icon-creative-doc"
                    overflow="visible"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="doc-outline" />
                    <polyline points="14 2 14 8 20 8" className="doc-fold" />
                    <line x1="8" y1="13" x2="16" y2="13" className="doc-text t1" />
                    <line x1="8" y1="17" x2="13" y2="17" className="doc-text t2" />
                    
                    {/* Animated Seal/Stamp */}
                    <g className="doc-seal-group">
                        <circle cx="16" cy="18" r="4" fill="var(--color-navy-deep)" stroke="currentColor" strokeWidth="1" className="doc-seal-bg" />
                        <path d="M14.5 18l1 1 2-2" stroke="currentColor" strokeWidth="1.5" className="doc-seal-check" />
                        <line x1="16" y1="12" x2="16" y2="13" stroke="currentColor" strokeWidth="1" className="seal-ray r1" />
                        <line x1="16" y1="23" x2="16" y2="24" stroke="currentColor" strokeWidth="1" className="seal-ray r2" />
                        <line x1="10" y1="18" x2="11" y2="18" stroke="currentColor" strokeWidth="1" className="seal-ray r3" />
                        <line x1="21" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="1" className="seal-ray r4" />
                    </g>
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
                    className="icon-creative-mail"
                    overflow="visible"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" className="mail-body" />
                    <polyline points="22,6 12,13 2,6" className="mail-flap" />
                    
                    {/* Data packets entering */}
                    <circle cx="-2" cy="0" r="1.5" fill="currentColor" className="mail-data d1" stroke="none" />
                    <circle cx="12" cy="-6" r="1.5" fill="currentColor" className="mail-data d2" stroke="none" />
                    <circle cx="26" cy="2" r="1.5" fill="currentColor" className="mail-data d3" stroke="none" />

                    {/* Shield locking the envelope */}
                    <g className="mail-shield-lock">
                        <path d="M12 10l3 1.5v2.5c0 2.5-3 4-3 4s-3-1.5-3-4v-2.5l3-1.5z" fill="var(--color-navy-deep)" stroke="currentColor" strokeWidth="1" />
                        <circle cx="12" cy="13.5" r="1" fill="currentColor" stroke="none" />
                    </g>
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
                    className="icon-creative-trash"
                    overflow="visible"
                  >
                    <polyline points="3 6 5 6 21 6" className="trash-lid" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" className="trash-bin" />
                    
                    {/* Document entering shredder */}
                    <rect x="9" y="-2" width="6" height="7" className="shred-doc" fill="none" strokeWidth="1" />
                    <line x1="10" y1="0" x2="14" y2="0" className="shred-doc-line" strokeWidth="1" />
                    <line x1="10" y1="2" x2="13" y2="2" className="shred-doc-line" strokeWidth="1" />

                    {/* Laser / destruction beam */}
                    <line x1="5" y="9" x2="19" y2="9" className="trash-laser" stroke="currentColor" strokeWidth="1.5" />

                    {/* Shredded bits (digital pixels) */}
                    <rect x="8" y="11" width="1" height="1" fill="currentColor" stroke="none" className="shred-bit b1" />
                    <rect x="11" y="13" width="1.5" height="1.5" fill="currentColor" stroke="none" className="shred-bit b2" />
                    <rect x="15" y="10" width="1" height="1" fill="currentColor" stroke="none" className="shred-bit b3" />
                    <rect x="9" y="15" width="1.5" height="1.5" fill="currentColor" stroke="none" className="shred-bit b4" />
                    <rect x="14" y="14" width="1" height="1" fill="currentColor" stroke="none" className="shred-bit b5" />
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
            <div className="assurance-shield-complex">
              <div className="shield-grid-overlay"></div>
              
              <div className="shield-blueprint-visual">
                <svg viewBox="0 0 400 400" className="shield-blueprint-svg">
                  {/* Rotating background rings */}
                  <circle cx="200" cy="200" r="180" className="shield-ring outer-ring" />
                  <circle cx="200" cy="200" r="150" className="shield-ring inner-ring" />
                  
                  {/* Radar/Scanner subtle lines */}
                  <path d="M200,20 L200,380" className="shield-scanner" />
                  <path d="M20,200 L380,200" className="shield-scanner" />
                  <path d="M72,72 L328,328" className="shield-scanner" />
                  <path d="M328,72 L72,328" className="shield-scanner" />

                  {/* Main Shield Outline */}
                  <path 
                    className="shield-core-path" 
                    d="M200,50 L340,100 L340,200 Q340,300 200,370 Q60,300 60,200 L60,100 Z" 
                  />
                  <path 
                    className="shield-core-inner" 
                    d="M200,80 L300,120 L300,200 Q300,270 200,330 Q100,270 100,200 L100,120 Z" 
                  />

                  {/* Nodes at the vertices */}
                  <circle cx="200" cy="50" r="5" className="shield-node" />
                  <circle cx="340" cy="100" r="5" className="shield-node" />
                  <circle cx="340" cy="200" r="5" className="shield-node" />
                  <circle cx="60" cy="100" r="5" className="shield-node" />
                  <circle cx="60" cy="200" r="5" className="shield-node" />
                  <circle cx="200" cy="370" r="5" className="shield-node" />

                  {/* Inner network / circuitry */}
                  <path d="M200,50 L200,165" className="shield-circuit" />
                  <path d="M340,100 L235,165" className="shield-circuit" />
                  <path d="M60,100 L165,165" className="shield-circuit" />
                  <path d="M340,200 L235,200" className="shield-circuit" />
                  <path d="M60,200 L165,200" className="shield-circuit" />
                  <path d="M200,370 L200,250" className="shield-circuit" />
                  
                  {/* Central Keyhole Motif */}
                  <circle cx="200" cy="185" r="22" className="shield-keyhole-top" />
                  <path d="M190,205 L210,205 L218,245 L182,245 Z" className="shield-keyhole-bottom" />
                  <circle cx="200" cy="235" r="3" className="shield-node" />

                  {/* Animated data flow dots */}
                  <circle cx="200" cy="100" r="4" className="data-dot" />
                  <circle cx="270" cy="130" r="4" className="data-dot delay-1" />
                  <circle cx="130" cy="130" r="4" className="data-dot delay-2" />
                  <circle cx="200" cy="310" r="4" className="data-dot delay-1" />
                </svg>
                <div className="shield-pulse-core"></div>
              </div>
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