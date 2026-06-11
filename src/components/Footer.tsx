import { personalInfo } from '../data';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850 py-12 transition-colors duration-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo brand */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-bold font-display bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono font-medium">
              Aspiring Software Developer • Professional Portfolio
            </p>
          </div>

          {/* Slogan closing statement */}
          <p className="text-slate-500 dark:text-slate-450 text-xs sm:text-sm max-w-sm text-center md:text-right leading-relaxed font-sans">
            "Passionate about building modern web applications, solving real-world problems, and continuously learning new technologies."
          </p>
        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <div>
            <span>© {currentYear} {personalInfo.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1 font-mono">
            <span>Designed in India with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-current animate-pulse" />
            <span>using React and Tailwind CSS</span>
          </div>

          {/* Quick jump back top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl hover:text-pink-500 hover:border-pink-100 dark:hover:bg-slate-850 hover:shadow-md cursor-pointer transition-all duration-300"
            title="Jump back top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
