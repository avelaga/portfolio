'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { markReturning, readHomeSpot } from '../../lib/homeReturn';

// "← Portfolio" on project pages. If the visitor came from the home page, it
// takes them back to exactly where they were (labelled "← Home" if that was the
// hero); otherwise it lands on this project's card in the stack.
export default function BackLink({ projectId, label = 'Portfolio' }) {
  const [fromHero, setFromHero] = useState(false);
  useEffect(() => setFromHero(Boolean(readHomeSpot()?.fromHero)), []);

  return (
    // scroll={false}: Home.js handles where to land
    <Link
      href={projectId ? `/#${projectId}` : '/'}
      scroll={false}
      className="v3-back-link"
      onClick={markReturning}
    >
      ← {fromHero ? 'Home' : label}
    </Link>
  );
}
