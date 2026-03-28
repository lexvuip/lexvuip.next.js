'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeroActions() {
  const router = useRouter();

  return (
    <div className="hero-actions">
      <button
        className="hero-contact-btn"
        onClick={() => router.push('/contact')}
      >
        <span>Get In Touch</span>
      </button>
      <Link href="/services" className="hero-services-link">
        Explore Services
      </Link>
    </div>
  );
}