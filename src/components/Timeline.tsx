import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { educationTimeline } from '../data';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white dark:bg-slate-900 transition-all duration-300 relative overflow-hidden">
      {/* Accent Orb */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono mb-2"
          >
            ACADEMIC PROGRESSION
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Education Timeline
          </motion.h2>
          <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline representation */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 md:mx-auto md:max-w-3xl space-y-12">
          
          {educationTimeline.map((item, idx) => {
            const isCompleted = item.status === 'Completed';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Visual Timeline Node */}
                <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 flex items-center justify-center ${
                  isCompleted 
                    ? 'bg-emerald-500 border-white dark:border-slate-900 shadow-md shadow-emerald-500/20' 
                    : 'bg-indigo-500 border-white dark:border-slate-900 shadow-md shadow-indigo-500/20 animate-pulse'
                }`} />

                {/* Main Content card */}
                <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-850 dark:to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Title & Status Badge row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold font-display text-slate-950 dark:text-white flex items-center gap-2">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4 text-slate-400" />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/30'
                        : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-900/30'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
                  </div>

                  {/* Summary of level */}
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Details Bullets */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2">Key Highlights</h5>
                    <ul className="space-y-2">
                      {item.details.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
                          <span className="text-indigo-500 dark:text-indigo-400 text-xs mt-1">•</span>
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
