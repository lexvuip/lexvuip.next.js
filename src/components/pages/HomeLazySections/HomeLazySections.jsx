'use client';

import dynamic from 'next/dynamic';

const TestimonialSection = dynamic(
	() => import('../../sections/TestimonialSection'),
	{
		loading: () => <div className="section-loading">Loading testimonials...</div>,
		ssr: false,
	}
);

const FAQSection = dynamic(
	() => import('../../sections/FAQSection'),
	{
		loading: () => <div className="section-loading">Loading FAQ...</div>,
		ssr: false,
	}
);

export default function HomeLazySections() {
	return (
		<>
			<TestimonialSection />
			<FAQSection />
		</>
	);
}
