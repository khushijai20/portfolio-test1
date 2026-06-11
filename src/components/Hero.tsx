import { motion } from 'motion/react';
import { ArrowDown, Mail, Cpu, FolderGit2, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const codeSnippet = `// Khushi's profile constructor
const developer = {
  name: "${personalInfo.name}",
  origin: "India",
  academics: {
    undergrad: "BCA Graduate",
    focus: "Software Engineering & Algorithms",
    status: "Ready for Opportunities"
  },
  techStack: ["React", "Python", "MySQL", "PHP"],
  passions: ["AI Apps", "Clean Architecture", "Problem Solving"],
  isCoding: true
};

function getStatus(dev) {
  if (dev.isCoding) {
    return "Building elegant modern applications";
  }
  return "Compiling knowledge...";
}

console.log(getStatus(developer));`;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-gradient-to-tr from-[#fff5f5]/65 via-white to-[#eefcfd]/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-300 overflow-hidden"
    >
      {/* Playful Floating Pastel Blur Bubbles */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-pink-400/15 dark:bg-pink-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-300/15 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] left-1/3 w-64 h-64 bg-sky-200/20 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay (Clean Soft Dots) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:bg-[radial-gradient(#334155_1px,transparent_1.5px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Intro details */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', damping: 15 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider text-pink-700 dark:text-pink-300 bg-pink-100/75 dark:bg-pink-950/40 w-fit border border-pink-200/50 dark:border-pink-800/30 font-mono shadow-sm"
            >
              <Cpu className="w-4 h-4 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
              <span>WELCOME TO MY CREATIVE LAB 🌸</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-slate-900 dark:text-white"
            >
              Hi, I am <span className="bg-gradient-to-r from-pink-500 via-indigo-500 to-sky-500 dark:from-pink-400 dark:via-indigo-400 dark:to-sky-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold font-display text-slate-700 dark:text-slate-250 flex items-center gap-2"
            >
              {personalInfo.tagline} ✨
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              Passionate about building modern web applications, solving real-world problems, and continuously learning new technologies.
            </motion.p>

            {/* Micro details row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center space-x-1.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-750 dark:text-slate-305">BCA Graduate 🎓</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-755 dark:text-slate-300">Patna, India 🇮🇳</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-755 dark:text-slate-300">Software Intern 🚀</span>
              </div>
            </motion.div>

            {/* ACTION CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white rounded-2xl font-bold font-display shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Sandboxes</span>
              </a>
              <a
                href="#resume"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-850 dark:text-slate-100 rounded-2xl font-bold font-display border-2 border-slate-100 dark:border-slate-800 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <FileText className="w-4 h-4 text-indigo-505" />
                <span>Interact with CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-transparent hover:bg-pink-50/45 dark:hover:bg-slate-850/50 text-slate-700 dark:text-slate-350 hover:text-pink-600 dark:hover:text-pink-400 rounded-2xl font-bold font-display border-2 border-dashed border-slate-300 dark:border-slate-700 transition-all text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Say Hello!</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Playful Clean White Terminal Console */}
          <div className="lg:col-span-5 w-full select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
              className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-pink-100/35 dark:shadow-none border-2 border-slate-100 dark:border-slate-850 overflow-hidden relative group"
            >
              {/* Playful Mac-inspired window bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/80 dark:bg-slate-950/70 border-b border-rose-50/50 dark:border-slate-850/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-pink-400 hover:opacity-80 transition-opacity" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-300 hover:opacity-80 transition-opacity" />
                  <div className="w-3.5 h-3.5 rounded-full bg-sky-350 bg-sky-300 hover:opacity-80 transition-opacity" />
                </div>
                <div className="text-[11px] text-slate-400 font-bold font-mono tracking-wide">DeveloperProfile.tsx — Lab Console 🎀</div>
                <div className="w-8" />
              </div>

              {/* Terminal Code Display - Beautiful Light Theme Aesthetic */}
              <div className="p-6 overflow-x-auto text-xs font-mono leading-relaxed text-slate-705 dark:text-slate-300 text-left bg-[#FCFCFD] dark:bg-slate-950/95">
                <pre className="text-slate-800 dark:text-slate-300">
                  <code>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">const</span> <span className="text-indigo-600 dark:text-indigo-400">developer</span> = &#123;<br />
                    &nbsp;&nbsp;name: <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.name}"</span>,<br />
                    &nbsp;&nbsp;roles: [<span className="text-amber-600 dark:text-amber-400">"BCA Graduate"</span>, <span className="text-sky-600">"Machine Learning Enthusiast"</span>],<br />
                    &nbsp;&nbsp;favoriteStack: [<span className="text-pink-600 dark:text-pink-400 font-semibold">"React"</span>, <span className="text-indigo-600 font-semibold">"Python"</span>, <span className="text-blue-600">"SQL"</span>],<br />
                    &nbsp;&nbsp;lovesAlgorithms: <span className="text-amber-600">true</span>,<br />
                    &nbsp;&nbsp;buildingStatus: <span className="text-purple-500 font-semibold">"Designing playful, clean code 🌸"</span><br />
                    &#125;;<br /><br />
                    <span className="text-slate-450 italic">// Active and ready for opportunities!</span><br />
                    <span className="text-indigo-600 font-bold">console</span>.<span className="text-blue-600">log</span>(<span className="text-indigo-600">developer</span>.buildingStatus);
                  </code>
                </pre>
              </div>

              {/* Decorative Stickers/Bubbles Inside Console Bottom */}
              <div className="p-4 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-850 flex flex-wrap gap-2 justify-center items-center">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="px-3 py-1 bg-pink-50 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400 text-[10px] font-bold font-display rounded-full border border-pink-200/40 cursor-help flex items-center gap-1 shadow-sm"
                >
                  <span>🧠 Code Smart</span>
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-3 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 text-[10px] font-bold font-display rounded-full border border-amber-200/40 cursor-help flex items-center gap-1 shadow-sm"
                >
                  <span>⚡ Fast & Pixel-Clean</span>
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, rotate: -1 }}
                  className="px-3 py-1 bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400 text-[10px] font-bold font-display rounded-full border border-sky-200/40 cursor-help flex items-center gap-1 shadow-sm"
                >
                  <span>🌸 Soft & Playful</span>
                </motion.span>
              </div>

              {/* Custom micro status indicator */}
              <div className="absolute top-16 right-4 flex items-center space-x-2 px-2 py-1 rounded-full bg-white/90 dark:bg-slate-900 border-2 border-pink-100 dark:border-slate-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-550 bg-pink-500"></span>
                </span>
                <span className="text-[9px] font-mono font-bold text-pink-600 dark:text-pink-400">LAB ALIVE</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll cue Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-1 text-xs font-mono text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <span>LEARN MORE ABOUT ME</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
