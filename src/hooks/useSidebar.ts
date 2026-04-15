'use client';

import { useEffect, useState } from 'react';

export function useSidebar() {
  const [mobileOpened, setMobileOpened] = useState<boolean>(false);
  const [desktopOpened, setDesktopOpened] = useState<boolean>(false);

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sidebar');
    setDesktopOpened(saved !== null ? JSON.parse(saved) : true);
  }, []);

  // save to localStorage
  useEffect(() => {
    if (desktopOpened !== null) {
      localStorage.setItem('sidebar', JSON.stringify(desktopOpened));
    }
  }, [desktopOpened]);

  return {
    mobileOpened,
    desktopOpened,
    mobileUpdate: setMobileOpened,
    desktopUpdate: setDesktopOpened,
    isReady: desktopOpened !== null
  };
}
