import TermsOfServicePage from '../../components/pages/TermsPage/TermsPage';

export const metadata = {
	title: 'Terms of Service - LexVu | Legal Service Terms & Conditions',
	description: 'Read LexVu terms of service and conditions for using our IP solutions, patent design, and paralegal services.',
	keywords: ['terms of service', 'legal terms', 'service agreement', 'LexVu terms'],
	alternates: {
		canonical: '/terms-of-service',
	},
};

export default function TermsOfService() {
	return <TermsOfServicePage />;
}