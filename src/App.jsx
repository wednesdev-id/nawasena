import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Workflow } from './components/Workflow';
import { CaseStudy } from './components/CaseStudy';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#0c321e] selection:text-white">
      {/* Floating Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections: High-Converting Narrative Flow */}
      <main className="flex-grow">
        {/* Hero Section & BRIN Sponsor Institutional Recognition */}
        <Hero />

        {/* Narrative & Philosophy: About Nawasena, 4 Pillars, Visi, Misi & Values */}
        <AboutUs />

        {/* Integrated Services Showcase: Reklamasi, Kehutanan, Geospasial */}
        <Services />

        {/* Work Methodology: 4-Step Systematic Framework */}
        <Workflow />

        {/* Real-World Proof: Mine Reclamation Case Study */}
        <CaseStudy />

        {/* Strategic Differentiators & Quality Commitments */}
        <WhyUs />

        {/* Partnership & Consultation Inquiry Hub */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Subtle Floating WhatsApp Action */}
      <WhatsAppFloating />
    </div>
  );
}

export default App;
