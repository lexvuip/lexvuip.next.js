'use client';
import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '../../../data/blogs';
import './BlogPost.css';

function BlogPost() {
	const { slug } = useParams();
	const router = useRouter();

	const post = useMemo(() => blogs.find((b) => b.slug === slug), [slug]);
	const related = useMemo(
		() => blogs.filter((b) => b.slug !== slug).slice(0, 3),
		[slug]
	);

	if (!post) {
		return (
			<section className="blogpost-section">
				<div className="blogpost-container">
					<p>Post not found.</p>
					<button className="blogpost-back" onClick={() => router.push('/blog')}>
						Back to Blog
					</button>
				</div>
			</section>
		);
	}

	return (
		<section className="blogpost-section">
			<div className="blogpost-container">
				<button className="blogpost-back" onClick={() => router.push('/blog')}>
					<span className="arrow">←</span> Back to Blog
				</button>
				
				<header className="blogpost-header">
					<div className="blogpost-meta">
						<span className="blogpost-category">{post.category}</span>
						<span className="blogpost-divider">|</span>
						<span className="blogpost-date">{post.date}</span>
					</div>
					<h1 className="blogpost-title">{post.title}</h1>
				</header>

				<div className="blogpost-hero">
					<Image 
						src={post.heroImage} 
						alt={post.title} 
						width={1600} 
						height={900} 
						priority
						className="blogpost-image"
					/>
				</div>

				<div className="blogpost-layout">
					<article className="blogpost-content">
						{post.content?.map((sec, idx) => (
							<section key={idx} className="blogpost-section-block">
								{sec.heading && <h2 className="blogpost-subheading">{sec.heading}</h2>}
								<p className="blogpost-body">{sec.body}</p>
							</section>
						))}
					</article>
				</div>

				<div className="blogpost-related">
					<div className="blog-related-header">
						<h2 className="related-title">Related Insights</h2>
						<Link href="/blog" className="blog-all-link">
							View All <span className="arrow">→</span>
						</Link>
					</div>
					<div className="blog-related-grid">
						{related.map((r) => (
							<article key={r.id} className="related-card">
								<Link
									href={`/blog/${r.slug}`}
									className="related-image-wrapper hover-zoom"
								>
									<Image 
										src={r.heroImage} 
										width={400} 
										height={250} 
										className="related-image" 
										alt={r.title} 
									/>
								</Link>
								<div className="related-card-body">
									<span className="related-category">{r.category}</span>
									<h3 className="related-card-title">
										<Link href={`/blog/${r.slug}`}>{r.title}</Link>
									</h3>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BlogPost;
