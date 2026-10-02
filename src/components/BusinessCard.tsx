import React from 'react';
import { ArrowRight, Building2, Code2, ReceiptText, Leaf, TrendingUp } from 'lucide-react';
import { BusinessItem } from '../config/site';

interface BusinessCardProps {
  business: BusinessItem;
  onSelect: (business: BusinessItem) => void;
  isFeatured?: boolean;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business, onSelect, isFeatured = false }) => {
  const renderIcon = () => {
    const iconClass = "w-4 h-4 text-[#D6A84F]";
    switch (business.iconName) {
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'ReceiptText':
        return <ReceiptText className={iconClass} />;
      case 'Leaf':
        return <Leaf className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      default:
        return <Building2 className={iconClass} />;
    }
  };

  return (
    <div
      onClick={() => onSelect(business)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0E243B]/80 border border-[#D6A84F]/20 hover:border-[#D6A84F]/60 transition-all duration-500 hover:-translate-y-2 shadow-navy-card hover:shadow-gold-md cursor-pointer ${
        isFeatured ? 'h-full' : 'h-full'
      }`}
    >
      {/* Top Image Container with Zoom effect */}
      <div className={`relative ${isFeatured ? 'h-60 sm:h-64' : 'h-48 sm:h-52'} w-full overflow-hidden bg-[#061522]`}>
        <img
          src={business.image}
          alt={business.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-85 group-hover:brightness-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E243B] via-[#0E243B]/50 to-transparent" />

        {/* Floating Sector Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061522]/90 backdrop-blur-md border border-[#D6A84F]/35 shadow-md">
          {renderIcon()}
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-200">
            {business.subtitle}
          </span>
        </div>

        {isFeatured && (
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#D6A84F]/20 backdrop-blur-md border border-[#D6A84F]/40 text-[10px] font-bold uppercase tracking-wider text-[#F3D78B]">
            Core Pillar
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          {/* Card Title */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#F3D78B] transition-colors leading-snug">
            {business.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {business.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {business.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#061522] text-slate-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Interactive Learn More Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-bold text-[#D6A84F] tracking-wider uppercase group-hover:underline">
            Sector Overview
          </span>
          <div className="w-8 h-8 rounded-full bg-[#061522] border border-[#D6A84F]/35 flex items-center justify-center text-[#D6A84F] group-hover:bg-[#D6A84F] group-hover:text-[#061522] transition-all duration-300 group-hover:translate-x-1 shadow-sm">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
