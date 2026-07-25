import React, { useState } from 'react';
import { Trophy, Users, Presentation, Calendar, MapPin, Sparkles } from 'lucide-react';
import { ACTIVITIES_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';

type FilterType = 'All' | 'Competition' | 'Club' | 'Conference';

const categoryIcons: Record<string, React.ReactNode> = {
  Competition: <Trophy className="w-4 h-4 text-sky-600" />,
  Club: <Users className="w-4 h-4 text-sky-700" />,
  Conference: <Presentation className="w-4 h-4 text-sky-800" />,
};

export const ActivitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredActivities = ACTIVITIES_DATA.filter((act) => {
    if (filter === 'All') return true;
    return act.category === filter;
  });

  return (
    <section id="activities" className="py-24 sm:py-32 bg-white border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="hero-heading-blue font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Activities & Contributions
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-700">
              การแข่งขัน Hackathon, กิจกรรมชมรมซอฟต์แวร์ และสัมมนาเทคโนโลยี
            </p>
          </div>
        </FadeIn>

        {/* Category Filter Pills */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(['All', 'Competition', 'Club', 'Conference'] as FilterType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === tab
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200'
                }`}
              >
                {tab === 'All' ? 'ทั้งหมด (All)' : tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Activities Card Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredActivities.map((act, idx) => (
            <FadeIn key={act.id} delay={idx * 0.15}>
              <div className="group h-full bg-white rounded-3xl border border-sky-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                
                {/* Atmosphere Image Cover */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-sky-900 border border-sky-200 shadow-xs">
                    {categoryIcons[act.category]}
                    <span>{act.category}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{act.date}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>{act.organization}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {act.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-500">
                      บทบาท: <span className="text-slate-800">{act.role}</span>
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  {act.achievement && (
                    <div className="mt-4 pt-3 border-t border-sky-100 flex items-center gap-2 text-xs font-bold text-sky-900 bg-sky-50 p-3 rounded-xl border border-sky-200/60">
                      <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{act.achievement}</span>
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
