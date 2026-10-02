import React from 'react';
import { TrendingUp, Cpu, SunMedium, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Impact: React.FC = () => {
  const getImpactIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-[#D6A84F]" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-[#D6A84F]" />;
      case 'SunMedium':
        return <SunMedium className="w-7 h-7 text-[#D6A84F]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#D6A84F]" />;
    }
  };

  return (
    <section id="impact" className="py-24 sm:py-32 bg-[#0B1F33] relative overflow-hidden border-t border-[#D6A84F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
              Purpose &amp; Values
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Growth With <span className="text-gold-gradient">Purpose</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our ambition goes beyond financial growth. We aim to enable businesses, support
            innovation, create opportunities and contribute to a more sustainable future.
          </p>
        </div>

        {/* 3 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {siteConfig.impact.map((card) => (
            <div
              key={card.title}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#0E243B]/80 border border-[#D6A84F]/20 hover:border-[#D6A84F]/60 transition-all duration-300 hover:-translate-y-2 shadow-navy-card hover:shadow-gold-md flex flex-col justify-between"
            >
              <div>
                {/* Floating Icon with Gold Glow */}
                <div className="w-16 h-16 rounded-2xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:border-[#D6A84F] transition-all shadow-md">
                  {getImpactIcon(card.iconName)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A84F] mb-1 block">
                  {card.metrics}
                </span>

                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-[#F3D78B] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="pt-8">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#D6A84F] to-[#E6C36A] w-2/3 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
