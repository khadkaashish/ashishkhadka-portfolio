import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashish Khadka — Software Engineer',
  description:
    'Software Engineer joining AWS RDS. I build distributed systems — WAL replication, quorum writes, fault-tolerant infrastructure at scale.',
  openGraph: {
    title: 'Ashish Khadka — Software Engineer',
    description: 'Distributed systems, databases, infrastructure. Joining AWS RDS Aug 2026.',
    url: 'https://ashishkhadka.com',
    siteName: 'Ashish Khadka',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Khadka — Software Engineer',
    description: 'Distributed systems, databases, infrastructure. Joining AWS RDS Aug 2026.',
  },
  metadataBase: new URL('https://ashishkhadka.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
