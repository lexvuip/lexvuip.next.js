import TermsOfServicePage from '../../components/pages/TermsPage/TermsPage';

export const metadata = {
	title: 'Terms of Service - LexVuIP | Legal Service Terms & Conditions',
	description: 'Read LexVuIP terms of service and conditions for using our IP solutions, patent design, and paralegal services.',
	keywords: ['terms of service', 'legal terms', 'service agreement', 'LexVuIP terms'],
	alternates: {
		canonical: '/terms-of-service',
	},
};

export default function TermsOfService() {
	return <TermsOfServicePage />;
}