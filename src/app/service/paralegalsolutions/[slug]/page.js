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

	const heading = service.seoHeading || service.title;
	const locationSuffix = ' Serving law firms and IP attorneys nationwide from our Redmond, WA office.';
	const description = service.description.length + locationSuffix.length <= 160
		? `${service.description}${locationSuffix}`
		: service.description;

	return {
		title: `${heading} | LexVuIP`,
		description,
		keywords: service.content.primaryKeywords.join(', '),
		alternates: {
			canonical: `/service/paralegalsolutions/${slug}`,
		},
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
