import FounderPage from '../../components/pages/FounderPage';

export const metadata = {
  title: 'About the Founder - LexVuIP India | Bhanu Prakash',
  description: 'Meet Bhanu Prakash, Founder & Director of LexVuIP India. Registered Patent Attorney specializing in Indian patent prosecution, design filing, trademark registration, and patent illustration for US & UK attorneys.',
  alternates: {
    canonical: '/founder',
  },
  openGraph: {
    title: 'About the Founder - LexVuIP India | Bhanu Prakash',
    description: 'Meet Bhanu Prakash, Founder & Director of LexVuIP India. Registered Patent Attorney specializing in Indian patent prosecution, design filing, trademark registration, and patent illustration.',
    url: 'https://lexvuip.com/founder',
    siteName: 'LexVuIP',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'Bhanu Prakash - Founder & Director, LexVuIP India',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
};

export default function Founder() {
  return <FounderPage />;
}
