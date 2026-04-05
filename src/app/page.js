import AboutSection from '../components/sections/AboutSection';
import OurSection from '../components/sections/OurSection';
import BlogSection from '../components/sections/BlogSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';

export const metadata = {
  title: 'Patent Drawings & Paralegal Services | IP Solutions for Law Firms',
  description: 'LexVuIP provides USPTO-compliant patent drawings, trademark support, and paralegal services. 25+ years supporting IP attorneys with precision filings.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://lexvuip.github.io/#organization',
        'name': 'LexVuIP',
        'url': 'https://lexvuip.github.io',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://lexvuip.github.io/logo.png',
        },
        'sameAs': [
          'https://www.linkedin.com/in/lexvuip-global-ip-paralegal-solutions',
          'https://www.facebook.com/share/1G3j5Jxpet/',
          'https://www.instagram.com/lexvu_lexvuip?igsh=MXNpMnYxbWI4cWZ3NQ=='
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+1-856-214-2512',
          'contactType': 'customer service',
          'email': 'inbox@lexvuip.com'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lexvuip.github.io/#website',
        'url': 'https://lexvuip.github.io',
        'name': 'LexVuIP',
        'publisher': {
          '@id': 'https://lexvuip.github.io/#organization'
        }
      }
    ]
  };

  return (
    <div className="App">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <OurSection />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

