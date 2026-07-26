import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ContactButton: React.FC<ButtonProps> = ({
  label = 'Contact Me',
  href = '#contact',
  className = '',
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const content = (
    <span className={`relative z-10 flex items-center gap-2 font-mono font-bold tracking-wider uppercase ${
      isLight ? 'text-white' : 'text-black'
    }`}>
      <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );

  const baseStyle = `
    group relative inline-flex items-center justify-center rounded-full 
    px-7 py-3.5 sm:px-9 sm:py-3.5 text-xs sm:text-sm font-semibold
    ${isLight
      ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] ring-2 ring-blue-500/40 ring-offset-2 ring-offset-white'
      : 'bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_35px_rgba(0,255,102,0.7)] ring-2 ring-emerald-400/40 ring-offset-2 ring-offset-black'
    }
    transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseStyle}>
        {content}
      </a>
    );
  }

  return <button className={baseStyle}>{content}</button>;
};

export const LiveProjectButton: React.FC<ButtonProps> = ({
  label = 'Live Project',
  href,
  className = '',
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const content = (
    <span className={`flex items-center gap-2 font-mono font-semibold tracking-wider uppercase transition-colors ${
      isLight
        ? 'text-blue-600 group-hover:text-blue-700'
        : 'text-emerald-400 group-hover:text-green-300'
    }`}>
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </span>
  );

  const baseStyle = `
    group inline-flex items-center justify-center rounded-full border backdrop-blur-md
    px-6 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm font-semibold
    transition-all duration-300 ${
      isLight
        ? 'border-blue-500/40 bg-white/90 hover:border-blue-600 hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]'
        : 'border-emerald-500/40 bg-black/90 hover:border-emerald-400 hover:bg-emerald-950/60 hover:shadow-[0_0_20px_rgba(0,255,102,0.3)]'
    } ${className}
  `;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyle}>
        {content}
      </a>
    );
  }

  return <button className={baseStyle}>{content}</button>;
};
