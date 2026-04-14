'use client';

import { AppShell } from '@mantine/core';
import Header from '@/containers/Header';
import { ListView } from '@/components/ListView';
import MantineAppShell from '@/containers/Appshell';

import classes from './Apshell.module.scss';

const Page = () => {
  return (
    <MantineAppShell padding="md" header={{ height: 70 }} navbar={{ width: 250, breakpoint: 'sm' }}>
      <Header />

      {/* SIDEBAR */}
      <AppShell.Navbar p="md" withBorder={false} classNames={{ navbar: classes.navbar }}>
        Sidebar
      </AppShell.Navbar>

      {/* MAIN */}
      <AppShell.Main className={classes.main}>
        <ListView />
        {/* <Link href="/settings">Go Setting</Link> */}
      </AppShell.Main>
    </MantineAppShell>
  );
};

export default Page;
