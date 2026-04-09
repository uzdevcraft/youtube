"use client";

import { useSearchParams } from "next/navigation";
import { WatchContainer } from "@/containers/WatchContainer";
import { ErrorState } from "@/components/ErrorState";

export function WatchPageClient() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  if (!videoId) {
    return (
      <ErrorState
        title="No video selected"
        message="Please select a video to watch."
      />
    );
  }

  return <WatchContainer videoId={videoId} />;
}
