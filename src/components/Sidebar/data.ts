import { IconHome, IconPlayerPlay, IconBell, IconVideo, IconHistory, IconClock, type Icon } from '@tabler/icons-react';

export type SidebarItem = {
  id: string;
  label: string;
  icon: Icon;
  href: string;
  isActive?: boolean;
};

export const sidebarData: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: IconHome,
    href: '/',
    isActive: true
  },
  {
    id: 'shorts',
    label: 'Shorts',
    icon: IconPlayerPlay,
    href: '/settings'
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
    icon: IconBell,
    href: '/subscriptions'
  },
  {
    id: 'library',
    label: 'Library',
    icon: IconVideo,
    href: '/library'
  },
  {
    id: 'history',
    label: 'History',
    icon: IconHistory,
    href: '/history'
  },
  {
    id: 'watchlater',
    label: 'Watch Later',
    icon: IconClock,
    href: '/watchlater'
  }
];
