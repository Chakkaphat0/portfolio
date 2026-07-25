import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, X, Users, UserCheck } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Certificate } from '../types/portfolio';
import { FadeIn } from './ui/FadeIn';

export const CertificatesSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const years = ['All', '2026', '2025', '2024', '2023'];

  const filteredCertificates = selectedYear === 'All'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((cert) => cert.year === selectedYear);

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-black text-white border-t border-emerald-900/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Certificates
            </h2>
            <p className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Certifications in Cybersecurity Competitions, Trainings, and Technical Standards
            </p>
          </div>
        </FadeIn>

        {/* Year Filter Buttons (2023 - 2026) */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(0,255,102,0.4)] border border-emerald-400'
                    : 'bg-black text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/60 hover:border-emerald-400'
                }`}
              >
                {year === 'All' ? 'All' : `Year ${year}`}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, idx) => (
            <FadeIn key={cert.id} delay={idx * 0.08}>
              <div
                className="group h-full glass-card-matrix rounded-3xl border border-emerald-500/30 p-5 shadow-xs hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(0,255,102,0.2)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image Frame */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative h-48 overflow-hidden rounded-2xl border border-emerald-900/50 mb-4 bg-black cursor-pointer"
                  >
                    <img
                      src={cert.thumbnail}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/90 backdrop-blur-md text-emerald-400 border border-emerald-500/40">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Issuer & Title */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                      {cert.issuer}
                    </span>

                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Icon Calendar and Year below Title */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium pt-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action: "Read More" button without arrow icon */}
                <div className="pt-4 mt-4 border-t border-emerald-900/40">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2.5 rounded-xl bg-black border border-emerald-500/40 text-emerald-400 font-mono font-bold text-xs hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.15)]"
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto">
          <div className="relative max-w-3xl w-full bg-black rounded-3xl border border-emerald-500/50 overflow-hidden shadow-[0_0_50px_rgba(0,255,102,0.3)] p-5 sm:p-7 flex flex-col space-y-5 my-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-emerald-900/50">
              <div className="space-y-1 pr-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  {selectedCert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium pt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedCert.issueDate}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-black text-emerald-400 hover:bg-emerald-950 border border-emerald-500/40 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image Preview */}
            <div className="max-h-[50vh] overflow-hidden rounded-2xl bg-black border border-emerald-900/40 flex justify-center items-center p-2">
              <img
                src={selectedCert.thumbnail}
                alt={selectedCert.title}
                className="max-h-[45vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Detailed Course / Event Description */}
            {selectedCert.description && (
              <div className="p-4 rounded-2xl bg-black border border-emerald-500/30 space-y-2 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Overview</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans text-sm pt-1">
                  {selectedCert.description}
                </p>

                {/* Team & Player Username Info */}
                {(selectedCert.teamName || selectedCert.username) && (
                  <div className="flex flex-wrap gap-4 pt-3 border-t border-emerald-900/40 text-xs font-mono">
                    {selectedCert.teamName && (
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Team: <strong className="text-emerald-300">{selectedCert.teamName}</strong></span>
                      </div>
                    )}
                    {selectedCert.username && (
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>CTF Handle: <strong className="text-emerald-300">{selectedCert.username}</strong></span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex flex-wrap justify-between items-center text-xs text-slate-400 pt-3 border-t border-emerald-900/50 font-mono gap-3">
              {selectedCert.scoreUrl ? (
                <a
                  href={selectedCert.scoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-green-300 font-bold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Official Details & Scoreboard</span>
                </a>
              ) : (
                <span>Official Certificate</span>
              )}

              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-full bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors ml-auto"
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
