'use client';

import { useEffect, useRef, useState } from 'react';
import { FIGURES } from './heroFigures';
import './HeroSection.css';

const REGION = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const isIndia = REGION === 'IN';
const whatsappUrl = isIndia
	? 'https://wa.me/919110726310'
	: 'https://wa.me/18562142512';

function istTeamAvailable() {
	try {
		const parts = new Intl.DateTimeFormat('en-US', {
			timeZone: 'Asia/Kolkata',
			weekday: 'short',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		}).formatToParts(new Date());
		const get = (type) =>
			parts.filter((p) => p.type === type)[0].value;
		const day = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[
			get('weekday')
		];
		const minutes =
			(parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);
		return day >= 1 && day <= 5 && minutes >= 540 && minutes < 1080;
	} catch {
		return null;
	}
}

function HeroSection() {
	const sectionRef = useRef(null);
	const sheetRef = useRef(null);
	const artRef = useRef(null);
	const readoutRef = useRef(null);
	const pillRef = useRef(null);
	const playedRef = useRef(false);
	const [available, setAvailable] = useState(null);
	const [fig, setFig] = useState(0);

	useEffect(() => {
		const section = sectionRef.current;
		const sheet = sheetRef.current;
		const art = artRef.current;
		const readout = readoutRef.current;
		const pill = pillRef.current;
		if (!section || !sheet) return;

		const reduceMotion =
			window.matchMedia &&
			matchMedia('(prefers-reduced-motion: reduce)').matches;
		const finePointer =
			window.matchMedia &&
			matchMedia('(hover:hover) and (pointer:fine)').matches;

		setAvailable(istTeamAvailable());

		// The navbar (with promo banner) is fixed and overlays the page, so measure
		// its bottom edge to make the hero fill exactly the rest of the screen
		const fit = () => {
			const nav = document.querySelector('.navbar');
			const chrome = nav
				? Math.max(0, Math.round(nav.getBoundingClientRect().bottom))
				: Math.max(
						0,
						Math.round(
							section.getBoundingClientRect().top + (window.pageYOffset || 0)
						)
					);
			section.style.setProperty('--chrome', chrome + 'px');
		};
		fit();
		window.addEventListener('resize', fit);
		window.addEventListener('load', fit);
		let bodyObserver;
		if (window.ResizeObserver) {
			bodyObserver = new ResizeObserver(fit);
			bodyObserver.observe(document.body);
		}

		// Patent sheet draw/check/stamp cycle; each new loop picks the next figure.
		// The swap happens while hero-out has already faded the stage, so React
		// swaps the drawing without a visible flash.
		const timers = [];
		const cycle = () => {
			if (playedRef.current) {
				setFig((i) => (i + 1) % FIGURES.length);
			} else {
				playedRef.current = true;
			}
			sheet.classList.add('hero-reset');
			sheet.classList.remove('hero-play', 'hero-out');
			void sheet.offsetWidth;
			sheet.classList.remove('hero-reset');
			sheet.classList.add('hero-play');
			timers.push(setTimeout(() => sheet.classList.add('hero-out'), 12400));
			timers.push(setTimeout(cycle, 13200));
		};
		if (reduceMotion) {
			sheet.classList.add('hero-play');
		} else {
			timers.push(setTimeout(cycle, 900));
		}

		const onAnimationEnd = (e) => {
			if (e.target === sheet && e.animationName === 'heroPanel') {
				sheet.classList.add('hero-ready');
			}
		};
		sheet.addEventListener('animationend', onAnimationEnd);
		if (reduceMotion) sheet.classList.add('hero-ready');

		// Sheet hover: tilt + spotlight + crosshair readout
		let raf = null;
		const pad = (n) => {
			n = Math.max(0, n);
			return (n < 10 ? '00' : n < 100 ? '0' : '') + n;
		};
		const onSheetMove = (e) => {
			const cx = e.clientX;
			const cy = e.clientY;
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const r = sheet.getBoundingClientRect();
				const x = (cx - r.left) / r.width;
				const y = (cy - r.top) / r.height;
				sheet.style.setProperty('--ry', ((x - 0.5) * 8).toFixed(2) + 'deg');
				sheet.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
				sheet.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
				sheet.style.setProperty('--my', (y * 100).toFixed(1) + '%');
				sheet.style.setProperty('--px', ((0.5 - x) * 10).toFixed(1) + 'px');
				sheet.style.setProperty('--py', ((0.5 - y) * 8).toFixed(1) + 'px');
				if (art) {
					const a = art.getBoundingClientRect();
					const ax = Math.max(0, Math.min(a.width, cx - a.left));
					const ay = Math.max(0, Math.min(a.height, cy - a.top));
					art.style.setProperty('--cx', ax + 'px');
					art.style.setProperty('--cy', ay + 'px');
					if (readout) {
						readout.textContent =
							'X ' +
							pad(Math.round((ax / a.width) * 400)) +
							' · Y ' +
							pad(Math.round((ay / a.height) * 360));
					}
				}
			});
		};
		const onSheetLeave = () => {
			if (raf) cancelAnimationFrame(raf);
			['--rx', '--ry', '--px', '--py'].forEach((k) =>
				sheet.style.setProperty(k, k.charAt(2) === 'r' ? '0deg' : '0px')
			);
			sheet.style.setProperty('--mx', '50%');
			sheet.style.setProperty('--my', '50%');
		};
		if (!reduceMotion && finePointer) {
			sheet.addEventListener('mousemove', onSheetMove);
			sheet.addEventListener('mouseleave', onSheetLeave);
		}

		// Pill mouse-follow tilt
		const onPillMove = (e) => {
			const r = pill.getBoundingClientRect();
			pill.style.setProperty(
				'--mx',
				((e.clientX - r.left - r.width / 2) * 0.14).toFixed(1) + 'px'
			);
			pill.style.setProperty(
				'--my',
				((e.clientY - r.top - r.height / 2) * 0.22).toFixed(1) + 'px'
			);
		};
		const onPillLeave = () => {
			pill.style.setProperty('--mx', '0px');
			pill.style.setProperty('--my', '0px');
		};
		if (pill && finePointer && !reduceMotion) {
			pill.addEventListener('mousemove', onPillMove);
			pill.addEventListener('mouseleave', onPillLeave);
		}

		return () => {
			timers.forEach(clearTimeout);
			window.removeEventListener('resize', fit);
			window.removeEventListener('load', fit);
			if (bodyObserver) bodyObserver.disconnect();
			sheet.removeEventListener('animationend', onAnimationEnd);
			sheet.removeEventListener('mousemove', onSheetMove);
			sheet.removeEventListener('mouseleave', onSheetLeave);
			if (pill) {
				pill.removeEventListener('mousemove', onPillMove);
				pill.removeEventListener('mouseleave', onPillLeave);
			}
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

	const chipClass =
		available === true ? 'hero-chip on' : available === false ? 'hero-chip' : 'hero-chip';
	const chipText =
		available === null
			? 'Checking availability…'
			: available
				? 'Team available now'
				: 'Closed · leave us a message';

	return (
		<header className="hero-section" ref={sectionRef} aria-labelledby="hero-heading">
			<div className="hero-glow hero-g1" aria-hidden="true"></div>
			<div className="hero-glow hero-g2" aria-hidden="true"></div>
			<div className="hero-room" aria-hidden="true">
				<div className="hero-vp"></div>
				<div className="hero-pl hero-wl"><i></i></div>
				<div className="hero-pl hero-wr"><i></i></div>
				<div className="hero-pl hero-fl"><i></i></div>
				<div className="hero-pl hero-cl"><i></i></div>
			</div>
			<div className="hero-vig" aria-hidden="true"></div>

			<div className="hero-wrap">
				<div className="hero-left">
					<div className="hero-top">
						<div className={chipClass}>{chipText}</div>
						<span className="hero-eye">
							{isIndia
								? 'IP & LITIGATION SUPPORT FOR ATTORNEYS · HYDERABAD'
								: 'IP & LITIGATION SUPPORT FOR ATTORNEYS'}
						</span>
					</div>
					<h1 id="hero-heading" className="hero-title">
						<span className="hero-line">
							<span className="hero-line-inner">
								Precision in Every <em>Filing</em>
							</span>
						</span>
						<span className="hero-line">
							<span className="hero-line-inner">
								Clarity in Every <em>Design.</em>
							</span>
						</span>
					</h1>
					<p className="hero-lead">
						{isIndia ? (
							<>
								At LexVuIP India, we take care of the details that protect your
								innovation and <strong>free up your time</strong>. From patent
								prosecution to drawings, trademark filing to litigation support,
								our team is trained across the full IP lifecycle for attorneys,
								startups, and inventors alike. We don&rsquo;t just follow
								procedure; we raise the standard every time.
							</>
						) : (
							<>
								Your cases deserve more than routine paperwork. They deserve
								strategy and accuracy. At LexVuIP, we take care of the details
								that protect your clients and <strong>free up your time</strong>:
								filings, trial preparation, client and docket management, and
								patent support. We don&rsquo;t just follow procedure. We raise the
								standard every time.
							</>
						)}
					</p>
					<div className="hero-cta">
						<a className="hero-pill" href="/contact" ref={pillRef}>
							BOOK A CONSULTATION{' '}
							<span className="hero-ar" aria-hidden="true">
								<i>&rarr;</i>
								<i>&rarr;</i>
							</span>
						</a>
						<a className="hero-lnk" href="/services">
							Explore Services <span>&rarr;</span>
						</a>
						<span className="hero-wa">
							or{' '}
							<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
								WhatsApp us
							</a>
						</span>
					</div>
					<ul className="hero-trust">
						<li>
							<b>25+</b> years of experience
						</li>
						<li>Drawings to USPTO &amp; WIPO guidelines</li>
						<li>
							{isIndia
								? 'Mon – Fri, 09:00 – 18:00 IST'
								: 'Serving attorneys worldwide'}
						</li>
					</ul>
				</div>

				<div
					className="hero-sheet"
					ref={sheetRef}
					role="img"
					aria-label="Animation: a patent drawing is drawn, checked against USPTO and WIPO guidelines, and marked ready to file"
				>
					<div className="hero-stage">
						<div className="hero-hd">
							<span>LEXVUIP &middot; DRAWING SHEET</span>
							<span>
								SHEET {fig + 1}/{FIGURES.length}
							</span>
						</div>
						<div className="hero-art" ref={artRef}>
							<svg
								viewBox="0 0 400 360"
								preserveAspectRatio="xMidYMid meet"
								aria-hidden="true"
							>
								<defs>
									<linearGradient id="hero-sg" x1="0" y1="0" x2="1" y2="0">
										<stop offset="0" stopColor="#d9b95b" stopOpacity="0" />
										<stop offset=".5" stopColor="#f1d98a" />
										<stop offset="1" stopColor="#d9b95b" stopOpacity="0" />
									</linearGradient>
								</defs>
								{FIGURES.map((figure, i) =>
									i === fig ? (
										<g
											key={figure.id}
											transform={
												figure.dy ? `translate(0 ${figure.dy})` : undefined
											}
										>
											{figure.node}
										</g>
									) : null
								)}
								<rect className="hero-scan" x="10" y="0" width="380" height="3" />
							</svg>
							<div className="hero-stamp" style={{ '--d': '8.6s' }}>
								READY TO FILE
							</div>
							<div className="hero-cross" aria-hidden="true">
								<b ref={readoutRef}>X 000 &middot; Y 000</b>
							</div>
						</div>
						<ul className="hero-checks">
							<li className="hero-ck" style={{ '--d': '6.3s' }}>
								<i></i>Drawing prepared
							</li>
							<li className="hero-ck" style={{ '--d': '7.2s' }}>
								<i></i>Checked to USPTO &amp; WIPO guidelines
							</li>
							<li className="hero-ck" style={{ '--d': '8.1s' }}>
								<i></i>Filing ready for attorney review
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeroSection;
