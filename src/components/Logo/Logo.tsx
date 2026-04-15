'use client';

import { useRouter } from 'next/navigation';

import { Youtube } from '@/components/Icon/list/custom';

import classes from './Logo.module.scss';

const Logo = () => {
  const router = useRouter();

  return (
    <div className={classes.logo} onClick={() => router.push('/')}>
      <Youtube />
    </div>
  );
};

export default Logo;
