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
				items: [
					{ label: 'Utility Patent Drawings', href: '/service/ipsolutions/utility-patent-drawings' },
					{ label: 'Design Patent Drawings', href: '/service/ipsolutions/design-patent-drawings' },
					{ label: 'Trademark Support', href: '/service/ipsolutions/trademark-support' }
				]
			},
			{
				href: '/service/paralegalsolutions',
				label: 'Paralegal Solutions',
				items: [
					{ label: 'Case & Docketing Management', href: '/service/paralegalsolutions/case-docketing-management' },
					{ label: 'E-Filing & Compliance Support', href: '/service/paralegalsolutions/efiling-compliance' },
					{ label: 'Contact & Document Management', href: '/service/paralegalsolutions/document-management' },
					{ label: 'Trial Prep & Deposition', href: '/service/paralegalsolutions/trial-prep-deposition' },
					{ label: 'Compliance Support', href: '/service/paralegalsolutions/compliance-support' }
				]
			},
			{
				href: '/service/customsolutions',
				label: 'Custom Solutions',
				items: [
					{ label: 'Tailored Support', href: '/service/customsolutions/tailored-support' },
					{ label: 'Workflow Automation', href: '/service/customsolutions/workflow-automation' },
					{ label: 'Special Consulting', href: '/service/customsolutions/special-consulting' }
				]
			}
		]
	},
	{ href: '/#faq', label: 'FAQ' },
	{ href: '/security', label: 'Security' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact Us' }
];
