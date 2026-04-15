'use client';

import { useMemo, useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import { Badge, Button, Group, SimpleGrid, Stack, Text, Title, useMantineTheme } from '@mantine/core';

import cx from 'clsx';
import classes from './ListView.module.scss';

const ListView = () => {
  return <section className={classes.listView}></section>;
};

export default ListView;
