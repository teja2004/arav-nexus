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

  const featured = siteConfig.businesses.slice(0, 2);
  const remaining = siteConfig.businesses.slice(2);

  return (
    <section id="businesses" className="py-20 sm:py-28 lg:py-32 bg-[#0B1F33] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6A84F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#122D4A]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#F3D78B]">
              Our Businesses
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Diverse Industries. <span className="text-gold-gradient">One Vision.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We invest in and nurture businesses that create long-term value, solve meaningful problems
            and unlock new opportunities across high-potential sectors.
          </p>
        </div>

        {/* 12-Column Grid Layout: 2 Featured on Top, 3 on Bottom */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row: 2 Anchor Pillars (6 cols each) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {featured.map((business) => (
              <div key={business.id} className="lg:col-span-6">
                <BusinessCard
                  business={business}
                  isFeatured={true}
                  onSelect={(b) => setSelectedBusiness(b)}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Specialized Growth Verticals (4 cols each) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {remaining.map((business, idx) => (
              <div
                key={business.id}
                className={`lg:col-span-4 ${idx === 2 ? 'md:col-span-2 lg:col-span-4' : 'md:col-span-1'}`}
              >
                <BusinessCard
                  business={business}
                  isFeatured={false}
                  onSelect={(b) => setSelectedBusiness(b)}
                />
              </div>
            ))}
          </div>
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
