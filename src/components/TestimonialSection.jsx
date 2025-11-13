'use client'
import React, { useState, useEffect } from 'react';
import '../styles/TestimonialSection.css';

const testimonials = [
	
	{
		title : '“Exceptional Quality & Compliance”',
		name: 'Laura S.',
		text: '“LexVuIP delivered drawings that were not only visually precise but perfectly aligned with USPTO and WIPO guidelines. Their team’s technical skill and IP knowledge gave our application a strong foundation. Working with them felt like gaining a strategic partner, not just a vendor.”',
	},
	{
		title : '“Fast, Accurate, and Reliable”',
		name: 'James K.',
		text: '“We had a tight deadline for a utility patent filing and LexVuIP came through with speed and accuracy. Their drawings required no revisions a rare feat. Communication was smooth, and their professionalism shone through every step. A team we trust completely.”',
	},
	{
		title : '“Trusted IP Experts”',
		name: 'Priya N.',
		text: '“LexVuIP has become our go to for all IP illustration needs. Their knowledge of global standards is unmatched, and their attention to detail is outstanding. Whether for design or utility patents, they always deliver work that enhances our filings and impresses our clients.”',
	},
	{
		title : '“A Seamless Experience”',
		name: 'Michael D.',
		text: '“From the first interaction, LexVuIP’s process was clear, efficient, and highly professional. Their team understood our technical requirements and delivered elegant, standards-compliant drawings that elevated our submission. We’ve since partnered with them on multiple filings and every time, the results are excellent.”',
	},
	{
		title : '“IP Visualization Done Right”',
		name: 'Anita R.',
		text: '“LexVuIP blends deep IP expertise with artistic precision. Their illustrations speak the language of both inventors and examiners. They not only meet global standards they set them. For firms serious about IP protection, partnering with LexVuIP is a smart, strategic move.”',
	},
];

function TestimonialSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards([{...testimonials[0], key: 0}]);
    }, []);

	const total = testimonials.length;
	const getWrappedIndex = (index) => (index + total) % total;

	const handleNext = () => {
		if (animating) return;
		setAnimating(true);

        const nextIndex = getWrappedIndex(currentIndex + 1);
        const currentCard = {...testimonials[currentIndex], animation: 'slide-out-right', key: currentIndex};
        const nextCard = {...testimonials[nextIndex], animation: 'slide-in-from-left', key: nextIndex};

        setCards([currentCard, nextCard]);
	};

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);

        const prevIndex = getWrappedIndex(currentIndex - 1);
        const currentCard = {...testimonials[currentIndex], animation: 'slide-out-left', key: currentIndex};
        const prevCard = {...testimonials[prevIndex], animation: 'slide-in-from-right', key: prevIndex};

        setCards([currentCard, prevCard]);
    }

	const onAnimationEnd = (animationName) => {
        if (animationName && animationName.includes('in')) {
            const newIndex = cards.find(c => c.animation.includes('in')).key;
            setCurrentIndex(newIndex);
            setCards([{...testimonials[newIndex], key: newIndex}]);
            setAnimating(false);
        }
	};

	return (
		<section className="testimonial-section">
			<div className="testimonial-container">
				<h2 className="testimonial-heading">WHAT OUR CLIENTS SAY</h2>
				<div className="testimonial-carousel-container">
					<div className="testimonial-cards-row">
                        {cards.map(card => (
                            <div
                                key={card.key}
                                className={`testimonial-card card-center ${card.animation || ''}`}
                                onAnimationEnd={() => onAnimationEnd(card.animation)}
                            >
                                <h3 style={{fontSize: "1.15rem", marginBottom: "1.5rem", marginTop: "1rem", color: "var(--color-dark-text)", fontFamily: "var(--font-serif)"}}>{card.title}</h3>
                                <div className="testimonial-text">{card.text}</div>
                                <div className="testimonial-name">— {card.name}</div>
                            </div>
                        ))}
					</div>
				</div>
				<div className="testimonial-nav-row">
					<button
						className="testimonial-nav-btn"
						onClick={handlePrev}
						aria-label="Previous testimonials"
						disabled={animating}
					>
						&#8592;
					</button>
					<button
						className="testimonial-nav-btn"
						onClick={handleNext}
						aria-label="Next testimonials"
						disabled={animating}
					>
						&#8594;
					</button>
				</div>
			</div>
		</section>
	);
}

export default TestimonialSection;
