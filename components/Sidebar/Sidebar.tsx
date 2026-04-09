'use client';

import { Drawer } from '@mantine/core';
import { NAV_SECTIONS } from './sidebar.data';
import { SidebarSection } from './SidebarSection';

import cx from 'clsx';
import classes from './Sidebar.module.scss';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type SidebarVariant = 'expanded' | 'collapsed' | 'mobile';

interface SidebarProps {
  variant: SidebarVariant;
  /** Mobile-only: whether the drawer is open */
  mobileOpen?: boolean;
  /** Mobile-only: called when drawer requests close */
  onMobileClose?: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared nav content (rendered inside desktop aside or mobile drawer)
// ─────────────────────────────────────────────────────────────────────────────

interface NavContentProps {
  collapsed: boolean;
  onItemClick?: () => void;
}

function NavContent({ collapsed, onItemClick }: NavContentProps) {
  return (
    <div className={classes.sidebar__scroll}>
      <nav className={classes.sidebar__nav} aria-label="Main navigation">
        {NAV_SECTIONS.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            collapsed={collapsed}
            onItemClick={onItemClick}
          />
        ))}
      </nav>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar
// ─────────────────────────────────────────────────────────────────────────────

export function Sidebar({ variant, mobileOpen = false, onMobileClose }: SidebarProps) {
  const isCollapsed = variant === 'collapsed';
  const isMobile = variant === 'mobile';

  // ── Mobile: render as Mantine Drawer ──────────────
  if (isMobile) {
    return (
      <Drawer
        opened={mobileOpen}
        onClose={onMobileClose ?? (() => {})}
        withCloseButton={false}
        size={240}
        padding={0}
        classNames={{
          body: classes.drawerBody,
          content: classes.drawerContent,
        }}
        overlayProps={{ backgroundOpacity: 0.4 }}
        transitionProps={{ duration: 200 }}
      >
        <NavContent collapsed={false} onItemClick={onMobileClose} />
      </Drawer>
    );
  }

  // ── Desktop: fixed aside ───────────────────────────
  return (
    <aside
      className={cx(classes.sidebar, {
        [classes['sidebar--collapsed']]: isCollapsed,
      })}
      aria-label="Sidebar navigation"
    >
      <NavContent collapsed={isCollapsed} />
    </aside>
  );
}
