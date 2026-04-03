'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavProvider, useNavContext } from './NavContext';
import ServicesDropdown from './ServicesDropdown';
import MobileMenu from './MobileMenu';
import Button from '../../ui/Button';
import useScrollPosition from '../../../hooks/useScrollPosition';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { navLinks } from '../../../data/navigation';
import './NavBar.css';

import { useRef, useEffect } from 'react';

function DesktopNav() {
	const { servicesDropdownOpen, openServicesDropdown, closeServicesDropdown } = useNavContext();
	const timeoutRef = useRef(null);

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		openServicesDropdown();
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			closeServicesDropdown();
		}, 120);
	};

	return (
		<ul className="navbar-links">
			{navLinks.map((link, index) => {
				if (link.label === 'Services') {
					return (
						<li
							key={index}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="navbar-services-dropdown-parent"
						>
							<Link 
								href={link.href} 
								onClick={closeServicesDropdown}
								aria-haspopup="true"
								aria-expanded={servicesDropdownOpen}
								id="services-menu-button"
							>
								{link.label}
							</Link>
							<ServicesDropdown 
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							/>
						</li>
					);
				}
				return (
					<li key={index}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				);
			})}
		</ul>
	);
}

function HamburgerButton() {
	const { toggleMobileMenu, mobileMenuOpen } = useNavContext();

	return (
		<div className="mobile-menu-btn" onClick={toggleMobileMenu}>
			<div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}

function NavBar() {
	const scrolled = useScrollPosition(100);
	const isMobile = useMediaQuery('(max-width: 768px)');
	const pathname = usePathname();
	const isHomePage = pathname === '/';
	const shouldShowTransparent = isHomePage && !scrolled;

	return (
		<NavProvider>
			<nav className={`navbar ${shouldShowTransparent ? 'transparent' : 'scrolled'}`}>
				<Link href="/" className="navbar-logo">
					<img src="/logo.png" alt="LexVuIP Logo" className="navbar-logo-img" />
					LexVuIP
				</Link>
				<DesktopNav />
				<div className="navbar-contact">
					<Button href="/contact" className="btn-inverted" arrow>Get In Touch</Button>
				</div>
				<HamburgerButton />
			</nav>
			<MobileMenu />
		</NavProvider>
	);
}

export default NavBar;
