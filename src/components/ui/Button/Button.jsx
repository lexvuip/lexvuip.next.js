'use client';

import Link from 'next/link';
import './Button.css';

export default function Button({ 
	variant = 'primary',
	children, 
	href,
	onClick,
	arrow = false,
	className = '',
	type = 'button',
}) {
	const content = (
		<>
			<span className="btn-text">{children}</span>
			{arrow && <span className="btn-arrow">→</span>}
		</>
	);

	const classNames = `btn btn-${variant} ${className}`.trim();

	if (href) {
		return (
			<Link href={href} className={classNames} onClick={onClick}>
				{content}
			</Link>
		);
	}

	return (
		<button type={type} className={classNames} onClick={onClick}>
			{content}
		</button>
	);
}
