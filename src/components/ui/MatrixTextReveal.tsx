import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface MatrixTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = '01#$@%&*!?X790xF4A';

export const MatrixTextReveal: React.FC<MatrixTextRevealProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState('');
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let frameId: number;
    let iteration = 0;

    const startDecoding = () => {
      const maxIterations = text.length * 3;

      const decodeStep = () => {
        iteration++;
        
        const scrambled = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        setDisplayText(scrambled);

        if (iteration < maxIterations) {
          frameId = requestAnimationFrame(decodeStep);
        } else {
          setDisplayText(text);
        }
      };

      frameId = requestAnimationFrame(decodeStep);
    };

    timeoutId = setTimeout(startDecoding, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [isInView, text, delay]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay }}
      className={`font-mono inline-block ${className}`}
    >
      {displayText || text.replace(/./g, '0')}
    </motion.span>
  );
};
