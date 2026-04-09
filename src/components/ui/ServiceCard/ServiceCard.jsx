'use client';

import './ServiceCard.css';
import AboutReveal from '../AboutReveal';
import Image from 'next/image';

import Link from 'next/link';

function ServiceCard({ image, title, desc, href }) {
	const baseImage = image.replace('-1920.webp', '');
	const CardContent = (
		<div className="luxury-service-card">
			<div className="card-visual">
				<div className="card-image-wrapper">
					<Image
						src={image}
						alt={`${title} - Professional IP support service from LexVuIP`}
						fill
						sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
						style={{ objectFit: 'cover' }}
					/>
					<div className="card-overlay"></div>
				</div>
			</div>
			<div className="card-info">
				<h4 className="card-title">{title}</h4>
				<p className="card-description">{desc}</p>
				<div className="card-footer">
					<span className="footer-line"></span>
				</div>
			</div>
		</div>
	);

	return (
		<AboutReveal>
			{href ? (
				<Link href={href} className="card-link-wrapper">
					{CardContent}
				</Link>
			) : (
				CardContent
			)}
		</AboutReveal>
	);
}

export default ServiceCard;
