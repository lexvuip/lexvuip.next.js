'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '../../../data/blogs';
import './BlogSection.css';

function BlogSection() {
	// Only show the latest 4 blogs on the home page
	const latestBlogs = blogs.slice(0, 4);

	useEffect(() => {
		const section = document.getElementById('blogs');
		if (!section) return;
		const targets = section.querySelectorAll('.blog-badge, .blog-title');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);
		targets.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<section id="blogs" className="blog-section">
			<div className="blog-container">
				<div className="blog-header">
					<div className="blog-badge">Insights</div>
					<h2 className="blog-title">
						<span className="italic">Legal</span> News & <br className="mobile-break" /> Industry Updates
					</h2>
					<Link href="/blog" className="blog-all-btn">
						All Insights <span className="arrow">→</span>
					</Link>
				</div>

				<div className="blog-grid">
					{latestBlogs.map((post) => (
						<article key={post.id} className="blog-card">
							<Link href={`/blog/${post.slug}`} className="blog-image-wrapper">
								<Image 
									src={post.heroImage} 
									alt={post.title} 
									width={600} 
									height={400} 
									className="blog-image" 
								/>
								<div className="blog-image-overlay">
									<span>Read More</span>
								</div>
							</Link>
							<div className="blog-card-body">
								<div className="blog-card-meta">
									<span className="blog-category">{post.category}</span>
									<span className="blog-date">{post.date}</span>
								</div>
								<h3 className="blog-card-title">
									<Link href={`/blog/${post.slug}`}>{post.title}</Link>
								</h3>
								<p className="blog-card-excerpt">{post.excerpt}</p>
								<Link href={`/blog/${post.slug}`} className="blog-read-link">
									Read Article <span className="arrow">→</span>
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default BlogSection;
