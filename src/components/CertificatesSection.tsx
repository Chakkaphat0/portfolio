import React, { useState } from 'react';
import { Award, Calendar, Maximize2, X } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Certificate } from '../types/portfolio';
import { FadeIn } from './ui/FadeIn';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-sky-50/30 border-t border-sky-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="hero-heading-blue font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Certificates
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-700">
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
                className="group h-full bg-white rounded-3xl border border-sky-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Image Frame */}
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-sky-100 mb-4 bg-slate-900">
                    <img
                      src={cert.thumbnail}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-white/95 backdrop-blur-md shadow-xs text-sky-600 border border-sky-200">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-white gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>ขยายดูใบรับรอง</span>
                    </div>
                  </div>

                  {/* Issuer & Title */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block">
                      {cert.issuer}
                    </span>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="pt-4 mt-4 border-t border-sky-100">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-[11px] font-semibold border border-sky-100"
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
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl border border-sky-200 overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col space-y-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-sky-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image Preview */}
            <div className="max-h-[75vh] overflow-auto rounded-2xl bg-slate-900 flex justify-center items-center p-2">
              <img
                src={selectedCert.thumbnail}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-sky-100 font-medium">
              <span>{selectedCert.issueDate}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 rounded-full bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-colors"
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
