import React from 'react';
import { ArrowRight, ArrowUpRight, Layers, ShieldCheck, Zap, TrendingUp, Sparkles, Building2, Code2, Globe } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onExploreClick: () => void;
  onPartnerClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPartnerClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28 flex items-center justify-center overflow-hidden bg-[#061522]"
    >
      {/* Background Skyline Image with Luxury Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.hero}
          alt="Modern business district skyline at twilight"
          className="w-full h-full object-cover object-center filter brightness-60 contrast-110"
          loading="eager"
        />
        {/* Multilayered Gradient Overlay for superior contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061522] via-[#061522]/90 to-[#0B1F33]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-[#061522]/90" />
        <div className="absolute inset-0 glow-gold-radial pointer-events-none opacity-40" />
        <div className="absolute inset-0 pattern-grid opacity-15 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left animate-fade-up">
            {/* Small Label with Gold Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0E243B]/90 border border-[#D6A84F]/40 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D6A84F]" />
              <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#F3D78B]">
                Building a Brighter Tomorrow
              </span>
            </div>

            {/* Main Heading with refined luxury styling */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.14] break-words">
              Investing in <br />
              <span className="text-gold-gradient italic font-serif relative inline-block">
                Ideas, People
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-transparent rounded-full" />
              </span> <br />
              and Possibilities.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              ARAV NEXUS is a diversified investment and business company focused on building and
              supporting opportunities across real estate, technology, billing solutions and beyond.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-md hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPartnerClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0E243B]/80 hover:bg-[#122D4A] border border-[#D6A84F]/30 hover:border-[#D6A84F] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Micro Credibility Tagline */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
              <div className="w-6 h-[1px] bg-[#D6A84F]/50" />
              <span className="font-medium text-slate-300 text-[11px] sm:text-xs">
                Building businesses. Creating value. Thinking long term.
              </span>
            </div>
          </div>

          {/* Right Column: Premium Glass Information Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-full">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D6A84F]/20 to-[#122D4A]/40 rounded-3xl blur-xl opacity-60" />

              <div className="relative rounded-2xl glass-card p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-navy-elevated border border-[#D6A84F]/25 overflow-hidden">
                {/* Header of Glass Card */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D6A84F]/15 flex items-center justify-center text-[#D6A84F] shrink-0">
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#F3D78B] truncate">
                        Strategic Architecture
                      </h2>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Integrated Group Overview</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold text-[#F3D78B] bg-[#D6A84F]/15 rounded-full border border-[#D6A84F]/30 shrink-0 whitespace-nowrap">
                    2026 Horizons
                  </span>
                </div>

                {/* 4 Core Pillars from Spec */}
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Pillar 1 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0 mt-0.5">
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                        Multiple Industries
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                        Diversified ventures across real estate, enterprise tech, and clean energy.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                        Sustainable Growth
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                        Disciplined capital allocation focused on compounding intrinsic enterprise value.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                        Innovation &amp; Impact
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                        Propelling digital transformation with modern engineering and high-leverage tools.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 4 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                        Long-Term Value
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                        Patient capital partnering with leaders to build resilient market institutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Snapshot Footer */}
                <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#D6A84F]" />
                    Real Assets &amp; Infra
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#D6A84F]" />
                    Next-Gen Tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
