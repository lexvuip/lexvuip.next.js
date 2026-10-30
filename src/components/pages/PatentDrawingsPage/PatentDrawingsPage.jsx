'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../layout/Footer';
import { patentDrawingFaqs } from '../../../data/faqs';
import './PatentDrawingsPage.css';

const FAQSection = dynamic(() => import('../../sections/FAQSection'), {
	loading: () => <div className="section-loading">Loading FAQ...</div>,
	ssr: false,
});

export default function PatentDrawingsPage() {
	const pageRef = useRef(null);
	const figRef = useRef(null);
	const roadRef = useRef(null);
	const [chrome, setChrome] = useState(86);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		const measure = () => {
			const nav = document.querySelector('.navbar');
			const promo = document.querySelector('.promo-banner');
			setChrome(((nav && nav.offsetHeight) || 0) + ((promo && promo.offsetHeight) || 0));
		};
		measure();
		window.addEventListener('resize', measure);
		window.addEventListener('load', measure);
		return () => {
			window.removeEventListener('resize', measure);
			window.removeEventListener('load', measure);
		};
	}, []);

	useEffect(() => {
		const els = pageRef.current ? Array.from(pageRef.current.querySelectorAll('.pd-rv')) : [];
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!('IntersectionObserver' in window) || rm) {
			els.forEach((el) => el.classList.add('pd-in'));
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('pd-in');
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);

	useEffect(() => {
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const t = setTimeout(() => setPlay(true), rm ? 0 : 700);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		const fine =
			window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!fine || rm) return;
		const buttons = Array.from(pageRef.current.querySelectorAll('.pd-btn'));
		const onMove = (b) => (e) => {
			const r = b.getBoundingClientRect();
			b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.14).toFixed(1) + 'px');
			b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.22).toFixed(1) + 'px');
		};
		const onLeave = (b) => () => {
			b.style.setProperty('--mx', '0px');
			b.style.setProperty('--my', '0px');
		};
		buttons.forEach((b) => {
			b.addEventListener('mousemove', onMove(b));
			b.addEventListener('mouseleave', onLeave(b));
		});
		return () => {
			buttons.forEach((b) => {
				b.removeEventListener('mousemove', onMove(b));
				b.removeEventListener('mouseleave', onLeave(b));
			});
		};
	}, []);

	useEffect(() => {
		const road = roadRef.current;
		if (!road) return;
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const segs = Array.from(road.querySelectorAll('.pd-sg'));
		const nds = Array.from(road.querySelectorAll('.pd-nd'));
		const stps = Array.from(road.querySelectorAll('.pd-stp'));
		const tv = road.querySelector('.pd-tv');
		const vert = road.querySelector('.pd-vert');
		const lens = segs.map((p) => p.getTotalLength());
		const pulseTimers = {};
		const lit = (i) => {
			nds[i].classList.add('on');
			if (stps[i]) stps[i].classList.add('on');
			const stp = stps[i];
			if (stp && !rm) {
				stp.classList.remove('pulse');
				void stp.offsetWidth;
				stp.classList.add('pulse');
				clearTimeout(pulseTimers[i]);
				pulseTimers[i] = setTimeout(() => stp.classList.remove('pulse'), 1700);
			}
		};
		const clearRoad = () => {
			segs.forEach((p, k) => {
				p.style.strokeDasharray = lens[k];
				p.style.strokeDashoffset = lens[k];
			});
			nds.forEach((n) => n.classList.remove('on'));
			stps.forEach((n) => n.classList.remove('on'));
			if (vert) vert.style.transform = 'scaleY(0)';
			tv.style.opacity = 0;
		};
		const placeVert = () => {
			if (!vert || !stps.length) return;
			const rRoad = road.getBoundingClientRect();
			const first = stps[0].getBoundingClientRect();
			const last = stps[stps.length - 1].getBoundingClientRect();
			vert.style.top = (first.top - rRoad.top + 7.5).toFixed(1) + 'px';
			vert.style.height = (last.top - first.top).toFixed(1) + 'px';
		};
		clearRoad();
		placeVert();
		const onResize = () => placeVert();
		window.addEventListener('resize', onResize);
		window.addEventListener('load', onResize);
		if (rm) {
			segs.forEach((p) => {
				p.style.strokeDashoffset = 0;
			});
			nds.forEach((_, k) => lit(k));
			if (vert) vert.style.transform = 'none';
			return () => {
				window.removeEventListener('resize', onResize);
				window.removeEventListener('load', onResize);
			};
		}
		const SEG = 1700;
		const HOLD = 2600;
		const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
		let running = false;
		let seen = false;
		let raf = 0;
		const timers = [];
		const cycle = () => {
			running = true;
			clearRoad();
			placeVert();
			let t0 = null;
			let reached = 0;
			const step = (t) => {
				if (!t0) t0 = t;
				const el = t - t0;
				const total = SEG * 3;
				if (el < total) {
					const k = Math.min(2, Math.floor(el / SEG));
					const p = (el - k * SEG) / SEG;
					const e = ease(p);
					segs.forEach((s, j) => {
						s.style.strokeDashoffset = j < k ? 0 : j === k ? lens[j] * (1 - e) : lens[j];
					});
					const pt = lens[k] ? segs[k].getPointAtLength(lens[k] * e) : null;
					if (pt) {
						tv.setAttribute('cx', pt.x);
						tv.setAttribute('cy', pt.y);
						tv.style.opacity = 1;
					}
					if (vert) vert.style.transform = `scaleY(${((k + e) / segs.length).toFixed(4)})`;
					if (p > 0.985 && reached <= k) {
						reached = k + 1;
						lit(k + 1);
					}
					raf = requestAnimationFrame(step);
				} else {
					segs.forEach((s) => {
						s.style.strokeDashoffset = 0;
					});
					tv.style.opacity = 0;
					timers.push(
						setTimeout(() => {
							if (seen) cycle();
							else running = false;
						}, HOLD)
					);
				}
			};
			timers.push(
				setTimeout(() => {
					lit(0);
					raf = requestAnimationFrame(step);
				}, 500)
			);
		};
		const ro = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					seen = e.isIntersecting;
					if (seen && !running) cycle();
				});
			},
			{ threshold: 0.35 }
		);
		ro.observe(road);
		return () => {
			cancelAnimationFrame(raf);
			timers.forEach(clearTimeout);
			Object.values(pulseTimers).forEach(clearTimeout);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('load', onResize);
			ro.disconnect();
		};
	}, []);

	return (
		<div className="pd-page" ref={pageRef} style={{ '--chrome': `${chrome}px` }}>
			<main>
			{/* HERO */}
			<header className="pd-sc pd-dk pd-hero" id="pd-hero">
				<div className="pd-frame" aria-hidden="true">
					<i className="pd-tk pd-tk-t" />
					<i className="pd-tk pd-tk-b" />
					<i className="pd-tk pd-tk-l" />
					<i className="pd-tk pd-tk-r" />
				</div>
				<div className="pd-hw">
					<div className="pd-left">
						<div className="pd-eye pd-rv">PATENT DRAWINGS FOR US ATTORNEYS &amp; AGENTS</div>
						<h1 className="pd-rv" style={{ '--i': 1 }}>
							USPTO / IPO / EPO-Compliant Patent Drawings, Built for Attorneys Who{' '}
							<em>Can&apos;t Afford a Rejection</em>
						</h1>
						<p className="pd-t pd-rv" style={{ '--i': 2 }}>
							Office actions over drawing formalities cost your client time and cost you credibility.
							We produce examiner-ready utility and design patent drawings, formatted to 37 C.F.R. §
							1.84 and USPTO drawing standards, so your filings move forward, not back to your desk.
						</p>
						<div className="pd-cta pd-rv" style={{ '--i': 3 }}>
							<Link className="pd-btn p" href="/contact?service=patent-drawings">
								GET A QUOTE{' '}
								<span className="pd-ar" aria-hidden="true">
									<i>→</i>
									<i>→</i>
								</span>
							</Link>
							<a className="pd-lk" href="#samples">
								See Sample Drawings
							</a>
						</div>
					</div>
					<div
						className={`pd-fig${play ? ' play' : ''}`}
						id="pd-fig"
						ref={figRef}
						role="img"
						aria-label="Exploded-view patent drawing: a cap, housing and base separated along a centre line with numbered reference lines"
					>
						<svg viewBox="0 0 520 560" aria-hidden="true">
							<path className="pd-dsh" d="M220 108V204M220 232V438" />
							<g className="pd-pt pd-p1">
								<g className="pd-fl1">
									<ellipse
										className="pd-l1 pd-dr"
										pathLength="1"
										style={{ '--d': '.3s', '--t': '1.2s' }}
										cx="220"
										cy="64"
										rx="62"
										ry="22"
									/>
									<ellipse
										className="pd-l1 pd-dr"
										pathLength="1"
										style={{ '--d': '.7s', '--t': '.9s' }}
										cx="220"
										cy="64"
										rx="26"
										ry="9"
									/>
									<path
										className="pd-l1 pd-dr"
										pathLength="1"
										style={{ '--d': '.9s', '--t': '1.2s' }}
										d="M158 64V104A62 22 0 0 0 282 104V64"
									/>
									<path
										className="pd-gl pd-dr"
										pathLength="1"
										style={{ '--d': '4.2s', '--t': '.8s' }}
										d="M282 58L352 34L376 34"
									/>
									<text className="pd-num pd-fd" style={{ '--d': '4.9s' }} x="382" y="38">
										10
									</text>
								</g>
							</g>
							<g className="pd-pt pd-p2">
								<path
									className="pd-l1 pd-dr"
									pathLength="1"
									style={{ '--d': '1.4s', '--t': '1.6s' }}
									d="M220 178L290 218V298L220 338L150 298V218Z"
								/>
								<path
									className="pd-l1 pd-dr"
									pathLength="1"
									style={{ '--d': '2.4s', '--t': '1s' }}
									d="M220 258L150 218M220 258L290 218M220 258V338"
								/>
								<ellipse
									className="pd-l1 pd-dr"
									pathLength="1"
									style={{ '--d': '2.9s', '--t': '.9s' }}
									cx="220"
									cy="218"
									rx="28"
									ry="14"
								/>
								<path
									className="pd-gl pd-dr"
									pathLength="1"
									style={{ '--d': '4.4s', '--t': '.8s' }}
									d="M290 262L352 250L376 250"
								/>
								<text className="pd-num pd-fd" style={{ '--d': '5.1s' }} x="382" y="254">
									12
								</text>
								<path
									className="pd-gl pd-dr"
									pathLength="1"
									style={{ '--d': '4.6s', '--t': '.8s' }}
									d="M194 214L140 150L110 150"
								/>
								<text className="pd-num pd-fd" style={{ '--d': '5.3s' }} x="80" y="154">
									16
								</text>
							</g>
							<g className="pd-pt pd-p3">
								<g className="pd-fl3">
									<ellipse
										className="pd-l1 pd-dr"
										pathLength="1"
										style={{ '--d': '3.2s', '--t': '1.1s' }}
										cx="220"
										cy="452"
										rx="98"
										ry="34"
									/>
									<ellipse
										className="pd-l1 pd-dr"
										pathLength="1"
										style={{ '--d': '3.6s', '--t': '.8s' }}
										cx="220"
										cy="452"
										rx="40"
										ry="14"
									/>
									<path
										className="pd-l1 pd-dr"
										pathLength="1"
										style={{ '--d': '3.8s', '--t': '1.1s' }}
										d="M122 452V474A98 34 0 0 0 318 474V452"
									/>
									<path
										className="pd-gl pd-dr"
										pathLength="1"
										style={{ '--d': '4.8s', '--t': '.8s' }}
										d="M312 470L360 496L384 496"
									/>
									<text className="pd-num pd-fd" style={{ '--d': '5.5s' }} x="390" y="500">
										14
									</text>
								</g>
							</g>
							<path
								className="pd-gl pd-dr"
								pathLength="1"
								style={{ '--d': '5s', '--t': '1s' }}
								d="M118 178V338M110 178H126M110 338H126"
							/>
							<text className="pd-cap pd-fd" style={{ '--d': '5.6s' }} x="220" y="548" textAnchor="middle">
								FIG. 2
							</text>
						</svg>
					</div>
				</div>
				<div className="pd-tb pd-rv" style={{ '--i': 4 }}>
					<div className="pd-g">
						<div>
							<small>TRUSTED BY US PATENT ATTORNEYS &amp; AGENTS FOR</small>
							<b>
								<span>25+</span> years
							</b>
						</div>
						<div>
							<small>FORMATTED TO</small>
							<b>37 C.F.R. § 1.84</b>
						</div>
						<div>
							<small>PREPARED FOR</small>
							<b>USPTO &middot; IPO &middot; EPO &middot; PCT</b>
						</div>
						<div>
							<small>STANDARD DELIVERY</small>
							<b>2&ndash;4 business days</b>
						</div>
					</div>
				</div>
			</header>

			{/* WHY */}
			<section className="pd-sc pd-lt" aria-labelledby="pd-why">
				<div className="pd-c">
					<div className="pd-eye pd-rv">WHY LEXVUIP</div>
					<h2 id="pd-why" className="pd-rv" style={{ '--i': 1 }}>
						Why Attorneys Choose LexVuIP for <em>IPO, USPTO &amp; EPO</em> Drawings
					</h2>
					<div className="pd-cols">
						<div className="pd-col pd-rv" style={{ '--i': 1 }}>
							<span className="pd-n">01</span>
							<h3>We speak examiner, not just illustrator.</h3>
							<p className="pd-t">
								Our team is trained specifically on USPTO formal drawing requirements: margins, line
								weight, shading conventions, reference numeral consistency, and view requirements,
								not just general technical illustration. Every drawing is built to survive an
								examiner&apos;s first read.
							</p>
						</div>
						<div className="pd-col pd-rv" style={{ '--i': 2 }}>
							<span className="pd-n">02</span>
							<h3>We work from whatever you have.</h3>
							<p className="pd-t">
								Sketches, CAD files, prototypes, photos, or a rough napkin drawing from the inventor:
								we take it from there and deliver submission-ready figures in the format your filing
								needs.
							</p>
						</div>
						<div className="pd-col pd-rv" style={{ '--i': 3 }}>
							<span className="pd-n">03</span>
							<h3>We fit into your firm&apos;s workflow, not the other way around.</h3>
							<p className="pd-t">
								Direct attorney communication, docket-aware turnaround, and formats ready to drop
								straight into your filing package: PDF, JPEG, or your firm&apos;s preferred format.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="pd-sc pd-dk" id="pd-services" aria-labelledby="pd-svc">
				<div className="pd-c pd-split">
					<div>
						<div className="pd-eye pd-rv">SERVICES COVERED</div>
						<h2 id="pd-svc" className="pd-rv" style={{ '--i': 1 }}>
							Every drawing your filing needs, <em>done to standard</em>
						</h2>
					</div>
					<div>
						<article className="pd-row pd-rv">
							<h3>
								<span>01</span>Utility Patent Drawings
							</h3>
							<p className="pd-t">
								Utility patent drawings explain the technical workings of an invention with the
								clarity an examiner needs to grasp function and novelty at a glance. A well-executed
								drawing does more than illustrate: it defines the boundaries of your claims and sets
								your application apart from the prior art. Our team pairs deep familiarity with
								formal drawing standards with a quality-first process, delivering drawings that hold
								up to scrutiny, on schedule, every time. These drawings are prepared to meet the
								requirements of the USPTO (United States Patent and Trademark Office), the IPO
								(Indian Patent Office), the EPO (European Patent Office), and PCT filings, as well as
								other patent offices worldwide.
							</p>
						</article>
						<article className="pd-row pd-rv">
							<h3>
								<span>02</span>Design Patent Drawings
							</h3>
							<p className="pd-t">
								Design patent drawings capture the ornamental appearance of a product exactly as it
								will be seen and used, showing every claimed feature with precision. Getting this
								right protects the true scope of what you&apos;re claiming; getting it wrong risks
								narrowing or losing protection altogether. We produce high-quality, accurate design
								drawings built to safeguard your intellectual property from the outset. These
								drawings are prepared to meet the requirements of the USPTO, the IPO, the EPO, and
								PCT filings, as well as other patent offices worldwide.
							</p>
						</article>
						<div className="pd-mini">
							<article className="pd-row pd-rv">
								<h3>Provisional Application Drawings</h3>
								<p className="pd-t">
									Fast-turnaround figures to support provisional filings, accurate enough to carry
									forward into your non-provisional application without rework.
								</p>
							</article>
							<article className="pd-row pd-rv" style={{ '--i': 1 }}>
								<h3>Flowcharts &amp; Process Diagrams</h3>
								<p className="pd-t">
									Clean, examiner-friendly flowcharts for software, business method, and process
									patents.
								</p>
							</article>
							<article className="pd-row pd-rv">
								<h3>Mechanical &amp; Technical Illustrations</h3>
								<p className="pd-t">
									Multi-view technical drawings that show true size, relation and part interaction,
									built for inventions where precision of detail determines claim scope.
								</p>
							</article>
							<article className="pd-row pd-rv" style={{ '--i': 1 }}>
								<h3>Reissue &amp; Amendment Drawings</h3>
								<p className="pd-t">
									Corrected or amended drawing sheets for reissue applications, drawing objections,
									and post-filing corrections, turned around quickly to keep your prosecution
									timeline on track.
								</p>
							</article>
						</div>
					</div>
				</div>
			</section>

			{/* SAMPLES */}
			<section className="pd-sc pd-lt" id="samples" aria-labelledby="pd-smp">
				<div className="pd-c">
					<div className="pd-eye pd-rv">SAMPLE WORK</div>
					<h2 id="pd-smp" className="pd-rv" style={{ '--i': 1 }}>
						See the quality <em>before you request a quote</em>
					</h2>
					<div className="pd-sm">
						<figure className="pd-rv" style={{ margin: 0 }}>
							<div className="pd-fr">
								<Image
									src="/assets/workShowcase/7.png"
									alt="Exploded-view utility patent drawing of a cylindrical device with threaded components"
									fill
									className="pd-fr-img"
									quality={85}
								/>
							</div>
							<figcaption>01 &middot; UTILITY</figcaption>
						</figure>
						<figure className="pd-rv" style={{ margin: 0, '--i': 1 }}>
							<div className="pd-fr">
								<Image
									src="/assets/workShowcase/1.png"
									alt="Design patent drawings of footwear showing multiple view angles"
									fill
									className="pd-fr-img"
									quality={85}
								/>
							</div>
							<figcaption>02 &middot; DESIGN</figcaption>
						</figure>
						<figure className="pd-rv" style={{ margin: 0, '--i': 2 }}>
							<div className="pd-fr">
								<Image
									src="/assets/workShowcase/4.png"
									alt="Patent drawing of a marine craft produced from a rough inventor sketch"
									fill
									className="pd-fr-img"
									quality={85}
								/>
							</div>
							<figcaption>03 &middot; SKETCH TO FORMAL</figcaption>
						</figure>
					</div>
				</div>
			</section>

			{/* HOW IT WORKS */}
			<section className="pd-sc pd-dk" aria-labelledby="pd-how">
				<div className="pd-c">
					<div className="pd-eye pd-rv">HOW IT WORKS</div>
					<h2 id="pd-how" className="pd-rv" style={{ '--i': 1 }}>
						From source material to <em>submission-ready</em> in four steps
					</h2>
					<div className="pd-road pd-rv" id="pd-road" ref={roadRef}>
						<svg viewBox="0 0 1000 130" aria-hidden="true">
							<path
								className="pd-trk"
								d="M125 28C250 28 250 102 375 102C500 102 500 28 625 28C750 28 750 102 875 102"
							/>
							<path className="pd-sg" d="M125 28C250 28 250 102 375 102" />
							<path className="pd-sg" d="M375 102C500 102 500 28 625 28" />
							<path className="pd-sg" d="M625 28C750 28 750 102 875 102" />
							<g className="pd-nd" transform="translate(125 28)">
								<circle className="pd-rg" r="16" />
								<circle className="pd-o" r="15" />
								<circle className="pd-i" r="7" />
							</g>
							<g className="pd-nd" transform="translate(375 102)">
								<circle className="pd-rg" r="16" />
								<circle className="pd-o" r="15" />
								<circle className="pd-i" r="7" />
							</g>
							<g className="pd-nd" transform="translate(625 28)">
								<circle className="pd-rg" r="16" />
								<circle className="pd-o" r="15" />
								<circle className="pd-i" r="7" />
							</g>
							<g className="pd-nd" transform="translate(875 102)">
								<circle className="pd-rg" r="16" />
								<circle className="pd-o" r="15" />
								<circle className="pd-i" r="7" />
							</g>
							<circle className="pd-tv" r="5" cx="125" cy="28" />
						</svg>
						<i className="pd-vert" aria-hidden="true" />
						<div className="pd-stps">
							<div className="pd-stp">
								<small>STEP 01</small>
								<h3>Share Your Source Material</h3>
								<p className="pd-t">
									Send a sketch, CAD file, photo, or prototype. Any format works as a starting point.
								</p>
							</div>
							<div className="pd-stp">
								<small>STEP 02</small>
								<h3>Receive a Quote &amp; Timeline</h3>
								<p className="pd-t">
									We review your invention and confirm scope, sheet count, and delivery date before
									work begins.
								</p>
							</div>
							<div className="pd-stp">
								<small>STEP 03</small>
								<h3>Draft &amp; Review</h3>
								<p className="pd-t">
									We produce your drawings and share them for your review. Revisions are included
									until they&apos;re filing-ready.
								</p>
							</div>
							<div className="pd-stp">
								<small>STEP 04</small>
								<h3>Final, Submission-Ready Delivery</h3>
								<p className="pd-t">
									Formal drawings delivered in PDF or your preferred format, ready to attach
									directly to your USPTO filing.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* TURNAROUND + COMPLIANCE */}
			<section className="pd-sc pd-lt" aria-labelledby="pd-tat">
				<div className="pd-c pd-two">
					<div>
						<div className="pd-eye pd-rv">TURNAROUND &amp; FORMATS</div>
						<h2 id="pd-tat" className="pd-rv" style={{ '--i': 1 }}>
							Fast when it <em>has to be</em>
						</h2>
						<div className="pd-kv pd-rv">
							<small>STANDARD DELIVERY</small>
							<p className="pd-t">2&ndash;4 business days, depending on complexity</p>
						</div>
						<div className="pd-kv pd-rv">
							<small>EXPEDITED SERVICE</small>
							<p className="pd-t">Available at no additional cost for tight filing deadlines</p>
						</div>
						<div className="pd-kv pd-rv">
							<small>FORMATS ACCEPTED (INPUT)</small>
							<p className="pd-t">Sketches, hand-drawn scans, CAD, PPT, photos, rough diagrams</p>
						</div>
						<div className="pd-kv pd-rv" style={{ borderBottom: '1px solid var(--pd-line)' }}>
							<small>FORMATS DELIVERED (OUTPUT)</small>
							<p className="pd-t">PDF, JPEG or your firm&apos;s required format</p>
						</div>
					</div>
					<div>
						<div className="pd-eye pd-rv">COMPLIANCE</div>
						<h2 className="pd-rv" style={{ '--i': 1 }}>
							Compliance you <em>can rely on</em>
						</h2>
						<p className="pd-t pd-rv" style={{ '--i': 2 }}>
							Every drawing is prepared against current USPTO formal drawing requirements, including:
						</p>
						<ul className="pd-chk pd-rv" style={{ '--i': 3 }}>
							<li>37 C.F.R. § 1.84 formal drawing standards</li>
							<li>Correct margins, sheet size, and numbering conventions</li>
							<li>Proper line weight, shading, and hatching conventions</li>
							<li>Reference numeral consistency across all views and the specification</li>
							<li style={{ borderBottom: '1px solid var(--pd-line)' }}>
								Appropriate view selection (perspective, sectional, exploded, detail) for clarity of
								claimed subject matter
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* WHO */}
			<section className="pd-sc pd-dk" aria-labelledby="pd-who">
				<div className="pd-c">
					<div className="pd-eye pd-rv">WHO WE WORK WITH</div>
					<h2 id="pd-who" className="pd-rv" style={{ '--i': 1 }}>
						Built for how <em>your practice</em> works
					</h2>
					<div className="pd-cols pd-who">
						<div className="pd-col pd-rv">
							<span className="pd-n">01</span>
							<h3>Solo &amp; Small-Firm Patent Attorneys</h3>
							<p className="pd-t">
								Reliable overflow drawing capacity without hiring an in-house illustrator.
							</p>
						</div>
						<div className="pd-col pd-rv" style={{ '--i': 1 }}>
							<span className="pd-n">02</span>
							<h3>Patent Agents</h3>
							<p className="pd-t">
								Direct, attorney-to-illustrator communication with no account-manager layers.
							</p>
						</div>
						<div className="pd-col pd-rv" style={{ '--i': 2 }}>
							<span className="pd-n">03</span>
							<h3>IP Boutiques &amp; Larger Firms</h3>
							<p className="pd-t">Docket-aware turnaround for high-volume filing schedules.</p>
						</div>
						<div className="pd-col pd-rv" style={{ '--i': 3 }}>
							<span className="pd-n">04</span>
							<h3>In-House Counsel</h3>
							<p className="pd-t">
								Consistent quality and formatting across a portfolio of filings.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ (shared component) */}
			<FAQSection faqs={patentDrawingFaqs} />

			{/* FINAL CTA */}
			<section className="pd-sc pd-dk pd-fin" aria-labelledby="pd-fin">
				<div className="pd-c">
					<div className="pd-eye pd-rv" style={{ justifyContent: 'center' }}>
						GET STARTED
					</div>
					<h2 id="pd-fin" className="pd-rv" style={{ '--i': 1 }}>
						Stop losing time to <em>drawing objections.</em>
					</h2>
					<p className="pd-t pd-rv" style={{ '--i': 2 }}>
						Send us your invention material and get a quote within one business day.
					</p>
					<div className="pd-cta pd-rv" style={{ '--i': 3 }}>
						<Link className="pd-btn p" href="/contact?service=patent-drawings">
							GET A QUOTE{' '}
							<span className="pd-ar" aria-hidden="true">
								<i>→</i>
								<i>→</i>
							</span>
						</Link>
						<Link className="pd-btn" href="/contact">
							TALK TO OUR TEAM{' '}
							<span className="pd-ar" aria-hidden="true">
								<i>→</i>
								<i>→</i>
							</span>
						</Link>
					</div>
				</div>
			</section>
			</main>
			<Footer />
		</div>
	);
}
