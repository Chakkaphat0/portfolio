import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { CtfScoresSection } from './components/CtfScoresSection';
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
        <SkillsSection />
        <ProjectsSection />
        <ActivitiesSection />
        <CtfScoresSection />
        <CertificatesSection />
      </main>

      {/* Contact & Footer */}
      <ContactSection />
    </div>
  );
};

export default App;
