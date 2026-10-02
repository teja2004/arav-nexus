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
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden bg-[#061522]"
    >
      {/* Background Skyline Image with Luxury Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.hero}
          alt="Modern business district skyline at twilight"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-75 contrast-110"
          loading="eager"
        />
        {/* Multilayered Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061522] via-[#061522]/90 to-[#0B1F33]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-[#061522]/90" />
        <div className="absolute inset-0 glow-gold-radial pointer-events-none opacity-40" />
        {/* Subtle geometric dot pattern */}
        <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left animate-fade-up">
            {/* Small Label with Gold Accent */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E243B]/80 border border-[#D6A84F]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D6A84F] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F3D78B]">
                Building a Brighter Tomorrow
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.12]">
              Investing in <br />
              <span className="text-gold-gradient underline decoration-[#D6A84F]/30 decoration-wavy underline-offset-8">
                Ideas, People
              </span> <br />
              and Possibilities.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              ARAV NEXUS is a diversified investment and business company focused on building and
              supporting opportunities across real estate, technology, billing solutions and beyond.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-md hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#061522]"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPartnerClick}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-white bg-[#0E243B]/80 hover:bg-[#122D4A] border border-[#D6A84F]/30 hover:border-[#D6A84F] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#D6A84F]"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-5 h-5 text-[#D6A84F] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Micro Credibility Tagline */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <div className="w-8 h-[1px] bg-[#D6A84F]/40" />
              <span>Building businesses. Creating value. Thinking long term.</span>
            </div>
          </div>

          {/* Right Column: Premium Glass Information Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D6A84F]/30 to-[#122D4A]/60 rounded-3xl blur-xl opacity-70" />

              <div className="relative rounded-2xl glass-card p-6 sm:p-8 space-y-6 shadow-navy-elevated border border-[#D6A84F]/25">
                {/* Header of Glass Card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D6A84F]/15 flex items-center justify-center text-[#D6A84F]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs uppercase font-bold tracking-widest text-[#D6A84F]">
                        Strategic Architecture
                      </h2>
                      <p className="text-xs text-slate-400">Integrated Group Overview</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-[#D6A84F] bg-[#D6A84F]/10 rounded-full border border-[#D6A84F]/20">
                    2026 Horizons
                  </span>
                </div>

                {/* 4 Core Pillars from Spec */}
                <div className="space-y-4">
                  {/* Pillar 1 */}
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                        Multiple Industries
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Diversified ventures across real estate, enterprise tech, and clean energy.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                        Sustainable Growth
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Disciplined capital allocation focused on compounding intrinsic enterprise value.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                        Innovation &amp; Impact
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Propelling digital transformation with modern engineering and high-leverage tools.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 4 */}
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D6A84F]/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                        Long-Term Value
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Patient capital partnering with leaders to build resilient market institutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Snapshot Footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
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
