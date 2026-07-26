import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface MatrixTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

// Clean Matrix Hex & Binary characters with identical font height and baseline
const CHARS = '0123456789ABCDEF';

export const MatrixTextReveal: React.FC<MatrixTextRevealProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState(text);
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
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className={`font-mono inline ${className}`}
    >
      {displayText}
    </motion.span>
  );
};
