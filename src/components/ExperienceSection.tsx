import React from 'react';
import { Briefcase, Building2, Calendar, Check } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-sky-50/30 border-t border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="hero-heading-blue font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Experience
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-700">
              ประสบการณ์ทำงาน การฝึกงาน และผลงานฟรีแลนซ์
            </p>
          </div>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-sky-400 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <FadeIn key={exp.id} delay={idx * 0.15}>
              <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-sky-200/80 shadow-xs hover:shadow-md transition-all">
                
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-8 w-6 h-6 rounded-full bg-sky-500 border-4 border-white shadow-md flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/90 text-sky-900 text-xs font-bold border border-sky-200">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-800">
                    <Building2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>{exp.organization}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {exp.title}
                </h3>

                <p className="text-xs font-semibold text-sky-700 mb-3">
                  {exp.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.bullets && (
                  <ul className="space-y-2 mb-4 pt-2 border-t border-sky-100">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
