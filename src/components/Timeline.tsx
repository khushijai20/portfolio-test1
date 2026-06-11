import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { educationTimeline } from '../data';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#FAFAFC] dark:bg-slate-900 transition-all duration-300 relative overflow-hidden">
      {/* Accent Orb */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-100/30 dark:bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono mb-2"
          >
            ACADEMIC PATHWAY 🎓
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Education Timeline
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline representation */}
        <div className="relative border-l-2 border-pink-200 dark:border-slate-800 ml-4 sm:ml-6 md:mx-auto md:max-w-3xl space-y-12">
          
          {educationTimeline.map((item, idx) => {
            const isCompleted = item.status === 'Completed';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring' }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Visual Timeline Node */}
                <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 flex items-center justify-center ${
                  isCompleted 
                    ? 'bg-emerald-400 border-white dark:border-slate-900 shadow-md shadow-emerald-400/20' 
                    : 'bg-pink-400 border-white dark:border-slate-900 shadow-md shadow-pink-400/20 animate-pulse'
                }`} />

                {/* Main Content card */}
                <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:scale-[1.015] transition-all duration-300">
                  
                  {/* Title & Status Badge row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4 text-left">
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold font-display text-slate-950 dark:text-white flex items-center gap-2">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4 text-slate-450" />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-450" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold w-fit ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30'
                        : 'bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />}
                      {item.status}
                    </span>
                  </div>

                  {/* Summary of level */}
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-4 text-left">
                    {item.description}
                  </p>

                  {/* Details Bullets */}
                  <div className="border-t border-slate-100 dark:border-slate-805 pt-4 mt-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2 text-left">Key Highlights ✨</h5>
                    <ul className="space-y-2 text-left">
                      {item.details.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-sm text-slate-650 dark:text-slate-400 flex items-start gap-2.5">
                          <span className="text-pink-500 text-xs mt-1">🎀</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
