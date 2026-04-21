'use client';

import { useTrendingVideos } from '@/modules/home/hooks';
import { Container, Grid, Card, Image, Text } from '@mantine/core';

import classes from './page.module.scss';

const Page = () => {
  const { data: videos, isLoading, isError } = useTrendingVideos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Container fluid className={classes.wrapper}>
      <Grid>
        {videos?.pages
          ?.flatMap(page => page.results)
          .map(video => {
            const thumbnail = video.snippet?.thumbnails?.high?.url || video.snippet?.thumbnails?.medium?.url;

            return (
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={video.id}>
                <Card className={classes.card} shadow="sm" radius="md" p="xs">
                  <Card.Section>
                    <Image
                      src={thumbnail}
                      alt={video.snippet.title}
                      fallbackSrc="/placeholder.png"
                      className={classes.image}
                    />
                  </Card.Section>

                  <div className={classes.content}>
                    <Text className={classes.videoTitle} lineClamp={2}>
                      {video.snippet.title}
                    </Text>

                    <Text size="sm" c="dimmed">
                      {video.statistics?.viewCount} views
                    </Text>
                  </div>
                </Card>
              </Grid.Col>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Page;
