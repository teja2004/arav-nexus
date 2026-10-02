import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { BusinessItem } from '../config/site';

interface BusinessModalProps {
  business: BusinessItem | null;
  onClose: () => void;
  onInquire: (businessTitle: string) => void;
}

export const BusinessModal: React.FC<BusinessModalProps> = ({ business, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (business) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [business, onClose]);

  if (!business) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061522]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0E243B] border border-[#D6A84F]/40 shadow-gold-lg overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image banner */}
        <div className="relative h-48 sm:h-56 w-full">
          <img
            src={business.image}
            alt={business.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E243B] via-[#0E243B]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#061522]/80 text-white hover:text-[#D6A84F] border border-white/10 hover:border-[#D6A84F]/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#D6A84F]">
              {business.subtitle}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {business.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Strategic Overview
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {business.details.overview}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
              Key Value Drivers
            </h3>
            <ul className="space-y-2.5">
              {business.details.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#061522] border border-white/5">
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#D6A84F] mb-1">
              Market Focus &amp; Horizon
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {business.details.marketFocus}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {business.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded bg-[#061522] text-slate-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(business.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#061522] bg-gradient-to-r from-[#F5D88A] to-[#D6A84F] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-sm transition-all"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
