'use client';

import Image from 'next/image';
import clsx from 'clsx';
import type { VideoCardProps } from './VideoCard.types';
import { formatViewCount, formatRelativeDate } from './videoCard.utils';
import styles from './VideoCard.module.scss';
import { formatDuration } from '@/helpers';

/**
 * Verified checkmark SVG icon — matches YouTube's style exactly.
 */
function VerifiedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 0 24 24"
      width="14"
      fill="currentColor"
      aria-label="Verified channel"
      role="img"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
    </svg>
  );
}

/**
 * VideoCard — a pixel-faithful YouTube homepage video card.
 *
 * @example
 * <VideoCard
 *   thumbnailUrl="/thumb.jpg"
 *   title="Amazing Video Title Here"
 *   channelName="My Channel"
 *   channelAvatarUrl="/avatar.jpg"
 *   viewCount={1_234_567}
 *   uploadDate="2024-09-01"
 *   duration="12:45"
 *   isVerified
 * />
 */
export default function VideoCard({
  thumbnailUrl,
  title,
  channelName,
  channelAvatarUrl,
  viewCount,
  uploadDate,
  duration,
  isVerified = false,
  onClick,
  className
}: VideoCardProps) {
  const views = formatViewCount(viewCount);
  const relativeDate = formatRelativeDate(uploadDate);

  return (
    <article
      className={clsx(styles.card, className)}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') onClick?.();
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`${title} by ${channelName}, ${views}, ${relativeDate}`}
    >
      {/* ── Thumbnail ── */}
      <div className={styles.thumbnailWrapper}>
        {thumbnailUrl && (
          <Image
            src={thumbnailUrl}
            width={400}
            height={225}
            alt={`Thumbnail for ${title}`}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.thumbnail}
            priority={false}
          />
        )}
        {duration && (
          <span className={styles.duration} aria-label={`Duration: ${duration}`}>
            {formatDuration(duration)}
          </span>
        )}
      </div>

      {/* ── Meta row ── */}
      <div className={styles.meta}>
        {/* Channel avatar */}
        <div className={styles.avatarWrapper} aria-hidden="true">
          {channelAvatarUrl && <img src={channelAvatarUrl} alt={`${channelName} channel avatar`} sizes="36px" />}
        </div>

        {/* Text content */}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.channelRow}>
            <span className={styles.channelName}>{channelName}</span>
            {isVerified && (
              <span className={styles.verifiedIcon}>
                <VerifiedIcon />
              </span>
            )}
          </div>

          <div className={styles.statsRow} aria-label={`${views} • ${relativeDate}`}>
            <span>{views}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span>{relativeDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
