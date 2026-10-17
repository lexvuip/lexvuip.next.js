import { ipServices } from '../../../../data/services';
import { SubServicePage } from '../../../../components/pages';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
	return ipServices.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const service = ipServices.find((s) => s.slug === slug);

	if (!service) return {};

	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const isIndia = region === 'IN';
	const heading = service.seoHeading || service.title;
	const locationSuffix = isIndia
		? ' Serving clients across India from our Hyderabad office.'
		: ' Serving IP attorneys nationwide from our Redmond, WA office.';
	const description = service.description.length + locationSuffix.length <= 160
		? `${service.description}${locationSuffix}`
		: service.description;

	return {
		title: isIndia ? `${heading} | LexVuIP India` : `${heading} | LexVuIP IP Solutions`,
		description,
		keywords: service.content.primaryKeywords.join(', '),
		alternates: {
			canonical: `/service/ipsolutions/${slug}`,
		},
	};
}

export default async function Page({ params }) {
	const { slug } = await params;
	const service = ipServices.find((s) => s.slug === slug);

	if (!service) {
		notFound();
	}

	return <SubServicePage service={service} category="ip" />;
}
