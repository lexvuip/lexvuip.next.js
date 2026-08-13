'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './ComingSoon.css';

export default function ComingSoon() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 50);
		return () => clearTimeout(t);
	}, []);

	return (
		<main className="coming-soon" role="main">
			<div className="cs-bg" aria-hidden="true">
				<div className="cs-glow" />
				<div className="cs-grain" />
				<div className="cs-grid-lines" />
			</div>

			<div className={`cs-content${mounted ? ' is-mounted' : ''}`}>
				<div className="cs-logo">
					<Image
						src="/logo-white.png"
						alt="LexVuIP"
						width={220}
						height={56}
						priority
						className="cs-logo-img"
					/>
				</div>

				<span className="cs-eyebrow">LexVuIP · India</span>

				<div className="cs-rule" aria-hidden="true" />

				<h1 className="cs-headline">
					<span className="cs-word">Coming</span>
					<span className="cs-word cs-word--italic">Soon</span>
				</h1>

				<p className="cs-subtext">
					We&apos;re crafting something exceptional for India — precision
					intellectual property and paralegal services, tailored to the Indian
					Patent Office and beyond.
				</p>

				<a className="cs-contact" href="mailto:inbox@lexvuip.com">
					Get in touch
					<span className="cs-arrow" aria-hidden="true">→</span>
				</a>

				<p className="cs-footnote">
					Global site:{' '}
					<a href="https://lexvuip.com" className="cs-global-link">
						lexvuip.com
					</a>
				</p>
			</div>
		</main>
	);
}
