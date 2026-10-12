import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { servicesData } from '@/data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mahogany-600 text-ivory-100 border-t border-champagne-400/30">
      {/* Top Banner / Consultation Callout */}
      <div className="border-b border-champagne-400/20 bg-mahogany-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-champagne-300 font-medium">
                PEOPLE · PROCESS · PERFORMANCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mt-2">
                People enable possibilities. We help you build what&apos;s next.
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-medium text-sm tracking-wide shadow-md transition-all group flex-shrink-0"
            >
              <span>Initiate a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF5EE]/95 border border-champagne-300 inline-block shadow-md">
              <Logo variant="dark" size="lg" />
            </div>
            <p className="text-sm text-ivory-200/80 leading-relaxed font-sans max-w-sm pt-1">
              Merit &amp; Beyond is a premium HR consulting and people advisory firm partnering with forward-looking organisations to strengthen people foundations, ensure statutory vigilance, and scale business performance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-champagne-300">
              <ShieldCheck className="w-4 h-4 text-champagne-400" />
              <span>Strategic Advisory · Statutory Integrity · Long-term Impact</span>
            </div>
          </div>

          {/* Primary Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-champagne-300">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-ivory-200/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ivory-200/80 hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ivory-200/80 hover:text-white transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/services#service-discovery" className="text-champagne-300 hover:text-white font-medium transition-colors">
                  Guided Discovery
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-ivory-200/80 hover:text-white transition-colors">
                  Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory-200/80 hover:text-white transition-colors">
                  Contact Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Disciplines */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-champagne-300">
              Advisory Disciplines
            </p>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-ivory-200/80 hover:text-white transition-colors line-clamp-1"
                    title={service.title}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-champagne-300">
              Direct Contact
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+916366056770"
                className="flex items-center gap-3 text-ivory-200/90 hover:text-champagne-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-mahogany-500 flex items-center justify-center text-champagne-300 group-hover:bg-copper-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 6366056770</span>
              </a>

              <a
                href="mailto:ish@meritandbeyond.in"
                className="flex items-center gap-3 text-ivory-200/90 hover:text-champagne-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-mahogany-500 flex items-center justify-center text-champagne-300 group-hover:bg-copper-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">ish@meritandbeyond.in</span>
              </a>

              <div className="flex items-center gap-3 text-ivory-200/90">
                <div className="w-8 h-8 rounded-full bg-mahogany-500 flex items-center justify-center text-champagne-300">
                  <Globe className="w-4 h-4" />
                </div>
                <span>https://www.meritandbeyond.in</span>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs text-ivory-300/60 leading-relaxed">
                Consultations conducted under strict client confidentiality and non-disclosure governance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-champagne-400/20 bg-mahogany-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/60">
            <p>
              &copy; {currentYear} Merit &amp; Beyond. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-champagne-300 underline underline-offset-4 transition-colors"
              >
                Privacy Policy &amp; Data Governance
              </Link>
              <Link
                href="/contact"
                className="hover:text-champagne-300 transition-colors"
              >
                Client Enquiries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
