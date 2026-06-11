import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Database, Terminal, Settings, Library, BookOpen } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.map(group => group.category)];

  // Match icon helper for visual enhancement
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="w-5 h-5 text-blue-500" />;
      case "Backend":
        return <Terminal className="w-5 h-5 text-indigo-500" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "Tools & OS":
        return <Settings className="w-5 h-5 text-purple-500" />;
      case "Core Concepts":
        return <BookOpen className="w-5 h-5 text-rose-500" />;
      default:
        return <Library className="w-5 h-5 text-blue-500" />;
    }
  };

  // Skills level estimation mapping for clean presentation meters
  const getSkillLevel = (skillName: string): number => {
    const high = ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "MySQL", "Git", "GitHub", "VS Code", "Object-Oriented Programming (OOP)", "Database Management System (DBMS)"];
    const mid = ["Python", "PHP", "Node.js", "Express.js", "MongoDB", "SQL Server", "Linux", "Windows", "Data Structures & Algorithms (DSA)", "Operating Systems (OS)", "Computer Networks (CN)", "Software Engineering"];
    
    if (high.some(s => skillName.includes(s))) return 90;
    if (mid.some(s => skillName.includes(s))) return 82;
    return 75;
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 transition-all duration-300 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-100/30 dark:bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-60 h-60 bg-sky-100/30 dark:bg-slate-805/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-indigo-505 text-indigo-600 dark:text-indigo-400 font-mono mb-2"
          >
            MY TECH SUPERPOWERS ⚡
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Professional Skill Arsenal
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-550 from-sky-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`p-2.5 px-6 rounded-2xl text-xs sm:text-sm font-bold font-display transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg shadow-pink-500/20'
                  : 'bg-[#FCFCFD] dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-105 hover:bg-slate-100 dark:hover:bg-slate-800 border-2 border-slate-100 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData
            .filter(group => activeCategory === "All" || group.category === activeCategory)
            .map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1, type: 'spring' }}
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-slate-50 dark:border-slate-850 shadow-md hover:shadow-xl shadow-slate-100/80 dark:shadow-none relative overflow-hidden"
              >
                {/* Visual Header */}
                <div className="flex items-center space-x-3.5 mb-6 pb-4 border-b border-rose-50/50 dark:border-slate-805/60">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100/40 dark:border-slate-700/30">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h4 className="text-base font-extrabold font-display text-slate-850 dark:text-slate-100">
                    {group.category} {group.category === "Frontend" ? "🎨" : group.category === "Backend" ? "⚙️" : group.category === "Database" ? "📊" : group.category === "Tools & OS" ? "🛠️" : "📚"}
                  </h4>
                </div>

                {/* Badges and metric meters list */}
                <div className="space-y-4">
                  {group.skills.map((skill, skillIdx) => {
                    const level = getSkillLevel(skill);
                    const progressGradient = groupIdx % 2 === 0 
                      ? "from-pink-400 to-amber-300" 
                      : "from-sky-400 to-indigo-400";

                    return (
                      <div key={skill} className="space-y-1.5 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-350 font-sans">
                            {skill}
                          </span>
                          <span className="text-[10px] font-bold font-mono text-purple-500 dark:text-purple-400">
                            {level}%
                          </span>
                        </div>
                        {/* Progress Meter bar */}
                        <div className="w-full h-2 bg-slate-105 bg-slate-100/80 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIdx * 0.05 + 0.2, type: 'spring', stiffness: 80 }}
                            className={`h-full bg-gradient-to-r ${progressGradient} rounded-full`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
