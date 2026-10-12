import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-ivory-gradient">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <Logo variant="dark" size="md" className="mx-auto" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold uppercase tracking-widest">
          <span>Error 404 · Page Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-mahogany-600 tracking-tight">
          Page Not Located
        </h1>

        <p className="text-base text-softblack-muted font-sans leading-relaxed">
          The consulting route or publication you requested does not exist or may have been repositioned. Please return to the homepage or explore our guided service discovery.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-xs tracking-wider uppercase shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services#service-discovery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-champagne-50 text-mahogany-600 font-medium text-xs tracking-wider uppercase border border-champagne-300 transition-all"
          >
            <Compass className="w-4 h-4 text-copper-600" />
            <span>Service Discovery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
