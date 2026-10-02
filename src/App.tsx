import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';

import { Hero } from './components/Hero';
import { Businesses } from './components/Businesses';
import { About } from './components/About';
import { InvestmentApproach } from './components/InvestmentApproach';
import { InvestmentFocus } from './components/InvestmentFocus';
import { WhyAravNexus } from './components/WhyAravNexus';
import { Impact } from './components/Impact';
import { Journey } from './components/Journey';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';

import { Footer } from './components/Footer';




/* =====================================================
   RESET PAGE TO TOP WHEN ROUTE CHANGES
   ===================================================== */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}


/* =====================================================
   PAGE HEADER
   ===================================================== */

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-[#061522] border-b border-white/10">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <p className="text-[#D6A84F] uppercase tracking-[0.3em] text-xs font-bold mb-5">
          {eyebrow}
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>

        <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {description}
        </p>

      </div>

    </section>
  );
}


/* =====================================================
   HOME
   ===================================================== */

function HomePage() {
  return (
    <>

      <Hero
        onExploreClick={() => {
          window.location.href =
            '/businesses';
        }}
        onPartnerClick={() => {
          window.location.href =
            '/contact';
        }}
      />

      <section className="py-20 bg-[#0B1F33]">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <p className="text-[#D6A84F] uppercase tracking-[0.3em] text-xs font-bold">
            ARAV NEXUS
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            Building Businesses.
            <span className="text-gold-gradient">
              {' '}Creating Value.
            </span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mt-5 leading-relaxed">
            Explore our businesses, investment approach
            and opportunities through the sections of our
            corporate platform.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/businesses"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F5D88A] to-[#D6A84F] text-[#061522] font-bold text-sm"
            >
              Explore Businesses →
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 rounded-full border border-[#D6A84F]/40 text-white font-bold text-sm hover:bg-white/5"
            >
              About ARAV NEXUS
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}


/* =====================================================
   ABOUT
   ===================================================== */

function AboutPage() {
  return (
    <>

      <PageHeader
        eyebrow="ABOUT ARAV NEXUS"
        title="Investing for a Better Tomorrow"
        description="Building businesses, creating value and thinking long term."
      />

      <About
        onDiscoverStory={() => {
          window.scrollTo({
            top: 0,
            behavior: 'auto',
          });
        }}
      />

      <WhyAravNexus />

      <Journey />

    </>
  );
}


/* =====================================================
   BUSINESSES
   ===================================================== */

function BusinessesPage() {
  return (
    <>

      <PageHeader
        eyebrow="OUR BUSINESSES"
        title="Diverse Industries. One Vision."
        description="Explore the businesses and industries where ARAV NEXUS creates long-term value."
      />

      <Businesses
        onPartnerWithSector={(sector) => {
          window.location.href =
            `/contact?subject=${encodeURIComponent(
              `${sector} Partnership`
            )}`;
        }}
      />

    </>
  );
}


/* =====================================================
   INVESTMENTS
   ===================================================== */

function InvestmentsPage() {
  return (
    <>

      <PageHeader
        eyebrow="INVESTMENT PHILOSOPHY"
        title="Investing for Long-Term Value"
        description="We identify opportunities, invest strategically, build strong businesses and focus on sustainable growth."
      />

      <InvestmentApproach />

      <InvestmentFocus />

      <WhyAravNexus />

    </>
  );
}


/* =====================================================
   IMPACT
   ===================================================== */

function ImpactPage() {
  return (
    <>

      <PageHeader
        eyebrow="GROWTH WITH PURPOSE"
        title="Creating Meaningful Impact"
        description="Our ambition goes beyond financial growth. We aim to enable businesses, support innovation and create opportunities."
      />

      <Impact />

      <WhyAravNexus />

    </>
  );
}


/* =====================================================
   CAREERS
   ===================================================== */

function CareersPage() {
  return (
    <>

      <PageHeader
        eyebrow="CAREERS"
        title="Build the Future With Us"
        description="Join a growing ecosystem of people building meaningful businesses and solving real-world problems."
      />

      <Careers
        onApplyClick={(role) => {
          window.location.href =
            `/contact?subject=${encodeURIComponent(
              `Career Opportunity: ${role}`
            )}`;
        }}
      />

    </>
  );
}


/* =====================================================
   CONTACT
   ===================================================== */

function ContactPage() {
  const params = new URLSearchParams(
    window.location.search
  );

  const subject =
    params.get('subject') ||
    'General Strategic Inquiry';

  return (
    <>

      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Let's Build Something Valuable"
        description="Have an investment opportunity, business proposal or partnership idea? We'd love to hear from you."
      />

      <Contact
        initialSubject={subject}
      />

    </>
  );
}


/* =====================================================
   404
   ===================================================== */

function NotFoundPage() {
  return (
    <section className="min-h-[80vh] bg-[#061522] flex items-center justify-center px-4 pt-28">

      <div className="text-center">

        <div className="font-heading text-8xl font-bold text-[#D6A84F]">
          404
        </div>

        <h1 className="font-heading text-3xl text-white font-bold mt-4">
          Page Not Found
        </h1>

        <p className="text-slate-400 mt-4">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#F5D88A] to-[#D6A84F] text-[#061522] font-bold"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
}


/* =====================================================
   APP
   ===================================================== */

function App() {
  useEffect(() => {
    if (
      'scrollRestoration' in
      window.history
    ) {
      window.history.scrollRestoration =
        'manual';
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1F33] text-white flex flex-col">

      <ScrollToTop />

      <Navbar />

      <main className="flex-grow">

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/businesses"
            element={<BusinessesPage />}
          />

          <Route
            path="/investments"
            element={<InvestmentsPage />}
          />

          <Route
            path="/impact"
            element={<ImpactPage />}
          />

          <Route
            path="/careers"
            element={<CareersPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Routes>

      </main>

      <Footer
        onLegalClick={(type) => {
          window.location.href =
            type === 'privacy'
              ? '/privacy'
              : '/terms';
        }}
      />

    </div>
  );
}

export default App;
