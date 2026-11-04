'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { markReturning, readHomeSpot } from '../../lib/homeReturn';

// "← Portfolio" on project pages. If the visitor came from the home page, it
// takes them back to exactly where they were (labelled "← Home" if that was the
// hero), with a plain "/" so the address doesn't point at a card they weren't
// at; otherwise it lands on this project's card in the stack via /#project-id.
export default function BackLink({ projectId, label = 'Portfolio' }) {
  const [spot, setSpot] = useState(null);
  useEffect(() => setSpot(readHomeSpot()), []);

  return (
    // scroll={false}: Home.js handles where to land
    <Link
      href={projectId && !spot ? `/#${projectId}` : '/'}
      scroll={false}
      className="v3-back-link"
      onClick={markReturning}
    >
      ← {spot?.fromHero ? 'Home' : label}
    </Link>
  );
}
