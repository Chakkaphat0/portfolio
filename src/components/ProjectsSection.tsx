import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Figma, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { LiveProjectButton } from './ui/Buttons';
import { useTheme } from '../context/ThemeContext';

interface LightboxState {
  isOpen: boolean;
  projectTitle: string;
  images: string[];
  currentIndex: number;
}

export const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Lightbox Modal State
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    projectTitle: '',
    images: [],
    currentIndex: 0
  });

  const openLightbox = (projectTitle: string, images: string[], initialIndex: number) => {
    setLightbox({
      isOpen: true,
      projectTitle,
      images,
      currentIndex: initialIndex
    });
  };

  const closeLightbox = useCallback(() => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  }, []);

  const nextImage = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  }, []);

  const prevImage = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  }, []);

  // Keyboard Navigation (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen, nextImage, prevImage, closeLightbox]);

  return (
    <section id="projects" className={`relative py-24 sm:py-32 transition-colors duration-300 overflow-hidden ${
      isLight ? 'bg-transparent text-slate-900' : 'bg-transparent text-white'
    }`}>
      {/* Background Glow */}
      <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 ${
        isLight ? 'bg-blue-500/10' : 'bg-emerald-500/10'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Projects
            </h2>
            {/* <p className={`mt-2 font-mono text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Click on any image to open full-screen gallery view
            </p> */}
          </div>
        </FadeIn>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS_DATA.map((project, index) => {
            const allImages = [project.coverImage, ...(project.images || [])];

            return (
              <FadeIn key={project.id} delay={0.1 * index} className="w-full">
                <div
                  className={`group relative rounded-[2.5rem] glass-card-matrix p-6 sm:p-10 transition-all duration-300 overflow-hidden space-y-6 ${
                    isLight
                      ? 'border-blue-500/30 hover:border-blue-600/60 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]'
                      : 'border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(0,255,102,0.2)]'
                  }`}
                >
                  {/* Top Header Row: Project Title & External Action Buttons */}
                  <div className={`flex flex-wrap items-center justify-between gap-4 pb-4 border-b ${
                    isLight ? 'border-blue-100' : 'border-emerald-900/40'
                  }`}>
                    <div className="flex items-center gap-4">
                      <span className={`font-black font-mono text-3xl sm:text-5xl transition-colors ${
                        isLight
                          ? 'text-blue-500/30 group-hover:text-blue-600'
                          : 'text-emerald-500/40 group-hover:text-emerald-400'
                      }`}>
                        0{index + 1}
                      </span>
                      <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isLight ? 'text-blue-600' : 'text-white'
                      }`}>
                        {project.title}
                      </h3>
                    </div>

                    {/* External Links Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveDemoUrl && (
                        <LiveProjectButton href={project.liveDemoUrl} label="Live Demo" />
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs ${
                            isLight
                              ? 'border-blue-500/40 bg-white text-blue-600 hover:bg-blue-50'
                              : 'border-emerald-500/40 bg-black text-emerald-400 hover:bg-emerald-950'
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs ${
                            isLight
                              ? 'border-blue-500/40 bg-white text-blue-600 hover:bg-blue-50'
                              : 'border-emerald-500/40 bg-black text-emerald-400 hover:bg-emerald-950'
                          }`}
                        >
                          <Figma className="w-4 h-4" />
                          <span>Figma</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Details (5 cols) */}
                    <div className="lg:col-span-5 space-y-5">
                      {/* Description */}
                      <div className="space-y-1.5">
                        <h4 className={`text-xs font-mono font-bold uppercase tracking-widest ${
                          isLight ? 'text-blue-600' : 'text-emerald-400'
                        }`}>
                          Project Description
                        </h4>
                        <p className={`text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line ${
                          isLight ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="pt-2">
                        <h4 className={`text-xs font-mono font-bold uppercase tracking-widest mb-2 ${
                          isLight ? 'text-blue-600' : 'text-emerald-400'
                        }`}>
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-colors ${
                                isLight
                                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                                  : 'bg-black text-emerald-400 border-emerald-500/30'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Media Gallery Grid (7 cols) */}
                    <div className="lg:col-span-7">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Main Cover Image (Clickable for Lightbox) */}
                        <div
                          onClick={() => openLightbox(project.title, allImages, 0)}
                          className={`relative sm:col-span-2 overflow-hidden rounded-2xl border shadow-xs aspect-video cursor-pointer group/img ${
                            isLight ? 'border-blue-500/20 bg-slate-100' : 'border-emerald-500/30 bg-black'
                          }`}
                        >
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          {/* Hover Zoom Overlay Badge */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-bold">
                            <ZoomIn className="w-5 h-5 text-emerald-400" />
                            <span>View Full Screen</span>
                          </div>
                        </div>

                        {/* Additional Thumbnail Images (Max 2 thumbnails shown in card = 3 preview slots total) */}
                        {project.images.slice(0, 2).map((img, i) => {
                          const isLastSlotWithMore = i === 1 && allImages.length > 3;
                          const remainingCount = allImages.length - 3;

                          return (
                            <div
                              key={i}
                              onClick={() => openLightbox(project.title, allImages, i + 1)}
                              className={`relative overflow-hidden rounded-2xl border shadow-xs h-36 sm:h-40 cursor-pointer group/img ${
                                isLight ? 'border-blue-500/20 bg-slate-100' : 'border-emerald-500/30 bg-black'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />

                              {/* Overlay for +N More Screenshots badge on 3rd preview slot */}
                              {isLastSlotWithMore ? (
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center text-white font-mono gap-0.5 group-hover/img:bg-black/80 transition-colors">
                                  <span className={`text-2xl sm:text-3xl font-black ${
                                    isLight ? 'text-blue-400' : 'text-emerald-400'
                                  }`}>
                                    +{remainingCount}
                                  </span>
                                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-200">
                                    More Images
                                  </span>
                                </div>
                              ) : (
                                /* Normal Hover Zoom Overlay */
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white font-mono text-xs font-bold">
                                  <ZoomIn className="w-4 h-4 text-emerald-400" />
                                  <span>Enlarge</span>
                                </div>
                              )}
                            </div>
                          );
                        })}

                      </div>
                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>

      {/* Interactive Full-Screen Image Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal Container */}
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >

              {/* Modal Top Bar: Title & Counter & Close */}
              <div className="w-full flex items-center justify-between pb-4 text-white font-mono z-10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold truncate max-w-md sm:max-w-xl text-emerald-400">
                    {lightbox.projectTitle}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Image {lightbox.currentIndex + 1} of {lightbox.images.length} (Use Arrow Keys ← → to navigate)
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Full-Size Image Container */}
              <div className="relative w-full flex items-center justify-center max-h-[72vh] overflow-hidden rounded-2xl border border-slate-700/60 bg-black/80">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightbox.currentIndex}
                    src={lightbox.images[lightbox.currentIndex]}
                    alt={`Full view ${lightbox.currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl"
                  />
                </AnimatePresence>

                {/* Left Slide Arrow Button */}
                {lightbox.images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-3 p-3 rounded-full bg-black/70 hover:bg-emerald-500 hover:text-black text-white transition-all cursor-pointer shadow-lg border border-slate-700"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Right Slide Arrow Button */}
                {lightbox.images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-3 p-3 rounded-full bg-black/70 hover:bg-emerald-500 hover:text-black text-white transition-all cursor-pointer shadow-lg border border-slate-700"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Thumbnail Strip Below Main Image */}
              {lightbox.images.length > 1 && (
                <div className="flex items-center gap-2.5 pt-4 overflow-x-auto max-w-full px-2">
                  {lightbox.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox(prev => ({ ...prev, currentIndex: idx }))}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        lightbox.currentIndex === idx
                          ? 'border-emerald-400 scale-105 shadow-[0_0_12px_rgba(0,255,102,0.5)]'
                          : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
