import React from 'react';
import { blogs } from '../../../data/blogs';
import BlogPost from '../../../components/ui/BlogPost';

export async function generateMetadata({ params }) {
    const { slug } = await params;
	const post = blogs.find((b) => b.slug === slug);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	return {
		title: post.title,
		description: post.excerpt,
		alternates: {
			canonical: `/blog/${slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.excerpt,
			url: `https://lexvuip.github.io/blog/${slug}`,
			type: 'article',
			publishedTime: post.date,
			authors: ['LexVuIP'],
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

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'headline': post.title,
		'description': post.excerpt,
		'image': post.heroImage,
		'datePublished': post.date,
		'author': [
			{
				'@type': 'Organization',
				'name': 'LexVuIP',
				'url': 'https://lexvuip.github.io',
			},
		],
		'publisher': {
			'@type': 'Organization',
			'name': 'LexVuIP',
			'logo': {
				'@type': 'ImageObject',
				'url': 'https://lexvuip.github.io/logo.png',
			},
		},
		'mainEntityOfPage': {
			'@type': 'WebPage',
			'@id': `https://lexvuip.github.io/blog/${slug}`,
		},
	};

	const breadcrumbJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'itemListElement': [
			{
				'@type': 'ListItem',
				'position': 1,
				'name': 'Home',
				'item': 'https://lexvuip.github.io/',
			},
			{
				'@type': 'ListItem',
				'position': 2,
				'name': 'Blog',
				'item': 'https://lexvuip.github.io/blog',
			},
			{
				'@type': 'ListItem',
				'position': 3,
				'name': post.title,
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			<BlogPost />
		</>
	);
}
