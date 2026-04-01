'use client';

import HeroActions from '../../ui/HeroActions';
import './HeroSection.css';

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
					Your cases deserve more than routine paperwork. They deserve strategy and accuracy. At LexVu, we take care of the details that protect your clients and free up your time. Our team is trained in filings, trial preparation, managing clients, docket management and patent support. We don't just follow procedure; we raise the standard every time.
				</p>
				<HeroActions />
			</div>
		</header>
	);
}

export default HeroSection;
