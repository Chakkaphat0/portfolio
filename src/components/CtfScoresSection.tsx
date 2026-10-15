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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-3xl sm:text-4xl">
              National CTF Records
            </h2>
            <p className={`mt-2 font-mono text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Thailand Cyber Top Talent (TCTT) SENIOR Division Records
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
            <div className={`flex flex-wrap items-center justify-between gap-3 border-b pb-2.5 ${
              isLight ? 'border-slate-200' : 'border-slate-700/40'
            }`}>
              <span className={`whitespace-nowrap text-xs font-mono font-black uppercase tracking-wider ${isLight ? 'text-blue-950' : 'text-white'}`}>
                Official Leaderboard Logs
              </span>
              <span className={`shrink-0 whitespace-nowrap text-[11px] font-mono font-bold ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>
                2023 - 2026
              </span>
            </div>

            {/* Leaderboard Records */}
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
                  {/* Record Header */}
                  <div className="flex min-w-0 items-start gap-3 font-mono text-sm sm:items-center">
                    {record.url ? (
                      <a
                        href={record.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View Official CTF Scoreboard for ${record.title}`}
                        className={`group flex min-w-0 flex-1 items-start gap-1.5 break-words font-extrabold leading-relaxed transition-all duration-200 hover:underline hover:font-black underline-offset-4 sm:items-center ${
                          isLight
                            ? 'text-slate-900 hover:text-blue-600'
                            : 'text-slate-100 hover:text-emerald-400'
                        }`}
                      >
                        <span>{record.title}</span>
                        <ExternalLink className="h-3 w-3 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className={`min-w-0 flex-1 break-words font-extrabold leading-relaxed ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                        {record.title}
                      </span>
                    )}
                    <span className={`w-fit shrink-0 whitespace-nowrap rounded border px-2 py-1 text-xs font-extrabold ${
                      isLight
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                    }`}>
                      {record.year}
                    </span>
                  </div>

                  {/* Individual Row */}
                  {record.individual && (
                    <div className={`flex flex-col items-stretch gap-3 rounded-xl border p-3 font-mono text-sm sm:flex-row sm:items-center sm:justify-between ${
                      isLight ? 'bg-slate-50/90 border-slate-300/80 shadow-xs' : 'bg-black/60 border-slate-800'
                    }`}>
                      <div className="flex min-w-0 items-center gap-2">
                        {record.individual.rank && (
                          <span className={`shrink-0 whitespace-nowrap rounded border px-2 py-1 text-xs font-black ${
                            record.individual.rank === '2'
                              ? isLight ? 'bg-amber-500 text-white border-amber-600 shadow-xs' : 'bg-amber-500/20 text-amber-400 border-amber-400/50'
                              : isLight ? 'bg-blue-600 text-white border-blue-600' : 'bg-emerald-950 text-emerald-400 border-emerald-500/30'
                          }`}>
                            Rank #{record.individual.rank}
                          </span>
                        )}
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className={`font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                            {record.individual.player}
                          </span>
                          <span className={`break-words text-xs ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'}`}>
                            ({record.individual.team})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:ml-auto">
                        <span className={`text-xs uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Individual:</span>
                        <span className={`text-sm font-black ${isLight ? 'text-blue-700' : 'text-emerald-400'}`}>
                          {record.individual.score} <span className="text-xs font-normal">pts</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Team Row */}
                  {record.team && (
                    <div className={`flex flex-col items-stretch gap-3 rounded-xl border p-3 font-mono text-sm sm:flex-row sm:items-center sm:justify-between ${
                      isLight ? 'bg-slate-50/90 border-slate-300/80 shadow-xs' : 'bg-black/60 border-slate-800'
                    }`}>
                      <div className="flex min-w-0 items-center gap-2">
                        {(record.team.rank || record.team.placement) && (
                          <span className={`shrink-0 rounded border px-2 py-1 text-xs font-black ${
                            record.team.placement
                              ? isLight
                                ? 'bg-amber-500 text-white border-amber-600'
                                : 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                              : isLight
                                ? 'bg-cyan-600 text-white border-cyan-600'
                                : 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                          }`}>
                            {record.team.placement ?? `Rank #${record.team.rank}`}
                          </span>
                        )}
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className={`font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                            {record.team.teamName}
                          </span>
                          <span className={`break-words text-xs ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'}`}>
                            ({record.team.institution})
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:ml-auto sm:justify-end">
                        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                          <span className={`text-xs uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Team:</span>
                          <span className={`whitespace-nowrap text-sm font-black ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
                            {record.team.score} <span className="text-xs font-normal">pts</span>
                          </span>
                        </div>
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
