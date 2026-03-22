'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function AboutStats() {
	const [startCount, setStartCount] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector('.about-stats-row');
			const rect = section?.getBoundingClientRect();
			if (rect?.top < window.innerHeight && !startCount) {
				setStartCount(true);
			}
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [startCount]);

	return (
		<div className="about-stats-row">
			<div
				className={`about-stat ${startCount ? 'revealed' : ''}`}
				style={{ '--about-stat-delay': '0s' }}
			>
				<div className="about-stat-value">
					{startCount ? <CountUp end={25} duration={2.5} suffix="+ Yr" /> : "25+ Yr"}
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
					{startCount ? <CountUp end={46} duration={2.5} suffix="+" /> : "46+"}
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
					{startCount ? <CountUp end={98} duration={2.0} suffix="%" /> : "98%"}
				</div>
				<div className="about-stat-label">Client Satisfaction Worldwide</div>
			</div>

			<div
				className={`about-stat ${startCount ? 'revealed' : ''}`}
				style={{ '--about-stat-delay': '0.36s' }}
			>
				<div className="about-stat-value">
					{startCount ? (
						<CountUp end={121177} duration={1.5} separator="," suffix="+" />
					) : "121,177+"}
				</div>
				<div className="about-stat-label">
					Combined Legal projects Successfully Delivered
				</div>
			</div>
		</div>
	);
}
