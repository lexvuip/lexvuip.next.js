'use client';

import Button from './Button';
import Link from 'next/link';

export default function HeroActions() {
  return (
    <div className="hero-actions">
      <Button href="/contact" className="hero-btn-sm">Get In Touch</Button>
      <Link href="/services" className="hero-services-link">
        Explore Services
      </Link>
    </div>
  );
}