import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { AnimatedText } from './ui/AnimatedText';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="about"
      className={`relative py-24 sm:py-32 transition-colors duration-300 overflow-hidden ${
        isLight ? 'bg-transparent text-slate-900 border-y border-blue-200/40' : 'bg-transparent text-white border-y border-emerald-900/40'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              About me
            </h2>
          </div>
        </FadeIn>

        {/* Character-by-Character Animated Bio Paragraph */}
        <FadeIn delay={0.15}>
          <div className={`max-w-3xl mx-auto mb-20 px-6 py-8 rounded-3xl glass-card-matrix transition-all duration-300 ${
            isLight ? 'shadow-[0_0_30px_rgba(37,99,235,0.1)] border-blue-500/30' : 'shadow-[0_0_30px_rgba(0,255,102,0.15)] border-emerald-500/30'
          }`}>
            <AnimatedText
              text="I have been interested in cybersecurity and hacking since childhood, with an endless passion for discovering vulnerabilities and competing in CTF challenges."
              className={`text-base sm:text-lg md:text-xl font-mono text-center leading-relaxed tracking-wide ${
                isLight ? 'text-slate-800' : 'text-slate-200'
              }`}
            />
          </div>
        </FadeIn>

        {/* Vertical Education Timeline */}
        <div className="space-y-8">
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-center gap-3 mb-10 text-center">
              <div className={`p-3 rounded-2xl border transition-all duration-300 ${
                isLight
                  ? 'bg-white text-blue-600 border-blue-500/40 shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                  : 'bg-black text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(0,255,102,0.2)]'
              }`}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Education Timeline
              </h3>
            </div>
          </FadeIn>

          <div className={`relative border-l-2 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 transition-colors duration-300 ${
            isLight ? 'border-blue-500' : 'border-emerald-500'
          }`}>
            {EDUCATION_DATA.map((edu, idx) => (
              <FadeIn key={edu.id} delay={0.3 + idx * 0.15}>
                <div className="relative glass-card-matrix p-6 sm:p-8 rounded-3xl shadow-lg space-y-4">
                  
                  {/* Timeline Bullet Node */}
                  <div className={`absolute -left-[37px] sm:-left-[53px] top-8 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    isLight
                      ? 'bg-blue-600 border-slate-50 shadow-[0_0_15px_#2563EB] text-white'
                      : 'bg-emerald-500 border-black shadow-[0_0_15px_#00FF66] text-black'
                  }`}>
                    <Award className="w-3 h-3" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border transition-colors ${
                      isLight
                        ? 'bg-blue-50 text-blue-700 border-blue-300'
                        : 'bg-black text-emerald-400 border-emerald-500/40'
                    }`}>
                      {edu.period}
                    </span>

                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border transition-colors ${
                      isLight
                        ? 'bg-slate-100 text-blue-600 border-blue-200'
                        : 'bg-black text-emerald-300 border-emerald-500/30'
                    }`}>
                      {edu.subtitle || 'Information'}
                    </span>
                  </div>

                  <h4 className={`text-xl sm:text-2xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {edu.title}
                  </h4>

                  <p className={`text-sm font-mono font-semibold ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>
                    {edu.organization}
                  </p>

                  {edu.description && (
                    <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                      {edu.description}
                    </p>
                  )}

                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className={`space-y-2 pt-2 border-t ${isLight ? 'border-slate-200' : 'border-emerald-900/40'}`}>
                      {edu.bullets.map((bullet, i) => (
                        <li key={i} className={`flex items-start gap-2 text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-blue-600' : 'text-emerald-400'}`} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
