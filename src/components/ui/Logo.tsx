import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  monogramOnly?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  monogramOnly = false,
  className = '',
}: LogoProps) {
  const isDark = variant === 'dark';

  // Sizing definitions
  const dimensions = {
    sm: { iconSize: 34, wordmarkHeight: 24, wordmarkWidth: 130 },
    md: { iconSize: 44, wordmarkHeight: 30, wordmarkWidth: 160 },
    lg: { iconSize: 56, wordmarkHeight: 38, wordmarkWidth: 200 },
  };

  const current = dimensions[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="Merit & Beyond — People · Process · Performance"
    >
      {/* 3D Liquid Gold MB Monogram Emblem */}
      <div className="relative flex-shrink-0">
        <div
          className={`rounded-xl overflow-hidden border transition-all duration-300 group-hover:scale-105 shadow-sm ${
            isDark
              ? 'border-champagne-300 bg-[#E8D5B0]/30 shadow-subtle'
              : 'border-champagne-400/80 bg-white/10 shadow-md ring-1 ring-champagne-300/30'
          }`}
          style={{ width: current.iconSize, height: current.iconSize }}
        >
          <Image
            src="/images/logo-icon.png"
            alt="Merit & Beyond MB Monogram"
            width={current.iconSize * 2}
            height={current.iconSize * 2}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Official "Merit & Beyond" in Liquid Drop Font + Tagline */}
      {!monogramOnly && (
        <div className="flex flex-col justify-center">
          <div
            className="relative flex items-center overflow-hidden"
            style={{ height: current.wordmarkHeight, width: current.wordmarkWidth }}
          >
            <Image
              src="/images/logo-wordmark.png"
              alt="Merit & Beyond"
              width={current.wordmarkWidth * 2}
              height={current.wordmarkHeight * 2}
              className={`h-full w-auto object-contain transition-transform group-hover:scale-[1.01] ${
                isDark
                  ? 'mix-blend-multiply contrast-105'
                  : 'brightness-125 filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]'
              }`}
              priority
            />
          </div>

          <span
            className={`text-[8px] sm:text-[9px] tracking-[0.24em] uppercase font-sans font-semibold mt-0.5 ${
              isDark ? 'text-copper-600' : 'text-champagne-300'
            }`}
          >
            People · Process · Performance
          </span>
        </div>
      )}
    </Link>
  );
}
