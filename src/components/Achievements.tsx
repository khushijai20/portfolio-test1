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
    <section id="achievements" className="py-24 bg-[#FAFAFC] dark:bg-slate-900 transition-all duration-300 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-pink-100/30 dark:bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400 font-mono mb-2"
          >
            CREDENTIALS & MILESTONES 🏆
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Key Achievements & Goals
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento grid layout for achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-slate-50 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-left h-full"
            >
              <div className="space-y-4">
                {/* Custom Icon element */}
                <div className="p-3 bg-[#FCFCFD] dark:bg-slate-800 rounded-2xl border-2 border-slate-50 dark:border-slate-700 shadow-inner w-fit">
                  {getAchievementIcon(idx)}
                </div>
                
                <h4 className="text-base font-extrabold font-display text-slate-900 dark:text-white leading-snug">
                  {ach.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed mt-4">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
