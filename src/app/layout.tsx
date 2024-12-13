import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Car Dealer App',
  description:
    'Filter and explore vehicle models by make and year using the Car Dealer App, built with Next.js and Tailwind CSS.',
  applicationName: 'Car Dealer App',
  authors: [{ name: 'Olena P.', url: 'https://github.com/Olena-P' }],
  keywords: [
    'Car Dealer',
    'Vehicle Models',
    'Next.js',
    'Tailwind CSS',
    'Vehicle Makes',
    'Filter Cars',
    'Car Year Selection',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
