"use client";

import { useSearchParams } from "next/navigation";
import { SearchContainer } from "@/containers/SearchContainer";
import { ErrorState } from "@/components/ErrorState";

export function SearchPageClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  if (!query.trim()) {
    return (
      <ErrorState
        title="No search query"
        message="Enter something in the search bar above."
      />
    );
  }

  return <SearchContainer query={query} />;
}
