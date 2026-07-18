import { ipServices, paralegalServices, customServices } from './services';

export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{
		href: '/services',
		label: 'Services',
		sections: [
			{
				href: '/service/ipsolutions',
				label: 'IP Solutions',
				items: ipServices.map(s => ({ label: s.title, href: `/service/ipsolutions/${s.slug}` }))
			},
			{
				href: '/service/paralegalsolutions',
				label: 'Paralegal Solutions',
				items: paralegalServices.map(s => ({ label: s.title, href: `/service/paralegalsolutions/${s.slug}` }))
			},
			{
				href: '/service/customsolutions',
				label: 'Custom Solutions',
				items: customServices.map(s => ({ label: s.title, href: `/service/customsolutions/${s.slug}` }))
			}
		]
	},
	{ href: '/#faq', label: 'FAQ' },
	{ href: '/security', label: 'Security' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact Us' }
];
