import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPageClient } from "./SearchPageClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `${q} - YouTube Search` : "Search - YouTube",
  };
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchPageClient />
    </Suspense>
  );
}

function SearchFallback() {
  return (
    <div style={{ padding: "24px", color: "var(--text-secondary)", fontSize: "14px" }}>
      Loading search results…
    </div>
  );
}
