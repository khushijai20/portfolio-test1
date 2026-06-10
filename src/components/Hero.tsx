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
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-gradient-to-tr from-blue-50/50 via-white to-purple-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(rgba(51,65,85,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.15)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Intro details */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-blue-800 dark:text-blue-300 bg-blue-100/75 dark:bg-blue-900/40 w-fit border border-blue-200/50 dark:border-blue-800/30 font-mono"
            >
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>WELCOMING TECHNICAL SITES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-slate-900 dark:text-white"
            >
              Hi, I am <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold font-display text-slate-700 dark:text-slate-200"
            >
              {personalInfo.tagline}
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
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>BCA Graduate</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Full Stack Developer</span>
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
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transform hover:-translate-y-0.5 transition-all text-center"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>
              <a
                href="#resume"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-850 dark:text-slate-100 rounded-xl font-medium border border-slate-200/50 dark:border-slate-850/50 transform hover:-translate-y-0.5 transition-all text-center"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-transparent hover:bg-blue-50/50 dark:hover:bg-slate-850/50 text-slate-700 dark:text-slate-350 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium border border-slate-300 dark:border-slate-700 transition-all text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Tech terminal illustration */}
          <div className="lg:col-span-5 w-full select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full bg-slate-900 dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden relative"
            >
              {/* Terminal Window Header controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/95" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/95" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/95" />
                </div>
                <div className="text-xs text-slate-400 font-mono select-none">profile.ts — Visual Studio Code</div>
                <div className="w-8" />
              </div>

              {/* Terminal Code Display Workspace */}
              <div className="p-5 overflow-x-auto text-[13px] font-mono leading-relaxed text-slate-300 text-left bg-slate-900/95">
                <pre className="text-blue-400">
                  <code>{codeSnippet}</code>
                </pre>
              </div>

              {/* Glowing decorative indicator */}
              <div className="absolute bottom-3 right-3 flex items-center space-x-2 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-medium">SERVER COMPILER RUNNING</span>
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
