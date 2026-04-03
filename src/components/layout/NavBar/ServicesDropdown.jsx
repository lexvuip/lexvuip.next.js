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
			role="menu"
			aria-labelledby="services-menu-button"
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					closeServicesDropdown();
					document.getElementById('services-menu-button')?.focus();
				}
			}}
		>
			{servicesLink.sections.map((section, index) => (
				<div key={index} className="services-dropdown-section" role="none">
					<div className="services-dropdown-title" role="none">
						<Link 
							href={section.href} 
							onClick={closeServicesDropdown}
							role="menuitem"
						>
							{section.label}
						</Link>
					</div>
					{section.items && (
						<ul role="none">
							{section.items.map((item, itemIndex) => (
								<li key={itemIndex} role="none">
									<Link 
										href={item.href} 
										onClick={closeServicesDropdown}
										role="menuitem"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
}

export default ServicesDropdown;
