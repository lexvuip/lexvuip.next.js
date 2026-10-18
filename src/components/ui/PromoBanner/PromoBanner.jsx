'use client';

import { useState } from 'react';
import BookingModal from '../../pages/ContactPage/BookingModal';
import './PromoBanner.css';

function PromoBanner() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="promo-banner">
			<button
				type="button"
				className="promo-banner-link"
				aria-haspopup="dialog"
				onClick={() => setIsOpen(true)}
			>
				<span className="promo-banner-text-full">
					25+ Years of IP Excellence — Book Your Free 30-Min Consultation
				</span>
				<span className="promo-banner-text-mobile">
					Book Your Free 30-Min Consultation
				</span>
			</button>
			<BookingModal open={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	);
}

export default PromoBanner;
