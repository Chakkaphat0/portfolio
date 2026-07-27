import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const ElectricBackground: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Background Color: Pure Clean White for Light Mode, Pure Black for Dark Mode */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? 'bg-white' : 'bg-black'
        }`}
      />

      {/* Dynamic Animated Electric Grid */}
      <div
        className={`absolute inset-0 bg-[size:40px_40px] animate-electric-grid ${
          isLight
            ? 'bg-[linear-gradient(to_right,rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.045)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,rgba(0,255,102,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,102,0.1)_1px,transparent_1px)]'
        }`}
      />

      {/* Subtle Electric Blue Energy Glow Accents */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -55, 25, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-80 ${
          isLight
            ? 'bg-gradient-to-tr from-blue-500/12 via-cyan-400/10 to-transparent'
            : 'bg-gradient-to-tr from-emerald-500/25 via-green-400/20 to-teal-400/20'
        }`}
      />

      <motion.div
        animate={{
          x: [0, -65, 45, 0],
          y: [0, 45, -45, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute top-1/3 -right-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-80 ${
          isLight
            ? 'bg-gradient-to-br from-cyan-400/12 via-blue-600/10 to-transparent'
            : 'bg-gradient-to-br from-green-500/20 via-emerald-600/15 to-teal-500/20'
        }`}
      />

      <motion.div
        animate={{
          x: [0, 35, -45, 0],
          y: [0, -35, 55, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className={`absolute -bottom-32 left-1/4 w-[650px] h-[650px] rounded-full blur-3xl opacity-80 ${
          isLight
            ? 'bg-gradient-to-tr from-sky-400/12 via-blue-500/10 to-transparent'
            : 'bg-gradient-to-tr from-teal-500/20 via-emerald-500/20 to-green-400/15'
        }`}
      />
    </div>
  );
};
