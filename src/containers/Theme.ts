export interface ThemeOptions {
  value: 'light' | 'dark' | 'auto';
  label: 'Light' | 'Dark' | 'System';
  icon: 'Sun' | 'Moon' | 'SystemMode';
}

export const themeOptions: ThemeOptions[] = [
  { value: 'light', label: 'Light', icon: 'Sun' },
  { value: 'dark', label: 'Dark', icon: 'Moon' },
  { value: 'auto', label: 'System', icon: 'SystemMode' }
] as const;

export type ThemeValue = (typeof themeOptions)[number]['value'];
