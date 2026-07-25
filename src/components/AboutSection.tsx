import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { AnimatedText } from './ui/AnimatedText';
import { FadeIn } from './ui/FadeIn';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-sky-50/40 border-y border-sky-100/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="hero-heading-blue font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              About me
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-700">
              ประวัติการศึกษา (มัธยมศึกษา & อุดมศึกษา)
            </p>
          </div>
        </FadeIn>

        {/* Character-by-Character Animated Bio Paragraph */}
        <FadeIn delay={0.15}>
          <div className="max-w-3xl mx-auto mb-20 px-6 py-8 rounded-3xl bg-white border border-sky-200/80 shadow-xs backdrop-blur-md">
            <AnimatedText
              text="ผมมุ่งเน้นการออกแบบและพัฒนาเว็บแอปพลิเคชันที่เรียบง่าย สบายตา ไหลลื่น และตอบโจทย์ผู้ใช้งาน ยึดมั่นในคุณภาพและการสร้างสรรค์ซอฟต์แวร์ที่ทรงพลัง"
              className="text-base sm:text-lg md:text-xl font-normal text-slate-800 text-center leading-relaxed"
            />
          </div>
        </FadeIn>

        {/* Vertical Education Timeline (Includes High School & University) */}
        <div className="space-y-8">
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-center gap-3 mb-10 text-center">
              <div className="p-3 rounded-2xl bg-sky-100 text-sky-800 border border-sky-200 shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-sky-950 tracking-tight">
                ประวัติการศึกษา (Education Timeline)
              </h3>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-sky-400 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {EDUCATION_DATA.map((edu, idx) => (
              <FadeIn key={edu.id} delay={0.3 + idx * 0.15}>
                <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-sky-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                  
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-8 w-6 h-6 rounded-full bg-sky-500 border-4 border-white shadow-md flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-sky-100/90 text-sky-900 text-xs font-bold border border-sky-200">
                      {edu.period}
                    </span>

                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {edu.subtitle}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {edu.title}
                  </h4>

                  <p className="text-sm font-semibold text-sky-800">
                    {edu.organization}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.bullets && (
                    <ul className="space-y-2 pt-2 border-t border-sky-100">
                      {edu.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {edu.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-100"
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
