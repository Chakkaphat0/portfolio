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
          <div className={`glass-card-matrix p-4 sm:p-5 rounded-2xl border space-y-4 transition-all duration-300 ${
            isLight
              ? 'border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.1)]'
              : 'border-emerald-500/35 shadow-[0_0_25px_rgba(0,255,102,0.15)]'
          }`}>

            {/* Window Sub-Header */}
            <div className="border-b pb-2.5 border-slate-700/40 flex items-center justify-between">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Official Leaderboard Logs
              </span>
              <span className={`text-[11px] font-mono ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>
                2023 - 2025
              </span>
            </div>

            {/* All 3 Years Compact List */}
            <div className="space-y-4">
              {CTF_SCORES_DATA.map((record, index) => (
                <div
                  key={record.id}
                  className={`space-y-2 ${
                    index !== CTF_SCORES_DATA.length - 1 ? 'border-b pb-4 border-slate-800/50' : ''
                  }`}
                >
                  {/* Year Header with Interactive Bold Hover Link */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <a
                      href={record.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View Official CTF Scoreboard for ${record.title}`}
                      className={`group font-bold hover:font-black transition-all duration-200 hover:underline underline-offset-4 cursor-pointer flex items-center gap-1.5 ${
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
                        ? 'bg-blue-100 text-blue-800 border-blue-300'
                        : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                    }`}>
                      {record.year}
                    </span>
                  </div>

                  {/* Individual Row */}
                  {record.individual && (
                    <div className={`p-2.5 rounded-xl border text-xs font-mono flex flex-wrap items-center justify-between gap-2 ${
                      isLight ? 'bg-white border-slate-200' : 'bg-black/60 border-slate-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-black border ${
                          record.individual.rank === '2'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-400/50'
                            : isLight ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-emerald-950 text-emerald-400 border-emerald-500/30'
                        }`}>
                          Rank #{record.individual.rank}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                            {record.individual.player}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            ({record.individual.team})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Individual:</span>
                        <span className={`font-black text-sm ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>
                          {record.individual.score} <span className="text-[10px] font-normal">pts</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Team Row */}
                  {record.team && (
                    <div className={`p-2.5 rounded-xl border text-xs font-mono flex flex-wrap items-center justify-between gap-2 ${
                      isLight ? 'bg-white border-slate-200' : 'bg-black/60 border-slate-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-black border ${
                          isLight ? 'bg-cyan-50 text-cyan-700 border-cyan-200' : 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                        }`}>
                          Rank #{record.team.rank}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                            {record.team.teamName}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            ({record.team.institution})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Team:</span>
                        <span className={`font-black text-sm ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`}>
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
