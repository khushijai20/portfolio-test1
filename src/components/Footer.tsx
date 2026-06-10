import { personalInfo } from '../data';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-550 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-850/50 py-12 transition-colors duration-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo brand */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-bold font-display bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              BCA Graduate • Aspiring Software Developer
            </p>
          </div>

          {/* Slogan closing statement */}
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm text-center md:text-right leading-relaxed font-sans">
            "Passionate about building modern web applications, solving real-world problems, and continuously learning new technologies."
          </p>
        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <div>
            <span>© {currentYear} {personalInfo.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Designed and compiled in India with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>using React and Tailwind CSS</span>
          </div>

          {/* Quick jump back top */}
          <button
            onClick={handleScrollToTop}
            className="p-2 bg-white dark:bg-slate-900 border border-slate-250/30 dark:border-slate-800 rounded-xl hover:text-blue-500 text-slate-455 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm cursor-pointer transition-colors"
            title="Jump back top"
          >
            <ArrowUp className="w-4 h-4 shadow-inner" />
          </button>
        </div>

      </div>
    </footer>
  );
}
