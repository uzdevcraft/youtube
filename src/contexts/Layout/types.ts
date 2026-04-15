export declare namespace IContext {
  export type ContextType = {
    mobileOpen: boolean;
    desktopOpen: boolean | null;

    toggleMobile: () => void;
    toggleDesktop: () => void;
  };
}
