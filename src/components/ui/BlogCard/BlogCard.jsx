'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './BlogCard.css';

const BlogCard = ({ post }) => {
	const { slug, category, title, date, excerpt, heroImage } = post;

	return (
		<article className="blog-card-item">
			<Link href={`/blog/${slug}`} className="blog-card-image-link">
				<div className="blog-card-image-container">
					<Image 
						src={heroImage} 
						alt={`${title} - LexVuIP legal insights`}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="blog-card-img"
					/>
					<div className="blog-card-overlay">
						<span className="blog-card-read-more">Read Article</span>
					</div>
				</div>
			</Link>
			
			<div className="blog-card-content">
				<div className="blog-card-top">
					<span className="blog-card-badge">{category}</span>
					<span className="blog-card-date">{date}</span>
				</div>
				
				<h3 className="blog-card-heading">
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h3>
				
				<p className="blog-card-excerpt">{excerpt}</p>
				
				<Link href={`/blog/${slug}`} className="blog-card-link">
					Read More <span className="arrow">→</span>
				</Link>
			</div>
		</article>
	);
};

export default BlogCard;
