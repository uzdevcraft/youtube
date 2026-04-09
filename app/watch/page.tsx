import type { Metadata } from "next";
import { Suspense } from "react";
import { WatchPageClient } from "./WatchPageClient";

export const metadata: Metadata = {
  title: "Watch - YouTube",
};

export default function WatchPage() {
  return (
    <Suspense fallback={<WatchPageFallback />}>
      <WatchPageClient />
    </Suspense>
  );
}

function WatchPageFallback() {
  return (
    <div
      style={{
        padding: "24px",
        display: "grid",
        gridTemplateColumns: "1fr 402px",
        gap: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "#000",
        }}
      />
    </div>
  );
}
