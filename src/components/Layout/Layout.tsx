'use client';

import React from 'react';
import { AppShell } from '@mantine/core';
import { Header } from '@/containers/Header';
import { Sidebar } from '@/components/Sidebar';

import { useContext } from '@/contexts/Layout';

import classes from './Layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { desktopOpen, mobileOpen, toggleDesktop } = useContext();

  if (desktopOpen === null) toggleDesktop();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !mobileOpen, desktop: !desktopOpen } }}
    >
      <AppShell.Header classNames={{ header: classes.header }}>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar classNames={{ navbar: classes.navbar }}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main classNames={{ main: classes.main }}>{children}</AppShell.Main>
    </AppShell>
  );
}
