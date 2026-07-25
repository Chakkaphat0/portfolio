import React from 'react';
import { Github, Figma } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { LiveProjectButton } from './ui/Buttons';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
      {/* Background Matrix Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Projects
            </h2>
            <p className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              ผลงานการพัฒนาระบบ 3D Web Application & Full-Stack Projects
            </p>
          </div>
        </FadeIn>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index} className="w-full">
              <div
                className="group relative rounded-[2.5rem] glass-card-matrix border border-emerald-500/30 p-6 sm:p-10 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(0,255,102,0.2)] overflow-hidden space-y-6"
              >
                {/* Top Header Row: Project Title & External Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-900/40">
                  <div className="flex items-center gap-4">
                    <span className="font-black font-mono text-3xl sm:text-5xl text-emerald-500/40 group-hover:text-emerald-400 transition-colors">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-500/40 bg-black text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider hover:bg-emerald-950 transition-colors shadow-xs"
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-500/40 bg-black text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider hover:bg-emerald-950 transition-colors shadow-xs"
                      >
                        <Figma className="w-4 h-4 text-emerald-400" />
                        <span>Figma</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details Grid (Description moved up close to the title) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Details (5 cols) */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Description - Positioned right below header */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                        คำอธิบายโครงการ (Description)
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-black text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30"
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
                      <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-emerald-500/30 shadow-xs aspect-video bg-black">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {project.images.slice(0, 2).map((img, i) => (
                        <div key={i} className="overflow-hidden rounded-2xl border border-emerald-500/30 shadow-xs h-36 sm:h-40 bg-black">
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
