'use client';

import clsx from 'clsx';
import type { VideoCardSkeletonProps } from './VideoCard.types';
import styles from './VideoCard.module.scss';

/**
 * VideoCardSkeleton — animated shimmer placeholder matching VideoCard's layout.
 * Renders `count` skeleton cards.
 *
 * @example
 * <VideoCardSkeleton count={6} />
 */
export default function VideoCardSkeleton({ count = 1, className }: VideoCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={clsx(styles.skeleton, className)}
          aria-busy="true"
          aria-label="Loading video"
          role="status"
        >
          {/* Thumbnail placeholder */}
          <div className={styles.skeletonThumb} />

          {/* Meta placeholder */}
          <div className={styles.skeletonMeta}>
            <div className={styles.skeletonAvatar} />
            <div className={styles.skeletonLines}>
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLine} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
