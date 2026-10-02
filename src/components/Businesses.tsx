import React, { useState } from 'react';
import { siteConfig, BusinessItem } from '../config/site';
import { BusinessCard } from './BusinessCard';
import { BusinessModal } from './BusinessModal';
import { Sparkles } from 'lucide-react';

interface BusinessesProps {
  onPartnerWithSector: (sectorName: string) => void;
}

export const Businesses: React.FC<BusinessesProps> = ({ onPartnerWithSector }) => {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessItem | null>(null);

  return (
    <section id="businesses" className="py-24 sm:py-32 bg-[#0B1F33] relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6A84F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#122D4A]/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
              Our Businesses
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Diverse Industries. <span className="text-gold-gradient">One Vision.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We invest in and nurture businesses that create long-term value, solve meaningful problems
            and unlock new opportunities across high-potential sectors.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {siteConfig.businesses.map((business, idx) => (
            <div
              key={business.id}
              className={idx >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}
            >
              <BusinessCard
                business={business}
                onSelect={(b) => setSelectedBusiness(b)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <BusinessModal
        business={selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
        onInquire={(sector) => {
          onPartnerWithSector(sector);
        }}
      />
    </section>
  );
};
