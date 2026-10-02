import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Award, Shield } from 'lucide-react';
import { siteConfig } from '../config/site';

interface AboutProps {
  onDiscoverStory: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverStory }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    industries: 0,
    relationships: 0,
    growth: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
              industries: Math.min(5, Math.floor(progress * 5)),
              relationships: Math.min(10, Math.floor(progress * 10)),
              growth: Math.min(100, Math.floor(progress * 100)),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ industries: 5, relationships: 10, growth: 100 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#061522] relative overflow-hidden border-t border-[#D6A84F]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Architecture & Floating Institutional Badge */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-3 rounded-3xl border border-[#D6A84F]/20 -rotate-1 hidden sm:block pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-navy-elevated border border-[#D6A84F]/30 bg-[#0B1F33]">
              <img
                src={siteConfig.images.about}
                alt="ARAV NEXUS Corporate Operations and Headquarters"
                className="w-full h-[380px] sm:h-[480px] object-cover filter brightness-90 contrast-105 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061522] via-transparent to-transparent opacity-85" />

              {/* Floating Institutional Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs p-4 rounded-xl glass-card border border-[#D6A84F]/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D6A84F]/20 flex items-center justify-center text-[#D6A84F] shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#F3D78B]">
                      Capital Stewardship
                    </h4>
                    <p className="text-xs text-slate-300">
                      Anchored by rigorous governance and enduring trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Core Positioning & Statistics */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
                <Award className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#F3D78B]">
                  About ARAV NEXUS
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Investing for a <br className="hidden sm:inline" />
                <span className="text-gold-gradient">Better Tomorrow</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              ARAV NEXUS is a forward-thinking investment and business company committed to building
              and supporting high-potential businesses across diverse industries. We combine capital,
              technology, expertise and long-term vision to create sustainable growth and meaningful impact.
            </p>

            {/* Strategic Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Multi-Disciplinary Synergy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Technology-Led Acceleration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Responsible Sustainability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Aligned Founder Partnerships</span>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#0E243B]/70 border border-white/5 hover:border-[#D6A84F]/40 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span>{counts.industries}</span>
                  <span className="text-[#D6A84F]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">
                  Industries
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E243B]/70 border border-white/5 hover:border-[#D6A84F]/40 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span>{counts.relationships}</span>
                  <span className="text-[#D6A84F]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">
                  Partnerships
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E243B]/70 border border-white/5 hover:border-[#D6A84F]/40 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span>{counts.growth}</span>
                  <span className="text-[#D6A84F]">%</span>
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">
                  Growth Focus
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E243B]/70 border border-white/5 hover:border-[#D6A84F]/40 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span className="text-gold-gradient">Global</span>
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">
                  Opportunities
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-sm hover:shadow-gold-md transition-all duration-300"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
