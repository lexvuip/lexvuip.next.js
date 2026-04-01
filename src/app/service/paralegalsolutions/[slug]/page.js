import { paralegalServices } from '../../../../data/services';
import { SubServicePage } from '../../../../components/pages';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
	return paralegalServices.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const service = paralegalServices.find((s) => s.slug === slug);
	
	if (!service) return {};

	return {
		title: `${service.title} | Lexvuip Paralegal Solutions`,
		description: service.description,
		keywords: service.content.primaryKeywords.join(', '),
	};
}

export default async function Page({ params }) {
	const { slug } = await params;
	const service = paralegalServices.find((s) => s.slug === slug);

	if (!service) {
		notFound();
	}

	return <SubServicePage service={service} category="paralegal" />;
}
