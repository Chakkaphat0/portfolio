import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CTF_SCORES_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

export const CtfScoresSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="ctf-scores"
      className={`relative py-10 sm:py-14 transition-colors duration-300 overflow-hidden ${
        isLight ? 'bg-transparent text-slate-900 border-b border-blue-200/40' : 'bg-transparent text-white border-b border-emerald-900/40'
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-5">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-2xl sm:text-3xl">
              National CTF Records
            </h2>
            <p className={`mt-1 font-mono text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Thailand Cyber Top Talent (TCTT) SENIOR Division Qualifier
            </p>
          </div>
        </FadeIn>

        {/* Ultra-Compact Single Window Card */}
        <FadeIn delay={0.1}>
          <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 transition-all duration-300 ${
            isLight
              ? 'bg-white/95 border-blue-300/80 shadow-[0_4px_25px_rgba(37,99,235,0.12)] text-slate-900'
              : 'glass-card-matrix border-emerald-500/35 shadow-[0_0_25px_rgba(0,255,102,0.15)] text-white'
          }`}>

            {/* Window Sub-Header */}
            <div className={`border-b pb-2.5 flex items-center justify-between ${
              isLight ? 'border-slate-200' : 'border-slate-700/40'
            }`}>
              <span className={`text-xs font-mono font-black uppercase tracking-wider ${isLight ? 'text-blue-950' : 'text-white'}`}>
                Official Leaderboard Logs
              </span>
              <span className={`text-[11px] font-mono font-bold ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>
                2023 - 2025
              </span>
            </div>

            {/* All 3 Years Compact List */}
            <div className="space-y-4">
              {CTF_SCORES_DATA.map((record, index) => (
                <div
                  key={record.id}
                  className={`space-y-2 ${
                    index !== CTF_SCORES_DATA.length - 1
                      ? isLight ? 'border-b pb-4 border-slate-200' : 'border-b pb-4 border-slate-800/50'
                      : ''
                  }`}
                >
                  {/* Year Header with Interactive Bold Hover Link */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <a
                      href={record.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View Official CTF Scoreboard for ${record.title}`}
                      className={`group font-extrabold hover:font-black transition-all duration-200 hover:underline underline-offset-4 cursor-pointer flex items-center gap-1.5 ${
                        isLight
                          ? 'text-slate-900 hover:text-blue-600'
                          : 'text-slate-100 hover:text-emerald-400'
                      }`}
                    >
                      <span>{record.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border shrink-0 ml-2 ${
                      isLight
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                    }`}>
                      {record.year}
                    </span>
                  </div>

                  {/* Individual Row */}
                  {record.individual && (
                    <div className={`p-2.5 rounded-xl border text-xs font-mono flex flex-wrap items-center justify-between gap-2 ${
                      isLight ? 'bg-slate-50/90 border-slate-300/80 shadow-xs' : 'bg-black/60 border-slate-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-black border ${
                          record.individual.rank === '2'
                            ? isLight ? 'bg-amber-500 text-white border-amber-600 shadow-xs' : 'bg-amber-500/20 text-amber-400 border-amber-400/50'
                            : isLight ? 'bg-blue-600 text-white border-blue-600' : 'bg-emerald-950 text-emerald-400 border-emerald-500/30'
                        }`}>
                          Rank #{record.individual.rank}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className={`font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                            {record.individual.player}
                          </span>
                          <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'}`}>
                            ({record.individual.team})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <span className={`text-[10px] uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Individual:</span>
                        <span className={`font-black text-sm ${isLight ? 'text-blue-700' : 'text-emerald-400'}`}>
                          {record.individual.score} <span className="text-[10px] font-normal">pts</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Team Row */}
                  {record.team && (
                    <div className={`p-2.5 rounded-xl border text-xs font-mono flex flex-wrap items-center justify-between gap-2 ${
                      isLight ? 'bg-slate-50/90 border-slate-300/80 shadow-xs' : 'bg-black/60 border-slate-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-black border ${
                          isLight ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                        }`}>
                          Rank #{record.team.rank}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className={`font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                            {record.team.teamName}
                          </span>
                          <span className={`text-[11px] ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'}`}>
                            ({record.team.institution})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <span className={`text-[10px] uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Team:</span>
                        <span className={`font-black text-sm ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
                          {record.team.score} <span className="text-[10px] font-normal">pts</span>
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
