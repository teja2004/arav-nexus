import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';
import {
  Link,
  NavLink,
} from 'react-router-dom';

import { siteConfig } from '../config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled py-2.5 sm:py-3.5 shadow-lg'
          : 'bg-gradient-to-b from-[#061522]/95 via-[#061522]/70 to-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="ARAV NEXUS Homepage"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0E243B] to-[#061522] border border-[#D6A84F]/40 p-1.5 sm:p-2 shadow-gold-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#D6A84F] flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id="navGold"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#FCE59F"
                    />
                    <stop
                      offset="45%"
                      stopColor="#D6A84F"
                    />
                    <stop
                      offset="100%"
                      stopColor="#A87C2B"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M18 78 L42 22 C43.2 19 46.8 19 48 22 L56 42"
                  stroke="url(#navGold)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M28 52 L66 52"
                  stroke="url(#navGold)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                <path
                  d="M52 24 L52 78 M52 38 L76 72 C77.5 74 80 73 80 70 L80 18"
                  stroke="url(#navGold)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <polygon
                  points="80,10 83.5,14 80,18 76.5,14"
                  fill="url(#navGold)"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-xl font-bold tracking-wider text-white leading-tight">
                ARAV{' '}
                <span className="text-gold-gradient">
                  NEXUS
                </span>
              </span>

              <span className="hidden sm:block text-[8.5px] uppercase tracking-[0.28em] text-slate-400 font-medium">
                Invest • Build • Grow
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-[#F3D78B] bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D6A84F] to-transparent rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP CTA ================= */}

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] transition-all duration-300 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5"
            >
              <span>Partner With Us</span>

              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-200 bg-[#0E243B]/80 border border-white/10 hover:border-[#D6A84F]/40 transition-all"
            aria-label={
              mobileMenuOpen
                ? 'Close Menu'
                : 'Open Menu'
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#D6A84F]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } bg-[#061522]/98 backdrop-blur-2xl border-b border-[#D6A84F]/20`}
      >
        <div className="px-5 pt-4 pb-6 space-y-2">

          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#F3D78B] bg-[#0E243B] border-l-4 border-[#D6A84F]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-white/10">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061522] bg-gradient-to-r from-[#F5D88A] to-[#D6A84F]"
            >
              Partner With Us

              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;