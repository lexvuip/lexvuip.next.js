'use client';

import Link from 'next/link';
import { useNavContext } from './NavContext';
import { navLinks } from '../../../data/navigation';

function ServicesDropdown({ onMouseEnter, onMouseLeave }) {
	const { servicesDropdownOpen, closeServicesDropdown } = useNavContext();

	if (!servicesDropdownOpen) return null;

	const servicesLink = navLinks.find(link => link.label === 'Services');
	if (!servicesLink || !servicesLink.sections) return null;

	return (
		<div
			className="services-dropdown"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{servicesLink.sections.map((section, index) => (
				<div key={index} className="services-dropdown-section">
					<div className="services-dropdown-title">
						<Link href={section.href} onClick={closeServicesDropdown}>
							{section.label}
						</Link>
					</div>
					{section.items && (
						<ul>
							{section.items.map((item, itemIndex) => (
								<li key={itemIndex}>{item}</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
}

export default ServicesDropdown;
