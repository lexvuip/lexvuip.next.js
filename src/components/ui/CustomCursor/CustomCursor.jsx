'use client';
import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
	const [enabled, setEnabled] = useState(false);
	const [hovering, setHovering] = useState(false);
	const [down, setDown] = useState(false);
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
		let atomX = mouseX;
		let atomY = mouseY;
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

		const onDown = () => setDown(true);
		const onUp = () => setDown(false);
		const onLeave = () => setVisible(false);
		const onEnter = () => setVisible(true);

		const loop = () => {
			// Gentle lag — the atom settles back onto the pointer when you stop,
			// giving a subtle 3D depth while keeping the nucleus near the point.
			atomX += (mouseX - atomX) * 0.28;
			atomY += (mouseY - atomY) * 0.28;
			if (atomRef.current) {
				atomRef.current.style.transform = `translate3d(${atomX}px, ${atomY}px, 0)`;
			}
			raf = requestAnimationFrame(loop);
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		document.addEventListener('mouseover', onOver);
		document.addEventListener('mouseout', onOut);
		window.addEventListener('mousedown', onDown);
		window.addEventListener('mouseup', onUp);
		document.documentElement.addEventListener('mouseleave', onLeave);
		document.documentElement.addEventListener('mouseenter', onEnter);

		raf = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('mousemove', onMove);
			document.removeEventListener('mouseover', onOver);
			document.removeEventListener('mouseout', onOut);
			window.removeEventListener('mousedown', onDown);
			window.removeEventListener('mouseup', onUp);
			document.documentElement.removeEventListener('mouseleave', onLeave);
			document.documentElement.removeEventListener('mouseenter', onEnter);
		};
	}, [enabled]);

	if (!enabled) return null;

	return (
		<div
			ref={atomRef}
			className={`cursor-atom${hovering ? ' is-hovering' : ''}${down ? ' is-down' : ''}${visible ? ' is-visible' : ''}`}
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

			<span className="atom-core" />
		</div>
	);
};

export default CustomCursor;
