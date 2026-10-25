import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ContentProvider } from '@/lib/contentContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3E9D8',
};

export const metadata: Metadata = {
  title: {
    default: 'Merit & Beyond | People & Business Advisory',
    template: '%s | Merit & Beyond',
  },
  description: 'Practical HR consulting, people strategy, HR transformation and workplace learning to help organisations strengthen people systems and performance.',
  keywords: [
    'People & Business Advisory',
    'Strategic HR Consulting',
    'Fractional CHRO Services',
    'HR Transformation & Process Optimisation',
    'Labour Law Compliance & HR Audits',
    'Organisational Development & Effectiveness',
    'Corporate Learning',
    'Performance Management in Practice',
    'Merit & Beyond',
  ],
  authors: [{ name: 'Merit & Beyond' }],
  metadataBase: new URL('https://www.meritandbeyond.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Merit & Beyond | People & Business Advisory',
    description: 'Better People Decisions. Stronger Business Performance. Practical, business-aligned people solutions that move beyond advice into clearer decisions, stronger systems and more consistent execution.',
    url: 'https://www.meritandbeyond.in',
    siteName: 'Merit & Beyond',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F3E9D8] text-[#29231D] font-sans antialiased selection:bg-[#B69A6A]/30 selection:text-[#29231D]">
        <ContentProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  );
}
