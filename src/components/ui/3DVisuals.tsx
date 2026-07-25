import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const Hero3DGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square mx-auto flex items-center justify-center">
      {/* Outer Glowing Matrix Green Rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 via-green-500/15 to-emerald-400/20 blur-3xl animate-pulse" />
      <div className="absolute inset-4 rounded-full border border-emerald-500/40 animate-spin" style={{ animationDuration: '28s' }} />
      <div className="absolute inset-12 rounded-full border border-dashed border-emerald-400/40 animate-spin" style={{ animationDuration: '36s', animationDirection: 'reverse' }} />

      {/* Pure Black & Matrix Green Photo Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-[85%] h-[85%] rounded-[2.5rem] bg-black/90 p-4 border border-emerald-500/40 shadow-[0_0_40px_rgba(0,255,102,0.2)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Matrix Grid Background Overlay */}
        <div className="absolute inset-0 bg-matrix-grid bg-[size:20px_20px] opacity-30 pointer-events-none" />

        {/* Profile Image Frame with Matrix Green Glow */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-emerald-400 via-green-400 to-emerald-600 shadow-[0_0_25px_rgba(0,255,102,0.5)]">
          <img
            src={PERSONAL_DATA.profileImage}
            alt={PERSONAL_DATA.fullName}
            className="w-full h-full object-cover rounded-full border-2 border-black shadow-inner"
          />
        </div>
      </motion.div>
    </div>
  );
};
