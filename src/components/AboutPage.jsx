'use client'

import React from 'react';
import '../styles/AboutPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import ourMission from '../assets/stockimages/ourmission.jpg'
import ourPurpose from '../assets/stockimages/ourpurpose.jpg'
import ourPromise from '../assets/stockimages/ourpromise.jpg'
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import FotterSection from './FotterSection';
import { useRouter } from 'next/navigation';

function AboutPage() {

    const router = useRouter();
    return (
        <div>
        {/* <section className="about-page-section">
            <div className="about-page-content">
                <h1 className="about-page-title">Innovation. Secured by <span className="about-page-emphasis">Expertise.</span></h1>
                <p className="about-page-description">
                    For over 25 years, LexVuIP has empowered intellectual property attorneys with expert patent illustration and IP documentation services—enabling seamless filings, confident prosecution, and bulletproof compliance with global patent offices. From complex utility patents to intricate design and trademark filings, we help legal professionals worldwide present innovation with unmatched accuracy and clarity.
                </p>
                <button className="about-page-btn" onClick={() => navigate('/contact')}>Talk to our Experts →</button>
            </div>
            <div className="about-page-image-container">
                <img src={lawyerImage} alt="Lawyer" className="about-page-image" />
            </div>
        </section> */}
       <section className="section-wrapper">
    <h2>At LexVuIP, We Provide Precise Support, From Paralegal Services to Patent Drawings, So Attorneys Can Focus on Advocacy Instead of Administration.</h2>
    
    <div className="cards-container">
      
      <div className="card">
        <div className="icon-circle">
          <img src="assets/stockimages/ourmission.jpg" alt="Mission Icon"/>
        </div>
        <h3>Our Mission</h3>
        <p>We aim to <b>support</b> attorneys with <b>reliable</b>, detail-oriented <b>help</b> in both intellectual property and litigation. <b>We</b> ensure every filing, drawing, and deadline is managed with <b>care</b>.</p>
      </div>

      <div className="card">
        <div className="icon-circle">
          <img src="assets/stockimages/ourpromise.jpg" alt="Promise Icon" />
        </div>
        <h3>Our Promise</h3>
        <p>We <b>relieve the pressure</b> on your desk. Whether you need design patent figures or trial prep documents, our work is <b>accurate</b>, <b>compliant</b>, and <b>delivered on time every time</b> .</p>
      </div>

      <div className="card">
        <div className="icon-circle">
          <img src="assets/stockimages/ourpurpose.jpg" alt="Purpose Icon" />
        </div>
        <h3>Our Purpose</h3>
        <p>To <b>strengthen</b> the work of attorneys by removing <b>bottlenecks</b>, protecting innovation, and building lasting <b>partnerships</b> rooted in <b>trust</b>, <b>clarity</b>, and <b>results</b>.</p>
      </div>

    </div>
  </section>

        <section className="our-journey-section">
            <div className="our-journey-left-column">
                <div className="our-journey-header">
                    <div className="our-journey-arrow-container">
                        <span className="our-journey-arrow"></span>
                        <span className="our-journey-arrow"></span>
                        <span className="our-journey-arrow"></span>
                    </div>
                    <h2 className="our-journey-title-small">OUR JOURNEY</h2>
                </div>
            </div>
            <div className="our-journey-right-column">
                <h1 className="our-journey-title-large">
                    From Full Legal Support to <span className="our-journey-emphasis">Patent Drawings</span>
                    <br />
                    Built on <span className="our-journey-emphasis">Precision</span> Expanded Through<span className="our-journey-emphasis">Trust</span>
                </h1>
                <p className="our-journey-description">
                    What started over two decades ago as a patent illustration practice has evolved into a trusted partner for attorneys in both intellectual property and litigation support. Over the years, we have helped firms protect innovation with accurate utility and design patent drawings, trademarks, and global IP documentation. At the same time, our role has grown to include paralegal services, drafting pleadings, preparing filings, managing dockets, and supporting trial preparation.  
                </p>
                <p className="our-journey-description">
                    Our mission remains the same: to give attorneys the confidence that every detail, whether technical or procedural, is handled with accuracy and care. 
                </p>
                <button className="our-journey-btn" onClick={() => navigate('/contact')}>Talk to our Experts →</button>
            </div>
        </section>
        <TestimonialSection />
        <FAQSection />
        <FotterSection />
        </div>
    );
}

export default AboutPage;