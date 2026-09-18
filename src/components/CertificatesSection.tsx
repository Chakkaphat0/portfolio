import React, { useEffect, useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, X, Users, UserCheck } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Certificate } from '../types/portfolio';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

export const CertificatesSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const years = ['All', '2026', '2025', '2024', '2023'];

  const filteredCertificates = selectedYear === 'All'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((cert) => cert.year === selectedYear);

  useEffect(() => {
    if (!selectedCert) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCert(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className={`relative overflow-hidden py-16 transition-colors duration-300 sm:py-24 ${
      isLight ? 'bg-transparent text-slate-900 border-t border-blue-200/40' : 'bg-transparent text-white border-t border-emerald-900/40'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="hero-heading-green text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
              Certificates
            </h2>
            <p className={`mx-auto mt-2 max-w-2xl text-sm font-mono font-bold uppercase leading-relaxed tracking-wider ${
              isLight ? 'text-blue-600' : 'text-emerald-400'
            }`}>
              Certifications in Cybersecurity Competitions, Trainings, and Technical Standards
            </p>
          </div>
        </FadeIn>

        {/* Year Filter Buttons (2023 - 2026) */}
        <FadeIn delay={0.1}>
          <div className="mobile-scrollbar-hide -mx-4 mb-8 flex snap-x items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`min-h-11 shrink-0 snap-start rounded-full px-5 py-2 text-sm font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedYear === year
                    ? isLight
                      ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-500'
                      : 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(0,255,102,0.4)] border border-emerald-400'
                    : isLight
                      ? 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                      : 'bg-black text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/60 hover:border-emerald-400'
                }`}
              >
                {year === 'All' ? 'All' : `Year ${year}`}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {filteredCertificates.map((cert, idx) => (
            <FadeIn key={cert.id} delay={idx * 0.08}>
              <div
                className={`group flex h-full flex-col justify-between rounded-3xl p-4 shadow-xs transition-all glass-card-matrix sm:p-5 ${
                  isLight
                    ? 'border-blue-500/30 hover:border-blue-600/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]'
                    : 'border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(0,255,102,0.2)]'
                }`}
              >
                <div>
                  {/* Thumbnail Image Frame */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className={`relative mb-4 h-44 cursor-pointer overflow-hidden rounded-2xl border sm:h-48 ${
                      isLight ? 'border-blue-100 bg-slate-100' : 'border-emerald-900/50 bg-black'
                    }`}
                  >
                    <img
                      src={cert.thumbnail}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border ${
                      isLight ? 'bg-white/90 text-blue-600 border-blue-200' : 'bg-black/90 text-emerald-400 border-emerald-500/40'
                    }`}>
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Issuer & Title */}
                  <div className="space-y-2">
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                      isLight ? 'text-blue-600' : 'text-emerald-400'
                    }`}>
                      {cert.issuer}
                    </span>

                    <h3 className={`line-clamp-2 text-lg font-bold leading-snug transition-colors ${
                      isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-emerald-300'
                    }`}>
                      {cert.title}
                    </h3>

                    {/* Icon Calendar and Year below Title */}
                    <div className={`flex items-center gap-1.5 text-xs font-mono font-medium pt-1 ${
                      isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-emerald-400'}`} />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action: "Read More" button */}
                <div className={`pt-4 mt-4 border-t ${isLight ? 'border-blue-100' : 'border-emerald-900/40'}`}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className={`flex min-h-11 w-full items-center justify-center rounded-xl border py-2.5 font-mono text-sm font-bold transition-all duration-300 ${
                      isLight
                        ? 'bg-white border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white shadow-[0_0_15px_rgba(37,99,235,0.1)]'
                        : 'bg-black border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                    }`}
                  >
                    Read More
                  </button>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Detail & Lightbox Preview Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={() => setSelectedCert(null)}
          className={`fixed inset-0 z-50 flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-8 ${
          isLight ? 'bg-slate-900/60 backdrop-blur-md' : 'bg-black/90 backdrop-blur-md'
        }`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`relative flex max-h-[92dvh] w-full max-w-3xl flex-col space-y-4 overflow-y-auto rounded-t-3xl border p-4 transition-all duration-300 sm:my-auto sm:space-y-5 sm:rounded-3xl sm:p-7 ${
            isLight
              ? 'bg-white border-blue-500/50 text-slate-900 shadow-[0_0_50px_rgba(37,99,235,0.25)]'
              : 'bg-black border-emerald-500/50 text-white shadow-[0_0_50px_rgba(0,255,102,0.3)]'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-start justify-between pb-3 border-b ${
              isLight ? 'border-blue-100' : 'border-emerald-900/50'
            }`}>
              <div className="space-y-1 pr-4">
                <span className={`text-xs font-mono font-bold uppercase tracking-widest block ${
                  isLight ? 'text-blue-600' : 'text-emerald-400'
                }`}>
                  {selectedCert.issuer}
                </span>
                <h3 id="certificate-modal-title" className={`text-xl sm:text-2xl font-black leading-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {selectedCert.title}
                </h3>
                <div className={`flex items-center gap-1.5 text-xs font-mono font-medium pt-0.5 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-emerald-400'}`} />
                  <span>{selectedCert.issueDate}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className={`flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border p-2 transition-colors ${
                  isLight
                    ? 'bg-slate-100 text-blue-600 hover:bg-blue-100 border-blue-300'
                    : 'bg-black text-emerald-400 hover:bg-emerald-950 border-emerald-500/40'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image Preview */}
            <div className={`flex max-h-[38dvh] items-center justify-center overflow-hidden rounded-2xl border p-2 sm:max-h-[50vh] ${
              isLight ? 'bg-slate-50 border-blue-200' : 'bg-black border-emerald-900/40'
            }`}>
              <img
                src={selectedCert.thumbnail}
                alt={selectedCert.title}
                className="max-h-[34dvh] w-auto rounded-xl object-contain shadow-lg sm:max-h-[45vh]"
              />
            </div>

            {/* Detailed Course / Event Description */}
            {selectedCert.description && (
              <div className={`p-4 rounded-2xl border space-y-2 font-mono text-xs sm:text-sm ${
                isLight ? 'bg-blue-50/50 border-blue-200' : 'bg-black border-emerald-500/30'
              }`}>
                <div className={`flex items-center gap-2 font-bold text-xs uppercase tracking-wider ${
                  isLight ? 'text-blue-600' : 'text-emerald-400'
                }`}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Overview</span>
                </div>
                <p className={`leading-relaxed font-sans text-sm pt-1 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {selectedCert.description}
                </p>

                {/* Team & Player Username Info */}
                {(selectedCert.teamName || selectedCert.username) && (
                  <div className={`flex flex-wrap gap-4 pt-3 border-t text-xs font-mono ${
                    isLight ? 'border-blue-200' : 'border-emerald-900/40'
                  }`}>
                    {selectedCert.teamName && (
                      <div className={`flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        <Users className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-emerald-400'}`} />
                        <span>Team: <strong className={isLight ? 'text-blue-700' : 'text-emerald-300'}>{selectedCert.teamName}</strong></span>
                      </div>
                    )}
                    {selectedCert.username && (
                      <div className={`flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        <UserCheck className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-emerald-400'}`} />
                        <span>CTF Handle: <strong className={isLight ? 'text-blue-700' : 'text-emerald-300'}>{selectedCert.username}</strong></span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Modal Footer */}
            <div className={`flex flex-wrap justify-between items-center text-xs pt-3 border-t font-mono gap-3 ${
              isLight ? 'text-slate-500 border-blue-100' : 'text-slate-400 border-emerald-900/50'
            }`}>
              {selectedCert.scoreUrl ? (
                <a
                  href={selectedCert.scoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 font-bold transition-colors ${
                    isLight ? 'text-blue-600 hover:text-blue-800' : 'text-emerald-400 hover:text-green-300'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Official Details & Scoreboard</span>
                </a>
              ) : (
                <span>Official Certificate</span>
              )}

              <button
                onClick={() => setSelectedCert(null)}
                className={`ml-auto min-h-11 rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                  isLight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-emerald-500 text-black hover:bg-emerald-400'
                }`}
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
