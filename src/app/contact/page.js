import ContactPage from '../../components/pages/ContactPage';

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const isIndia = region === 'IN';
const baseUrl = isIndia ? 'https://lexvuip.in' : 'https://lexvuip.com';

export const metadata = {
  title: isIndia
    ? "Contact Us - LexVuIP India | IP & Legal Support in Hyderabad"
    : "Contact Us - LexVuIP | IP & Paralegal Support in Redmond, WA",
  description: isIndia
    ? "Get in touch with LexVuIP India in Hyderabad for patent filing, trademark registration, and IP services across India."
    : "Get in touch with LexVuIP in Redmond, WA for IP solutions, patent drawings, and paralegal services nationwide.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: isIndia ? 'Contact LexVuIP India - Get Expert IP Support' : 'Contact LexVuIP - Get Expert IP Support',
    description: isIndia
      ? 'Get in touch with LexVuIP India for patent filing, trademark registration, and IP services.'
      : 'Get in touch with LexVuIP for IP solutions, patent drawings, and paralegal services.',
    url: `${baseUrl}/contact`,
    siteName: 'LexVuIP',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact LexVuIP',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactPage />;
}
