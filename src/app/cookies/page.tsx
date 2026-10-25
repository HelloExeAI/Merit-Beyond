import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy & Preferences | Merit & Beyond',
  description: 'Information regarding the use of cookies, technical telemetry, and privacy preferences on Merit & Beyond.',
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-16 md:py-20 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#846A3F] hover:text-[#29231D] font-semibold mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
            TECHNICAL &amp; PRIVACY CONTROLS
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#29231D] tracking-tight">
            Cookie Policy &amp; Preferences
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-[#29231D]/85 leading-relaxed font-sans">
          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">1. Essential Technical Cookies</h2>
            <p>
              Merit &amp; Beyond uses minimal first-party cookies necessary for site performance, navigation security, CSRF protection, and font rendering. These cookies do not track personal identifying information across external third-party websites.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">2. Performance &amp; Analytics</h2>
            <p>
              We deploy privacy-conscious technical telemetry to measure page response times and aggregate visitor traffic patterns (e.g. popular advisory articles). These diagnostics are anonymous and used solely to optimise site speed and readability.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#29231D] font-semibold">3. Managing Your Browser Settings</h2>
            <p>
              You can instruct your web browser to refuse all cookies or notify you when a cookie is placed. Note that core browsing experience remains fully accessible even if non-essential cookies are disabled.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
