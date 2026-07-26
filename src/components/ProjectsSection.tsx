import React from 'react';
import { Github, Figma } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { LiveProjectButton } from './ui/Buttons';
import { useTheme } from '../context/ThemeContext';

export const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="projects" className={`relative py-24 sm:py-32 transition-colors duration-300 overflow-hidden ${
      isLight ? 'bg-slate-50 text-slate-900' : 'bg-black text-white'
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
          </div>
        </FadeIn>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS_DATA.map((project, index) => (
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
                      isLight ? 'text-slate-900' : 'text-white'
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

                  {/* Right Media Grid (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className={`sm:col-span-2 overflow-hidden rounded-2xl border shadow-xs aspect-video ${
                        isLight ? 'border-blue-500/20 bg-slate-100' : 'border-emerald-500/30 bg-black'
                      }`}>
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {project.images.slice(0, 2).map((img, i) => (
                        <div key={i} className={`overflow-hidden rounded-2xl border shadow-xs h-36 sm:h-40 ${
                          isLight ? 'border-blue-500/20 bg-slate-100' : 'border-emerald-500/30 bg-black'
                        }`}>
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
