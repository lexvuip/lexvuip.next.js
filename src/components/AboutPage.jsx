import React from 'react';
import '../styles/AboutPage.css';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import FotterSection from './FotterSection';
import AboutContactButton from './AboutContactButton';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <section className="section-wrapper">
        <h2>At LexVuIP, We Provide Precise Support, From Paralegal Services to Patent Drawings, So Attorneys Can Focus on Advocacy Instead of Administration.</h2>
        
        <div className="cards-container">
          <div className="card">
            <div className="icon-circle">
              <Image 
                src="/assets/stockimages/ourmission.jpg" 
                alt="Mission Icon"
                width={80}
                height={80}
              />
            </div>
            <h3>Our Mission</h3>
            <p>We aim to <b>support</b> attorneys with <b>reliable</b>, detail-oriented <b>help</b> in both intellectual property and litigation. <b>We</b> ensure every filing, drawing, and deadline is managed with <b>care</b>.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <Image 
                src="/assets/stockimages/ourpromise.jpg" 
                alt="Promise Icon"
                width={80}
                height={80}
              />
            </div>
            <h3>Our Promise</h3>
            <p>We <b>relieve the pressure</b> on your desk. Whether you need design patent figures or trial prep documents, our work is <b>accurate</b>, <b>compliant</b>, and <b>delivered on time every time</b> .</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <Image 
                src="/assets/stockimages/ourpurpose.jpg" 
                alt="Purpose Icon"
                width={80}
                height={80}
              />
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
          <AboutContactButton className="our-journey-btn" text="Talk to our Experts →" />
        </div>
      </section>
      <TestimonialSection />
      <FAQSection />
      <FotterSection />
    </div>
  );
}
