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

          // Animate counters
          const duration = 1500;
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
      { threshold: 0.25 }
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
      className="py-24 sm:py-32 bg-[#061522] relative overflow-hidden border-t border-[#D6A84F]/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D6A84F]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Corporate Architecture Image with Floating Card */}
          <div className="lg:col-span-6 relative">
            {/* Background Decorative Gold Frame */}
            <div className="absolute -inset-3 rounded-3xl border border-[#D6A84F]/30 -rotate-1 hidden sm:block pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-navy-elevated border border-[#D6A84F]/30 bg-[#0B1F33]">
              <img
                src={siteConfig.images.about}
                alt="ARAV NEXUS Corporate Environment and Strategic Operations"
                className="w-full h-[420px] sm:h-[500px] object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061522] via-transparent to-transparent opacity-80" />

              {/* Floating Institutional Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs p-4 rounded-xl glass-card border border-[#D6A84F]/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D6A84F]/20 flex items-center justify-center text-[#D6A84F] shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#F3D78B]">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
                <Award className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
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
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Multi-Disciplinary Synergy</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Technology-Led Acceleration</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Responsible Sustainability</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Aligned Founder Partnerships</span>
              </div>
            </div>

            {/* Statistics Grid from Spec */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {/* Stat 1 */}
              <div className="p-4 rounded-xl bg-[#0E243B]/60 border border-white/5 hover:border-[#D6A84F]/30 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span>{counts.industries}</span>
                  <span className="text-[#D6A84F]">+</span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  Industries
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-xl bg-[#0E243B]/60 border border-white/5 hover:border-[#D6A84F]/30 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span>{counts.relationships}</span>
                  <span className="text-[#D6A84F]">+</span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  Partnerships
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-xl bg-[#0E243B]/60 border border-white/5 hover:border-[#D6A84F]/30 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <span>{counts.growth}</span>
                  <span className="text-[#D6A84F]">%</span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  Growth Focus
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-4 rounded-xl bg-[#0E243B]/60 border border-white/5 hover:border-[#D6A84F]/30 transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                  <span>Global</span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  Opportunities
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-sm hover:shadow-gold-md transition-all duration-300"
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
