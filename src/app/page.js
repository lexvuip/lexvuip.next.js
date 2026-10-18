import AboutSection from '../components/sections/AboutSection';
import OurSection from '../components/sections/OurSection';
import BlogSection from '../components/sections/BlogSection';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import WorkShowcase from '../components/sections/WorkShowcase';
import HomeLazySections from '../components/pages/HomeLazySections';
import { defaultFaqs } from '../data/faqs';
import { ipServices, paralegalServices, customServices } from '../data/services';

export async function generateMetadata() {
  const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
  const isIndia = region === 'IN';

  return {
    title: isIndia ? 'Patent Filing & IP Services' : 'Patent Drawings & Paralegal Services',
    description: isIndia ? 'LexVuIP delivers patent filing, trademark registration, and end-to-end IP services. 25+ years supporting IP attorneys with precision filings and trial preparation.' : 'LexVuIP delivers USPTO-compliant patent drawings, trademark support, and end-to-end paralegal services. 25+ years supporting IP attorneys worldwide with precision filings and trial preparation.',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: isIndia ? 'Patent Filing & IP Services' : 'Patent Drawings & Paralegal Services',
      description: isIndia ? 'LexVuIP delivers patent filing, trademark registration, and IP services. 25+ years supporting IP attorneys.' : 'LexVuIP delivers USPTO-compliant patent drawings, trademark support, and paralegal services. 25+ years supporting IP attorneys worldwide.',
      url: isIndia ? 'https://lexvuip.in' : 'https://lexvuip.com',
      siteName: 'LexVuIP',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'LexVuIP - Patent Drawings and Paralegal Services',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function Home() {
  const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
  const isIndia = region === 'IN';
  const baseUrl = isIndia ? 'https://lexvuip.in' : 'https://lexvuip.com';
  const telephone = isIndia ? '+91-91107-26310' : '+1-856-214-2512';
  const catalogServices = [
    ...ipServices.map((service) => ({ service, segment: 'ipsolutions' })),
    ...paralegalServices.map((service) => ({ service, segment: 'paralegalsolutions' })),
    ...customServices.map((service) => ({ service, segment: 'customsolutions' })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        'name': 'LexVuIP',
        'url': baseUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/logo.png`,
        },
        'sameAs': [
          'https://www.linkedin.com/in/lexvuip-global-ip-paralegal-solutions',
          'https://www.facebook.com/share/1G3j5Jxpet/',
          'https://www.instagram.com/lexvu_lexvuip?igsh=MXNpMnYxbWI4cWZ3NQ=='
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': telephone,
          'contactType': 'customer service',
          'email': 'inbox@lexvuip.com'
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        'name': isIndia ? 'LexVuIP India' : 'LexVuIP',
        'description': 'Intellectual property and paralegal support services for law firms and IP attorneys.',
        'url': baseUrl,
        'telephone': telephone,
        'email': 'inbox@lexvuip.com',
        'address': isIndia ? {
          '@type': 'PostalAddress',
          'streetAddress': '6-4-455/16/a/1, Krishna Nagar Colony, Balaji residency, Bholakpur, Bhoiguda',
          'addressLocality': 'Hyderabad, Secunderabad',
          'addressRegion': 'Telangana',
          'postalCode': '500080',
          'addressCountry': 'IN'
        } : {
          '@type': 'PostalAddress',
          'streetAddress': '6260 139th AVE. NE 66',
          'addressLocality': 'Redmond',
          'addressRegion': 'WA',
          'postalCode': '98052',
          'addressCountry': 'US'
        },
        'geo': isIndia ? {
          '@type': 'GeoCoordinates',
          'latitude': 17.4221343,
          'longitude': 78.4998628
        } : {
          '@type': 'GeoCoordinates',
          'latitude': 47.6625,
          'longitude': -122.1545
        },
        'hasMap': isIndia
          ? 'https://www.google.com/maps/place/LEXVUIP/@17.4221343,78.4998628,17z/data=!3m1!4b1!4m6!3m5!1s0x8ecb21e5e200899d:0x5e39f5aebc5ba305!8m2!3d17.4221343!4d78.4998628'
          : 'https://www.google.com/maps/search/?api=1&query=6260%20139th%20Ave%20NE%2C%20Redmond%2C%20WA%2098052',
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00'
        },
        'areaServed': isIndia ? [
          { '@type': 'Country', 'name': 'India' }
        ] : [
          { '@type': 'Country', 'name': 'United States' },
          { '@type': 'Country', 'name': 'Canada' },
          { '@type': 'Country', 'name': 'United Kingdom' }
        ],
        'priceRange': '$$',
        'image': `${baseUrl}/logo.png`,
        'parentOrganization': {
          '@id': `${baseUrl}/#organization`
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': isIndia ? 'LexVuIP India Services' : 'LexVuIP Services',
          'itemListElement': catalogServices.map(({ service, segment }) => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': service.title,
              'description': service.description,
              'url': `${baseUrl}/service/${segment}/${service.slug}`,
              'areaServed': isIndia ? { '@type': 'Country', 'name': 'India' } : { '@type': 'Country', 'name': 'United States' },
              'provider': { '@id': `${baseUrl}/#localbusiness` }
            }
          }))
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': 'LexVuIP',
        'publisher': {
          '@id': `${baseUrl}/#organization`
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faqpage`,
        'mainEntity': defaultFaqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
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
      <WorkShowcase />
      <AboutSection />
      <OurSection />
      <BlogSection />
      <HomeLazySections />
      <Footer />
    </div>
  );
}

