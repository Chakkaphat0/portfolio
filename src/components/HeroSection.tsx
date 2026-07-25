import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone, Mail, MapPin, Calendar, GraduationCap, User } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { Magnet } from './ui/Magnet';
import { Hero3DGraphic } from './ui/3DVisuals';
import { FadeIn } from './ui/FadeIn';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-white"
    >
      {/* Background Sky Blue Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/40 via-cyan-100/30 to-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Personal Info Card (Formatted strictly as requested) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <FadeIn delay={0} className="w-full">
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[2.5rem] border border-sky-200/90 shadow-[0_15px_40px_rgba(14,165,233,0.08)] space-y-6">
                
                {/* Header Name & University */}
                <div className="border-b border-sky-100 pb-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest">
                    <User className="w-4 h-4" />
                    <span>Personal Profile</span>
                  </div>
                  <h1 className="hero-heading font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                    {PERSONAL_DATA.fullName}
                  </h1>
                  <p className="text-base sm:text-lg font-bold text-sky-800 flex items-center gap-2 pt-1">
                    <GraduationCap className="w-5 h-5 text-sky-600 inline" />
                    <span>{PERSONAL_DATA.university}</span>
                  </p>
                </div>

                {/* Personal Information Fields Ordered Exactly as Requested */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  
                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
                      <Phone className="w-3.5 h-3.5 text-sky-600" />
                      <span>Phone:</span>
                    </div>
                    <a
                      href={`tel:${PERSONAL_DATA.phone}`}
                      className="block text-sm sm:text-base font-semibold text-slate-800 hover:text-sky-600 transition-colors"
                    >
                      {PERSONAL_DATA.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
                      <Mail className="w-3.5 h-3.5 text-sky-600" />
                      <span>Email:</span>
                    </div>
                    <a
                      href={`mailto:${PERSONAL_DATA.email}`}
                      className="block text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors break-all"
                    >
                      {PERSONAL_DATA.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-1 sm:col-span-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>Address:</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800">
                      {PERSONAL_DATA.address}
                    </p>
                  </div>

                  {/* Date of Birth */}
                  <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-1 sm:col-span-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>Date of Birth:</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-800">
                      {PERSONAL_DATA.dateOfBirth}
                    </p>
                  </div>

                </div>

              </div>
            </FadeIn>

          </div>

          {/* Right Column: 3D Profile Frame (เปลี่ยนเป็นที่ให้ใส่รูปได้) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <FadeIn delay={0.2} y={30} className="w-full">
              <Magnet strength={3} padding={100} className="w-full flex justify-center">
                <Hero3DGraphic />
              </Magnet>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex justify-between items-center text-xs font-medium text-sky-800/60 uppercase tracking-widest">
        <span>Scroll down</span>
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 rounded-full text-sky-700 hover:text-sky-900 transition-colors"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
