import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

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
  const content = (
    <span className="relative z-10 flex items-center gap-2 font-mono font-bold tracking-wider uppercase text-black">
      <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );

  const baseStyle = `
    group relative inline-flex items-center justify-center rounded-full 
    px-7 py-3.5 sm:px-9 sm:py-3.5 text-xs sm:text-sm font-semibold
    bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 
    shadow-[0_0_25px_rgba(0,255,102,0.4)] 
    hover:shadow-[0_0_35px_rgba(0,255,102,0.7)] 
    ring-2 ring-emerald-400/40 ring-offset-2 ring-offset-black
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
  const content = (
    <span className="flex items-center gap-2 font-mono font-semibold tracking-wider uppercase text-emerald-400 group-hover:text-green-300 transition-colors">
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </span>
  );

  const baseStyle = `
    group inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-black/90 backdrop-blur-md
    px-6 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm font-semibold
    hover:border-emerald-400 hover:bg-emerald-950/60 hover:shadow-[0_0_20px_rgba(0,255,102,0.3)]
    transition-all duration-300 ${className}
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
