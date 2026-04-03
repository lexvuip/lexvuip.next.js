import React from 'react';
import { blogs } from '../../data/blogs';
import BlogCard from '../../components/ui/BlogCard';
import './blog.css';

export const metadata = {
	title: 'Insights & Updates | Lexvu IP',
	description: 'Stay updated with the latest trends, regulations, and insights in the legal and IP industry.',
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
		</main>
	);
}
