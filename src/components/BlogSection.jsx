'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import '../styles/BlogSection.css';

const posts = [
	{
		id: 1,
		category: 'Process',
		title: 'Understanding the New Financial Issues and Regulations',
		date: '11/6/2025',
		image:
			'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 2,
		category: 'Finance',
		title: 'Understanding the New Financial Issues',
		date: '11/6/2025',
		image:
			'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 3,
		category: 'Insights',
		title: 'Key Considerations for Your Next IP Filing',
		date: '11/5/2025',
		image:
			'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 4,
		category: 'Updates',
		title: 'Recent Changes at Major Patent Offices Worldwide',
		date: '11/4/2025',
		image:
			'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
	},
];

function BlogSection() {
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
					<div className="blog-badge">Blog</div>
					<h2 className="blog-title">
						<span className="italic">Legal</span> News & Insights
					</h2>
					<a href="#" className="blog-all-btn">
						All Blogs <span className="arrow">→</span>
					</a>
				</div>

				<div className="blog-grid">
					{posts.map((post) => (
						<article key={post.id} className="blog-card">
							<Link href={`/blog/${post.id}`} className="blog-image-wrapper">
								<img src={post.image} alt={post.title} className="blog-image" />
							</Link>
							<div className="blog-card-body">
								<span className="blog-category">{post.category}</span>
								<h3 className="blog-card-title">
									<Link href={`/blog/${post.id}`}>{post.title}</Link>
								</h3>
								<div className="blog-date">{post.date}</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default BlogSection;
