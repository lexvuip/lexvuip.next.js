import AboutPage from '../../components/pages/AboutPage';

export const metadata = {
  title: 'About Us - LexVu | Our Journey & Mission',
  description: '25+ years of excellence in IP support. LexVu combines legal expertise with precision craftsmanship for patent drawings and paralegal services worldwide.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About LexVu - 25+ Years of IP Excellence',
    description: '25+ years of excellence in IP support and paralegal services.',
    url: 'https://lexvuip.com/about',
    siteName: 'LexVu',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About LexVu - Our Team and Mission',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function About() {
  return <AboutPage />;
}
