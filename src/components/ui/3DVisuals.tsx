import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const Hero3DGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square mx-auto flex items-center justify-center">
      {/* Outer Glowing Sky Blue Rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-200/50 via-cyan-100/40 to-blue-200/40 blur-3xl animate-pulse" />
      <div className="absolute inset-4 rounded-full border border-sky-300/60 animate-spin" style={{ animationDuration: '28s' }} />
      <div className="absolute inset-12 rounded-full border border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: '36s', animationDirection: 'reverse' }} />

      {/* Clean Profile Photo Frame (Static & Stylish 3D Glass Accent) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-[85%] h-[85%] rounded-[2.5rem] bg-gradient-to-br from-white/95 via-sky-50/80 to-blue-50/90 p-4 border border-sky-200/90 shadow-[0_20px_50px_-10px_rgba(14,165,233,0.22)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Ambient Glow Blob */}
        <div className="absolute top-[-20%] right-[-20%] w-44 h-44 rounded-full bg-gradient-to-tr from-sky-300/30 to-cyan-400/40 blur-2xl pointer-events-none" />

        {/* Profile Image Frame with Subtle Hover Effect */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-sky-400 via-cyan-300 to-blue-600 shadow-lg">
          <img
            src={PERSONAL_DATA.profileImage}
            alt={PERSONAL_DATA.fullName}
            className="w-full h-full object-cover rounded-full border-2 border-white shadow-xs"
          />
        </div>
      </motion.div>
    </div>
  );
};
