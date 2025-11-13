'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AboutSection from '../components/AboutSection';
import OurSection from '../components/OurSection';
import BlogSection from '../components/BlogSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import FotterSection from '../components/FotterSection';
import FloatingCallButton from '../components/FloatingCallButton';
import '../styles/App.css';

export default function Home() {
  const router = useRouter();

  const renderAnimatedWords = (words, startDelay = 0) => {
    return words.map((word, index) => (
      <span
        key={`${word}-${index}`}
        style={{ animationDelay: `${startDelay + index * 0.08}s` }}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {renderAnimatedWords(
              ['Precision', 'in', 'Every', 'Filing'],
              0
            )}
            <br />
            {renderAnimatedWords(
              ['Clarity', 'in', 'Every', 'Design.'],
              0.6
            )}
          </h1>
          <p className="hero-description">
            Your cases deserve more than routine paperwork. They deserve strategy and accuracy. At LexVu, we take care of the details that protect your clients and free up your time. Our team is trained in filings, trial preparation, managing clients, docket management and patent support. We don't just follow procedure; we raise the standard every time.
          </p>
          <div className="hero-actions">
            <button
              className="hero-contact-btn"
              onClick={() => router.push('/contact')}
            >
              Get In Touch
            </button>
            <Link href="/services" className="hero-services-link">
              Our Services
            </Link>
          </div>
        </div>
      </header>
      <AboutSection />
      <OurSection />
      {/* <BlogSection /> */}
      <TestimonialSection />
      <FAQSection />
      <FotterSection />
      <FloatingCallButton />
    </div>
  );
}
