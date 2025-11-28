import { ReactQueryClientProvider } from '@/components/core/react-query-client-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  preload: false,
});

const META_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'https://www.zaczajdel.com/';

export const metadata: Metadata = {
  metadataBase: new URL(META_URL),
  title: 'Learn With Zac',
  description: 'Portfolio Website of Zac Zajdel.',
  applicationName: 'Learn With Zac',
  authors: [{ name: 'Zac', url: 'https://www.zaczajdel.com/' }],
  keywords: ['Blog', 'Zac Zajdel', 'Coding', 'Programmer', 'Software Engineer'],
  openGraph: {
    title: 'Learn With Zac',
    description: 'Portfolio Website of Zac Zajdel.',
    siteName: 'Learn With Zac',
    images: '/android-chrome-192x192.png',
    url: 'https://www.zaczajdel.com/',
  },
  twitter: {
    title: 'Learn With Zac',
    description: 'Portfolio Website of Zac Zajdel.',
    creator: '@zac_zajdel',
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: `${META_URL}/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: `${META_URL}/favicon-16x16.png`,
    },
  ],
  manifest: '/site.webmanifest',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ReactQueryClientProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <RootProvider>{children}</RootProvider>
          <Toaster
            richColors
            visibleToasts={1}
          />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
