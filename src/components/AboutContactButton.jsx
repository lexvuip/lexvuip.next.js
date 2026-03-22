'use client';

import { useRouter } from 'next/navigation';

export default function AboutContactButton({ className, text }) {
  const router = useRouter();
  return (
    <button className={className} onClick={() => router.push('/contact')}>
      {text}
    </button>
  );
}
