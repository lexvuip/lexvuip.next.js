'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useNavContext } from './NavContext';
import { navLinks } from '../../../data/navigation';

function ServicesDropdown({ onMouseEnter, onMouseLeave }) {
	const { servicesDropdownOpen, closeServicesDropdown } = useNavContext();
	const [activeIndex, setActiveIndex] = useState(0);

	if (!servicesDropdownOpen) return null;

	const servicesLink = navLinks.find(link => link.label === 'Services');
	if (!servicesLink || !servicesLink.sections) return null;

	const sections = servicesLink.sections;
	const hasCategories = sections.some(section => !section.hideLabel && section.label);
	const safeIndex = Math.min(activeIndex, sections.length - 1);
	const activeSection = sections[safeIndex];

	const handleKeyDown = (e) => {
		if (e.key === 'Escape') {
			closeServicesDropdown();
			document.getElementById('services-menu-button')?.focus();
		}
	};

	if (!hasCategories) {
		return (
			<div
				className="services-dropdown services-dropdown-plain"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				role="menu"
				aria-labelledby="services-menu-button"
				onKeyDown={handleKeyDown}
			>
				{sections.map((section, index) => (
					<ul key={index} role="none" className="services-dropdown-links">
						{section.items && section.items.map((item, itemIndex) => (
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
				))}
			</div>
		);
	}

	return (
		<div
			className="services-dropdown"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			aria-labelledby="services-menu-button"
			onKeyDown={handleKeyDown}
		>
			<div className="services-dropdown-cats" role="tablist" aria-orientation="vertical">
				{sections.map((section, index) => (
					<button
						key={index}
						type="button"
						className="services-dropdown-cat"
						role="tab"
						aria-selected={index === safeIndex}
						onMouseEnter={() => setActiveIndex(index)}
						onClick={() => setActiveIndex(index)}
					>
						{section.label}
					</button>
				))}
			</div>
			<div className="services-dropdown-pane" role="tabpanel">
				<h3 className="services-dropdown-heading">
					<Link href={activeSection.href} onClick={closeServicesDropdown}>
						{activeSection.label}
					</Link>
				</h3>
				{activeSection.blurb && (
					<p className="services-dropdown-blurb">{activeSection.blurb}</p>
				)}
				<ul className="services-dropdown-links">
					{activeSection.items && activeSection.items.map((item, itemIndex) => (
						<li key={itemIndex}>
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
			</div>
		</div>
	);
}

export default ServicesDropdown;
