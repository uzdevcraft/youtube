import {
  Home,
  Clapperboard,
  Users,
  History,
  ListVideo,
  Clock,
  ThumbsUp,
  TrendingUp,
  Music2,
  Gamepad2,
  Newspaper,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  shortLabel: string; // shown under icon when collapsed
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export interface NavSection {
  id: string;
  title?: string; // shown only when expanded
  items: NavItem[];
  dividerAfter?: boolean;
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'home',
        label: 'Home',
        shortLabel: 'Home',
        href: '/',
        icon: Home,
        ariaLabel: 'Home',
      },
      {
        id: 'shorts',
        label: 'Shorts',
        shortLabel: 'Shorts',
        href: '/shorts',
        icon: Clapperboard,
        ariaLabel: 'Shorts',
      },
      {
        id: 'subscriptions',
        label: 'Subscriptions',
        shortLabel: 'Subs',
        href: '/subscriptions',
        icon: Users,
        ariaLabel: 'Subscriptions',
      },
    ],
    dividerAfter: true,
  },
  {
    id: 'library',
    title: 'Library',
    items: [
      {
        id: 'history',
        label: 'History',
        shortLabel: 'History',
        href: '/history',
        icon: History,
        ariaLabel: 'History',
      },
      {
        id: 'playlists',
        label: 'Playlists',
        shortLabel: 'Playlists',
        href: '/playlists',
        icon: ListVideo,
        ariaLabel: 'Playlists',
      },
      {
        id: 'watch-later',
        label: 'Watch Later',
        shortLabel: 'Later',
        href: '/watch-later',
        icon: Clock,
        ariaLabel: 'Watch Later',
      },
      {
        id: 'liked',
        label: 'Liked Videos',
        shortLabel: 'Liked',
        href: '/liked',
        icon: ThumbsUp,
        ariaLabel: 'Liked Videos',
      },
    ],
    dividerAfter: true,
  },
  {
    id: 'explore',
    title: 'Explore',
    items: [
      {
        id: 'trending',
        label: 'Trending',
        shortLabel: 'Trending',
        href: '/trending',
        icon: TrendingUp,
        ariaLabel: 'Trending',
      },
      {
        id: 'music',
        label: 'Music',
        shortLabel: 'Music',
        href: '/music',
        icon: Music2,
        ariaLabel: 'Music',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        shortLabel: 'Gaming',
        href: '/gaming',
        icon: Gamepad2,
        ariaLabel: 'Gaming',
      },
      {
        id: 'news',
        label: 'News',
        shortLabel: 'News',
        href: '/news',
        icon: Newspaper,
        ariaLabel: 'News',
      },
    ],
  },
];
