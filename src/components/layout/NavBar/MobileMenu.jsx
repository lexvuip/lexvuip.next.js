'use client';

import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useNavContext } from './NavContext';
import useToggle from '../../../hooks/useToggle';
import { navLinks } from '../../../data/navigation';
import Button from '../../ui/Button';

function MobileMenu() {
	const { mobileMenuOpen, closeMobileMenu } = useNavContext();
	const [ipSolutionsOpen, toggleIpSolutions, setIpSolutionsOpen] = useToggle();
	const [paralegalSolutionsOpen, toggleParalegalSolutions, setParalegalSolutionsOpen] = useToggle();
	const [customSolutionsOpen, toggleCustomSolutions, setCustomSolutionsOpen] = useToggle();
	const [servicesOpen, toggleServices, setServicesOpen] = useToggle();

	const resetAllDropdowns = useCallback(() => {
		setServicesOpen(false);
		setIpSolutionsOpen(false);
		setParalegalSolutionsOpen(false);
		setCustomSolutionsOpen(false);
	}, [setServicesOpen, setIpSolutionsOpen, setParalegalSolutionsOpen, setCustomSolutionsOpen]);

	const handleLinkClick = useCallback(() => {
		closeMobileMenu();
		resetAllDropdowns();
	}, [closeMobileMenu, resetAllDropdowns]);

	useEffect(() => {
		if (!mobileMenuOpen) {
			resetAllDropdowns();
		}
	}, [mobileMenuOpen, resetAllDropdowns]);

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
											aria-label="Toggle services menu"
										>
											<svg 
												className={`mobile-arrow ${servicesOpen ? 'open' : ''}`}
												width="12" 
												height="12" 
												viewBox="0 0 12 12" 
												fill="none" 
												xmlns="http://www.w3.org/2000/svg"
											>
												<path 
													d="M2.5 4.5L6 8L9.5 4.5" 
													stroke="currentColor" 
													strokeWidth="1.5" 
													strokeLinecap="round" 
													strokeLinejoin="round"
												/>
											</svg>
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
														aria-label={`Toggle ${section.label} menu`}
														>
															<svg 
																className={`mobile-sub-arrow ${
																	section.label === 'IP Solutions'
																		? (ipSolutionsOpen ? 'open' : '')
																		: section.label === 'Paralegal Solutions'
																			? (paralegalSolutionsOpen ? 'open' : '')
																			: (customSolutionsOpen ? 'open' : '')
																}`}
																width="10" 
																height="10" 
																viewBox="0 0 12 12" 
																fill="none" 
																xmlns="http://www.w3.org/2000/svg"
															>
																<path 
																	d="M2.5 4.5L6 8L9.5 4.5" 
																	stroke="currentColor" 
																	strokeWidth="1.5" 
																	strokeLinecap="round" 
																	strokeLinejoin="round"
																/>
															</svg>
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
																<li key={itemIndex}>
																	<Link href={item.href} onClick={handleLinkClick}>
																		{item.label}
																	</Link>
																</li>
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
					<Button href="/contact" className="btn-inverted" onClick={handleLinkClick}>Get In Touch</Button>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
