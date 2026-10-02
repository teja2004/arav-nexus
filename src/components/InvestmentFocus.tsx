import React from 'react';
import { Building2, Code2, CreditCard, Leaf, Globe, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const InvestmentFocus: React.FC = () => {
  const renderFocusIcon = (name: string) => {
    const iconClass = "w-6 h-6 text-[#D6A84F] group-hover:text-white transition-colors";
    switch (name) {
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'CreditCard':
        return <CreditCard className={iconClass} />;
      case 'Leaf':
        return <Leaf className={iconClass} />;
      case 'Globe':
        return <Globe className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="investments" className="py-24 sm:py-32 bg-[#061522] relative overflow-hidden border-t border-[#D6A84F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
              Asset Allocation &amp; Sectors
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Where We <span className="text-gold-gradient">Invest</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our capital is strategically deployed across vital sectors powering the next era of economic
            modernization and sustainable infrastructure.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.investmentFocus.map((focus) => (
            <div
              key={focus.id}
              className="group p-8 rounded-2xl bg-[#0E243B]/70 border border-[#D6A84F]/20 hover:border-[#D6A84F]/60 transition-all duration-300 hover:-translate-y-2 shadow-navy-card hover:shadow-gold-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon with Gold Accent Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center group-hover:bg-[#D6A84F] transition-all duration-300 shadow-sm">
                    {renderFocusIcon(focus.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-[#F3D78B] border border-[#D6A84F]/20">
                    {focus.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-[#F3D78B] transition-colors">
                  {focus.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {focus.description}
                </p>
              </div>

              {/* Decorative bottom gold line */}
              <div className="w-12 h-[2px] bg-[#D6A84F]/30 group-hover:w-full group-hover:bg-[#D6A84F] transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
