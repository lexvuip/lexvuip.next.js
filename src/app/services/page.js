import ServicesPage from '../../components/pages/ServicesPage';

export const metadata = {
  title: 'Legal & IP Services - Patent Drawings & Paralegal Support',
  description: 'IP solutions and paralegal support for law firms: patent drawings, trademarks, docketing, e-filing, and trial preparation. Expert support for attorneys.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Legal & IP Services - LexVuIP',
    description: 'Comprehensive IP solutions and paralegal support for law firms.',
    url: 'https://lexvuip.com/services',
    siteName: 'LexVuIP',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'LexVuIP Services - IP Solutions and Paralegal Support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Services() {
  return <ServicesPage />;
}
