import { blogs } from '../../data/blogs';
import { ipServices, paralegalServices, customServices } from '../../data/services';

export const dynamic = 'force-static';

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const baseUrl = region === 'IN' ? 'https://lexvuip.in' : 'https://lexvuip.com';

export function GET() {
	const isIndia = region === 'IN';

	const coreLines = [
		`- [Home](${baseUrl}/): Overview of LexVuIP, its services, and company introduction`,
		`- [About Us](${baseUrl}/about): Company background, mission, and 25+ years of IP support experience`,
		`- [Services](${baseUrl}/services): All IP, paralegal, and custom solution offerings for law firms`,
		`- [Security](${baseUrl}/security): Data security, confidentiality, and compliance policies`,
		`- [Contact Us](${baseUrl}/contact): Contact details and inquiry form for law firms`,
		`- [LLM Info](${baseUrl}/llm-info): Canonical, verified reference data about LexVuIP for AI assistants`,
		`- [Blog](${baseUrl}/blog): Insights on patent law, IP filing, and paralegal operations`,
		`- [Privacy Policy](${baseUrl}/privacy-policy): Privacy practices and data handling`,
		`- [Terms of Service](${baseUrl}/terms-of-service): Terms governing website use`,
		`- [Cookie Policy](${baseUrl}/cookie-policy): Cookie usage details`,
	];

	const ipLines = ipServices.map(
		(service) =>
			`- [${service.title}](${baseUrl}/service/ipsolutions/${service.slug}): ${service.description}`
	);

	const paralegalLines = paralegalServices.map(
		(service) =>
			`- [${service.title}](${baseUrl}/service/paralegalsolutions/${service.slug}): ${service.description}`
	);

	const customLines = customServices.map(
		(service) =>
			`- [${service.title}](${baseUrl}/service/customsolutions/${service.slug}): ${service.description}`
	);

	const blogLines = blogs.map(
		(blog) =>
			`- [${blog.title}](${baseUrl}/blog/${blog.slug}): ${blog.excerpt}`
	);

	const content = `# LexVuIP
> LexVuIP is a professional services firm providing intellectual property (IP) support and paralegal solutions exclusively to law firms and attorneys. The firm specializes in ${isIndia ? 'patent filing, trademark registration, and IP litigation support in India' : 'USPTO-compliant patent drawings (utility and design), trademark support'}, and a full suite of litigation-ready paralegal services — including case docketing, e-filing, trial preparation, and deposition coordination.

LexVuIP serves law firms ${isIndia ? 'in India and internationally' : 'across the United States and internationally'}, functioning as a scalable, behind-the-scenes extension of legal teams. Key facts:
- LexVuIP is a professional services firm, not a law firm, and does not give legal advice; it provides technical and operational support to attorneys
- Emphasizes accuracy, compliance (${isIndia ? 'Indian IP laws and WIPO' : '37 CFR 1.84, USPTO, EPO, and WIPO standards'}), confidentiality, and on-time delivery
- Maintains attorney-client privilege across all workflows with secure document handling
- 25+ years of domain expertise; offers scalable staffing for peak workload periods
- Services law firms across the United States and internationally

## Core Pages
${coreLines.join('\n')}

## IP Solutions
${ipLines.join('\n')}

## Paralegal Solutions
${paralegalLines.join('\n')}

## Custom Solutions
${customLines.join('\n')}

## Blog
${blogLines.join('\n')}

## Optional
- [FAQs](${baseUrl}/#faq): Answers to common questions about LexVuIP services and engagement
`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
		},
	});
}
