import type { Metadata } from "next";
import { Suspense } from "react";
import { ChannelPageClient } from "./ChannelPageClient";

interface ChannelPageProps {
  params: Promise<{ channelId: string }>;
}

export async function generateMetadata({ params }: ChannelPageProps): Promise<Metadata> {
  const { channelId } = await params;
  return {
    title: `Channel ${channelId} - YouTube`,
  };
}

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = await params;
  return (
    <Suspense fallback={<div style={{ padding: "24px", color: "var(--text-secondary)" }}>Loading channel…</div>}>
      <ChannelPageClient channelId={channelId} />
    </Suspense>
  );
}
