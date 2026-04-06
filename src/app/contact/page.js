import ContactPage from '../../components/pages/ContactPage';

export const metadata = {
  title: "Contact Us - LexVu | Talk to Our Experts",
  description: "Get in touch with LexVuIP for IP solutions, patent drawings, and paralegal services. Our specialists are ready to help with your legal support needs.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact LexVuIP - Get Expert IP Support',
    description: 'Get in touch with LexVuIP for IP solutions, patent drawings, and paralegal services.',
    url: 'https://lexvuip.github.io/contact',
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
