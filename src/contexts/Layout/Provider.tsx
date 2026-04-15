'use client';

import { useEffect, useState } from 'react';

import Context from './context';
import * as Types from './types';

export default function Provider({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sidebar');
    setDesktopOpen(saved !== null ? JSON.parse(saved) : true);
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar', JSON.stringify(desktopOpen));
  }, [desktopOpen]);

  const value: Types.IContext.ContextType = {
    mobileOpen,
    desktopOpen,

    toggleMobile: () => setMobileOpen(p => !p),
    toggleDesktop: () => setDesktopOpen(p => !p)
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
