import IpSolutionsPage from '../../../components/pages/IpSolutionsPage';

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const isIndia = region === 'IN';

export const metadata = {
  title: isIndia
    ? 'IP Solutions - LexVuIP India | Patent Filing & Trademark'
    : 'IP Solutions - LexVuIP | Patent & Trademark Drawings',
  description: isIndia
    ? 'Patent filing, trademark registration, and IP prosecution for startups, inventors, and attorneys across India, from our Hyderabad office.'
    : 'USPTO, EPO, and WIPO-compliant patent and trademark drawings for IP attorneys nationwide, from our Redmond, WA office.',
  alternates: {
    canonical: '/service/ipsolutions',
  },
};

export default function IpSolutions() {
  return <IpSolutionsPage />;
}
