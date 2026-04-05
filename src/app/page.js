import AboutSection from '../components/sections/AboutSection';
import OurSection from '../components/sections/OurSection';
import BlogSection from '../components/sections/BlogSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';

export const metadata = {
  title: 'Patent Drawings & Paralegal Services',
  description: 'LexVuIP delivers USPTO-compliant patent drawings, trademark support, and end-to-end paralegal services. 25+ years supporting IP attorneys worldwide with precision filings and trial preparation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Patent Drawings & Paralegal Services',
    description: 'LexVuIP delivers USPTO-compliant patent drawings, trademark support, and paralegal services. 25+ years supporting IP attorneys worldwide.',
    url: 'https://lexvuip.github.io',
    siteName: 'LexVuIP',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'LexVuIP - Patent Drawings and Paralegal Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        '@type': 'LocalBusiness',
        '@id': 'https://lexvuip.github.io/#localbusiness',
        'name': 'LexVuIP',
        'description': 'Intellectual property and paralegal support services for law firms and IP attorneys.',
        'url': 'https://lexvuip.github.io',
        'telephone': '+1-856-214-2512',
        'email': 'inbox@lexvuip.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '6260 139th AVE. NE 66',
          'addressLocality': 'Redmond',
          'addressRegion': 'WA',
          'postalCode': '98052',
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 47.6625,
          'longitude': -122.1545
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00'
        },
        'areaServed': [
          { '@type': 'Country', 'name': 'United States' },
          { '@type': 'Country', 'name': 'Canada' },
          { '@type': 'Country', 'name': 'United Kingdom' }
        ],
        'priceRange': '$$',
        'image': 'https://lexvuip.github.io/logo.png',
        'parentOrganization': {
          '@id': 'https://lexvuip.github.io/#organization'
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
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://lexvuip.github.io/#faqpage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What services does LexVuIP offer?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LexVuIP offers comprehensive IP solutions including USPTO-compliant patent drawings (utility and design), trademark support services, and complete paralegal solutions including docketing management, e-filing, and trial preparation.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long has LexVuIP been in business?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LexVuIP has over 25 years of experience supporting IP attorneys and law firms worldwide with patent drawings, trademark filings, and paralegal services.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What patent offices do you support?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We support filings with USPTO, EPO, WIPO/PCT, and major international patent offices. Our drawings comply with USPTO Rule 84, EPO Rule 46, and PCT Rule 11 standards.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is your turnaround time for patent drawings?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Standard turnaround is 2-4 business days. Express service is available for 24-48 hour delivery. Rush projects can be accommodated with prior arrangement.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you work with law firms outside the US?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we support IP attorneys and law firms globally, including Europe, Asia, and the Americas. We are experienced with international filing requirements and time zone coordination.'
            }
          }
        ]
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

