'use client';

import React, { useRef, useEffect, useState } from 'react';
import useScrollReveal from '../../../hooks/useScrollReveal';
import useParallax from '../../../hooks/useParallax';

function AboutReveal({ children, className = '' }) {
	const contentRef = useRef(null);
	const leftColRef = useRef(null);
	const containerRef = useRef(null);
	const imageRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const contentRevealed = useScrollReveal(contentRef, 0.2);
	const leftColRevealed = useScrollReveal(leftColRef, 0.2);
	useParallax(containerRef, imageRef);

	const injectRefs = (nodes) => {
		let leftRefAssigned = false;
		let rightRefAssigned = false;

		const processNodes = (currentNodes) => {
			return React.Children.map(currentNodes, (child) => {
				if (!React.isValidElement(child)) return child;

				const childClass = child.props.className || '';
				
				if (!leftRefAssigned && (childClass.includes('left-column') || childClass.includes('visual'))) {
					leftRefAssigned = true;
					return React.cloneElement(child, { ref: leftColRef });
				}

				if (!rightRefAssigned && childClass.includes('content')) {
					rightRefAssigned = true;
					return React.cloneElement(child, { ref: contentRef });
				}

				if (childClass.includes('container') || childClass.includes('composition') || childClass.includes('grid')) {
					const newChildren = processNodes(child.props.children);
					return React.cloneElement(child, {}, newChildren);
				}

				return child;
			});
		};

		const result = processNodes(nodes);

		if (!leftRefAssigned || !rightRefAssigned) {
			return React.Children.map(nodes, (child) => {
				if (!React.isValidElement(child)) return child;
				
				const childClass = child.props.className || '';
				if (childClass.includes('container') || childClass.includes('composition') || childClass.includes('grid') || childClass.includes('card')) {
					const grandChildren = React.Children.map(child.props.children, (grandChild, index) => {
						if (!React.isValidElement(grandChild)) return grandChild;
						if (index === 0 && !leftRefAssigned) {
							leftRefAssigned = true;
							return React.cloneElement(grandChild, { ref: leftColRef });
						}
						if (index === 1 && !rightRefAssigned) {
							rightRefAssigned = true;
							return React.cloneElement(grandChild, { ref: contentRef });
						}
						return grandChild;
					});
					return React.cloneElement(child, {}, grandChildren);
				}
				return child;
			});
		}

		return result;
	};

	const modifiedChildren = injectRefs(children);

	const revealClass = isMobile 
		? 'content-revealed left-revealed' 
		: `${contentRevealed ? 'content-revealed' : ''} ${leftColRevealed ? 'left-revealed' : ''}`;

	return (
		<div 
			ref={containerRef}
			className={`about-reveal-wrapper ${revealClass} ${className}`.trim()}
		>
			{modifiedChildren}
		</div>
	);
}

export default AboutReveal;
