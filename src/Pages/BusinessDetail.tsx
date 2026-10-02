import { Link, useParams } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import { siteConfig } from '../config/site';

export default function BusinessDetail() {

  const { businessId } = useParams();

  const business =
    siteConfig.businesses.find(
      (item) =>
        item.id === businessId
    );

  if (!business) {
    return (
      <section className="min-h-screen bg-[#061522] flex items-center justify-center px-4 pt-28">

        <div className="text-center">

          <h1 className="font-heading text-4xl text-white font-bold">
            Business Not Found
          </h1>

          <Link
            to="/businesses"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-[#D6A84F] text-[#061522] font-bold"
          >
            Back to Businesses
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-[#061522] min-h-screen pt-28 pb-20">

      {/* HERO */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/businesses"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#F3D78B] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Businesses
        </Link>


        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* TEXT */}

          <div>

            <p className="text-[#D6A84F] uppercase tracking-[0.3em] text-xs font-bold mb-4">
              ARAV NEXUS BUSINESS
            </p>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {business.title}
            </h1>

            <p className="text-[#D6A84F] text-lg mt-4 font-semibold">
              {business.subtitle}
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6">
              {business.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">

              {business.tags.map(
                (tag) => (

                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#0E243B] border border-[#D6A84F]/25 text-xs text-slate-300"
                  >
                    {tag}
                  </span>

                )
              )}

            </div>

            <Link
              to={`/contact?subject=${encodeURIComponent(
                `${business.title} Partnership`
              )}`}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#F5D88A] to-[#D6A84F] text-[#061522] font-bold"
            >
              Discuss This Opportunity
              <ArrowUpRight className="w-4 h-4" />
            </Link>

          </div>


          {/* IMAGE */}

          <div className="rounded-3xl overflow-hidden border border-[#D6A84F]/20">

            <img
              src={business.image}
              alt={business.title}
              className="w-full h-[360px] lg:h-[500px] object-cover"
            />

          </div>

        </div>


        {/* DETAILS */}

        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          <div className="lg:col-span-2 bg-[#0E243B] border border-white/10 rounded-2xl p-7 sm:p-9">

            <p className="text-[#D6A84F] uppercase tracking-[0.25em] text-xs font-bold mb-4">
              OVERVIEW
            </p>

            <h2 className="font-heading text-3xl text-white font-bold mb-5">
              About {business.title}
            </h2>

            <p className="text-slate-300 leading-relaxed">
              {business.details.overview}
            </p>

          </div>


          <div className="bg-[#0E243B] border border-white/10 rounded-2xl p-7 sm:p-9">

            <p className="text-[#D6A84F] uppercase tracking-[0.25em] text-xs font-bold mb-4">
              MARKET FOCUS
            </p>

            <p className="text-slate-300 leading-relaxed">
              {business.details.marketFocus}
            </p>

          </div>

        </div>


        {/* HIGHLIGHTS */}

        <div className="mt-10 bg-[#0E243B] border border-white/10 rounded-2xl p-7 sm:p-9">

          <p className="text-[#D6A84F] uppercase tracking-[0.25em] text-xs font-bold mb-5">
            KEY HIGHLIGHTS
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {business.details.keyHighlights.map(
              (highlight) => (

                <div
                  key={highlight}
                  className="flex gap-3"
                >

                  <CheckCircle2 className="w-5 h-5 text-[#D6A84F] shrink-0" />

                  <p className="text-slate-300 leading-relaxed">
                    {highlight}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}