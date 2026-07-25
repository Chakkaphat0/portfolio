import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { AnimatedText } from './ui/AnimatedText';
import { FadeIn } from './ui/FadeIn';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-black text-white border-y border-emerald-900/40 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              About me
            </h2>
            <p className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              
            </p>
          </div>
        </FadeIn>

        {/* Character-by-Character Animated Bio Paragraph */}
        <FadeIn delay={0.15}>
          <div className="max-w-3xl mx-auto mb-20 px-6 py-8 rounded-3xl glass-card-matrix border border-emerald-500/30 shadow-[0_0_30px_rgba(0,255,102,0.1)]">
            <AnimatedText
              text="I love bigc"
              className="text-base sm:text-lg md:text-xl font-normal text-slate-200 text-center leading-relaxed"
            />
          </div>
        </FadeIn>

        {/* Vertical Education Timeline */}
        <div className="space-y-8">
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-center gap-3 mb-10 text-center">
              <div className="p-3 rounded-2xl bg-black text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Education Timeline
              </h3>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-emerald-500 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {EDUCATION_DATA.map((edu, idx) => (
              <FadeIn key={edu.id} delay={0.3 + idx * 0.15}>
                <div className="relative glass-card-matrix p-6 sm:p-8 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/60 shadow-lg space-y-4">
                  
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-8 w-6 h-6 rounded-full bg-emerald-500 border-4 border-black shadow-[0_0_15px_#00FF66] flex items-center justify-center">
                    <Award className="w-3 h-3 text-black" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-black text-emerald-400 text-xs font-mono font-bold border border-emerald-500/40">
                      {edu.period}
                    </span>

                    <span className="text-xs font-mono font-bold text-emerald-300 bg-black px-2.5 py-1 rounded-md border border-emerald-500/30">
                      {edu.subtitle || 'Information'}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.title}
                  </h4>

                  <p className="text-sm font-mono font-semibold text-emerald-400">
                    {edu.organization}
                  </p>

                  {edu.description && (
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-emerald-900/40">
                      {edu.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {edu.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-black text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
