import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone, Mail, MapPin, Calendar, GraduationCap, User } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { Magnet } from './ui/Magnet';
import { Hero3DGraphic } from './ui/3DVisuals';
import { FadeIn } from './ui/FadeIn';
import { MatrixTextReveal } from './ui/MatrixTextReveal';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-black text-white"
    >
      {/* Background Matrix Grid & Glow Effects */}
      <div className="absolute inset-0 bg-matrix-grid bg-[size:30px_30px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Personal Profile Text with Matrix Code Decoding & Fade-in Effect */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <FadeIn delay={0} className="w-full space-y-6">
              
              {/* Profile Header Title */}
              <div className="space-y-2 border-b border-emerald-900/50 pb-5">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs uppercase tracking-widest">
                  <User className="w-4 h-4 text-emerald-400" />
                  <span>Personal Profile</span>
                </div>
                <h1 className="hero-heading font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                  <MatrixTextReveal text={PERSONAL_DATA.fullName} delay={0.1} />
                </h1>
                <p className="text-lg sm:text-xl font-mono font-bold text-emerald-400 flex items-center gap-2 pt-1">
                  <GraduationCap className="w-5 h-5 text-emerald-400 inline" />
                  <span>{PERSONAL_DATA.university}</span>
                </p>
              </div>

              {/* Personal Information Plain Text List with Matrix Scramble Decoding Effect */}
              <div className="space-y-4 pt-1 font-mono">
                
                {/* Phone */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Phone:</span>
                  </div>
                  <div className="pl-5">
                    <a
                      href={`tel:${PERSONAL_DATA.phone}`}
                      className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      <MatrixTextReveal text={PERSONAL_DATA.phone} delay={0.3} />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Email:</span>
                  </div>
                  <div className="pl-5">
                    <a
                      href={`mailto:${PERSONAL_DATA.email}`}
                      className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors break-all"
                    >
                      <MatrixTextReveal text={PERSONAL_DATA.email} delay={0.5} />
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Address:</span>
                  </div>
                  <div className="pl-5">
                    <p className="text-base sm:text-lg font-semibold text-white">
                      <MatrixTextReveal text={PERSONAL_DATA.address} delay={0.7} />
                    </p>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Date of Birth:</span>
                  </div>
                  <div className="pl-5">
                    <p className="text-base sm:text-lg font-semibold text-white">
                      <MatrixTextReveal text={PERSONAL_DATA.dateOfBirth} delay={0.9} />
                    </p>
                  </div>
                </div>

              </div>

            </FadeIn>

          </div>

          {/* Right Column: Pure Black 3D Profile Frame */}
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex justify-between items-center text-xs font-mono text-emerald-400/70 uppercase tracking-widest relative z-10">
        <span>Scroll down</span>
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 rounded-full text-emerald-400 hover:text-green-300 transition-colors"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
