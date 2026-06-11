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
    <section id="about" className="py-24 bg-[#FAFAFC] dark:bg-slate-900 transition-all duration-300 relative overflow-hidden">
      {/* Playful background blobs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-pink-100/40 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400 font-mono mb-2"
          >
            GET TO KNOW ME 🗺️
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Developing software with love, logic & pristine pixels
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <motion.h4 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold font-display text-slate-800 dark:text-slate-100"
            >
              My Journey as an Engineer 👩‍💻
            </motion.h4>
            
            <motion.p 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm sm:text-base"
            >
              {personalInfo.aboutSummary}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm sm:text-base"
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
              <div className="flex items-center space-x-3 bg-white dark:bg-slate-850 p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-sm shadow-pink-100/10">
                <div className="p-2 bg-pink-50 dark:bg-pink-950/20 rounded-xl text-pink-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold font-mono text-slate-400">LOCATION</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{personalInfo.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white dark:bg-slate-850 p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-sm shadow-indigo-100/10">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl text-indigo-500">
                  <Rocket className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="text-[10px] font-bold font-mono text-slate-400">AVAILABILITY</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">Open to Internships</div>
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
                transition={{ delay: i * 0.15, type: 'spring' }}
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -0.5 : 0.5, transition: { duration: 0.2 } }}
                className="flex items-start space-x-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex-shrink-0 p-3.5 rounded-2xl bg-[#FCFCFD] dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-700 shadow-inner">
                  {card.icon}
                </div>
                <div className="text-left">
                  <h5 className="text-base font-bold text-slate-900 dark:text-white font-display mb-1">{card.title}</h5>
                  <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
