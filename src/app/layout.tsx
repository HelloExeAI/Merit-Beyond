import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7EBDD',
};

export const metadata: Metadata = {
  title: 'Merit & Beyond | Strategic HR Consulting & People Advisory',
  description: 'Strengthening people, processes and organisational performance for a future-ready workforce. Bespoke HR advisory, compliance audits, payroll systems, and talent capability development.',
  keywords: [
    'HR Consulting',
    'People Advisory',
    'Labour Law Compliance',
    'Organisation Setup',
    'HRMS and Payroll',
    'Workplace Effectiveness',
    'Talent Acquisition',
    'Corporate Training',
    'Merit & Beyond'
  ],
  authors: [{ name: 'Merit & Beyond' }],
  metadataBase: new URL('https://www.meritandbeyond.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Merit & Beyond | Strategic HR Consulting & People Advisory',
    description: 'People Strategy. Business Performance. Strengthening people, processes and organisational performance for a future-ready workforce.',
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
      <body className="min-h-screen flex flex-col bg-[#F7EBDD] text-[#171513] font-sans antialiased selection:bg-champagne-300 selection:text-mahogany-600">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
