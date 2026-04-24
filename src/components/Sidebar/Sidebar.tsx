'use client';

import Link from 'next/link';
import { sidebarData } from './data';
import { usePathname } from 'next/navigation';
import { useContext } from '@/contexts/Layout';

import cx from 'clsx';
import classes from './Sidebar.module.scss';

const Sidebar = () => {
  const pathname = usePathname();
  const { desktopOpen } = useContext();

  return (
    <aside className={classes.sidebar}>
      <div className={classes.container}>
        {sidebarData.map(({ id, href, icon: Icon, label }) => {
          return (
            <Link key={id} className={cx(classes.item, pathname === href && classes.active)} href={href}>
              <Icon className={classes.icon} />
              <p className={cx(classes.label, !desktopOpen && classes.hidden)}>{label}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
