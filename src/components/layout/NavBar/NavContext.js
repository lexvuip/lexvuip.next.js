'use client';

import { createContext, useState, useCallback, useContext } from 'react';

const NavContext = createContext(undefined);

function NavProvider({ children }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleMobileMenu = useCallback(() => {
		setMobileMenuOpen(prev => !prev);
	}, []);

	const closeMobileMenu = useCallback(() => {
		setMobileMenuOpen(false);
		setServicesDropdownOpen(false);
		setActiveDropdown(null);
	}, []);

	const toggleServicesDropdown = useCallback(() => {
		setServicesDropdownOpen(prev => !prev);
	}, []);

	const openServicesDropdown = useCallback(() => {
		setServicesDropdownOpen(true);
	}, []);

	const closeServicesDropdown = useCallback(() => {
		setServicesDropdownOpen(false);
	}, []);

	const contextValue = {
		mobileMenuOpen,
		servicesDropdownOpen,
		activeDropdown,
		setActiveDropdown,
		toggleMobileMenu,
		closeMobileMenu,
		toggleServicesDropdown,
		openServicesDropdown,
		closeServicesDropdown
	};

	return (
		<NavContext.Provider value={contextValue}>
			{children}
		</NavContext.Provider>
	);
}

function useNavContext() {
	const context = useContext(NavContext);
	if (context === undefined) {
		throw new Error('useNavContext must be used within NavProvider');
	}
	return context;
}

export { NavProvider, useNavContext };
