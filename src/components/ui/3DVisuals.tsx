import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export const Hero3DGraphic: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const imageSrc = PERSONAL_DATA.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square mx-auto flex items-center justify-center">
      {/* Outer Glowing Rings */}
      {!isLight && (
        <div
          className="absolute inset-0 rounded-full blur-3xl animate-pulse bg-gradient-to-tr from-emerald-500/20 via-green-500/15 to-emerald-400/20"
        />
      )}
      <div
        className={`absolute inset-4 rounded-full border animate-spin ${
          isLight ? 'border-blue-500/40' : 'border-emerald-500/40'
        }`}
        style={{ animationDuration: '28s' }}
      />
      <div
        className={`absolute inset-12 rounded-full border border-dashed animate-spin ${
          isLight ? 'border-cyan-500/40' : 'border-emerald-400/40'
        }`}
        style={{ animationDuration: '36s', animationDirection: 'reverse' }}
      />

      {/* 3D Profile Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`relative z-10 w-[88%] h-[88%] rounded-[2.5rem] p-1 overflow-hidden transition-all duration-300 ${
          isLight
            ? 'bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.3)]'
            : 'bg-gradient-to-tr from-emerald-500 via-green-400 to-emerald-600 shadow-[0_0_40px_rgba(0,255,102,0.35)]'
        }`}
      >
        <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden">
          <img
            src={imageSrc}
            alt={PERSONAL_DATA.fullName}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay gradient */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              isLight
                ? 'bg-gradient-to-t from-blue-950/20 via-transparent to-transparent'
                : 'bg-gradient-to-t from-black/40 via-transparent to-transparent'
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
};
