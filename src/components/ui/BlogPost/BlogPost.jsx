'use client';
import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '../../../data/blogs';
import { authors, defaultAuthor } from '../../../data/authors';
import Breadcrumbs from '../Breadcrumbs';
import BlogCard from '../BlogCard/BlogCard';
import BlogTOC from './BlogTOC';
import './BlogPost.css';

function renderBody(text) {
	return text
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function BlogPost() {
	const { slug } = useParams();
	const router = useRouter();

	const post = useMemo(() => blogs.find((b) => b.slug === slug), [slug]);
	const author = useMemo(() => {
		if (!post || !post.authorId) return defaultAuthor;
		return authors[post.authorId] || defaultAuthor;
	}, [post]);
	const related = useMemo(
		() => blogs.filter((b) => b.slug !== slug).slice(0, 3),
		[slug]
	);

	if (!post) {
		return (
			<section className="blogpost-section">
				<div className="blogpost-container">
					<Breadcrumbs />
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
				<Breadcrumbs />
				<button className="blogpost-back" onClick={() => router.push('/blog')}>
					<span className="arrow">←</span> Back to Blog
				</button>
				
				<header className="blogpost-header">
					<div className="blogpost-meta">
						<span className="blogpost-category">{post.category}</span>
						<span className="blogpost-divider">|</span>
						<span className="blogpost-date">{post.date}</span>
						{post.authorId && (
							<>
								<span className="blogpost-divider">|</span>
								<span className="blogpost-author">By {author.name}</span>
							</>
						)}
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
					<aside className="toc-sidebar">
						<div className="toc-sticky">
							<BlogTOC sections={post.content?.filter(s => s.heading && s.heading !== 'Legal Note')} />
						</div>
					</aside>

					<article className="blogpost-content">
						{post.content?.map((sec, idx) => (
							<section
								key={idx}
								className={`blogpost-section-block${sec.heading === 'Legal Note' ? ' legal-note-block' : ''}`}
							>
								{sec.heading && (
									<h2
										className="blogpost-subheading"
										id={slugify(sec.heading)}
									>
										{sec.heading}
									</h2>
								)}
								<p className="blogpost-body" dangerouslySetInnerHTML={{ __html: renderBody(sec.body) }} />
							</section>
						))}
					</article>
				</div>

				{post.authorId && author && (
					<aside className="blogpost-author-bio">
						<div className="author-avatar">
							<Image 
								src={author.image} 
								alt={author.name}
								width={80}
								height={80}
								className="author-image"
							/>
						</div>
						<div className="author-info">
							<h3 className="author-name">{author.name}</h3>
							<p className="author-title">{author.title}</p>
							<p className="author-bio-text">{author.bio}</p>
						</div>
					</aside>
				)}

				<div className="blogpost-related">
					<div className="blog-related-header">
						<h2 className="related-title">You may like</h2>
						<Link href="/blog" className="blog-all-link">
							View All <span className="arrow">→</span>
						</Link>
					</div>
					<div className="blog-related-grid">
						{related.map((r) => (
							<BlogCard key={r.id} post={r} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BlogPost;
