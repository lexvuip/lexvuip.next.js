import PrivacyPolicyPage from '../../components/pages/PrivacyPage/PrivacyPage';

export const metadata = {
	title: 'Privacy Policy - LexVu | Data Protection & Information Security',
	description: 'Learn how LexVu collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your rights.',
	keywords: ['privacy policy', 'data protection', 'information security', 'LexVu privacy'],
	alternates: {
		canonical: '/privacy-policy',
	},
};

export default function PrivacyPolicy() {
	return <PrivacyPolicyPage />;
}