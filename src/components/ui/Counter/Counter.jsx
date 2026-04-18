'use client';

import { useState, useEffect, useRef } from 'react';
import './Counter.css';

export default function Counter({ end, duration = 2, suffix = '', prefix = '', className = '', separator = '' }) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const counterRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) return;

		let startTime;
		const animateCount = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
			const easeProgress = 1 - Math.pow(1 - progress, 3);
			
			setCount(Math.floor(easeProgress * end));

			if (progress < 1) {
				requestAnimationFrame(animateCount);
			} else {
				setCount(end);
			}
		};

		requestAnimationFrame(animateCount);
	}, [isVisible, end, duration]);

	const formatNumber = (num) => {
		if (!separator) return num;
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
	};

	const combinedClass = `counter-value ${className}`.trim();

	return (
		<span ref={counterRef} className={combinedClass}>
			{prefix}{formatNumber(count)}{suffix}
		</span>
	);
}