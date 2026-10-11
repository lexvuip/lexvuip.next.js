import Link from 'next/link';
import './PromoBanner.css';

function PromoBanner() {
	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const isIndia = region === 'IN';

	return (
		<div className="promo-banner">
			<Link href={isIndia ? '/contact#book-appointment' : '/contact'} className="promo-banner-link">
				{isIndia ? (
					<>
						<span className="promo-banner-text-full">
							25+ Years of IP Excellence — Book Your Free 30-Min Consultation
						</span>
						<span className="promo-banner-text-mobile">
							Book Your Free 30-Min Consultation
						</span>
					</>
				) : (
					<>
						<span className="promo-banner-text-full">
							25+ Years of IP Excellence — Trusted by IP Attorneys Worldwide
						</span>
						<span className="promo-banner-text-mobile">
							Trusted by IP Attorneys Worldwide
						</span>
					</>
				)}
			</Link>
		</div>
	);
}

export default PromoBanner;
