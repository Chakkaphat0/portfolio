import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { CONTACT_DATA, PERSONAL_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';

export const ContactSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-emerald-900/50">
      {/* Matrix Green Glow Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-emerald-500/15 via-green-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <FadeIn delay={0}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(0,255,102,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>[ROOT@CHAKKAPHAT ~] Contact</span>
            </div>

            <h2 className="text-gradient-green font-black uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl">
              Get In Touch
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              พร้อมสำหรับการติดต่องานหรือร่วมงานในโครงการซอฟต์แวร์และเว็บแอปพลิเคชัน
            </p>
          </div>
        </FadeIn>

        {/* Primary Contact Channels (Email & Phone only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 font-mono">
          
          {/* Email */}
          <FadeIn delay={0.15}>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="group p-6 rounded-3xl glass-card-matrix border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(0,255,102,0.3)] transition-all flex flex-col items-center text-center space-y-3"
            >
              <div className="p-4 rounded-2xl bg-black text-emerald-400 group-hover:scale-110 transition-transform border border-emerald-500/40 shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Email</span>
              <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors break-all">
                {PERSONAL_DATA.email}
              </span>
            </a>
          </FadeIn>

          {/* Phone */}
          <FadeIn delay={0.25}>
            <a
              href={`tel:${PERSONAL_DATA.phone}`}
              className="group p-6 rounded-3xl glass-card-matrix border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(0,255,102,0.3)] transition-all flex flex-col items-center text-center space-y-3"
            >
              <div className="p-4 rounded-2xl bg-black text-emerald-400 group-hover:scale-110 transition-transform border border-emerald-500/40 shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Phone</span>
              <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                {PERSONAL_DATA.phone}
              </span>
            </a>
          </FadeIn>

        </div>

        {/* Social Icons */}
        <FadeIn delay={0.35}>
          <div className="flex justify-center items-center gap-4 mb-16">
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-black border border-emerald-500/40 text-emerald-400 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.4)] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-black border border-emerald-500/40 text-emerald-400 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.4)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 font-medium">
          <p>© 2025 Chakkaphat Lunabut — Bangkok University</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-emerald-500/40 text-emerald-400 hover:text-white hover:border-emerald-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
