'use client';

import { useEffect, useState, useRef } from 'react';
import Counter from '../../ui/Counter';
import './AboutStats.css';

export default function AboutStats() {
	const [startCount, setStartCount] = useState(false);
	const statsRef = useRef(null);

	useEffect(() => {
		if (!statsRef.current) return;

		const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
		const threshold = isMobile ? 0.1 : 0.3;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStartCount(true);
				}
			},
			{ threshold }
		);

		observer.observe(statsRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div className="about-stats-container">
			<div ref={statsRef} className="about-stats-row">
				<div
					className={`about-stat ${startCount ? 'revealed' : ''}`}
					style={{ '--about-stat-delay': '0s' }}
				>
				<div className="about-stat-value">
					{startCount ? <Counter end={25} duration={2.5} suffix="+ Yr" /> : "25+ Yr"}
				</div>
				<div className="about-stat-label">
					Serving Individuals & Businesses
				</div>
			</div>
			<div
				className={`about-stat ${startCount ? 'revealed' : ''}`}
				style={{ '--about-stat-delay': '0.12s' }}
			>
				<div className="about-stat-value">
					{startCount ? <Counter end={46} duration={2.5} suffix="+" /> : "46+"}
				</div>
				<div className="about-stat-label">
					Technical Fields & Sectors Covered
				</div>
			</div>

			<div
				className={`about-stat ${startCount ? 'revealed' : ''}`}
				style={{ '--about-stat-delay': '0.24s' }}
			>
				<div className="about-stat-value">
					{startCount ? <Counter end={98} duration={2.0} suffix="%" /> : "98%"}
				</div>
				<div className="about-stat-label">Client Satisfaction Worldwide</div>
			</div>

			<div
				className={`about-stat ${startCount ? 'revealed' : ''}`}
				style={{ '--about-stat-delay': '0.36s' }}
			>
				<div className="about-stat-value">
					{startCount ? (
						<Counter end={121177} duration={1.5} separator="," suffix="+" />
					) : "121,177+"}
				</div>
				<div className="about-stat-label">
					Combined Legal projects Successfully Delivered
				</div>
			</div>
		</div>
	</div>
	);
}
