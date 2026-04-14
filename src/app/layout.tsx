import '@mantine/core/styles.css';
import '@/styles/globals.scss';

import { type Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Providers from '@/containers/Providers';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export const metadata: Metadata = {
  title: 'YouTube',
  description:
    'Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube.',
  keywords: ['YouTube', 'video', 'share', 'movies', 'music'],
  icons: {
    icon: 'https://www.youtube.com/favicon.ico'
  },
  openGraph: {
    title: 'YouTube',
    description:
      'Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube.',
    url: 'https://www.youtube.com',
    siteName: 'YouTube',
    images: [
      {
        url: 'https://www.youtube.com/img/desktop/yt_1200.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
