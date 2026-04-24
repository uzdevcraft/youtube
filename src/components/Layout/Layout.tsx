'use client';

import { useContext } from '@/contexts/Layout';

import { AppShell } from '@mantine/core';
import { Header } from '@/containers/Header';
import { Sidebar } from '@/components/Sidebar';

import classes from './Layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { desktopOpen } = useContext();

  return (
    <AppShell
      transitionDuration={300}
      transitionTimingFunction="ease-in-out"
      navbar={{
        width: desktopOpen ? 250 : 70,
        breakpoint: 0
      }}
      header={{ height: 60 }}
      classNames={{
        root: classes.root,
        navbar: classes.navbar,
        header: classes.header
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className={classes.main_wrapper}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
