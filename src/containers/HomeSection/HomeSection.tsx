'use client';

import { useTrendingVideos } from '@/modules/home/hooks';

import { Container } from '@mantine/core';
import { VideoCard, VideoCardSkeleton } from '@/components/VideoCard';

import classes from './HomeSection.module.scss';
import { getThumbnail } from '@/helpers';

export default function HomeSection() {
  const { data, isLoading, isFetching } = useTrendingVideos();

  if (isLoading) {
    return (
      <div className={classes.homeSection}>
        <VideoCardSkeleton count={12} />
      </div>
    );
  }

  return (
    <Container fluid classNames={{ root: classes.container }}>
      <div className={classes.videoGrid}>
        {data?.pages
          ?.flatMap(page => page.results)
          ?.map(v => (
            <VideoCard
              key={v.id}
              thumbnailUrl={getThumbnail(v.snippet.thumbnails)}
              title={v.snippet.title}
              channelName={v.snippet.channelTitle}
              channelAvatarUrl={v.snippet.thumbnails.default.url}
              viewCount={+v.statistics.viewCount}
              uploadDate={v.snippet.publishedAt}
              duration={v.contentDetails.duration}
              isVerified={true}
              onClick={() => console.log(`Clicked: ${v.snippet.title}`)}
            />
          ))}

        {isFetching && <VideoCardSkeleton count={4} />}
      </div>
    </Container>
  );
}
