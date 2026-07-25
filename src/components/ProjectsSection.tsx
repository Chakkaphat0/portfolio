import React from 'react';
import { Github, Figma, CheckCircle, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { LiveProjectButton } from './ui/Buttons';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Blue Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="hero-heading-blue font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Projects
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-700">
              ผลงานการพัฒนาระบบ 3D Web Application & Full-Stack Projects
            </p>
          </div>
        </FadeIn>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index} className="w-full">
              <div
                className="group relative rounded-[2.5rem] bg-white border border-sky-200/80 shadow-[0_15px_45px_rgba(14,165,233,0.08)] p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_20px_55px_rgba(14,165,233,0.15)] overflow-hidden"
              >
                {/* Top Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-sky-100">
                  <div className="flex items-center gap-4">
                    <span className="font-black text-3xl sm:text-5xl text-sky-300 group-hover:text-sky-600 transition-colors">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-semibold border border-sky-200">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                        {project.title}
                      </h3>
                    </div>
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-sky-300 bg-white text-sky-900 text-xs font-bold uppercase tracking-wider hover:bg-sky-50 transition-colors shadow-xs"
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-sky-300 bg-white text-sky-900 text-xs font-bold uppercase tracking-wider hover:bg-sky-50 transition-colors shadow-xs"
                      >
                        <Figma className="w-4 h-4 text-sky-600" />
                        <span>Figma</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Details (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">
                        คำอธิบายโครงการ (Description)
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Role & Responsibility */}
                    <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/60 space-y-2">
                      <div className="flex items-center gap-2 text-sky-900 font-bold text-xs sm:text-sm">
                        <Code2 className="w-4 h-4 text-sky-600" />
                        <span>บทบาทและขอบเขตงาน (Role & Responsibility):</span>
                      </div>
                      <p className="text-xs font-bold text-sky-950">{project.role}</p>
                      <ul className="space-y-1 pt-1">
                        {project.responsibility.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-sky-100/80 text-sky-900 text-xs font-semibold border border-sky-200"
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
                      <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-sky-200 shadow-xs aspect-video">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {project.images.slice(0, 2).map((img, i) => (
                        <div key={i} className="overflow-hidden rounded-2xl border border-sky-200 shadow-xs h-36 sm:h-40">
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
