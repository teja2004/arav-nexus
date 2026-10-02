import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Businesses } from './components/Businesses';
import { About } from './components/About';
import { InvestmentApproach } from './components/InvestmentApproach';
import { InvestmentFocus } from './components/InvestmentFocus';
import { WhyAravNexus } from './components/WhyAravNexus';
import { Impact } from './components/Impact';
import { Journey } from './components/Journey';
import { PartnershipCTA } from './components/PartnershipCTA';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export function App() {
  const [contactSubject, setContactSubject] = useState('General Strategic Inquiry');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerWithSector = (sectorTitle: string) => {
    setContactSubject(`${sectorTitle} Partnership`);
    scrollToSection('contact');
  };

  const handlePartnerClick = () => {
    setContactSubject('Strategic Investment & Partnership');
    scrollToSection('contact');
  };

  const handleCareerApply = (roleTitle: string) => {
    setContactSubject(`Career Opportunity: ${roleTitle}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0B1F33] text-white flex flex-col selection:bg-[#D6A84F] selection:text-[#061522]">
      {/* Top Navigation */}
      <Navbar onPartnerClick={handlePartnerClick} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('businesses')}
          onPartnerClick={handlePartnerClick}
        />

        {/* Our Businesses */}
        <Businesses onPartnerWithSector={handlePartnerWithSector} />

        {/* About ARAV NEXUS */}
        <About onDiscoverStory={() => scrollToSection('journey')} />

        {/* Investment Approach */}
        <InvestmentApproach />

        {/* Investment Focus */}
        <InvestmentFocus />

        {/* Why ARAV NEXUS */}
        <WhyAravNexus />

        {/* Impact */}
        <Impact />

        {/* Journey */}
        <Journey />

        {/* Partnership Full-Width CTA */}
        <PartnershipCTA
          onPartnerClick={handlePartnerClick}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Careers */}
        <Careers onApplyClick={handleCareerApply} />

        {/* Contact Form & Corporate Info */}
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Corporate Footer */}
      <Footer onLegalClick={(type) => setLegalModalType(type)} />

      {/* Legal Privacy / Terms Dialog */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
