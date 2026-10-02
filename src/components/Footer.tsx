import React from 'react';
import { ArrowUp, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030B12] text-white pt-16 sm:pt-20 pb-12 border-t border-[#D6A84F]/20 relative overflow-hidden">
      {/* Top subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              {/* Interlocking AN monogram */}
              <div className="w-10 h-10 rounded-xl bg-[#061522] border border-[#D6A84F]/40 p-1.5 shadow-gold-sm">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCE59F" />
                      <stop offset="50%" stopColor="#D6A84F" />
                      <stop offset="100%" stopColor="#A87C2B" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 75 L42 22 C43.5 19 46.5 19 48 22 L56 42"
                    stroke="url(#footerGold)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 52 L68 52"
                    stroke="url(#footerGold)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M52 24 L52 75 M52 38 L75 70 C76.5 72 79 71 79 68 L79 20"
                    stroke="url(#footerGold)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polygon points="79,11 83,15 79,19 75,15" fill="url(#footerGold)" />
                </svg>
              </div>

              <div>
                <span className="font-heading text-xl font-bold tracking-wider text-white">
                  ARAV <span className="text-[#D6A84F]">NEXUS</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#D6A84F] font-semibold">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              A diversified investment and business company committed to building and supporting
              transformative ventures across real estate, enterprise software, billing, renewable energy,
              and emerging horizons.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
              <span>Certified Group Operations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#F3D78B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              Business Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Technology &amp; Platforms
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Billing Solutions
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Renewable Energy
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Emerging Ventures
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6A84F] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {siteConfig.currentYear} {siteConfig.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onLegalClick('privacy')}
              className="hover:text-[#F3D78B] transition-colors"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onLegalClick('terms')}
              className="hover:text-[#F3D78B] transition-colors"
            >
              Terms of Use
            </button>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-[#061522] hover:bg-[#0E243B] text-slate-300 hover:text-[#D6A84F] border border-white/10 transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
