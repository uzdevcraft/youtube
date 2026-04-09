"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import type { SidebarVariant } from "@/components/Sidebar/Sidebar";

const BP_MOBILE = 768; // < 768px  → mobile drawer
const BP_DESKTOP = 1024; // > 1024px → expanded

/**
 * Derives the correct sidebar variant from viewport width.
 * Called once on mount, then again whenever the breakpoint changes.
 */
function deriveVariant(width: number): SidebarVariant {
  if (width < BP_MOBILE) return "mobile";
  if (width < BP_DESKTOP) return "collapsed";
  return "expanded";
}

export function useSidebarState() {
  // Track whether JS has hydrated (avoid SSR mismatch)
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<SidebarVariant>("expanded");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Mantine media query hooks for breakpoints
  const isMobileViewport = useMediaQuery(`(max-width: ${BP_MOBILE - 1}px)`);
  const isTabletViewport = useMediaQuery(
    `(min-width: ${BP_MOBILE}px) and (max-width: ${BP_DESKTOP - 1}px)`,
  );

  // Initial mount: read real window width
  useEffect(() => {
    setVariant(deriveVariant(window.innerWidth));
    setMounted(true);
  }, []);

  // Respond to responsive breakpoint changes AFTER mount
  // We skip this on the initial render to avoid overriding
  // a user-initiated toggle immediately.
  const skipNextViewportChange = useRef(true);

  useEffect(() => {
    if (!mounted) return;
    if (skipNextViewportChange.current) {
      skipNextViewportChange.current = false;
      return;
    }

    if (isMobileViewport) {
      setVariant("mobile");
      setMobileOpen(false);
    } else if (isTabletViewport) {
      setVariant("collapsed");
    } else {
      setVariant("expanded");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileViewport, isTabletViewport]);

  /** Toggle between expanded ↔ collapsed (desktop) or open mobile drawer */
  const toggle = useCallback(() => {
    setVariant((prev) => {
      if (prev === "mobile") {
        setMobileOpen((o) => !o);
        return "mobile";
      }
      return prev === "expanded" ? "collapsed" : "expanded";
    });
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return { variant, mobileOpen, toggle, closeMobile, mounted };
}
