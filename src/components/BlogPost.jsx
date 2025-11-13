'use client';
import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { blogs } from '../data/blogs';
import '../styles/BlogPost.css';

function BlogPost() {
	const { id } = useParams();
	const router = useRouter();

	const post = useMemo(() => blogs.find((b) => b.id === id), [id]);
	const related = useMemo(
		() => blogs.filter((b) => b.id !== id).slice(0, 3),
		[id]
	);

	if (!post) {
		return (
			<section className="blogpost-section">
				<div className="blogpost-container">
					<p>Post not found.</p>
					<button className="blogpost-back" onClick={() => router.back()}>
						Go Back
					</button>
				</div>
			</section>
		);
	}

	return (
		<section className="blogpost-section">
			<div className="blogpost-container">
				<button className="blogpost-back" onClick={() => router.back()}>
					◀ Go Back
				</button>
				<div className="blogpost-meta">{post.category}</div>
				<h1 className="blogpost-title">{post.title}</h1>
				<div className="blogpost-date">{post.date}</div>

				<div className="blogpost-hero">
					<img src={post.heroImage} alt={post.title} />
				</div>

				<article className="blogpost-content">
					{post.content?.map((sec, idx) => (
						<section key={idx} className="blogpost-section-block">
							{sec.heading && <h2>{sec.heading}</h2>}
							<p>{sec.body}</p>
						</section>
					))}
				</article>

				<div className="blogpost-related">
					<div className="blog-header">
						<h2 className="blog-title">Related Blogs</h2>
						<Link href="#" className="blog-all-btn">
							All Blogs <span className="arrow">→</span>
						</Link>
					</div>
					<div className="blog-grid">
						{related.map((r) => (
							<article key={r.id} className="blog-card">
								<Link
							href={`/blog/${r.id}`}
							className="blog-image-wrapper hover-zoom"
						>
									<img src={r.heroImage} className="blog-image" alt={r.title} />
								</Link>
								<div className="blog-card-body">
									<span className="blog-category">{r.category}</span>
									<h3 className="blog-card-title">{r.title}</h3>
									<div className="blog-date">{r.date}</div>
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
