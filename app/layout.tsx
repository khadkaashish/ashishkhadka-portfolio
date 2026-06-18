import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashish Khadka — Software Engineer',
  description:
    'Software Engineer at AWS RDS. I build distributed systems that stay up when everything else falls down.',
  openGraph: {
    title: 'Ashish Khadka — Software Engineer',
    description: 'Software Engineer at AWS RDS. Distributed systems, databases, infrastructure.',
    url: 'https://ashishkhadka.com',
    siteName: 'Ashish Khadka',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Khadka — Software Engineer',
    description: 'Software Engineer at AWS RDS. Distributed systems, databases, infrastructure.',
  },
  metadataBase: new URL('https://ashishkhadka.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
