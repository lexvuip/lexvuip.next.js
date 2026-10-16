'use client';

import HeroActions from '../../ui/HeroActions';
import './HeroSection.css';

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';

const renderAnimatedWords = (words, startDelay = 0) => {
	return words.map((word, index) => (
		<span
			key={`${word}-${index}`}
			style={{ animationDelay: `${startDelay + index * 0.08}s` }}
		>
			{word}&nbsp;
		</span>
	));
};

function HeroSection() {
	return (
		<header className="hero-section">
			<div className="hero-content">
				<h1 className="hero-title">
					{renderAnimatedWords(
						['Precision', 'in', 'Every', 'Filing'],
						0
					)}
					<br />
					{renderAnimatedWords(
						['Clarity', 'in', 'Every', 'Design.'],
						0.6
					)}
				</h1>
				<p className="hero-description">
					{region === 'IN'
						? 'At LexVuIP India, we take care of the details that protect your innovation and free up your time. From patent prosecution to drawings, trademark filing to litigation support, our team is trained across the full IP lifecycle for attorneys, startups, and inventors alike. We don\u2019t just follow procedure; we raise the standard every time.'
						: 'Your cases deserve more than routine paperwork. They deserve strategy and accuracy. At LexVu, we take care of the details that protect your clients and free up your time. Our team is trained in filings, trial preparation, managing clients, docket management and patent support. We don\u2019t just follow procedure; we raise the standard every time.'}
				</p>
				<HeroActions />
			</div>
		</header>
	);
}

export default HeroSection;
