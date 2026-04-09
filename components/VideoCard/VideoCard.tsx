import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {
  formatViewCount,
  formatRelativeDate,
  formatDuration,
} from "@/lib/format";
import type { VideoCardData } from "@/types/youtube";
import styles from "./VideoCard.module.scss";

interface VideoCardProps {
  video: VideoCardData;
  horizontal?: boolean;
  className?: string;
}

interface VideoCardSkeletonProps {
  count?: number;
}

export function VideoCardSkeleton({ count = 1 }: VideoCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeleton} aria-hidden="true">
          <div className={styles.skeletonThumb} />
          <div className={styles.skeletonInfo}>
            <div className={styles.skeletonAvatar} />
            <div className={styles.skeletonMeta}>
              <div className={clsx(styles.skeletonLine, styles.full)} />
              <div className={clsx(styles.skeletonLine, styles.wide)} />
              <div className={clsx(styles.skeletonLine, styles.narrow)} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

import { useRouter } from "next/navigation";

export function VideoCard({
  video,
  horizontal = false,
  className,
}: VideoCardProps) {
  const router = useRouter();

  const cardClass = clsx(
    horizontal ? styles.cardHorizontal : styles.card,
    className,
  );

  return (
    <Link href={`/watch?v=${video.id}`} className={cardClass} prefetch={false}>
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        <Image
          src={
            // video.thumbnailUrl && video.thumbnailUrl.startsWith("http")
            //   ? video.thumbnailUrl
            //   : "/placeholder.png"
            video.thumbnailUrl &&
            "https://t4.ftcdn.net/jpg/16/79/44/21/360_F_1679442196_OEsi0AFKie6hYMBpvmXwwRgRYGV4U6Lz.jpg"
          }
          alt={video.title}
          fill
          sizes={
            horizontal
              ? "246px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          loading="lazy"
          style={{ objectFit: "cover" }}
          unoptimized
        />
        {video.duration && (
          <span className={styles.duration}>
            {formatDuration(video.duration)}
          </span>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        {!horizontal && (
          <div
            className={styles.avatar}
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/channel/${video.channelId}`);
            }}
            role="link"
          >
            {video.channelAvatarUrl ? (
              <Image
                src={video.channelAvatarUrl}
                alt={video.channelTitle}
                width={36}
                height={36}
                unoptimized
              />
            ) : (
              <div className={styles.avatarPlaceholder}>
                {video.channelTitle.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        )}

        <div className={styles.meta}>
          <h3 className={styles.title} title={video.title}>
            {video.title}
          </h3>

          <span
            className={styles.channel}
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/channel/${video.channelId}`);
            }}
          >
            {video.channelTitle}
          </span>

          <div className={styles.stats}>
            <span>{formatViewCount(video.viewCount)}</span>
            <span>{formatRelativeDate(video.publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
