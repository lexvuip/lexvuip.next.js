import SecurityPage from '../../components/pages/SecurityPage';

export const metadata = {
  title: 'Data Security & Compliance - LexVu',
  description: 'Enterprise-grade security for legal data. SOC 2 compliance, encrypted file handling, and strict confidentiality protocols for IP attorneys and law firms.',
  alternates: {
    canonical: '/security',
  },
  openGraph: {
    title: 'Data Security & Compliance - LexVu',
    description: 'Enterprise-grade security for legal data. SOC 2 compliance, encrypted file handling, and strict confidentiality protocols for IP attorneys and law firms.',
    url: 'https://lexvuip.com/security',
    siteName: 'LexVu',
    images: [
      {
        url: '/og-security.png',
        width: 1200,
        height: 630,
        alt: 'LexVu Data Security - Enterprise-Grade Protection for Legal Data',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Security() {
  return <SecurityPage />;
}