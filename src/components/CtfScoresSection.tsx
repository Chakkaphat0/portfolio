import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CTF_SCORES_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

export const CtfScoresSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const muted = isLight ? 'text-slate-600' : 'text-slate-400';
  const accent = isLight ? 'text-blue-700' : 'text-emerald-400';

  return (
    <section id="ctf-scores" className={'relative py-10 sm:py-14 border-b ' + (isLight ? 'text-slate-900 border-blue-200/40' : 'text-white border-emerald-900/40')}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="hero-heading-green mb-5 text-3xl sm:text-4xl font-black uppercase tracking-tight">CTF Records</h2>
          <ol className={'divide-y ' + (isLight ? 'divide-slate-200' : 'divide-slate-800')}>
            {CTF_SCORES_DATA.map(record => (
              <li key={record.id} className="grid grid-cols-1 sm:grid-cols-[3rem_1fr] gap-1 sm:gap-4 py-3.5 text-sm">
                <span className={'font-mono text-xs font-bold pt-0.5 ' + muted}>{record.year}</span>
                <div className="min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-bold leading-snug">
                      {record.url ? (
                        <a href={record.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline underline-offset-4" aria-label={'View official results for ' + record.title}>
                          {record.title.split(' - ')[0]}<ExternalLink className={'w-3 h-3 shrink-0 ' + muted} />
                        </a>
                      ) : record.title.split(' - ')[0]}
                    </h3>
                    {record.achievement && <span className={'text-xs font-bold ' + (record.id === 'stdio-2026' ? (isLight ? 'text-amber-700' : 'text-amber-300') : accent)}>{record.achievement}</span>}
                    <span className={'text-xs ' + muted}>{record.title.split(' - ')[1]}</span>
                  </div>
                  {(record.individual || record.team) && (
                    <div className={'flex flex-col gap-1 text-xs leading-relaxed ' + muted}>
                      {record.individual && <p><span className="font-semibold">Individual:</span> {record.individual.player}{record.individual.rank && (' · Rank #' + record.individual.rank)} · <strong className={accent}>{record.individual.score} pts</strong></p>}
                      {record.team && <p title={record.team.institution}><span className="font-semibold">Team:</span> {record.team.teamName} · <span className={record.team.placement ? (isLight ? 'text-amber-700' : 'text-amber-300') : ''}>{record.team.placement ?? ('Rank #' + record.team.rank)}</span> · <strong className={accent}>{record.team.score} pts</strong></p>}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
};
