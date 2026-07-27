import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';
import { CONTACT_DATA, PERSONAL_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className={`relative py-24 sm:py-32 overflow-hidden border-t transition-colors duration-300 ${
      isLight ? 'bg-transparent text-slate-900 border-blue-200/40' : 'bg-transparent text-white border-emerald-900/50'
    }`}>
      {/* Glow Highlights */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b blur-3xl pointer-events-none ${
        isLight ? 'from-blue-500/04 via-sky-400/02 to-transparent' : 'from-emerald-500/15 via-green-500/10 to-transparent'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <FadeIn delay={0}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl">
              Get In Touch
            </h2>
          </div>
        </FadeIn>

        {/* Primary Contact Channels (Email & Phone only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 font-mono">
          
          {/* Email */}
          <FadeIn delay={0.15}>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className={`group p-6 rounded-3xl glass-card-matrix border transition-all flex flex-col items-center text-center space-y-3 ${
                isLight
                  ? 'border-blue-500/30 hover:border-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]'
                  : 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(0,255,102,0.3)]'
              }`}
            >
              <div className={`p-4 rounded-2xl group-hover:scale-110 transition-transform border ${
                isLight
                  ? 'bg-blue-50 text-blue-600 border-blue-200 shadow-[0_0_10px_rgba(37,99,235,0.15)]'
                  : 'bg-black text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(0,255,102,0.2)]'
              }`}>
                <Mail className="w-6 h-6" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>Email</span>
              <span className={`text-sm font-bold transition-colors break-all ${isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-emerald-300'}`}>
                {PERSONAL_DATA.email}
              </span>
            </a>
          </FadeIn>

          {/* Phone */}
          <FadeIn delay={0.25}>
            <a
              href={`tel:${PERSONAL_DATA.phone}`}
              className={`group p-6 rounded-3xl glass-card-matrix border transition-all flex flex-col items-center text-center space-y-3 ${
                isLight
                  ? 'border-blue-500/30 hover:border-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]'
                  : 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(0,255,102,0.3)]'
              }`}
            >
              <div className={`p-4 rounded-2xl group-hover:scale-110 transition-transform border ${
                isLight
                  ? 'bg-blue-50 text-blue-600 border-blue-200 shadow-[0_0_10px_rgba(37,99,235,0.15)]'
                  : 'bg-black text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(0,255,102,0.2)]'
              }`}>
                <Phone className="w-6 h-6" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>Phone</span>
              <span className={`text-sm font-bold transition-colors ${isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-emerald-300'}`}>
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
              className={`p-3 rounded-2xl border transition-all ${
                isLight
                  ? 'bg-white border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xs'
                  : 'bg-black border-emerald-500/40 text-emerald-400 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.4)]'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-2xl border transition-all ${
                isLight
                  ? 'bg-white border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xs'
                  : 'bg-black border-emerald-500/40 text-emerald-400 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.4)]'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>

        {/* Bottom Footer Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium ${
          isLight ? 'border-slate-300 text-slate-600' : 'border-emerald-900/50 text-slate-400'
        }`}>
          <p>© 2025 Chakkaphat Lunabut — Bangkok University</p>
          
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
              isLight
                ? 'bg-white border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xs'
                : 'bg-black border-emerald-500/40 text-emerald-400 hover:text-white hover:border-emerald-400'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
