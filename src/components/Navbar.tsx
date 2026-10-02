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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active highlighting
      const sections = ['hero', 'about', 'businesses', 'investments', 'impact', 'careers', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled py-3'
          : 'bg-gradient-to-b from-[#061522]/90 via-[#061522]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F] rounded-lg"
            aria-label="ARAV NEXUS Homepage"
          >
            {/* Geometric AN Monogram SVG */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#061522] border border-[#D6A84F]/40 p-1.5 shadow-gold-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D6A84F]">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FCE59F" />
                    <stop offset="50%" stopColor="#D6A84F" />
                    <stop offset="100%" stopColor="#A87C2B" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 75 L42 22 C43.5 19 46.5 19 48 22 L56 42"
                  stroke="url(#navGold)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 52 L68 52"
                  stroke="url(#navGold)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M52 24 L52 75 M52 38 L75 70 C76.5 72 79 71 79 68 L79 20"
                  stroke="url(#navGold)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon points="79,11 83,15 79,19 75,15" fill="url(#navGold)" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
                ARAV <span className="text-[#D6A84F]">NEXUS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-300 font-medium">
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
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-[#D6A84F]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D6A84F] to-transparent rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handlePartnerCTA}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] transition-all duration-300 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#061522]"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D6A84F] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D6A84F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 border-b border-[#D6A84F]/20' : 'max-h-0 opacity-0'
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
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#D6A84F] bg-[#0E243B] font-semibold border-l-2 border-[#D6A84F]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handlePartnerCTA}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] shadow-gold-sm hover:shadow-gold-md transition-all active:scale-[0.99]"
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
