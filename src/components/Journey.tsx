import React from 'react';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 sm:py-28 lg:py-32 bg-[#061522] relative overflow-hidden border-t border-[#D6A84F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <Compass className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#F3D78B]">
              Milestones &amp; Evolution
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our <span className="text-gold-gradient">Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From foundation to rapid multi-sector expansion, explore how ARAV NEXUS compounds value
            and builds enduring momentum.
          </p>
        </div>

        {/* Central Alternating Timeline */}
        <div className="relative">
          {/* Vertical Center Spine Line */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-[#D6A84F]/20 via-[#D6A84F] to-[#D6A84F]/30 z-0" />

          <div className="space-y-10 sm:space-y-14 relative z-10">
            {siteConfig.journeyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isFuture = milestone.year === 'FUTURE';

              return (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-14 sm:pl-16 md:pl-0 md:px-10">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-[#0E243B]/80 border ${
                        isFuture
                          ? 'border-[#D6A84F] shadow-gold-sm bg-gradient-to-br from-[#0E243B] to-[#122D4A]'
                          : 'border-[#D6A84F]/20 hover:border-[#D6A84F]/50'
                      } transition-all duration-300 group-hover:-translate-y-1 shadow-navy-card`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <span
                          className={`font-heading text-xl sm:text-2xl font-bold ${
                            isFuture ? 'text-gold-gradient' : 'text-[#D6A84F]'
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded bg-[#061522] text-slate-300 border border-white/5">
                          {milestone.title}
                        </span>
                      </div>

                      <p className="text-sm text-slate-200 leading-relaxed font-normal">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Diamond / Icon on Timeline Spine */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-125 ${
                        isFuture
                          ? 'bg-[#D6A84F] border-[#FCE59F] text-[#061522] shadow-gold-md'
                          : 'bg-[#061522] border-[#D6A84F] text-[#D6A84F]'
                      }`}
                    >
                      {isFuture ? (
                        <Sparkles className="w-4 h-4 animate-spin" />
                      ) : (
                        <Calendar className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
