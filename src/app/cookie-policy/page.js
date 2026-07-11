import CookiePolicyPage from '../../components/pages/CookiePage/CookiePage';

export const metadata = {
	title: 'Cookie Policy - LexVu | How We Use Cookies',
	description: 'Understand how LexVu uses cookies and similar technologies to improve your browsing experience on our website.',
	keywords: ['cookie policy', 'cookies', 'tracking', 'LexVu cookies'],
	alternates: {
		canonical: '/cookie-policy',
	},
};

export default function CookiePolicy() {
	return <CookiePolicyPage />;
}