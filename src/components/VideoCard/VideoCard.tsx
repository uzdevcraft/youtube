'use client';

import { useHover, useMediaQuery } from '@mantine/hooks';
import { IconDotsVertical } from '@tabler/icons-react';
import { ActionIcon, Avatar, Badge, Card, Group, Text } from '@mantine/core';

import cx from 'clsx';
import classes from './VideoCard.module.scss';

type VideoCardProps = {
  thumbnail: string;
  duration: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  uploadedAt: string;
  description?: string;
};

const VideoCard = ({
  thumbnail,
  duration,
  title,
  channelName,
  channelAvatar,
  views,
  uploadedAt,
  description
}: VideoCardProps) => {
  const { hovered, ref } = useHover();
  const isCompact = useMediaQuery('(max-width: 900px)');

  return (
    <Card ref={ref} className={cx(classes.card, { [classes.hovered]: hovered })} radius="md" shadow="sm" withBorder>
      <Card.Section className={classes.thumbnailSection}>
        <img src={thumbnail} alt={title} className={classes.thumbnail} />
        <div className={classes.durationBadge}>{duration}</div>
      </Card.Section>

      <Group className={classes.headerGroup} align="flex-start" gap="xs">
        <Text className={classes.title} lineClamp={isCompact ? 2 : 3}>
          {title}
        </Text>

        <ActionIcon variant="subtle" className={classes.menuButton} aria-label="Video options">
          <IconDotsVertical size={18} />
        </ActionIcon>
      </Group>

      <Group className={classes.channelGroup} gap="sm" align="center">
        <Avatar src={channelAvatar} radius="xl" size={40} />
        <div className={classes.channelInfo}>
          <Text size="sm" fw={600} className={classes.channelName}>
            {channelName}
          </Text>
          <Group gap="xs" className={classes.metaRow}>
            <Text size="xs" color="dimmed">
              {views} views
            </Text>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {uploadedAt}
            </Text>
          </Group>
        </div>
      </Group>

      {description ? (
        <Text size="sm" color="dimmed" className={classes.description} lineClamp={isCompact ? 3 : 4}>
          {description}
        </Text>
      ) : null}
    </Card>
  );
};

export default VideoCard;
