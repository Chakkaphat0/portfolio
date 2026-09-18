import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  const isLight = theme === 'light';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-matrix py-3.5 shadow-md border-b'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Name Badge */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-extrabold tracking-tight text-lg hover:opacity-85 transition-opacity focus:outline-none"
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm transition-all duration-300 ${
                isLight
                  ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-gradient-to-tr from-emerald-400 to-green-500 text-black shadow-[0_0_15px_rgba(0,255,102,0.4)]'
              }`}
            >
              C
            </div>
            <span className={`text-sm font-semibold tracking-wide uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Chakkaphat
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-all duration-300 ${
              isLight
                ? 'bg-white/90 border-blue-500/30 shadow-xs'
                : 'bg-black/90 border-emerald-500/30'
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? isLight ? 'text-blue-600 font-bold' : 'text-emerald-300 font-bold'
                      : isLight ? 'text-slate-600 hover:text-blue-600' : 'text-slate-400 hover:text-emerald-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navTab"
                      className={`absolute inset-0 rounded-full border ${
                        isLight
                          ? 'bg-blue-100/90 border-blue-500/60 shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                          : 'bg-emerald-950/80 border-emerald-500/60 shadow-[0_0_15px_rgba(0,255,102,0.25)]'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar: Theme Switcher & Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isLight
                  ? 'bg-white text-blue-600 border-blue-500/40 hover:bg-blue-50 shadow-xs'
                  : 'bg-black text-amber-400 border-emerald-500/40 hover:bg-emerald-950 shadow-[0_0_10px_rgba(0,255,102,0.2)]'
              }`}
              title={isLight ? 'Switch to Dark Mode (Pure Black & Neon Green)' : 'Switch to Light Mode (White & Cyber Blue)'}
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4 text-blue-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className={`px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all duration-300 ${
                isLight
                  ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                  : 'border-emerald-400 bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_15px_rgba(0,255,102,0.3)]'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Right Controls: Theme Switcher & Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-xl border p-2 transition-colors ${
                isLight
                  ? 'bg-white text-blue-600 border-blue-500/40'
                  : 'bg-black text-amber-400 border-emerald-500/40'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-xl border p-2 focus:outline-none ${
                isLight
                  ? 'bg-white text-blue-600 border-blue-500/40'
                  : 'bg-black text-emerald-400 border-emerald-500/40'
              }`}
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className={`max-h-[calc(100dvh-76px)] overflow-y-auto border-b backdrop-blur-md md:hidden ${
              isLight ? 'bg-white/95 border-blue-200' : 'bg-black/95 border-emerald-900/50'
            }`}
          >
            <nav aria-label="Mobile navigation" className="space-y-1.5 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-11 items-center rounded-xl px-4 py-2 text-base font-mono font-semibold transition-colors ${
                    activeSection === item.href.substring(1)
                      ? isLight
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-emerald-950 text-emerald-300'
                      : isLight
                        ? 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                        : 'text-slate-300 hover:bg-emerald-950/50 hover:text-emerald-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-900">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-12 w-full items-center justify-center rounded-xl py-2.5 text-center text-sm font-mono font-bold ${
                    isLight ? 'bg-blue-600 text-white' : 'bg-emerald-500 text-black'
                  }`}
                >
                  Contact Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
