'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useNavContext } from './NavContext';
import useToggle from '../../../hooks/useToggle';
import { navLinks } from '../../../data/navigation';
import Button from '../../ui/Button';

function MobileMenu() {
	const { mobileMenuOpen, closeMobileMenu } = useNavContext();
	const [ipSolutionsOpen, toggleIpSolutions] = useToggle();
	const [paralegalSolutionsOpen, toggleParalegalSolutions] = useToggle();
	const [customSolutionsOpen, toggleCustomSolutions] = useToggle();
	const [servicesOpen, toggleServices] = useToggle();

	const handleLinkClick = useCallback(() => {
		closeMobileMenu();
	}, [closeMobileMenu]);

	const servicesLink = navLinks.find(link => link.label === 'Services');

	return (
		<div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
			<div className="mobile-nav-content">
				<ul className="mobile-nav-links">
					{navLinks.map((link, index) => {
						if (link.label === 'Services') {
							return (
								<li key={index} className="mobile-services-item">
									<div className="mobile-services-toggle">
										<Link
											href={link.href}
											onClick={handleLinkClick}
											className="mobile-services-title"
										>
											<span>Services</span>
										</Link>
										<button
											className="mobile-arrow-btn"
											onClick={toggleServices}
										>
											<span className={`mobile-arrow ${servicesOpen ? 'open' : ''}`}>▼</span>
										</button>
									</div>
									<div className={`mobile-services-dropdown ${servicesOpen ? 'open' : ''}`}>
										{servicesLink?.sections?.map((section, sectionIndex) => (
											<div key={sectionIndex} className="mobile-services-section">
												<div className="mobile-services-title-toggle">
													<Link
														href={section.href}
														onClick={handleLinkClick}
														className="mobile-services-section-title"
													>
														<span>{section.label}</span>
													</Link>
													{section.items && (
														<button
															className="mobile-sub-arrow-btn"
															onClick={
																section.label === 'IP Solutions'
																	? toggleIpSolutions
																	: section.label === 'Paralegal Solutions'
																		? toggleParalegalSolutions
																		: toggleCustomSolutions
															}
														>
														<span className={`mobile-sub-arrow ${
															section.label === 'IP Solutions'
																? (ipSolutionsOpen ? 'open' : '')
																: section.label === 'Paralegal Solutions'
																	? (paralegalSolutionsOpen ? 'open' : '')
																	: (customSolutionsOpen ? 'open' : '')
														}`}>▼</span>
														</button>
													)}
												</div>
												{section.items && (
														<div className={`mobile-services-sub-dropdown ${
															section.label === 'IP Solutions'
																? (ipSolutionsOpen ? 'open' : '')
																: section.label === 'Paralegal Solutions'
																	? (paralegalSolutionsOpen ? 'open' : '')
																	: (customSolutionsOpen ? 'open' : '')
														}`}>
														<ul className="mobile-services-list">
															{section.items.map((item, itemIndex) => (
																<li key={itemIndex}>{item}</li>
															))}
														</ul>
													</div>
												)}
											</div>
										))}
									</div>
								</li>
							);
						}
						return (
							<li key={index}>
								<Link href={link.href} onClick={handleLinkClick}>
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="mobile-nav-contact">
					<Button className="btn-inverted">Get In Touch</Button>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
