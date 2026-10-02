import React from 'react';
import { Compass, Lightbulb, Users, ShieldCheck, Sparkles } from 'lucide-react';

export const WhyAravNexus: React.FC = () => {
  const features = [
    {
      title: "LONG-TERM VISION",
      description: "We focus on sustainable opportunities rather than short-term trends.",
      icon: <Compass className="w-6 h-6 text-[#D6A84F]" />,
      detail: "Patient, generational perspective on enterprise value and durable compound returns.",
    },
    {
      title: "INNOVATION",
      description: "We believe technology and new ideas can transform businesses.",
      icon: <Lightbulb className="w-6 h-6 text-[#D6A84F]" />,
      detail: "Empowering visionary teams with engineering rigor and scalable technology engines.",
    },
    {
      title: "PARTNERSHIP",
      description: "We build strong relationships with founders, businesses and strategic partners.",
      icon: <Users className="w-6 h-6 text-[#D6A84F]" />,
      detail: "Deep operational collaboration, transparent alignment, and mutual accountability.",
    },
    {
      title: "RESPONSIBILITY",
      description: "We aim to create meaningful economic and business value.",
      icon: <ShieldCheck className="w-6 h-6 text-[#D6A84F]" />,
      detail: "Commitment to ethical stewardship, positive stakeholder impact, and governance excellence.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#061522] relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 glow-gold-radial opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
              Our Guiding Principles
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built for <span className="text-gold-gradient">Long-Term Value</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We are purposeful investors and operators. Our conviction is rooted in sustainable
            fundamentals, strategic discipline, and collaborative respect.
          </p>
        </div>

        {/* 4 Feature Blocks with Gold Accent Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#0B1F33]/80 border border-[#D6A84F]/20 hover:border-[#D6A84F]/60 transition-all duration-300 hover:-translate-y-1 shadow-navy-card hover:shadow-gold-sm"
            >
              {/* Gold Accent Line at Top */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-[#D6A84F] to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-5">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:border-[#D6A84F] transition-all">
                  {feat.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#F3D78B] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-base text-slate-200 font-medium leading-relaxed">
                    {feat.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-normal">
                    {feat.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
