import './FounderPage.css';
import Image from 'next/image';
import Footer from '../../layout/Footer';
import Button from '../../ui/Button';
import AboutReveal from '../../ui/AboutReveal';

const practiceRows = [
	{
		title: (
			<>
				Indian Patent <em>Prosecution</em>
			</>
		),
		description:
			'Managing office action responses, hearings, and prosecution strategy before the Indian Patent Office through to grant.',
	},
	{
		title: (
			<>
				Design Application <em>Filing</em>
			</>
		),
		description:
			'Preparing and filing industrial design applications before the Design Office, Kolkata, with drawing sheets built to classification and novelty requirements.',
	},
	{
		title: (
			<>
				<em>Trademark</em> Registration
			</>
		),
		description:
			'Search, clearance, filing, and prosecution support for word marks, logos, and device marks before the Trade Marks Registry.',
	},
	{
		title: (
			<>
				<em>Copyright</em> Filing
			</>
		),
		description:
			'Registration support for literary, artistic, software, and creative works before the Copyright Office, New Delhi.',
	},
	{
		title: (
			<>
				Patent Illustration for <em>US &amp; UK Attorneys</em>
			</>
		),
		description:
			'Utility and design patent drawings prepared to meet USPTO, UK IPO, EPO, and PCT formal standards, for attorneys and agents who need a dependable overseas illustration partner.',
	},
];

const credentials = [
	{
		index: '01',
		title: 'Registered Patent Attorney',
		detail: 'India',
	},
	{
		index: '02',
		title: 'Full-Spectrum Indian Practice',
		detail:
			'Patent prosecution, design filing, trademark & copyright registration',
	},
	{
		index: '03',
		title: 'Global Illustration Standards',
		detail: 'USPTO · UK IPO · EPO · PCT',
	},
	{
		index: '04',
		title: 'Hyderabad, Telangana',
		detail: 'India',
	},
];

export default function FounderPage() {
	return (
		<div className="founder-page-luxury">
			{/* Hero */}
			<section className="founder-hero-section">
				<div className="founder-hero-glow"></div>
				<div className="founder-hero-noise"></div>
				<div className="founder-hero-rings" aria-hidden="true"></div>

				<div className="founder-hero-content">
					<div className="founder-hero-text">
						<div className="founder-hero-top">
							<div className="founder-hero-label">
								<span>Founder &amp; Director — LexVuIP India</span>
							</div>

							<h1 className="founder-hero-title">
								<span>Bhanu</span>{' '}
								<span className="founder-hero-title-accent">Prakash</span>
							</h1>

							<p className="founder-hero-role">
								Registered Patent Attorney — India
							</p>
						</div>

						<div className="founder-hero-figure">
							<Image
								src="/assets/founder-bhanu-prakash.png"
								alt="Bhanu Prakash — Founder and Director, LexVuIP India"
								width={900}
								height={834}
								priority
								className="founder-hero-photo"
							/>
						</div>

						<div className="founder-hero-bottom">
							<p className="founder-hero-description">
								Leading Indian patent prosecution, design filing, trademark and
								copyright registration, and patent illustration support for
								attorneys and agents in the US, UK, and India.
							</p>

							<div className="founder-hero-actions">
								<Button href="/contact" arrow>
									Get In Touch
								</Button>
								<a
									href="https://www.linkedin.com/company/lexvuip/?viewAsMember=true"
									target="_blank"
									rel="noopener noreferrer"
									className="founder-hero-link"
								>
									Connect on LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Story */}
			<section className="founder-story-section">
				<AboutReveal>
					<div className="founder-story-container">
						<div className="founder-story-visual">
							<div className="luxury-label-group central">
								<span className="gold-line"></span>
								<span className="luxury-label">THE STORY</span>
								<span className="gold-line"></span>
							</div>

							<p className="founder-story-lede">
								Someone needed to own the details with the <em>same care</em> as
								the strategy behind them.
							</p>
						</div>

						<div className="founder-story-content founder-story-columns">
							<div className="founder-story-col">
								<p>
									I started LexVuIP with a simple observation: attorneys and
									inventors lose far too much time to the details that shouldn't
									slow them down — a misformatted drawing, a missed filing
									convention, a prosecution deadline buried under everything
									else on the docket.
								</p>
							</div>
							<div className="founder-story-col">
								<p>
									LexVuIP India is where that discipline is applied directly to
									the Indian IP system — patent prosecution before the Indian
									Patent Office, industrial design filing before the Design
									Office, and trademark and copyright registration for brands
									and creative works across the country. Alongside this, I
									continue to support patent illustration work for US and UK
									attorneys and patent agents, giving overseas firms a reliable
									Indian partner for both drawings and full Indian-side filing
									needs.
								</p>
							</div>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* The Practice — numbered ledger */}
			<section className="founder-practice-section">
				<AboutReveal>
					<div className="founder-practice-container">
						<div className="founder-practice-visual">
							<div className="luxury-label-group central">
								<span className="gold-line"></span>
								<span className="luxury-label">WHAT I DO</span>
								<span className="gold-line"></span>
							</div>
						</div>

						<h2 className="founder-practice-title">
							The Practice, <em>Personally</em> Led.
						</h2>

						<p className="founder-practice-intro">
							As founder and director, I lead the Indian practice personally —
							from prosecution strategy and filing to the illustration work that
							first built LexVuIP's reputation. Clients and partner attorneys
							work directly with the person accountable for the outcome, not a
							layer removed from it.
						</p>

						<div className="founder-ledger-content">
							<div className="founder-ledger">
								{practiceRows.map((row, idx) => (
									<div className="founder-ledger-row" key={idx}>
										<div className="founder-ledger-index" aria-hidden="true">
											{String(idx + 1).padStart(2, '0')}
										</div>
										<div className="founder-ledger-body">
											<h3 className="founder-ledger-title">{row.title}</h3>
											<p className="founder-ledger-description">
												{row.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* Why It Matters */}
			<section className="founder-why-section">
				<AboutReveal>
					<div className="founder-why-container">
						<div className="founder-why-visual founder-why-quote-col">
							<blockquote className="founder-why-quote">
								<p>
									Precise on prosecution and filing — and just as precise on the
									drawings that started this practice in the first place.
								</p>
							</blockquote>
						</div>

						<div className="founder-why-content">
							<div className="luxury-label-group">
								<span className="gold-line"></span>
								<span className="luxury-label">WHY IT MATTERS</span>
							</div>
							<p>
								India's IP system moves on its own conventions, timelines, and
								procedural detail — and getting it right matters just as much
								for a startup filing its first patent as it does for a US or UK
								attorney relying on an Indian partner to get the Indian side
								correct. I built LexVuIP India to be that dependable partner.
							</p>
							<p>
								I'm also active in IP awareness outreach, speaking at networking
								events for business owners and startup founders navigating
								Indian intellectual property for the first time. That direct
								contact with first-time applicants shapes how I run the practice
								— plain-language guidance, hands-on involvement, and no
								unnecessary complexity.
							</p>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* Credentials — hairline table */}
			<section className="founder-credentials-section">
				<AboutReveal>
					<div className="founder-credentials-container">
						<div className="founder-creds-visual">
							<div className="luxury-label-group central">
								<span className="gold-line"></span>
								<span className="luxury-label">
									CREDENTIALS &amp; PRACTICE FOCUS
								</span>
								<span className="gold-line"></span>
							</div>

							<h2 className="founder-credentials-title">
								Grounded in <em>India</em>. Trusted Worldwide.
							</h2>
						</div>

						<div className="founder-creds-content">
							<div className="founder-creds-table">
								{credentials.map((cred, idx) => (
									<div className="founder-cred-cell" key={idx}>
										<span className="founder-cred-index">{cred.index}</span>
										<h3 className="founder-cred-title">{cred.title}</h3>
										<p className="founder-cred-detail">{cred.detail}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</AboutReveal>
			</section>

			{/* CTA */}
			<section className="founder-cta-section">
				<div className="founder-cta-rings" aria-hidden="true"></div>
				<AboutReveal>
					<div className="founder-cta-container">
						<h2 className="founder-cta-title">
							Need a dependable partner on the <em>Indian side</em> — or
							drawings that meet your jurisdiction's standard?
						</h2>
						<p className="founder-cta-text">
							Whether you're a US or UK attorney looking for Indian filing
							support or illustration work, or a founder starting your first
							Indian filing — I'd like to hear from you directly.
						</p>
						<div className="founder-cta-actions">
							<Button href="/contact" arrow>
								Get In Touch
							</Button>
							<a
								href="https://www.linkedin.com/company/lexvuip/?viewAsMember=true"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-secondary btn-inverted"
							>
								<span className="btn-text">Connect on LinkedIn</span>
							</a>
						</div>
					</div>
				</AboutReveal>
			</section>

			<Footer />
		</div>
	);
}
