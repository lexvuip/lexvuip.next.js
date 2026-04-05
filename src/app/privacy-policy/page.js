import PrivacyPolicyPage from '../../components/pages/PrivacyPage/PrivacyPage';

export const metadata = {
	title: 'Privacy Policy - LexVuIP | Data Protection & Information Security',
	description: 'Learn how LexVuIP collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your rights.',
	keywords: ['privacy policy', 'data protection', 'information security', 'LexVuIP privacy'],
	alternates: {
		canonical: '/privacy-policy',
	},
};

export default function PrivacyPolicy() {
	return <PrivacyPolicyPage />;
}