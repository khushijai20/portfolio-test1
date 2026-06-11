import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Printer, Copy, CheckCircle2, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../data';

export default function ResumePreview() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Compile entire resume as flat text formatted for standard parsing standard
  const getFullResumeText = () => {
    return `${resumeData.name}\n${resumeData.title}\n${resumeData.email} | ${resumeData.location}\nGitHub: ${resumeData.github} | LinkedIn: ${resumeData.linkedin}\n\nSUMMARY\n${resumeData.summary}\n\nEDUCATION\n${resumeData.education.map(e => `${e.degree} - ${e.institution} (${e.duration})\n${e.details.join('\n')}`).join('\n\n')}\n\nTECHNICAL SKILLS\n${resumeData.skillsList.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}`;
  };

  return (
    <section id="resume" className="py-24 bg-white dark:bg-slate-950 transition-all duration-300 relative print:py-0 print:bg-white overflow-hidden">
      {/* Background Orbs (hidden during print) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100/30 dark:bg-slate-800/10 rounded-full blur-3xl pointer-events-none print:hidden" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Polished Action Card (hidden on print) */}
        <div className="text-center max-w-2xl mx-auto print:hidden">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400 font-mono mb-2"
          >
            INTERACTIVE RECRUITING CORNER 👩‍💼
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Professional Resume
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          
          {/* Centered Download & Actions Call-To-Action Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mt-12 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border-2 border-slate-50 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden"
          >
            {/* Soft decorative background glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-100/20 dark:bg-slate-800/20 rounded-full blur-2xl pointer-events-none" />

            {/* Document icon with ripple decoration */}
            <div className="mx-auto w-16 h-16 bg-pink-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-pink-100/50 dark:border-slate-700/50 shadow-inner mb-6">
              <FileText className="w-8 h-8 text-pink-500" />
            </div>

            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Looking for a physical copy?
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
              Get an ATS-compliant, recruiter-ready copy of my resume. You can download the PDF format instantly or copy the raw plaintext layout directly to your clipboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Copy full resume text */}
              <button
                onClick={() => handleCopyToClipboard(getFullResumeText(), "Full Resume")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 text-sm font-bold rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-705 text-slate-700 dark:text-slate-200 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer shadow-sm"
              >
                {copiedSection === "Full Resume" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Full Resume Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-pink-500 animate-pulse" />
                    <span>Copy Raw Plaintext</span>
                  </>
                )}
              </button>

              {/* Print trigger button */}
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3 text-sm font-bold bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-650 text-white rounded-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer shadow-lg shadow-pink-500/15 font-mono"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>

            <div className="mt-6 text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center justify-center gap-1.5">
              <span>★ Formatted to pass major ATS parsing structures seamlessly</span>
            </div>
          </motion.div>
        </div>

        {/* ATS-Compliant Paper Layout Component (COMPLETELY HIDDEN ON PORTFOLIO SCREEN, VISIBLE ONLY FOR PRINT DIALOGUE) */}
        <div 
          id="resume-paper-canvas"
          className="hidden print:block w-full bg-white text-slate-900 border-none rounded-none p-0 shadow-none relative text-left overflow-visible transition-none"
        >
          {/* Top Header details */}
          <div className="border-b-2 border-pink-150 pb-6 mb-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-950 text-center mb-2">
              {resumeData.name}
            </h3>
            <p className="text-sm font-bold font-mono text-pink-500 text-center uppercase tracking-wide mb-4">
              {resumeData.title}
            </p>

            {/* Icons bar in resume format */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-650 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-pink-400" />
                <span>{resumeData.email}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>{resumeData.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-pink-400" />
                <span className="underline decoration-pink-100 hover:text-pink-500">{resumeData.github}</span>
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-pink-400" />
                <span className="underline decoration-pink-100 hover:text-pink-500">{resumeData.linkedin}</span>
              </span>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            {/* Summary segment */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2 pb-0.5 border-b border-pink-50">
                Professional Profile
              </h4>
              <p className="text-slate-700 leading-relaxed font-sans">
                {resumeData.summary}
              </p>
            </div>

            {/* Skills lists block */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2 pb-0.5 border-b border-pink-50">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resumeData.skillsList.map((skillGroup, idx) => (
                  <div key={idx} className="space-y-1">
                    <h5 className="text-xs font-bold text-slate-950 font-display">{skillGroup.category}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-mono">
                      {skillGroup.items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline Block */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-3 pb-0.5 border-b border-pink-50">
                Education Detail
              </h4>
              <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-extrabold text-slate-950">
                      <span>{edu.degree}</span>
                      <span className="text-xs font-mono text-pink-500 font-semibold">{edu.duration}</span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center justify-between font-medium">
                      <span>{edu.institution}</span>
                      {edu.score && <span className="font-bold text-pink-500">{edu.score}</span>}
                    </div>
                    <ul className="list-disc pl-4 space-y-1 mt-1">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-650 leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlighted Projects block */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-3 pb-0.5 border-b border-pink-50">
                Selected Portfolio Projects
              </h4>
              <div className="space-y-4">
                {resumeData.projects.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-extrabold text-slate-950">
                      <span>{p.name} — <span className="text-slate-500 text-xs font-normal">{p.role}</span></span>
                      <span className="text-xs font-mono text-pink-500 font-semibold">{p.duration}</span>
                    </div>
                    <div className="text-xs text-pink-600 font-mono">{p.tech}</div>
                    <ul className="list-disc pl-4 space-y-1 mt-1">
                      {p.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-650 leading-relaxed">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2 pb-0.5 border-b border-pink-50">
                Certifications & Achievements
              </h4>
              <ul className="list-disc pl-4 space-y-1">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="text-xs text-slate-650 leading-relaxed">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
