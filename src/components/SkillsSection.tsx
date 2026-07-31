import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Terminal, Database, Wrench,
  Cpu, Radar, Shield, Binary, Key, Activity, Globe, Share2, Play
} from 'lucide-react';
import {
  SiPython, SiNodedotjs, SiJavascript, SiPhp, SiGo, SiCplusplus, SiSharp,
  SiNextdotjs, SiPrisma, SiFirebase, SiMysql, SiPostgresql, SiSqlite,
  SiPostman, SiJira, SiSourcetree,
  SiBurpsuite, SiMetasploit, SiKalilinux, SiWireshark, SiVmware, SiRedhat
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TECHNICAL_SKILLS_DATA } from '../data/portfolioData';
import { FadeIn } from './ui/FadeIn';
import { useTheme } from '../context/ThemeContext';

interface MarqueeTickerProps {
  items: string[];
  renderIcon: (name: string, isLarge?: boolean) => React.ReactNode;
  isLight: boolean;
  reverse?: boolean;
  speed?: number;
}

const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ items, renderIcon, isLight, reverse = false, speed = 35 }) => {
  // Duplicate array 6 times for seamless infinite marquee loop inside card
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-2.5 my-1 rounded-2xl sm:rounded-3xl">
      {/* Edge gradient fades strictly contained inside card */}
      <div className={`absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none rounded-l-2xl sm:rounded-l-3xl ${
        isLight ? 'bg-gradient-to-r from-white via-white/90 to-transparent' : 'bg-gradient-to-r from-black/90 via-black/80 to-transparent'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none rounded-r-2xl sm:rounded-r-3xl ${
        isLight ? 'bg-gradient-to-l from-white via-white/90 to-transparent' : 'bg-gradient-to-l from-black/90 via-black/80 to-transparent'
      }`} />

      <motion.div
        className="flex gap-4 sm:gap-5 w-max"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className={`group px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-mono font-extrabold border transition-all flex items-center gap-3 shrink-0 shadow-md ${
              isLight
                ? 'bg-slate-50 text-slate-800 border-slate-200/90 hover:border-blue-500 hover:shadow-lg'
                : 'bg-black/90 text-slate-100 border-emerald-500/40 hover:border-emerald-400 hover:text-white shadow-[0_0_20px_rgba(0,255,102,0.2)]'
            }`}
          >
            {renderIcon(item, true)}
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState<'developer' | 'redHat'>('developer');

  const { developer, redHat } = TECHNICAL_SKILLS_DATA;

  // Helper to render authentic tech logos (compact size for marquee tiles)
  const renderTechIcon = (name: string, isLarge = false) => {
    const iconClass = isLarge
      ? "w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform group-hover:scale-110"
      : "w-5 h-5 shrink-0 transition-transform group-hover:scale-110";

    switch (name) {
      case 'Python': return <SiPython className={`${iconClass} text-[#3776AB]`} />;
      case 'Node.js': return <SiNodedotjs className={`${iconClass} text-[#5FA04E]`} />;
      case 'JavaScript': return <SiJavascript className={`${iconClass} text-[#F7DF1E]`} />;
      case 'PHP': return <SiPhp className={`${iconClass} text-[#777BB4]`} />;
      case 'Go': return <SiGo className={`${iconClass} text-[#00ADD8]`} />;
      case 'C++': return <SiCplusplus className={`${iconClass} text-[#00599C]`} />;
      case 'C#': return <SiSharp className={`${iconClass} text-[#239120]`} />;
      case 'Assembly': return <Cpu className={`${iconClass} text-amber-500`} />;
      case 'Next.js': return <SiNextdotjs className={`${iconClass} ${isLight ? 'text-black' : 'text-white'}`} />;
      case 'Prisma': return <SiPrisma className={`${iconClass} ${isLight ? 'text-slate-800' : 'text-white'}`} />;
      case 'Firebase': return <SiFirebase className={`${iconClass} text-[#FFCA28]`} />;
      case 'MySQL': return <SiMysql className={`${iconClass} text-[#4479A1]`} />;
      case 'PostgreSQL': return <SiPostgresql className={`${iconClass} text-[#4169E1]`} />;
      case 'SQLite': return <SiSqlite className={`${iconClass} text-[#003B57]`} />;
      case 'VS Code': return <VscVscode className={`${iconClass} text-[#007ACC]`} />;
      case 'Postman': return <SiPostman className={`${iconClass} text-[#FF6C37]`} />;
      case 'Playwright': return <Play className={`${iconClass} text-[#2EAD33] fill-[#2EAD33]`} />;
      case 'Jira': return <SiJira className={`${iconClass} text-[#0052CC]`} />;
      case 'SourceTree': return <SiSourcetree className={`${iconClass} text-[#0052CC]`} />;
      case 'Nmap': return <Radar className={`${iconClass} text-emerald-400`} />;
      case 'Burp Suite': return <SiBurpsuite className={`${iconClass} text-[#FF6600]`} />;
      case 'Metasploit': return <SiMetasploit className={`${iconClass} text-[#0F5298]`} />;
      case 'Kali Linux': return <SiKalilinux className={`${iconClass} text-[#557C93]`} />;
      case 'Wireshark': return <SiWireshark className={`${iconClass} text-[#1679A7]`} />;
      case 'Ghidra': return <Shield className={`${iconClass} text-rose-500`} />;
      case 'IDA Pro': return <Binary className={`${iconClass} text-purple-400`} />;
      case 'GDB': return <Terminal className={`${iconClass} text-emerald-400`} />;
      case 'BloodHound': return <Share2 className={`${iconClass} text-red-500`} />;
      case 'LinPEAS': return <Key className={`${iconClass} text-amber-400`} />;
      case 'pspy': return <Activity className={`${iconClass} text-cyan-400`} />;
      case 'Nikto': return <Globe className={`${iconClass} text-blue-400`} />;
      case 'VMware': return <SiVmware className={`${iconClass} text-[#607078]`} />;
      default: return <Wrench className={`${iconClass} text-slate-400`} />;
    }
  };

  const getBadgeStyle = (level: string) => {
    if (level === 'Good') {
      return isLight
        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
        : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-[0_0_10px_rgba(0,255,102,0.25)]';
    }
    if (level === 'Intermediate') {
      return isLight
        ? 'bg-blue-100 text-blue-800 border-blue-300'
        : 'bg-blue-950/80 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.25)]';
    }
    // Basic
    return isLight
      ? 'bg-slate-100 text-slate-700 border-slate-300'
      : 'bg-zinc-900 text-slate-400 border-slate-700';
  };

  return (
    <section
      id="skills"
      className={`relative py-12 sm:py-16 transition-colors duration-300 overflow-hidden ${
        isLight ? 'bg-transparent text-slate-900 border-b border-blue-200/40' : 'bg-transparent text-white border-b border-emerald-900/40'
      }`}
    >
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-6">
            <h2 className="hero-heading-green font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className={`mt-1.5 font-mono text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Categorized into Developer and Red Team Offensive Security
            </p>
          </div>
        </FadeIn>

        {/* Single Toggle Button (Click same button to switch between Developer and Red Team) */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center items-center mb-6">
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              whileHover={{ scale: 1.08 }}
              onClick={() => setActiveTab(prev => prev === 'developer' ? 'redHat' : 'developer')}
              title={activeTab === 'developer' ? 'Switch to Red Team' : 'Switch to Developer'}
              aria-label="Toggle Category"
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md ${
                activeTab === 'developer'
                  ? isLight
                    ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-emerald-500 text-black border-emerald-400 shadow-[0_0_25px_rgba(0,255,102,0.5)]'
                  : isLight
                  ? 'bg-rose-600 text-white border-rose-500 shadow-[0_0_20px_rgba(225,29,72,0.4)]'
                  : 'bg-emerald-500 text-black border-emerald-400 shadow-[0_0_25px_rgba(0,255,102,0.5)]'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'developer' ? (
                    <Code2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  ) : (
                    <SiRedhat className="w-7 h-7 sm:w-8 sm:h-8 text-rose-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </FadeIn>

        {/* Tab Content with Smooth Transition */}
        <AnimatePresence mode="wait">
          {activeTab === 'developer' && (
            <motion.div
              key="developer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`glass-card-matrix p-4 sm:p-6 rounded-3xl border space-y-4 sm:space-y-5 transition-all duration-300 ${
                isLight
                  ? 'border-blue-500/30 shadow-[0_0_25px_rgba(37,99,235,0.1)]'
                  : 'border-emerald-500/35 shadow-[0_0_30px_rgba(0,255,102,0.15)]'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 border-b pb-3 transition-colors border-slate-700/40">
                <div className={`p-2 sm:p-2.5 rounded-xl border ${
                  isLight
                    ? 'bg-blue-50 text-blue-600 border-blue-300'
                    : 'bg-black text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(0,255,102,0.2)]'
                }`}>
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg sm:text-xl font-black tracking-tight ${isLight ? 'text-blue-600 font-bold' : 'text-white'}`}>
                    {developer.title}
                  </h3>
                  <p className={`text-[11px] sm:text-xs font-mono ${isLight ? 'text-blue-600' : 'text-emerald-400'}`}>
                    {developer.subtitle}
                  </p>
                </div>
              </div>

              {/* 1. Programming Languages */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Programming Languages</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {developer.languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className={`group p-3 sm:p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        isLight
                          ? 'bg-white border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-md'
                          : 'bg-black/60 border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {renderTechIcon(lang.name)}
                        <span className={`font-mono font-bold text-xs sm:text-sm ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                          {lang.name}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold border ${getBadgeStyle(lang.level)}`}>
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Frameworks, Libraries & Databases */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  <Database className="w-3.5 h-3.5" />
                  <span>Frameworks, Libraries & Databases</span>
                </div>
                <MarqueeTicker
                  items={developer.frameworksAndDatabases}
                  renderIcon={renderTechIcon}
                  isLight={isLight}
                  speed={36}
                />
              </div>

              {/* 3. Tools & Software */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Tools & Software</span>
                </div>
                <MarqueeTicker
                  items={developer.toolsAndSoftware}
                  renderIcon={renderTechIcon}
                  isLight={isLight}
                  reverse={true}
                  speed={30}
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'redHat' && (
            <motion.div
              key="redHat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`glass-card-matrix p-5 sm:p-8 rounded-3xl border space-y-6 sm:space-y-8 transition-all duration-300 ${
                isLight
                  ? 'border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.12)]'
                  : 'border-emerald-500/35 shadow-[0_0_35px_rgba(0,255,102,0.18)]'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b pb-4 transition-colors border-slate-700/40">
                <div className={`p-2.5 sm:p-3 rounded-2xl border ${
                  isLight
                    ? 'bg-rose-50 text-rose-600 border-rose-300'
                    : 'bg-black text-rose-400 border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.2)]'
                }`}>
                  <SiRedhat className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isLight ? 'text-rose-600 font-bold' : 'text-white'}`}>
                    {redHat.title}
                  </h3>
                  <p className={`text-xs font-mono ${isLight ? 'text-rose-600' : 'text-rose-400'}`}>
                    {redHat.subtitle}
                  </p>
                </div>
              </div>

              {/* 1. Programming Languages */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  <Terminal className="w-4 h-4" />
                  <span>Programming Languages</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3.5">
                  {redHat.languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className={`group p-4 sm:p-5 rounded-3xl border-2 transition-all flex items-center justify-between ${
                        isLight
                          ? 'bg-white border-slate-200/80 shadow-xs hover:border-rose-400 hover:shadow-md'
                          : 'bg-black/60 border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {renderTechIcon(lang.name)}
                        <span className={`font-mono font-bold text-base ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                          {lang.name}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getBadgeStyle(lang.level)}`}>
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Tools & Software */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  <Wrench className="w-4 h-4" />
                  <span>Tools & Software</span>
                </div>
                <MarqueeTicker
                  items={redHat.toolsAndSoftware}
                  renderIcon={renderTechIcon}
                  isLight={isLight}
                  speed={78}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
