import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Compucare Houston - IT Solutions for Business & Home',
    template: '%s | Compucare Houston'
  },
  description: 'Professional IT services in Houston for businesses and individuals. Expert computer repair, network solutions, and tech support available 24/7.',
  keywords: ['IT Services Houston', 'Computer Repair Houston', 'Business IT Support', 'Home Computer Services', 'Network Solutions Houston'],
  authors: [{ name: 'Compucare Houston' }],
  creator: 'Compucare Houston',
  metadataBase: new URL('https://compucarehouston.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://compucarehouston.com',
    title: 'Compucare Houston - IT Solutions for Business & Home',
    description: 'Professional IT services in Houston for businesses and individuals. Expert computer repair, network solutions, and tech support available 24/7.',
    siteName: 'Compucare Houston'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compucare Houston - IT Solutions for Business & Home',
    description: 'Professional IT services in Houston for businesses and individuals. Expert computer repair, network solutions, and tech support available 24/7.',
    creator: '@CompucareHOU'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={GeistSans.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}