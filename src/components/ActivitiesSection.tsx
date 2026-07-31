import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Presentation, Calendar, MapPin, ZoomIn, X } from 'lucide-react';
import { ACTIVITIES_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

const categoryIcons: Record<string, React.ReactNode> = {
  Competition: <Trophy className="w-4 h-4 text-emerald-400" />,
  Club: <Users className="w-4 h-4 text-cyan-400" />,
  Conference: <Presentation className="w-4 h-4 text-indigo-400" />,
};

interface LightboxState {
  isOpen: boolean;
  title: string;
  image: string;
}

export const ActivitiesSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, title: '', image: '' });

  return (
    <section
      id="activities"
      className={`relative py-20 sm:py-28 transition-colors duration-300 overflow-hidden ${
        isLight ? 'bg-transparent text-slate-900 border-b border-blue-200/40' : 'bg-transparent text-white border-b border-emerald-900/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl">
              Activities & Contributions
            </h2>
            <p className={`mt-2 font-mono text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Hackathons, Tech Clubs, and Professional Seminars
            </p>
          </div>
        </FadeIn>

        {/* Activities Card Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIVITIES_DATA.map((act, idx) => (
            <FadeIn key={act.id} delay={idx * 0.15}>
              <div className={`group h-full rounded-3xl glass-card-matrix border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isLight
                  ? 'border-blue-500/30 hover:border-blue-600/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]'
                  : 'border-emerald-500/35 hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(0,255,102,0.2)]'
              }`}>
                
                {/* Atmosphere Image Cover (Clickable for Lightbox) */}
                <div
                  onClick={() => setLightbox({ isOpen: true, title: act.title, image: act.image })}
                  className="relative h-56 sm:h-64 overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${
                    isLight
                      ? 'bg-white/90 text-slate-900 border-blue-200 shadow-sm'
                      : 'bg-black/80 text-white border-emerald-500/40 shadow-[0_0_10px_rgba(0,255,102,0.2)]'
                  }`}>
                    {categoryIcons[act.category]}
                    <span>{act.category}</span>
                  </div>

                  {/* Date Pill */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-slate-200 font-mono font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{act.date}</span>
                  </div>

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white font-mono text-xs font-bold">
                    <ZoomIn className="w-5 h-5 text-emerald-400" />
                    <span>View Full Photo</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between font-mono">
                  <div className="space-y-3">
                    
                    {/* Organization / Host */}
                    <div className="flex items-start gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-blue-600' : 'text-emerald-400'}`} />
                      <span className="leading-tight">{act.organization}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg sm:text-xl font-extrabold tracking-tight leading-snug ${
                      isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-emerald-400'
                    } transition-colors`}>
                      {act.title}
                    </h3>

                    {/* Role / Position */}
                    <div className="text-xs font-bold">
                      <span className="text-slate-400">Role / Position: </span>
                      <span className={isLight ? 'text-blue-700' : 'text-emerald-300'}>{act.role}</span>
                    </div>

                    {/* Detailed Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isLight ? 'text-slate-700' : 'text-slate-300'
                    }`}>
                      {act.description}
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full Event Photo */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setLightbox({ isOpen: false, title: '', image: '' })}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between pb-3 text-white font-mono z-10">
                <h4 className="text-base sm:text-lg font-bold truncate text-emerald-400">
                  {lightbox.title}
                </h4>
                <button
                  onClick={() => setLightbox({ isOpen: false, title: '', image: '' })}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative w-full flex items-center justify-center max-h-[80vh] overflow-hidden rounded-2xl border border-slate-700/60 bg-black/80">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
