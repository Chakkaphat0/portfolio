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
          ? 'bg-white/90 backdrop-blur-md py-3.5 shadow-xs border-b border-sky-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Name Badge */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 font-extrabold tracking-tight text-lg hover:opacity-85 transition-opacity focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-700 via-sky-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              C
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
              Chakkaphat <span className="text-sky-600 font-normal">/ BU</span>
            </span>
          </a>

          {/* Desktop Nav Links (Sky Blue active tab) */}
          <nav className="hidden md:flex items-center gap-1 bg-sky-50/70 p-1 rounded-full border border-sky-200/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-sky-950 font-bold'
                      : 'text-slate-600 hover:text-sky-800'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navTab"
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-sky-200/60"
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
              className="px-4 py-2 rounded-full border border-sky-400 bg-sky-500 text-white text-xs font-semibold hover:bg-sky-600 transition-all duration-200 shadow-xs"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100 focus:outline-none"
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
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-sky-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-sky-100">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 text-center rounded-lg bg-sky-600 text-white text-xs font-semibold"
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
