import { motion } from 'motion/react';
import { GraduationCap, Code2, BrainCircuit, Rocket, Calendar, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function AboutMe() {
  const statCards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Strong Foundations",
      desc: "BCA Graduate possessing a solid base in computer applications, algorithms, and logical structures."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Full Stack Focus",
      desc: "Developing web applications combining responsive client layers with relational/non-relational dbs."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "AI & Innovation",
      desc: "Active designer implementing generative model prompting, custom helpers, and automated chats."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-all duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2"
          >
            GET TO KNOW ME
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Developing software that solves complex problems
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <motion.h4 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold font-display text-slate-800 dark:text-slate-150"
            >
              My Journey as an Engineer
            </motion.h4>
            
            <motion.p 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-350 leading-relaxed"
            >
              {personalInfo.aboutSummary}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-350 leading-relaxed"
            >
              {personalInfo.careerGoal}
            </motion.p>

            {/* Quick badges row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                <MapPin className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-[11px] font-mono text-slate-400">LOCATION</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                <Rocket className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="text-[11px] font-mono text-slate-400">AVAILABILITY</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Open to Opportunities</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {statCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-850 dark:to-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/30 dark:border-slate-700/30 shadow-inner">
                  {card.icon}
                </div>
                <div>
                  <h5 className="text-base font-bold text-slate-900 dark:text-white font-display mb-1">{card.title}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
