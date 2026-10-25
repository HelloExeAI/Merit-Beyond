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

  // Dimension mapping based on 753x469 monogram and 1325x227 wordmark
  const dimensions = {
    sm: {
      monoHeight: 34,
      monoWidth: 55,
      wordHeight: 28,
      wordWidth: 172,
      taglineSize: 'text-[6.5px]',
    },
    md: {
      monoHeight: 44,
      monoWidth: 71,
      wordHeight: 36,
      wordWidth: 220,
      taglineSize: 'text-[7.5px]',
    },
    lg: {
      monoHeight: 56,
      monoWidth: 90,
      wordHeight: 46,
      wordWidth: 280,
      taglineSize: 'text-[9.5px]',
    },
  };

  const current = dimensions[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="Merit & Beyond — PEOPLE | PROCESSES | POSSIBILITIES"
    >
      {/* 3D Liquid Gold MB Monogram Emblem — Clean & Transparent */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: current.monoWidth, height: current.monoHeight }}
      >
        <Image
          src="/images/logo-monogram-clean.png"
          alt="Merit & Beyond MB Monogram"
          width={current.monoWidth * 2}
          height={current.monoHeight * 2}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(41,35,29,0.08)]"
          priority
        />
      </div>

      {/* Official "Merit & Beyond" Wordmark + Exact Tagline (PEOPLE | PROCESSES | POSSIBILITIES) */}
      {!monogramOnly && (
        <div className="flex flex-col justify-center" style={{ width: current.wordWidth }}>
          <div
            className="relative w-full"
            style={{ height: current.wordHeight }}
          >
            <Image
              src="/images/logo-wordmark-clean.png"
              alt="Merit & Beyond"
              fill
              sizes="(max-width: 768px) 172px, 220px"
              className={`object-contain object-left transition-transform group-hover:scale-[1.01] ${
                isDark
                  ? 'filter drop-shadow-[0_1px_2px_rgba(41,35,29,0.08)]'
                  : 'filter brightness-125 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]'
              }`}
              priority
            />
          </div>

          {/* Exact Brand Tagline: PEOPLE | PROCESSES | POSSIBILITIES */}
          <div
            className={`w-full flex items-center justify-between ${current.taglineSize} tracking-[0.11em] uppercase font-sans font-semibold mt-1 select-none ${
              isDark ? 'text-[#846A3F]' : 'text-[#E1D0AF]'
            }`}
          >
            <span>PEOPLE</span>
            <span className="text-[7px] sm:text-[8px] opacity-50 font-normal">|</span>
            <span>PROCESSES</span>
            <span className="text-[7px] sm:text-[8px] opacity-50 font-normal">|</span>
            <span>POSSIBILITIES</span>
          </div>
        </div>
      )}
    </Link>
  );
}
