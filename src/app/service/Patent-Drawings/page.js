import PatentDrawingsPage from '../../../components/pages/PatentDrawingsPage';
import { patentDrawingFaqs } from '../../../data/faqs';

export const metadata = {
  title: 'Patent Drawing Services for US Attorneys & Agents | USPTO, IPO & EPO-Compliant',
  description:
    'Examiner-ready utility and design patent drawings formatted to 37 C.F.R. § 1.84. USPTO, IPO and EPO-compliant drawings for attorneys and agents. Get a quote within one business day.',
  alternates: {
    canonical: '/service/Patent-Drawings',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Patent Drawing Services',
      serviceType: 'Utility and design patent drawings',
      provider: { '@type': 'Organization', name: 'LexVuIP', url: 'https://lexvuip.com' },
      description:
        'Examiner-ready utility and design patent drawings formatted to 37 C.F.R. § 1.84 and USPTO drawing standards, also prepared for IPO, EPO and PCT filings.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: patentDrawingFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PatentDrawingsPage />
    </>
  );
}
