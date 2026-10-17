import AboutPage from '../../components/pages/AboutPage';

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const isIndia = region === 'IN';
const baseUrl = isIndia ? 'https://lexvuip.in' : 'https://lexvuip.com';

export const metadata = {
  title: isIndia
    ? 'About Us - LexVuIP India | Hyderabad-Based IP & Legal Team'
    : 'About Us - LexVuIP | Redmond, WA-Based IP & Paralegal Team',
  description: isIndia
    ? '25+ years of IP expertise. LexVuIP India is a Hyderabad-based team supporting patent attorneys, startups, and inventors across India.'
    : '25+ years of excellence in IP support. LexVuIP is a Redmond, WA-based team delivering patent drawings and paralegal services nationwide.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: isIndia ? 'About LexVuIP India - 25+ Years of IP Excellence' : 'About LexVuIP - 25+ Years of IP Excellence',
    description: isIndia
      ? '25+ years of IP excellence, based in Hyderabad, serving clients across India.'
      : '25+ years of excellence in IP support and paralegal services, based in Redmond, WA.',
    url: `${baseUrl}/about`,
    siteName: 'LexVuIP',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About LexVuIP - Our Team and Mission',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function About() {
  return <AboutPage />;
}
