import React from 'react';
import { ArrowUpRight, Mail, Sparkles, Building, Handshake } from 'lucide-react';
import { siteConfig } from '../config/site';

interface PartnershipCTAProps {
  onPartnerClick: () => void;
  onContactClick: () => void;
}

export const PartnershipCTA: React.FC<PartnershipCTAProps> = ({ onPartnerClick, onContactClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#061522] relative overflow-hidden">
      {/* Background imagery with dark navy gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.partnership}
          alt="Executive business summit and boardroom"
          className="w-full h-full object-cover filter brightness-25 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061522] via-[#061522]/95 to-[#0B1F33]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061522] via-transparent to-[#061522]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-[#0E243B]/90 to-[#061522]/90 border border-[#D6A84F]/30 backdrop-blur-xl shadow-gold-md overflow-hidden">
          {/* Subtle gold decorative elements */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D6A84F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#D6A84F]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D6A84F]/40" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D6A84F]/40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D6A84F]/40" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#D6A84F]/40" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061522]/80 border border-[#D6A84F]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
                Collaborative Horizons
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Have an Opportunity <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Worth Exploring?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you have an investment opportunity, business proposal, technology project or
              strategic partnership idea, let's start a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onPartnerClick}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-md hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Handshake className="w-5 h-5 text-[#061522]" />
                <span>Partner With ARAV NEXUS</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white bg-[#061522]/90 hover:bg-[#0B1F33] border border-[#D6A84F]/30 hover:border-[#D6A84F] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-5 h-5 text-[#D6A84F]" />
                <span>Contact Us</span>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#D6A84F]" />
                Institutional Alliances
              </span>
              <span>&bull;</span>
              <span>Strict Confidentiality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
