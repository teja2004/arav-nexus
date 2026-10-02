import React from 'react';
import { ArrowRight, Building2, Code2, ReceiptText, Leaf, TrendingUp } from 'lucide-react';
import { BusinessItem } from '../config/site';

interface BusinessCardProps {
  business: BusinessItem;
  onSelect: (business: BusinessItem) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business, onSelect }) => {
  const renderIcon = () => {
    switch (business.iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#D6A84F]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#D6A84F]" />;
      case 'ReceiptText':
        return <ReceiptText className="w-5 h-5 text-[#D6A84F]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#D6A84F]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#D6A84F]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#D6A84F]" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(business)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0E243B]/80 border border-[#D6A84F]/20 hover:border-[#D6A84F]/60 transition-all duration-300 hover:-translate-y-2 shadow-navy-card hover:shadow-gold-md cursor-pointer"
    >
      {/* Top Image Container with Zoom effect */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#061522]">
        <img
          src={business.image}
          alt={business.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E243B] via-[#0E243B]/40 to-transparent" />

        {/* Floating Icon Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061522]/85 backdrop-blur-md border border-[#D6A84F]/30 shadow-md">
          {renderIcon()}
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-200">
            {business.subtitle}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Card Title */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#F3D78B] transition-colors">
            {business.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {business.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {business.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#061522]/60 text-slate-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Interactive Learn More Footer with Arrow Animation */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#D6A84F] tracking-wide uppercase group-hover:underline">
            Learn More
          </span>
          <div className="w-8 h-8 rounded-full bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] group-hover:bg-[#D6A84F] group-hover:text-[#061522] transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
