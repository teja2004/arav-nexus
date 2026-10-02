import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { siteConfig } from '../config/site';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061522]/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[80vh] flex flex-col rounded-2xl bg-[#0E243B] border border-[#D6A84F]/30 shadow-gold-lg overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#061522]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D6A84F]/15 flex items-center justify-center text-[#D6A84F]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </h3>
              <p className="text-xs text-slate-400">
                {siteConfig.name} &bull; Effective 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At {siteConfig.name}, we treat corporate information and investor confidentiality with
                uncompromised integrity. This Privacy Policy outlines our standards for collecting,
                processing, and safeguarding strategic communications and inquiries.
              </p>
              <h4 className="font-bold text-white text-base pt-2">1. Information Collection</h4>
              <p>
                We only collect information voluntarily submitted through our institutional contact channels,
                including founder pitch materials, corporate partnership queries, and career profiles.
              </p>
              <h4 className="font-bold text-white text-base pt-2">2. Confidentiality &amp; Non-Disclosure</h4>
              <p>
                Strategic proposals and sensitive business data submitted are accessed strictly by our
                investment committee under mutual nondisclosure protocols.
              </p>
              <h4 className="font-bold text-white text-base pt-2">3. Data Retention &amp; Security</h4>
              <p>
                We adhere to international enterprise encryption standards to safeguard digital assets and
                protect records against unauthorized access.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to {siteConfig.name}. By accessing or reviewing content on this site, you acknowledge
                and agree to these terms of use.
              </p>
              <h4 className="font-bold text-white text-base pt-2">1. Informational Scope</h4>
              <p>
                Materials presented on this website are provided for informational and preliminary discussion
                purposes only and do not constitute an explicit solicitation or offering of securities.
              </p>
              <h4 className="font-bold text-white text-base pt-2">2. Intellectual Property</h4>
              <p>
                All brand logos, trademarks, text, graphics, and architectural designs displayed herein are
                the exclusive property of {siteConfig.name}.
              </p>
              <h4 className="font-bold text-white text-base pt-2">3. Forward-Looking Statements</h4>
              <p>
                Forward-looking statements involve calculated market assumptions and risks. Past performance
                of ventures is not indicative of future market outcomes.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#061522] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold text-[#061522] bg-[#D6A84F] hover:bg-[#F3D78B] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
