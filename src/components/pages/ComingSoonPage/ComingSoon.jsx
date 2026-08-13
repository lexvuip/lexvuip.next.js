'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './ComingSoon.css';

export default function ComingSoon() {
	const [mounted, setMounted] = useState(false);
	const glowRef = useRef(null);
	const coreRef = useRef(null);

	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 50);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		const halo = glowRef.current;
		const core = coreRef.current;
		if (!halo || !core) return;

		const reduceMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		let targetX = window.innerWidth / 2;
		let targetY = window.innerHeight / 2;
		let haloX = targetX;
		let haloY = targetY;
		let coreX = targetX;
		let coreY = targetY;
		let prevX = targetX;
		let prevY = targetY;
		let velocity = 0;
		let raf;

		const onPointerMove = (e) => {
			targetX = e.clientX;
			targetY = e.clientY;
		};

		// When the cursor leaves the page, glide the glow back to center.
		const onPointerLeave = () => {
			targetX = window.innerWidth / 2;
			targetY = window.innerHeight / 2;
		};

		const tick = () => {
			// Halo trails slowly, core follows fast — layered parallax depth.
			haloX += (targetX - haloX) * 0.055;
			haloY += (targetY - haloY) * 0.055;
			coreX += (targetX - coreX) * 0.18;
			coreY += (targetY - coreY) * 0.18;

			// Velocity-reactive scale: faster movement, wider glow.
			const dist = Math.hypot(coreX - prevX, coreY - prevY);
			velocity += (dist - velocity) * 0.12;
			prevX = coreX;
			prevY = coreY;
			const boost = 1 + Math.min(velocity / 22, 0.4);

			halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) translate(-50%, -50%) scale(${boost})`;
			core.style.transform = `translate3d(${coreX}px, ${coreY}px, 0) translate(-50%, -50%) scale(${1 + (boost - 1) * 0.6})`;

			raf = requestAnimationFrame(tick);
		};

		if (!reduceMotion) {
			window.addEventListener('pointermove', onPointerMove, { passive: true });
			document.addEventListener('pointerleave', onPointerLeave, { passive: true });
			raf = requestAnimationFrame(tick);
		}

		return () => {
			window.removeEventListener('pointermove', onPointerMove);
			document.removeEventListener('pointerleave', onPointerLeave);
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<main className="coming-soon" role="main">
			<div className="cs-bg" aria-hidden="true">
				<div className="cs-glow" ref={glowRef} />
				<div className="cs-glow-core" ref={coreRef} />
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
