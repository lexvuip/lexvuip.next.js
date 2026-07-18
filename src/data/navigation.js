import { ipServices, paralegalServices, customServices } from './services';

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const isIndia = region === 'IN';

let servicesSections = [];

if (isIndia) {
	for (let i = 0; i < ipServices.length; i += 3) {
		servicesSections.push({
			hideLabel: true,
			items: ipServices.slice(i, i + 3).map(s => ({ label: s.title, href: `/service/ipsolutions/${s.slug}` }))
		});
	}
} else {
	servicesSections = [
		{
			href: '/service/ipsolutions',
			label: 'IP Solutions',
			items: ipServices.map(s => ({ label: s.title, href: `/service/ipsolutions/${s.slug}` }))
		},
		...(paralegalServices.length > 0 ? [{
			href: '/service/paralegalsolutions',
			label: 'Paralegal Solutions',
			items: paralegalServices.map(s => ({ label: s.title, href: `/service/paralegalsolutions/${s.slug}` }))
		}] : []),
		...(customServices.length > 0 ? [{
			href: '/service/customsolutions',
			label: 'Custom Solutions',
			items: customServices.map(s => ({ label: s.title, href: `/service/customsolutions/${s.slug}` }))
		}] : [])
	];
}

export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{
		href: '/services',
		label: 'Services',
		sections: servicesSections
	},
	{ href: '/#faq', label: 'FAQ' },
	{ href: '/security', label: 'Security' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact Us' }
];
