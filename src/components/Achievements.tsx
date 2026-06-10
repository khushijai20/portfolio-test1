import { motion } from 'motion/react';
import { Award, Code, BookOpen, Trophy } from 'lucide-react';
import { achievementsData } from '../data';

export default function Achievements() {
  const getAchievementIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Code className="w-6 h-6 text-blue-500" />;
      case 2:
        return <BookOpen className="w-6 h-6 text-purple-500" />;
      default:
        return <Award className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-900 transition-all duration-300 relative">
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2"
          >
            CREDENTIALS & MILESTONES
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Key Achievements & Goals
          </motion.h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento grid layout for achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left h-full"
            >
              <div className="space-y-4">
                {/* Custom Icon element */}
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/40 dark:border-slate-700/40 shadow-inner w-fit">
                  {getAchievementIcon(idx)}
                </div>
                
                <h4 className="text-base font-bold font-display text-slate-900 dark:text-white leading-snug">
                  {ach.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-relaxed mt-3">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
