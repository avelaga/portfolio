"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BackLinkInner() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const href = from ? `/blog/tagged/${encodeURIComponent(from)}` : "/blog";
  const label = from ? `Back to "${from}"` : "Back to posts";

  return (
    <Link href={href} className="back-link">
      &larr; {label}
    </Link>
  );
}

export default function BackLink() {
  return (
    <Suspense fallback={<span className="back-link">&larr; Back to posts</span>}>
      <BackLinkInner />
    </Suspense>
  );
}
