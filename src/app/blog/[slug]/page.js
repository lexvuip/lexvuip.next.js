import React from 'react';
import { blogs } from '../../../data/blogs';
import BlogPost from '../../../components/ui/BlogPost';

export async function generateMetadata({ params }) {
    const { slug } = await params;
	const post = blogs.find((b) => b.slug === slug);

	if (!post) {
		return {
			title: 'Post Not Found | Lexvu IP',
		};
	}

	return {
		title: `${post.title} | Lexvu IP`,
		description: post.excerpt,
	};
}

export async function generateStaticParams() {
	return blogs.map((post) => ({
		slug: post.slug,
	}));
}

export default function BlogDetailPage() {
	return <BlogPost />;
}
