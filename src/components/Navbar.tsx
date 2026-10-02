import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onPartnerClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPartnerClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['hero', 'businesses', 'about', 'investment-approach', 'investments', 'impact', 'journey', 'careers', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerCTA = () => {
    setMobileMenuOpen(false);
    if (onPartnerClick) {
      onPartnerClick();
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'glass-nav-scrolled py-2.5 sm:py-3.5 shadow-lg'
          : 'bg-gradient-to-b from-[#061522]/95 via-[#061522]/70 to-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F] rounded-lg shrink-0"
            aria-label="ARAV NEXUS Homepage"
          >
            {/* Geometric AN Monogram Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0E243B] to-[#061522] border border-[#D6A84F]/40 p-1.5 sm:p-2 shadow-gold-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#D6A84F] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="navGoldPencil2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FCE59F" />
                    <stop offset="45%" stopColor="#D6A84F" />
                    <stop offset="100%" stopColor="#A87C2B" />
                  </linearGradient>
                </defs>
                <path
                  d="M18 78 L42 22 C43.2 19 46.8 19 48 22 L56 42"
                  stroke="url(#navGoldPencil2)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 52 L66 52"
                  stroke="url(#navGoldPencil2)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M52 24 L52 78 M52 38 L76 72 C77.5 74 80 73 80 70 L80 18"
                  stroke="url(#navGoldPencil2)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon points="80,10 83.5,14 80,18 76.5,14" fill="url(#navGoldPencil2)" />
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-xl font-bold tracking-wider text-white leading-tight flex items-center gap-1.5">
                ARAV <span className="text-gold-gradient">NEXUS</span>
              </span>
              <span className="hidden sm:block text-[8.5px] uppercase tracking-[0.28em] text-slate-400 font-medium">
                Invest &bull; Build &bull; Grow
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-[#F3D78B]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D6A84F] to-transparent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={handlePartnerCTA}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] transition-all duration-300 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#061522]"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-200 bg-[#0E243B]/80 border border-white/10 hover:border-[#D6A84F]/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D6A84F] transition-all"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D6A84F]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 border-b border-[#D6A84F]/25 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        } bg-[#061522]/98 backdrop-blur-2xl`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          {siteConfig.navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#F3D78B] bg-[#0E243B] font-semibold border-l-4 border-[#D6A84F]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handlePartnerCTA}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] shadow-gold-sm hover:shadow-gold-md transition-all active:scale-[0.99]"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
