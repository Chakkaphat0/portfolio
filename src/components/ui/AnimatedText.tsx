import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const targetRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <p ref={targetRef} className={`flex flex-wrap justify-center leading-relaxed tracking-wide font-mono ${className}`}>
      {words.map((word, wordIndex) => {
        const characters = word.split('');
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.4em] mb-[0.25em]">
            {characters.map((char, charIndex) => {
              const globalIndex = words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + charIndex;
              const totalLength = text.length;
              const start = globalIndex / totalLength;
              const end = start + 1 / totalLength;

              return (
                <Character
                  key={charIndex}
                  char={char}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: any;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block px-[0.5px]">
      <span className={`select-none font-mono font-medium ${isLight ? 'opacity-30 text-slate-400' : 'opacity-25 text-slate-600'}`}>
        {char}
      </span>
      <motion.span
        style={{ opacity, y }}
        className={`absolute left-0 top-0 font-semibold font-mono ${
          isLight
            ? 'text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]'
            : 'text-emerald-400 drop-shadow-[0_0_8px_rgba(0,255,102,0.5)]'
        }`}
      >
        {char}
      </motion.span>
    </span>
  );
};
