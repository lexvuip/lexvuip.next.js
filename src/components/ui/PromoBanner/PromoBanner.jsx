import Link from 'next/link';
import './PromoBanner.css';

function PromoBanner() {
	return (
		<div className="promo-banner">
			<Link href="/contact#book-appointment" className="promo-banner-link">
				<span className="promo-banner-text-full">
					25+ Years of IP Excellence — Book Your Free 30-Min Consultation
				</span>
				<span className="promo-banner-text-mobile">
					Book Your Free 30-Min Consultation
				</span>
			</Link>
		</div>
	);
}

export default PromoBanner;
