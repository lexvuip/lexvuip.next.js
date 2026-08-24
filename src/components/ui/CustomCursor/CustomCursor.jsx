'use client';
import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
	const [enabled, setEnabled] = useState(false);
	const [hovering, setHovering] = useState(false);
	const [visible, setVisible] = useState(false);

	const atomRef = useRef(null);

	useEffect(() => {
		// Enable on devices with a precise pointer (mouse/trackpad).
		// Fall back to enabling on any device without touch as primary input,
		// so laptops/desktops always get the custom cursor.
		const fine = window.matchMedia('(pointer: fine)').matches;
		const coarse = window.matchMedia('(pointer: coarse)').matches;
		const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		if (fine || (!coarse && !hasTouch)) {
			setEnabled(true);
			document.documentElement.classList.add('custom-cursor-active');
		}
		return () => document.documentElement.classList.remove('custom-cursor-active');
	}, []);

	useEffect(() => {
		if (!enabled) return;

		let mouseX = window.innerWidth / 2;
		let mouseY = window.innerHeight / 2;
		let raf = null;

		const onMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			setVisible(true);
		};

		const onOver = (e) => {
			if (e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]')) {
				setHovering(true);
			}
		};
		const onOut = (e) => {
			if (e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]')) {
				setHovering(false);
			}
		};

		const onLeave = () => setVisible(false);
		const onEnter = () => setVisible(true);

		const loop = () => {
			// Rings track the pointer exactly — the native cursor is the nucleus,
			// so the atom must stay centered on it with no lag.
			if (atomRef.current) {
				atomRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
			}
			raf = requestAnimationFrame(loop);
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		document.addEventListener('mouseover', onOver);
		document.addEventListener('mouseout', onOut);
		document.documentElement.addEventListener('mouseleave', onLeave);
		document.documentElement.addEventListener('mouseenter', onEnter);

		raf = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('mousemove', onMove);
			document.removeEventListener('mouseover', onOver);
			document.removeEventListener('mouseout', onOut);
			document.documentElement.removeEventListener('mouseleave', onLeave);
			document.documentElement.removeEventListener('mouseenter', onEnter);
		};
	}, [enabled]);

	if (!enabled) return null;

	return (
		<div
			ref={atomRef}
			className={`cursor-atom${hovering ? ' is-hovering' : ''}${visible ? ' is-visible' : ''}`}
			aria-hidden="true"
		>
			{/* Two rotors spinning in opposite directions — proper atomic structure */}
			<div className="atom-rotor cw">
				<span className="orbit" />
				<span className="orbit" />
			</div>
			<div className="atom-rotor ccw">
				<span className="orbit" />
				<span className="orbit" />
			</div>

			{/* Twinkling particle field orbiting the nucleus in 3D */}
			<div className="atom-particles">
				<span className="particle" />
				<span className="particle" />
				<span className="particle" />
				<span className="particle" />
				<span className="particle" />
				<span className="particle" />
				<span className="particle" />
				<span className="particle" />
			</div>
		</div>
	);
};

export default CustomCursor;
