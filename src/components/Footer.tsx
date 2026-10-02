import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';

import {
  Link,
} from 'react-router-dom';

import {
  siteConfig,
} from '../config/site';

interface FooterProps {
  onLegalClick: (
    type: 'privacy' | 'terms'
  ) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onLegalClick,
}) => {
  return (
    <footer className="bg-[#030B12] text-white pt-16 sm:pt-20 pb-12 border-t border-[#D6A84F]/20 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D6A84F]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* BRAND */}

          <div className="lg:col-span-4 space-y-4">

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <img
                src="/favicon.svg"
                alt="ARAV NEXUS"
                className="w-10 h-10"
              />

              <div>

                <span className="font-heading text-xl font-bold tracking-wider text-white">

                  ARAV{' '}

                  <span className="text-gold-gradient">
                    NEXUS
                  </span>

                </span>

                <p className="text-[9.5px] uppercase tracking-widest text-[#D6A84F] font-bold">
                  {siteConfig.tagline}
                </p>

              </div>

            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A diversified investment and business
              company committed to building and
              supporting transformative ventures across
              real estate, enterprise software, billing
              solutions, renewable energy, and emerging
              ventures.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
              <span>
                Long-Term Value • Responsible Growth
              </span>
            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="lg:col-span-2 space-y-4">

            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F]">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-slate-300">

              {siteConfig.navigation.map(
                (item) => (

                  <li key={item.label}>

                    <Link
                      to={item.href}
                      className="hover:text-[#F3D78B] transition-colors"
                    >
                      {item.label}
                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>


          {/* BUSINESSES */}

          <div className="lg:col-span-3 space-y-4">

            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F]">
              Business Areas
            </h4>

            <ul className="space-y-2 text-sm text-slate-300">

              <li>
                <Link
                  to="/businesses"
                  className="hover:text-[#F3D78B]"
                >
                  Real Estate
                </Link>
              </li>

              <li>
                <Link
                  to="/businesses"
                  className="hover:text-[#F3D78B]"
                >
                  IT & Technology
                </Link>
              </li>

              <li>
                <Link
                  to="/businesses"
                  className="hover:text-[#F3D78B]"
                >
                  Billing Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/businesses"
                  className="hover:text-[#F3D78B]"
                >
                  Renewable Energy
                </Link>
              </li>

              <li>
                <Link
                  to="/businesses"
                  className="hover:text-[#F3D78B]"
                >
                  Emerging Ventures
                </Link>
              </li>

            </ul>

          </div>


          {/* CONTACT */}

          <div className="lg:col-span-3 space-y-4">

            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D6A84F]">
              Headquarters
            </h4>

            <div className="space-y-3 text-sm text-slate-300">

              <div className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6A84F]" />
                <span>
                  {siteConfig.contact.location}
                </span>
              </div>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex gap-2.5 hover:text-[#F3D78B]"
              >
                <Mail className="w-4 h-4 text-[#D6A84F]" />

                {siteConfig.contact.email}
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex gap-2.5 hover:text-[#F3D78B]"
              >
                <Phone className="w-4 h-4 text-[#D6A84F]" />

                {siteConfig.contact.phone}
              </a>

            </div>

            <Link
              to="/contact"
              className="inline-block text-[#F3D78B] text-sm font-bold hover:text-white"
            >
              Start a Conversation →
            </Link>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">

          <p>
            © {siteConfig.currentYear}{' '}
            {siteConfig.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <button
              onClick={() =>
                onLegalClick('privacy')
              }
              className="hover:text-[#F3D78B]"
            >
              Privacy Policy
            </button>

            <button
              onClick={() =>
                onLegalClick('terms')
              }
              className="hover:text-[#F3D78B]"
            >
              Terms of Use
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};