import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Building2, Factory, Laptop, HardHat } from 'lucide-react';
import { industriesData } from '@/data/industries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry-Focused HR Advisory | Merit & Beyond',
  description: 'Explore people advisory perspectives for hospitality, IT/ITES, real estate and construction, and manufacturing.',
};

export default function IndustriesOverviewPage() {
  const iconMap: Record<string, React.ReactNode> = {
    hospitality: <Building2 className="w-6 h-6 text-[#846A3F]" />,
    'it-ites': <Laptop className="w-6 h-6 text-[#846A3F]" />,
    'real-estate-construction': <HardHat className="w-6 h-6 text-[#846A3F]" />,
    manufacturing: <Factory className="w-6 h-6 text-[#846A3F]" />,
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              SECTOR ADVISORY
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              Context matters. Solutions should fit the work.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              Our approach recognises that people priorities differ across operating environments. Explore relevant perspectives for hospitality, IT/ITES, real estate and construction, and manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 shadow-subtle hover:border-[#B69A6A] hover:shadow-card transition-all space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#B69A6A]/30 flex items-center justify-center">
                    {iconMap[ind.id]}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-white text-[#846A3F] border border-[#B69A6A]/20">
                    Sector Practice
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-serif text-[#29231D] font-semibold">{ind.name}</h2>
                  <div className="text-sm font-medium text-[#552A19]">{ind.pageHeading}</div>
                  <p className="text-xs sm:text-sm text-[#29231D]/80 leading-relaxed font-sans">{ind.operatingContext}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#F3E9D8]">
                  <span className="text-xs font-semibold text-[#846A3F] uppercase tracking-wider block">Key Themes:</span>
                  <ul className="space-y-1 text-xs text-[#29231D]/75 pl-4 list-disc marker:text-[#B69A6A]">
                    {ind.coreThemes.slice(0, 3).map((theme, idx) => (
                      <li key={idx}>{theme}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F3E9D8] flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29231D] hover:text-[#552A19]"
                  >
                    <span>Read Full Sector Brief</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?type=advisory&industry=${encodeURIComponent(ind.name)}`}
                    className="text-[11px] font-semibold text-[#846A3F] hover:text-[#29231D]"
                  >
                    Discuss Requirement
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
