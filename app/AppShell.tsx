"use client";

import React from "react";
import { Header } from "@/components";
import { Sidebar } from "@/components/Sidebar";
import { useSidebarState } from "@/hooks/useSidebarState";

import cx from "clsx";
import classes from "./AppShell.module.scss";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { variant, mobileOpen, toggle, closeMobile, mounted } =
    useSidebarState();

  const isMobile = variant === "mobile";
  const isCollapsed = variant === "collapsed";

  return (
    <div className={cx(classes.root)}>
      {/* Header */}
      <header className={classes.header}>
        <Header opened={variant} toggle={toggle} />
      </header>

      {/* Sidebar */}
      {mounted && (
        <Sidebar
          variant={variant}
          mobileOpen={mobileOpen}
          onMobileClose={closeMobile}
        />
      )}

      {/* Content */}
      <main
        className={cx(classes.main, {
          [classes["main--collapsed"]]: isCollapsed,
          [classes["main--mobile"]]: isMobile,
        })}
      >
        {children}
      </main>
    </div>
  );
}
