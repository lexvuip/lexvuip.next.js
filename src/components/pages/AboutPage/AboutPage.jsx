import './AboutPage.css';
import TestimonialSection from '../../sections/TestimonialSection';
import FAQSection from '../../sections/FAQSection';
import Footer from '../../layout/Footer';
import Button from '../../ui/Button';
import AboutReveal from '../../ui/AboutReveal';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="about-page-luxury">
      {/* Elevated Hero/Principles Section */}
      <section className="about-principles-section">
        <AboutReveal>
          <div className="principles-header">
            <div className="luxury-label-group">
              <span className="gold-line"></span>
              <span className="luxury-label">CORE PHILOSOPHY</span>
            </div>
            <h2 className="principles-main-title">
              Precise Support. <span className="italic-serif">Seamless</span> Advocacy.
            </h2>
            <p className="principles-subtitle">
              At LexVuIP, we provide the technical foundation so attorneys can focus on what matters most: the art of advocacy.
            </p>
          </div>
          
          <div className="principles-grid">
            <div className="principle-item">
              <div className="principle-visual">
                <div className="principle-image-wrapper">
                  <Image 
                    src="/assets/stockimages/ourmission.jpg" 
                    alt="Mission"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="principle-content">
                <h3>Our Mission</h3>
                <p>We aim to support attorneys with reliable, detail-oriented help in both intellectual property and litigation. We ensure every filing, drawing, and deadline is managed with care.</p>
              </div>
            </div>

            <div className="principle-item">
              <div className="principle-visual">
                <div className="principle-image-wrapper">
                  <Image 
                    src="/assets/stockimages/ourpromise.jpg" 
                    alt="Promise"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="principle-content">
                <h3>Our Promise</h3>
                <p>We relieve the pressure on your desk. Whether you need design patent figures or trial prep documents, our work is accurate, compliant, and delivered on time every time.</p>
              </div>
            </div>

            <div className="principle-item">
              <div className="principle-visual">
                <div className="principle-image-wrapper">
                  <Image 
                    src="/assets/stockimages/ourpurpose.jpg" 
                    alt="Purpose"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="principle-content">
                <h3>Our Purpose</h3>
                <p>To strengthen the work of attorneys by removing bottlenecks, protecting innovation, and building lasting partnerships rooted in trust, clarity, and results.</p>
              </div>
            </div>
          </div>
        </AboutReveal>
      </section>

      {/* Cinematic Journey Section */}
      <section className="luxury-journey-section">
        <AboutReveal>
          <div className="journey-composition">
            <div className="journey-visual-column about-left-column">
              <div className="journey-image-stack">
                <div className="main-journey-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                    alt="Law library"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="accent-journey-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                    alt="Drafting"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            <div className="journey-text-column about-content">
              <div className="journey-header">
                <div className="luxury-label-group">
                  <span className="gold-line"></span>
                  <span className="luxury-label">THE HERITAGE</span>
                </div>
                <h2 className="journey-title-large">
                  From Full Legal Support to <span className="italic-serif">Patent Drawings</span> Built on <span className="italic-serif">Precision</span> Expanded Through <span className="italic-serif">Trust</span>
                </h2>
              </div>
              
              <div className="journey-description-body">
                <p>
                  What started over two decades ago as a patent illustration practice has evolved into a trusted partner for attorneys in both intellectual property and litigation support. Over the years, we have helped firms protect innovation with accurate utility and design patent drawings, trademarks, and global IP documentation. At the same time, our role has grown to include paralegal services, drafting pleadings, preparing filings, managing dockets, and supporting trial preparation.
                </p>
                <p>
                  Our mission remains the same: to give attorneys the confidence that every detail, whether technical or procedural, is handled with accuracy and care.
                </p>
                
                <div className="journey-cta">
                  <Button href="/contact" variant="secondary">Talk to our Experts →</Button>
                </div>
              </div>
            </div>
          </div>
        </AboutReveal>
      </section>

      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
