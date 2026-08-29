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

function ContentBlock({ block }) {
	if (block.type === 'list') {
		const Tag = block.ordered ? 'ol' : 'ul';
		return (
			<Tag className={`blogpost-list${block.ordered ? ' is-ordered' : ''}`}>
				{block.items.map((item, i) => (
					<li key={i} dangerouslySetInnerHTML={{ __html: renderBody(item) }} />
				))}
			</Tag>
		);
	}
	return <p className="blogpost-body" dangerouslySetInnerHTML={{ __html: renderBody(block.text) }} />;
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function formatBlogDate(value) {
	if (!value) return '';
	const raw = String(value).trim();
	const [m, d, y] = raw.includes('/') ? raw.split('/') : raw.split('-');
	const monthIdx = parseInt(m, 10) - 1;
	const day = parseInt(d, 10);
	const year = parseInt(y, 10);
	if (Number.isNaN(monthIdx) || Number.isNaN(day) || Number.isNaN(year)) return raw;
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const mod100 = day % 100;
	let suffix = 'th';
	if (mod100 < 11 || mod100 > 13) {
		if (day % 10 === 1) suffix = 'st';
		else if (day % 10 === 2) suffix = 'nd';
		else if (day % 10 === 3) suffix = 'rd';
	}
	return `${months[monthIdx]} ${day}${suffix}, ${year}`;
}

function countWordsInPost(post) {
	if (!post) return 0;
	let count = 0;
	if (post.excerpt) count += String(post.excerpt).trim().split(/\s+/).filter(Boolean).length;
	if (Array.isArray(post.content)) {
		for (const sec of post.content) {
			if (sec.heading) count += String(sec.heading).trim().split(/\s+/).filter(Boolean).length;
			if (Array.isArray(sec.blocks)) {
				for (const block of sec.blocks) {
					if (block.type === 'list' && Array.isArray(block.items)) {
						for (const item of block.items) {
							count += String(item).trim().split(/\s+/).filter(Boolean).length;
						}
					} else if (block.text) {
						count += String(block.text).trim().split(/\s+/).filter(Boolean).length;
					}
				}
			} else if (sec.body) {
				count += String(sec.body).trim().split(/\s+/).filter(Boolean).length;
			}
		}
	}
	return count;
}

function getReadTime(post) {
	const words = countWordsInPost(post);
	const minutes = Math.max(1, Math.round(words / 200));
	return `${minutes} min read`;
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

				<header className="blogpost-header">
					<h1 className="blogpost-title">{post.title}</h1>
					<div className="blogpost-meta">
						<div className="blogpost-meta-left">
							<span className="blogpost-category">{post.category}</span>
							{post.authorId && (
								<>
									<span className="blogpost-divider">|</span>
									<span className="blogpost-author">By {author.name}</span>
								</>
							)}
						</div>
						<div className="blogpost-meta-right">
							<span className="blogpost-date">{formatBlogDate(post.date)}</span>
							<span className="blogpost-divider">|</span>
							<span className="blogpost-readtime">{getReadTime(post)}</span>
						</div>
					</div>
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
								{sec.blocks
									? sec.blocks.map((block, i) => <ContentBlock key={i} block={block} />)
									: <ContentBlock block={{ type: 'paragraph', text: sec.body }} />}
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
