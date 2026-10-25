'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowRight,
  Building2,
  Briefcase,
  GraduationCap,
  Layers,
  BookOpen,
  MessageSquareQuote,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    // Detect initial theme from DOM or storage
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mb_theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mb_theme', 'dark');
      setTheme('dark');
    }
  };

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

  // Primary navigation matching Master Brief Section 4 & 5:
  // About | Services | Learning | Industries | Insights | Contact
  const navItems = [
    { label: 'About', href: '/about', icon: Building2, hint: 'About Merit & Beyond' },
    { label: 'Services', href: '/services', icon: Briefcase, hint: 'Advisory Disciplines' },
    { label: 'Learning', href: '/learning', icon: GraduationCap, hint: 'Corporate & Open Workshops' },
    { label: 'Industries', href: '/industries', icon: Layers, hint: 'Context-Specific Advisory' },
    { label: 'Insights', href: '/insights', icon: BookOpen, hint: 'Workplace Thinking' },
    { label: 'Contact', href: '/contact', icon: MessageSquareQuote, hint: 'Discuss a Requirement' },
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
            ? 'bg-[#F3E9D8]/95 dark:bg-[#14110F]/95 backdrop-blur-md border-b border-[#B69A6A]/30 dark:border-[#B69A6A]/20 shadow-sm py-2.5 sm:py-3'
            : 'bg-[#F3E9D8]/85 dark:bg-[#14110F]/85 backdrop-blur-sm border-b border-[#B69A6A]/20 dark:border-[#B69A6A]/15 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Approved Logo Left */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation: Genie Icon Dock with Bottom Tooltips */}
            <nav className="hidden md:flex items-center" aria-label="Primary Navigation">
              <div className="relative flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/90 dark:bg-[#1E1914]/90 backdrop-blur-md border border-[#B69A6A]/40 dark:border-[#B69A6A]/30 shadow-[0_4px_20px_rgba(41,35,29,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative group p-1.5 select-none transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-110 hover:z-30"
                      aria-label={`${item.label} — ${item.hint}`}
                    >
                      {/* Ambient Warm Golden Aura on Hover */}
                      <span className="absolute inset-0 rounded-full bg-gradient-to-t from-[#B69A6A]/30 via-white/40 dark:via-[#B69A6A]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none -z-10" />

                      {/* Icon Base Orb */}
                      <div
                        className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                          active
                            ? 'bg-[#29231D] text-[#FFFFFF] dark:bg-[#FAF5ED] dark:text-[#12100E] ring-2 ring-[#B69A6A] shadow-[0_4px_12px_rgba(41,35,29,0.25)]'
                            : 'text-[#29231D] dark:text-[#EADCC5] bg-[#F9F6F0] dark:bg-[#251F1A] hover:bg-white dark:hover:bg-[#2F2721] hover:text-[#A96525] dark:hover:text-[#D4B886] border border-[#B69A6A]/30 dark:border-[#B69A6A]/20 group-hover:border-[#B69A6A] group-hover:shadow-[0_4px_14px_rgba(182,154,106,0.2)]'
                        }`}
                      >
                        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />

                        {/* Active Indicator Pip */}
                        {active && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B69A6A] ring-2 ring-white dark:ring-[#12100E]" />
                        )}
                      </div>

                      {/* Bottom-Positioned Genie Tooltip for High Visibility (Animates downwards below icons) */}
                      <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 scale-75 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 z-50">
                        <div className="relative px-3 py-1 rounded-full bg-[#29231D] dark:bg-[#1E1914] border border-[#B69A6A]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex items-center gap-1.5">
                          {/* Upward Genie arrow pointing back up to the icon */}
                          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#29231D] dark:bg-[#1E1914] border-l border-t border-[#B69A6A]/60" />
                          <span className="font-sans font-medium text-[11px] text-[#F3E9D8] tracking-wide whitespace-nowrap">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop Right Actions: Light/Dark Theme Switcher + Primary CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Universal Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="relative p-2.5 rounded-full border border-[#B69A6A]/40 dark:border-[#B69A6A]/30 bg-white/90 dark:bg-[#1E1914] text-[#29231D] dark:text-[#F3E9D8] hover:border-[#B69A6A] hover:shadow-[0_0_14px_rgba(182,154,106,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B69A6A]"
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#D4B886] transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-[#29231D] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#29231D] dark:bg-[#FAF5ED] hover:bg-[#1E1914] dark:hover:bg-[#FFFFFF] text-white dark:text-[#12100E] text-xs font-semibold tracking-wider uppercase border border-[#29231D] dark:border-[#FAF5ED] shadow-sm hover:shadow transition-all group"
              >
                <span>Discuss a Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#B69A6A] dark:text-[#846A3F]" />
              </Link>
            </div>

            {/* Mobile Actions (Includes Theme Toggle + Discuss CTA + Hamburger) */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full border border-[#B69A6A]/40 dark:border-[#B69A6A]/30 bg-white/90 dark:bg-[#1E1914] text-[#29231D] dark:text-[#F3E9D8] focus:outline-none"
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-[#D4B886]" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-[#29231D]" />
                )}
              </button>

              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-md bg-[#29231D] dark:bg-[#FAF5ED] text-white dark:text-[#12100E] text-[11px] font-semibold tracking-wider uppercase"
              >
                Discuss
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#29231D] dark:text-[#FAF5ED] hover:text-[#552A19] hover:bg-white/60 dark:hover:bg-[#1E1914] focus:outline-none focus:ring-2 focus:ring-[#B69A6A]"
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
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-[#F3E9D8] dark:bg-[#14110F] border-b border-[#B69A6A]/30 dark:border-[#B69A6A]/20 overflow-y-auto px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <div className="text-[10px] uppercase tracking-widest text-[#846A3F] dark:text-[#D4B886] font-bold">
              Menu Navigation
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#29231D] text-white dark:bg-[#FAF5ED] dark:text-[#12100E] font-semibold'
                        : 'text-[#29231D] dark:text-[#EADCC5] hover:bg-white/70 dark:hover:bg-[#1E1914]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${active ? 'text-[#B69A6A] dark:text-[#846A3F]' : 'text-[#846A3F] dark:text-[#D4B886]'}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[11px] opacity-70">{item.hint}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#B69A6A]/30 dark:border-[#B69A6A]/20 space-y-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#29231D] dark:bg-[#FAF5ED] text-white dark:text-[#12100E] text-xs font-semibold tracking-wider uppercase text-center shadow"
              >
                <span>Discuss a Requirement</span>
                <ArrowRight className="w-4 h-4 text-[#B69A6A] dark:text-[#846A3F]" />
              </Link>
              
              <Link
                href="/learning"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#29231D] dark:border-[#B69A6A]/40 text-[#29231D] dark:text-[#FAF5ED] text-xs font-semibold tracking-wider uppercase text-center bg-transparent"
              >
                <span>Explore Learning</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
