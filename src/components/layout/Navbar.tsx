'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7EBDD]/90 backdrop-blur-md border-b border-champagne-300/60 shadow-sm py-3.5'
            : 'bg-[#F7EBDD]/70 backdrop-blur-sm border-b border-champagne-200/50 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${
                      active
                        ? 'text-mahogany-600 bg-white/70 shadow-sm font-semibold'
                        : 'text-softblack hover:text-mahogany-500 hover:bg-white/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Consultation CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/services#service-discovery"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase text-copper-700 hover:text-mahogany-500 transition-colors"
              >
                <span>Find Support</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold tracking-widest uppercase shadow-sm hover:shadow transition-all group"
              >
                <span>Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-lg bg-copper-500 text-white text-xs font-semibold tracking-wider uppercase"
              >
                Consult
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-softblack hover:text-mahogany-500 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-copper-500"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-[65px] z-40 lg:hidden bg-softblack/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto bg-[#F7EBDD] border-l border-champagne-300 shadow-2xl h-full p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="pt-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-copper-600 mb-3">
                  Navigation
                </p>
                <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-4 py-3 rounded-lg text-base font-serif font-medium transition-colors ${
                          active
                            ? 'bg-white text-mahogany-600 font-semibold shadow-sm'
                            : 'text-softblack hover:bg-white/50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-champagne-200">
                <p className="text-xs font-semibold tracking-widest uppercase text-copper-700 mb-1">
                  Guided Experience
                </p>
                <p className="text-xs text-softblack-muted mb-3">
                  Discover tailored people solutions based on your specific organisational challenge.
                </p>
                <Link
                  href="/services#service-discovery"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-copper-600 hover:text-copper-700 uppercase tracking-wider"
                >
                  <span>Launch Service Selector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Bottom Contact Information */}
            <div className="pt-6 border-t border-champagne-300/80 space-y-3">
              <div className="text-xs text-softblack-muted uppercase tracking-widest font-semibold">
                Direct Inquiries
              </div>
              <a
                href="tel:+916366056770"
                className="flex items-center gap-2.5 text-sm text-softblack hover:text-copper-600"
              >
                <Phone className="w-4 h-4 text-copper-500" />
                <span>+91 6366056770</span>
              </a>
              <a
                href="mailto:ish@meritandbeyond.in"
                className="flex items-center gap-2.5 text-sm text-softblack hover:text-copper-600"
              >
                <Mail className="w-4 h-4 text-copper-500" />
                <span>ish@meritandbeyond.in</span>
              </a>
              <Link
                href="/contact"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-copper-500 text-white text-xs font-semibold tracking-widest uppercase shadow-sm"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
