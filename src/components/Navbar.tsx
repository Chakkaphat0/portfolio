import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const currentScroll = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-matrix py-3.5 shadow-md border-b border-emerald-900/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Name Badge */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white font-extrabold tracking-tight text-lg hover:opacity-85 transition-opacity focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-green-500 text-black flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(0,255,102,0.4)]">
              C
            </div>
            <span className="text-sm font-semibold tracking-wide text-white uppercase">
              Chakkaphat <span className="text-emerald-400 font-mono font-normal">/ MATRIX</span>
            </span>
          </a>

          {/* Desktop Nav Links (Pure Black & Matrix Green) */}
          <nav className="hidden md:flex items-center gap-1 bg-black/90 p-1 rounded-full border border-emerald-500/30">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-emerald-300 font-bold'
                      : 'text-slate-400 hover:text-emerald-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navTab"
                      className="absolute inset-0 bg-emerald-950/80 rounded-full border border-emerald-500/60 shadow-[0_0_15px_rgba(0,255,102,0.25)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-emerald-400 bg-emerald-500 text-black text-xs font-mono font-bold hover:bg-emerald-400 transition-all duration-200 shadow-[0_0_15px_rgba(0,255,102,0.3)]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-black text-emerald-400 border border-emerald-500/40 hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-emerald-900/50 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-mono font-medium text-slate-300 hover:bg-emerald-950/50 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-900">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 text-center rounded-lg bg-emerald-500 text-black text-xs font-mono font-bold"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
