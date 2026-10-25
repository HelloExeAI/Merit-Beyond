import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe, ArrowUpRight, ShieldAlert } from 'lucide-react';
import Logo from '@/components/ui/Logo';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#29231D] text-[#F3E9D8] border-t border-[#B69A6A]/30">
      {/* Top Banner / Final CTA Callout */}
      <div className="border-b border-[#B69A6A]/20 bg-[#1E1914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A6A] font-semibold">
                PEOPLE | PROCESSES | POSSIBILITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1.5">
                Better People Decisions. Stronger Business Performance.
              </h3>
              <p className="text-xs text-[#DEC8A9]/80 mt-1 max-w-xl font-sans">
                Practical thinking. Clear priorities. Better execution.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#B69A6A] hover:bg-[#9E8152] text-[#29231D] font-semibold text-xs tracking-wider uppercase shadow-md transition-all group flex-shrink-0"
            >
              <span>Discuss a Requirement</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block py-1">
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-xs text-[#DEC8A9]/90 leading-relaxed font-sans max-w-sm pt-1">
              Merit &amp; Beyond is a People &amp; Business Advisory firm that helps organisations build effective HR systems, develop capable leaders and strengthen workplace performance through practical consulting and skill development.
            </p>
            
            <div className="pt-2 flex items-start gap-2.5 text-[11px] text-[#DEC8A9]/70 bg-white/5 p-3 rounded-lg border border-[#B69A6A]/20">
              <ShieldAlert className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Statutory Notice:</strong> Compliance reviews identify operational and documentation gaps within a defined scope and do not constitute a legal guarantee or substitute for formal legal advice.
              </span>
            </div>
          </div>

          {/* Core Advisory Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#B69A6A]">
              Advisory Disciplines
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/strategic-hr-consulting" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Strategic HR Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-chro" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Fractional CHRO Services
                </Link>
              </li>
              <li>
                <Link href="/services/hr-transformation" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  HR Transformation &amp; Process Optimisation
                </Link>
              </li>
              <li>
                <Link href="/services/labour-law-compliance-audits" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Labour Law Compliance &amp; HR Audits
                </Link>
              </li>
              <li>
                <Link href="/services/organisational-development" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Organisational Development &amp; Effectiveness
                </Link>
              </li>
              <li className="pt-1 border-t border-white/10">
                <Link href="/services" className="text-[#B69A6A] hover:text-white font-medium transition-colors">
                  View All Services &amp; Specialist Support →
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning & Industries */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#B69A6A]">
              Learning &amp; Sectors
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/learning" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Learning Overview
                </Link>
              </li>
              <li>
                <Link href="/learning/corporate-programmes" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Corporate Programmes
                </Link>
              </li>
              <li>
                <Link href="/learning/open-workshops" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Open Workshops
                </Link>
              </li>
              <li>
                <Link href="/learning/programmes/performance-management-in-practice" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Flagship Programme
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-[#DEC8A9]/80 hover:text-white transition-colors">
                  Industries Overview
                </Link>
              </li>
              <li>
                <Link href="/quickconsult" className="text-[#B69A6A] hover:text-white font-medium transition-colors">
                  M&amp;B QuickConsult (Pilot)
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#B69A6A]">
              Verified Contact
            </p>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:ish@meritandbeyond.in"
                className="flex items-center gap-2.5 text-[#DEC8A9]/90 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B69A6A]" />
                <span className="truncate">ish@meritandbeyond.in</span>
              </a>

              <a
                href="tel:+916366056770"
                className="flex items-center gap-2.5 text-[#DEC8A9]/90 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B69A6A]" />
                <span>+91 63660 56770</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#DEC8A9]/90">
                <Globe className="w-3.5 h-3.5 text-[#B69A6A]" />
                <span>www.meritandbeyond.in</span>
              </div>

              <a
                href="https://www.linkedin.com/company/meritandbeyond/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#DEC8A9]/90 hover:text-[#B69A6A] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#B69A6A]" />
                <span>LinkedIn Company Page</span>
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-[#DEC8A9]/60 leading-relaxed">
                Consultations conducted under strict professional confidentiality and non-disclosure governance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#B69A6A]/20 bg-[#1E1914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#DEC8A9]/60">
            <p>
              &copy; {currentYear} Merit &amp; Beyond. Category: People &amp; Business Advisory. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="hover:text-[#B69A6A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#B69A6A] transition-colors">
                Terms of Use
              </Link>
              <Link href="/cookies" className="hover:text-[#B69A6A] transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-[#B69A6A] transition-colors">
                Accessibility
              </Link>
              <Link href="/learning/policies" className="hover:text-[#B69A6A] transition-colors">
                Learning &amp; Refund Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
