import React from 'react';
import Link from 'next/link';

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
  
  // Dimensions
  const monogramSizes = {
    sm: { width: 34, height: 34 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
  };

  const currentSize = monogramSizes[size];

  const primaryTextColor = isDark ? '#552A19' : '#FFFFFF';
  const subtitleColor = isDark ? '#A96525' : '#D7B77E';
  const goldColor = '#D7B77E';
  const mahoganyColor = '#552A19';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group select-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="Merit & Beyond - People, Process, Performance"
    >
      {/* Bespoke Luxury MB Monogram Emblem */}
      <div className="relative flex-shrink-0">
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        >
          {/* Subtle Outer Diamond/Square Frame with Rounded Corners */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="16"
            stroke={goldColor}
            strokeWidth="2.5"
            fill={isDark ? '#FAF5EE' : 'rgba(255, 255, 255, 0.08)'}
          />
          {/* Inner Accent Hairline */}
          <rect
            x="9"
            y="9"
            width="82"
            height="82"
            rx="12"
            stroke={goldColor}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            opacity="0.6"
          />

          {/* Letter M Architecture */}
          <path
            d="M26 73V27H34.5L50 51.5L65.5 27H74V73H65.5V39.5L52.5 59.5H47.5L34.5 39.5V73H26Z"
            fill={isDark ? mahoganyColor : '#FFFFFF'}
            opacity="0.18"
          />

          {/* Stylized Interlocking Monogram - M (Left Arch) */}
          <path
            d="M27 72V28H35L48 50L45 55L34 37V72H27Z"
            fill={isDark ? mahoganyColor : '#FFFFFF'}
          />
          <path
            d="M48 50L61 28H69V72H62V37L51 55L48 50Z"
            fill={isDark ? mahoganyColor : '#FFFFFF'}
          />

          {/* Stylized Interlocking Monogram - B (Right Curves with Gold Accents) */}
          <path
            d="M46 28H65C71.5 28 76 31.5 76 37C76 41.5 73 44.5 68.5 46C74 47.5 77.5 51.5 77.5 57.5C77.5 65.5 70.5 72 61.5 72H46V66H61C66.5 66 71 62 71 57.5C71 52.5 66.5 49 60 49H53V43H62C66.5 43 70 40 70 36.5C70 33 66.5 30.5 62 30.5H46V28Z"
            fill={goldColor}
          />

          {/* Precision Center Diamond Accent */}
          <polygon
            points="50,47 53,50 50,53 47,50"
            fill="#A96525"
          />
        </svg>
      </div>

      {/* Wordmark and Tagline */}
      {!monogramOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className="font-serif font-semibold tracking-[0.14em] text-lg sm:text-xl uppercase transition-colors"
              style={{ color: primaryTextColor }}
            >
              Merit <span style={{ color: goldColor }}>&</span> Beyond
            </span>
          </div>
          <span
            className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase font-sans font-medium mt-0.5"
            style={{ color: subtitleColor }}
          >
            People · Process · Performance
          </span>
        </div>
      )}
    </Link>
  );
}
