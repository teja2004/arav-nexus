import React from 'react';
import { ArrowRight, Code2, Briefcase, Settings2, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface CareersProps {
  onApplyClick: (roleTitle: string) => void;
}

export const Careers: React.FC<CareersProps> = ({ onApplyClick }) => {
  const getCareerIcon = (id: string) => {
    switch (id) {
      case 'tech':
        return <Code2 className="w-6 h-6 text-[#D6A84F]" />;
      case 'bizdev':
        return <Briefcase className="w-6 h-6 text-[#D6A84F]" />;
      case 'operations':
        return <Settings2 className="w-6 h-6 text-[#D6A84F]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#D6A84F]" />;
    }
  };

  return (
    <section id="careers" className="py-24 sm:py-32 bg-[#0B1F33] relative overflow-hidden border-t border-[#D6A84F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
              Careers &amp; Talent
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Build the Future <span className="text-gold-gradient">With Us</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We are looking for ambitious people who want to build meaningful businesses, solve
            real-world problems and grow with us.
          </p>
        </div>

        {/* 3 Career Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.careers.map((career) => (
            <div
              key={career.id}
              className="group p-8 rounded-2xl bg-[#0E243B]/80 border border-[#D6A84F]/20 hover:border-[#D6A84F]/60 transition-all duration-300 hover:-translate-y-2 shadow-navy-card hover:shadow-gold-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center group-hover:scale-105 group-hover:border-[#D6A84F] transition-all">
                    {getCareerIcon(career.id)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#061522] text-[#F3D78B] border border-white/5">
                    {career.roleCount}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-[#F3D78B] transition-colors">
                  {career.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {career.description}
                </p>

                {/* Focus areas */}
                <div className="space-y-2 mb-6">
                  {career.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A84F] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onApplyClick(career.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-[#061522] hover:bg-[#D6A84F] hover:text-[#061522] border border-[#D6A84F]/30 hover:border-[#D6A84F] transition-all duration-300 group/btn"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
