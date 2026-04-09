import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { AppShell } from "./AppShell";
import "@mantine/core/styles.css";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "YouTube",
  description: "Watch videos, music, and more",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://www.youtube.com/s/desktop/1afc1cab/img/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
