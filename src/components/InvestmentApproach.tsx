import React from 'react';
import { Search, Coins, Hammer, TrendingUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const InvestmentApproach: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#061522]" />;
      case 1:
        return <Coins className="w-5 h-5 text-[#061522]" />;
      case 2:
        return <Hammer className="w-5 h-5 text-[#061522]" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-[#061522]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#061522]" />;
    }
  };

  return (
    <section id="investment-approach" className="py-24 sm:py-32 bg-[#0B1F33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
              Methodology &amp; Framework
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How We <span className="text-gold-gradient">Create Value</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our disciplined four-phase lifecycle unites institutional rigor with venture agility to
            scale durable, market-leading enterprises.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#D6A84F]/20 via-[#D6A84F] to-[#D6A84F]/20 z-0" />

          {/* Vertical Connecting Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-7 w-[2px] bg-gradient-to-b from-[#D6A84F]/20 via-[#D6A84F] to-[#D6A84F]/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {siteConfig.investmentApproach.map((step, idx) => (
              <div
                key={step.step}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step Node Icon & Number */}
                <div className="relative flex items-center justify-center shrink-0 mr-6 lg:mr-0 mb-0 lg:mb-6">
                  {/* Outer pulse circle */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F5D88A] via-[#D6A84F] to-[#B88A35] flex items-center justify-center shadow-gold-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {getStepIcon(idx)}
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#061522] text-[#F3D78B] border border-[#D6A84F]/50 shadow">
                    {step.step}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 rounded-2xl bg-[#0E243B]/60 border border-white/5 hover:border-[#D6A84F]/40 transition-all duration-300 group-hover:-translate-y-1 shadow-navy-card">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F] mb-1">
                    {step.tagline}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#F3D78B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
