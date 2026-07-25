import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { CONTACT_DATA, PERSONAL_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';

export const ContactSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden">
      {/* Sky Blue Glow Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-sky-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <FadeIn delay={0}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Contact Information</span>
            </div>

            <h2 className="text-gradient-blue font-black uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl">
              Get In Touch
            </h2>

            <p className="text-sm sm:text-base text-sky-100/90 font-light leading-relaxed">
              พร้อมสำหรับการติดต่องานหรือร่วมงานในโครงการซอฟต์แวร์และเว็บแอปพลิเคชัน
            </p>
          </div>
        </FadeIn>

        {/* Primary Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Email */}
          <FadeIn delay={0.15}>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="group p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/80 hover:bg-slate-900 transition-all flex flex-col items-center text-center space-y-3 shadow-lg"
            >
              <div className="p-4 rounded-2xl bg-sky-500/20 text-sky-300 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Email</span>
              <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors break-all">
                {PERSONAL_DATA.email}
              </span>
            </a>
          </FadeIn>

          {/* Phone */}
          <FadeIn delay={0.25}>
            <a
              href={`tel:${PERSONAL_DATA.phone}`}
              className="group p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/80 hover:bg-slate-900 transition-all flex flex-col items-center text-center space-y-3 shadow-lg"
            >
              <div className="p-4 rounded-2xl bg-sky-500/20 text-sky-300 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Phone</span>
              <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                {PERSONAL_DATA.phone}
              </span>
            </a>
          </FadeIn>

          {/* Address */}
          <FadeIn delay={0.35}>
            <div className="group p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/80 hover:bg-slate-900 transition-all flex flex-col items-center text-center space-y-3 shadow-lg">
              <div className="p-4 rounded-2xl bg-sky-500/20 text-sky-300 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Address</span>
              <span className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                {PERSONAL_DATA.address}
              </span>
            </div>
          </FadeIn>

        </div>

        {/* Social Icons */}
        <FadeIn delay={0.45}>
          <div className="flex justify-center items-center gap-4 mb-16">
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-sky-200 hover:text-white hover:border-sky-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-sky-200 hover:text-white hover:border-sky-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300/70 font-medium">
          <p>© 2025 {PERSONAL_DATA.fullName} — Bangkok University. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sky-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
