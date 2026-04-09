"use client";

import React from "react";
import Image from "next/image";
import { useChannel } from "@/modules/useChannels";
import { ErrorState } from "@/components/ErrorState";
import { formatSubscriberCount, formatAbsoluteDate } from "@/lib/format";
import styles from "./ChannelPage.module.scss";

interface ChannelPageClientProps {
  channelId: string;
}

export function ChannelPageClient({ channelId }: ChannelPageClientProps) {
  const { data: channel, isLoading, isError } = useChannel(channelId);

  if (isError) {
    return (
      <ErrorState
        title="Channel not found"
        message="This channel could not be loaded."
      />
    );
  }

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.bannerSkeleton} />
        <div className={styles.infoSkeleton}>
          <div className={styles.avatarSkeleton} />
          <div className={styles.metaSkeleton}>
            <div className={styles.lineSkeleton} style={{ width: "200px", height: "28px" }} />
            <div className={styles.lineSkeleton} style={{ width: "140px", height: "16px" }} />
            <div className={styles.lineSkeleton} style={{ width: "180px", height: "16px" }} />
          </div>
        </div>
      </div>
    );
  }

  if (!channel) return null;

  const avatar =
    channel.snippet.thumbnails.high?.url ??
    channel.snippet.thumbnails.medium?.url ??
    channel.snippet.thumbnails.default?.url;

  return (
    <div className={styles.page}>
      {/* Banner placeholder */}
      <div className={styles.banner} />

      {/* Channel info */}
      <div className={styles.info}>
        <div className={styles.avatarWrap}>
          {avatar ? (
            <Image
              src={avatar}
              alt={channel.snippet.title}
              width={80}
              height={80}
              className={styles.avatar}
              unoptimized
            />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {channel.snippet.title.charAt(0)}
            </div>
          )}
        </div>

        <div className={styles.meta}>
          <h1 className={styles.channelName}>{channel.snippet.title}</h1>
          <div className={styles.stats}>
            {channel.snippet.customUrl && (
              <span>{channel.snippet.customUrl}</span>
            )}
            {channel.statistics && (
              <span>
                {formatSubscriberCount(channel.statistics.subscriberCount)} subscribers
              </span>
            )}
            {channel.statistics && (
              <span>{parseInt(channel.statistics.videoCount).toLocaleString()} videos</span>
            )}
          </div>
          <p className={styles.description}>
            {channel.snippet.description?.slice(0, 200)}
            {(channel.snippet.description?.length ?? 0) > 200 ? "…" : ""}
          </p>
          <p className={styles.joined}>
            Joined {formatAbsoluteDate(channel.snippet.publishedAt)}
          </p>
        </div>

        <button className={styles.subscribeBtn}>Subscribe</button>
      </div>

      {/* Tabs placeholder */}
      <div className={styles.tabs}>
        {["Home", "Videos", "Shorts", "Playlists", "Community", "About"].map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${tab === "Videos" ? styles.activeTab : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.comingSoon}>
        <p>Channel videos coming soon.</p>
        <p>Connect the YouTube Channels API endpoint for full video listings.</p>
      </div>
    </div>
  );
}
