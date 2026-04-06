import React from 'react';
import { blogs } from '../../data/blogs';
import BlogCard from '../../components/ui/BlogCard';
import Footer from '../../components/layout/Footer/Footer';
import './blog.css';

export const metadata = {
	title: 'Insights & Updates | LexVuIP Blog',
	description: 'Expert insights on patent law, IP filing, trademark protection, and legal process optimization. USPTO, EPO, and WIPO compliance guides for IP attorneys.',
	alternates: {
		canonical: '/blog',
	},
	openGraph: {
		title: 'IP Insights & Legal Updates - LexVuIP Blog',
		description: 'Expert insights on patent law, IP filing strategies, and legal process optimization.',
		url: 'https://lexvuip.github.io/blog',
		siteName: 'LexVuIP',
		images: [
			{
				url: '/og-blog.png',
				width: 1200,
				height: 630,
				alt: 'LexVuIP Blog - IP Insights and Legal Updates',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

export default function BlogIndexPage() {
	return (
		<main className="blog-index-page">
			{/* Hero Section */}
			<section className="blog-hero">
				<div className="blog-hero-container">
					<span className="blog-hero-badge">Our Insights</span>
					<h1 className="blog-hero-title">
						<span className="italic">Legal</span> News & <br />
						Industry Updates
					</h1>
					<p className="blog-hero-desc">
						Deep dives into the evolving landscape of intellectual property, 
						financial regulations, and legal process outsourcing.
					</p>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="blog-grid-section">
				<div className="blog-grid-container">
					<div className="blog-grid-header">
						<h2 className="grid-title">Latest Articles</h2>
						<div className="grid-filter">
							{/* Future: Add category filters here */}
						</div>
					</div>

					<div className="blog-main-grid">
						{blogs.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
