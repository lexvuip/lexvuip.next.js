'use client';

import React, { useRef } from 'react';
import useScrollReveal from '../../../hooks/useScrollReveal';
import useParallax from '../../../hooks/useParallax';

/**
 * AboutReveal component that wraps children with scroll reveal and parallax effects.
 * It identifies children that should trigger reveal animations by recursively 
 * searching for specific classes or identifying the first two main columns.
 */
function AboutReveal({ children, className = '' }) {
	const contentRef = useRef(null);
	const leftColRef = useRef(null);
	const containerRef = useRef(null);
	const imageRef = useRef(null);

	const contentRevealed = useScrollReveal(contentRef, 0.85);
	const leftColRevealed = useScrollReveal(leftColRef, 0.85);
	useParallax(containerRef, imageRef);

	/**
	 * Recursively clones children to attach refs to the appropriate elements
	 */
	const injectRefs = (nodes) => {
		let leftRefAssigned = false;
		let rightRefAssigned = false;

		const processNodes = (currentNodes) => {
			return React.Children.map(currentNodes, (child) => {
				if (!React.isValidElement(child)) return child;

				const childClass = child.props.className || '';
				
				// Priority 1: Match by explicit "left-column" or "visual" naming
				if (!leftRefAssigned && (childClass.includes('left-column') || childClass.includes('visual'))) {
					leftRefAssigned = true;
					return React.cloneElement(child, { ref: leftColRef });
				}

				// Priority 2: Match by explicit "content" naming
				if (!rightRefAssigned && childClass.includes('content')) {
					rightRefAssigned = true;
					return React.cloneElement(child, { ref: contentRef });
				}

				// If it's a container, we should look inside it
				if (childClass.includes('container') || childClass.includes('composition') || childClass.includes('grid')) {
					const newChildren = processNodes(child.props.children);
					return React.cloneElement(child, {}, newChildren);
				}

				return child;
			});
		};

		const result = processNodes(nodes);

		// Fallback: If no refs were assigned by class, assign to the first two children of the first container found
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

	return (
		<div 
			ref={containerRef}
			className={`about-reveal-wrapper ${contentRevealed ? 'content-revealed' : ''} ${leftColRevealed ? 'left-revealed' : ''} ${className}`.trim()}
		>
			{modifiedChildren}
		</div>
	);
}

export default AboutReveal;
