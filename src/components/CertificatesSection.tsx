import React, { useState } from 'react';
import { Award, Calendar, Maximize2, X } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Certificate } from '../types/portfolio';
import { FadeIn } from './ui/FadeIn';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-black text-white border-t border-emerald-900/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Certificates
            </h2>
            <p className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              ใบรับรองการแข่งขัน การอบรม และมาตรฐานวิชาชีพด้านความมั่นคงปลอดภัยไซเบอร์
            </p>
          </div>
        </FadeIn>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert, idx) => (
            <FadeIn key={cert.id} delay={idx * 0.1}>
              <div
                onClick={() => setSelectedCert(cert)}
                className="group h-full glass-card-matrix rounded-3xl border border-emerald-500/30 p-5 shadow-xs hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(0,255,102,0.2)] transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Image Frame */}
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-emerald-900/50 mb-4 bg-black">
                    <img
                      src={cert.thumbnail}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/90 backdrop-blur-md shadow-xs text-emerald-400 border border-emerald-500/40">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono font-bold text-emerald-400 gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>ขยายดูใบรับรอง</span>
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

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium pt-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="pt-4 mt-4 border-t border-emerald-900/40">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-black text-emerald-400 text-[11px] font-mono font-semibold border border-emerald-500/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center">
          <div className="relative max-w-4xl w-full bg-black rounded-3xl border border-emerald-500/40 overflow-hidden shadow-[0_0_50px_rgba(0,255,102,0.25)] p-4 sm:p-6 flex flex-col space-y-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-emerald-900/50">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-black text-emerald-400 hover:bg-emerald-950 border border-emerald-500/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image Preview */}
            <div className="max-h-[75vh] overflow-auto rounded-2xl bg-black flex justify-center items-center p-2 border border-emerald-900/40">
              <img
                src={selectedCert.thumbnail}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-emerald-900/50 font-mono">
              <span>{selectedCert.issueDate}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 rounded-full bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors"
              >
                ปิดหน้าต่าง
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
