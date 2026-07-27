import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { ElectricBackground } from './components/ui/ElectricBackground';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Dynamic Animated Electric Background Grid & Plasma Glow */}
      <ElectricBackground />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>

      {/* Contact & Footer */}
      <ContactSection />
    </div>
  );
};

export default App;
