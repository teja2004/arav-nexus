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
      {/* Top subtle gold gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D6A84F]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E243B] to-[#061522] border border-[#D6A84F]/40 p-2 shadow-gold-sm flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCE59F" />
                      <stop offset="50%" stopColor="#D6A84F" />
                      <stop offset="100%" stopColor="#A87C2B" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M18 78 L42 22 C43.2 19 46.8 19 48 22 L56 42"
                    stroke="url(#footerGoldGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 52 L66 52"
                    stroke="url(#footerGoldGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M52 24 L52 78 M52 38 L76 72 C77.5 74 80 73 80 70 L80 18"
                    stroke="url(#footerGoldGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polygon points="80,10 83.5,14 80,18 76.5,14" fill="url(#footerGoldGrad)" />
                </svg>
              </div>

              <div>
                <span className="font-heading text-xl font-bold tracking-wider text-white">
                  ARAV <span className="text-gold-gradient">NEXUS</span>
                </span>
                <p className="text-[9.5px] uppercase tracking-widest text-[#D6A84F] font-bold">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              A diversified investment and business company committed to building and supporting
              transformative ventures across real estate, enterprise software, billing solutions,
              renewable energy, and emerging ventures.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
              <span>Certified Institutional Governance</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
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
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F]">
              Business Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Real Estate &amp; Capital Assets
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  IT &amp; Technology Platforms
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Billing &amp; Financial Solutions
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Renewable Energy Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleNavClick(e, '#businesses')}
                  className="hover:text-[#F3D78B] transition-colors"
                >
                  Emerging Growth Ventures
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F]">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
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
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {siteConfig.currentYear} {siteConfig.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
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
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#061522] hover:bg-[#0E243B] text-slate-300 hover:text-[#D6A84F] border border-white/10 transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <span className="text-[11px]">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
