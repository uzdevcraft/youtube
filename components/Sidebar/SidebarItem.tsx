'use client';

import { Tooltip } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { NavItem } from './sidebar.data';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: NavItem;
  collapsed: boolean;
  onClick?: () => void;
}

export function SidebarItem({ item, collapsed, onClick }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const { icon: Icon, label, shortLabel, href, ariaLabel } = item;

  const content = (
    <Link
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(classes.item, {
        [classes['item--active']]: isActive,
        [classes['item--collapsed']]: collapsed,
      })}
    >
      <span className={classes.item__icon}>
        <Icon />
      </span>

      {collapsed ? (
        <span className={classes.item__shortLabel}>{shortLabel}</span>
      ) : (
        <span className={classes.item__label}>{label}</span>
      )}
    </Link>
  );

  // Tooltip only for explore/library items when collapsed
  // For main section items label is visible under icon so no tooltip needed
  return content;
}
