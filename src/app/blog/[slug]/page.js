import React from 'react';
import { blogs } from '../../../data/blogs';
import { authors, defaultAuthor } from '../../../data/authors';
import BlogPost from '../../../components/ui/BlogPost';

function toIsoDate(value) {
	const [m, d, y] = String(value).split('/');
	if (!m || !d || !y) return undefined;
	return new Date(Number(y), Number(m) - 1, Number(d)).toISOString();
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
	const post = blogs.find((b) => b.slug === slug);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	const author = post.authorId ? authors[post.authorId] || defaultAuthor : defaultAuthor;
	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const baseUrl = region === 'IN' ? 'https://lexvuip.in' : 'https://lexvuip.com';

	return {
		title: post.title,
		description: post.excerpt,
		alternates: {
			canonical: `/blog/${slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.excerpt,
			url: `${baseUrl}/blog/${slug}`,
			siteName: 'LexVuIP',
			locale: 'en_US',
			type: 'article',
			publishedTime: toIsoDate(post.date),
			authors: [author.name],
			images: [
				{
					url: post.heroImage,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.excerpt,
			images: [post.heroImage],
		},
	};
}

export async function generateStaticParams() {
	return blogs.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
	const post = blogs.find((b) => b.slug === slug);

	if (!post) {
		return <div>Post Not Found</div>;
	}

	const author = post.authorId ? authors[post.authorId] || defaultAuthor : defaultAuthor;
	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const baseUrl = region === 'IN' ? 'https://lexvuip.in' : 'https://lexvuip.com';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'headline': post.title,
		'description': post.excerpt,
		'image': post.heroImage,
		'datePublished': toIsoDate(post.date),
		'dateModified': toIsoDate(post.date),
		'articleSection': post.category,
		'author': {
			'@type': 'Person',
			'name': author.name,
			'url': `${baseUrl}/about#${author.id}`,
			'jobTitle': author.title,
		},
		'publisher': {
			'@type': 'Organization',
			'name': 'LexVuIP',
			'logo': {
				'@type': 'ImageObject',
				'url': `${baseUrl}/logo.png`,
			},
		},
		'mainEntityOfPage': {
			'@type': 'WebPage',
			'@id': `${baseUrl}/blog/${slug}`,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<BlogPost />
		</>
	);
}
