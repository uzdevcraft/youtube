import React from "react";
import { buildEmbedUrl } from "@/lib/format";
import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

export function VideoPlayer({ videoId, title = "Video player" }: VideoPlayerProps) {
  const embedUrl = buildEmbedUrl(videoId);

  return (
    <div className={styles.playerWrap}>
      <iframe
        className={styles.iframe}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export function VideoPlayerSkeleton() {
  return <div className={styles.skeleton} aria-hidden="true" />;
}
