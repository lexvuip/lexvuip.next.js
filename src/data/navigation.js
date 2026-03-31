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
				items: ['Utility Patent Drawings', 'Design Patent Drawings', 'Trademark Support']
			},
			{
				href: '/service/paralegalsolutions',
				label: 'Paralegal Solutions',
				items: [
					'Case Management',
					'Docketing Management',
					'E-Filing Services',
					'Contact Management Services',
					'Trial Preparation',
					'Deposition Coordination',
					'Compliance Support'
				]
			},
			{
				href: '/service/customsolutions',
				label: 'Custom Solutions'
			}
		]
	},
	{ href: '/#faq', label: 'FAQ' },
	{ href: '/security', label: 'Security' },
	{ href: '/contact', label: 'Contact Us' }
];
