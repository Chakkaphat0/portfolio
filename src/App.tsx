import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-sky-100 selection:text-sky-700">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* ExperienceSection and ActivitiesSection are hidden as requested */}
        <CertificatesSection />
      </main>

      {/* Contact & Footer */}
      <ContactSection />
    </div>
  );
};

export default App;
