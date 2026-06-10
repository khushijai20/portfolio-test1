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
    <section id="resume" className="py-24 bg-slate-50 dark:bg-slate-950 transition-all duration-300 relative print:py-0 print:bg-white">
      {/* Background Orbs (hidden during print) */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none print:hidden" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (hidden on print) */}
        <div className="text-center max-w-3xl mx-auto mb-16 print:hidden">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2"
          >
            INTERACTIVE RECRUITTING OFFICE
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Professional Resume
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-650 dark:text-slate-400 mt-4 text-sm sm:text-base">
            View the fully interactive ATS-compliant resume below. You can copy individual items, copy the entire raw resume compilation directly to your clipboard, or print/PDF export the document.
          </p>
        </div>

        {/* Toolbar Header (hidden on print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm print:hidden">
          <span className="text-xs font-mono text-slate-500 font-medium">ATS-FRIENDLY & PARSABLE STRUCTURE</span>
          
          <div className="flex items-center gap-2">
            {/* Copy full resume text */}
            <button
              onClick={() => handleCopyToClipboard(getFullResumeText(), "Full Resume")}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-250 transition-all cursor-pointer"
            >
              {copiedSection === "Full Resume" ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Full Resume Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Raw TXT</span>
                </>
              )}
            </button>

            {/* Print trigger button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold bg-blue-650 hover:bg-blue-700 text-white rounded-lg transition-all cursor-pointer shadow-md shadow-blue-500/10 hover:shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>

        {/* Print-Ready Paper Mockup Container */}
        <div 
          id="resume-paper-canvas"
          className="w-full bg-white text-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl relative text-left overflow-hidden transition-all print:border-none print:shadow-none print:p-0 print:rounded-none"
        >
          {/* Top Header details */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-950 text-center mb-2">
              {resumeData.name}
            </h3>
            <p className="text-sm font-semibold font-mono text-blue-700 text-center uppercase tracking-wide mb-4">
              {resumeData.title}
            </p>

            {/* Icons bar in resume format */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{resumeData.email}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{resumeData.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>{resumeData.github}</span>
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>{resumeData.linkedin}</span>
              </span>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            {/* Summary segment */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2 pb-0.5 border-b border-slate-200">
                Professional Profile
              </h4>
              <p className="text-slate-700 leading-relaxed font-sans">
                {resumeData.summary}
              </p>
            </div>

            {/* Skills lists block */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2 pb-0.5 border-b border-slate-200">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resumeData.skillsList.map((skillGroup, idx) => (
                  <div key={idx} className="space-y-1">
                    <h5 className="text-xs font-bold text-slate-950 font-display">{skillGroup.category}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {skillGroup.items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline Block */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-3 pb-0.5 border-b border-slate-200">
                Education Detail
              </h4>
              <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-slate-950">
                      <span>{edu.degree}</span>
                      <span className="text-xs font-mono text-slate-500 font-medium">{edu.duration}</span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center justify-between">
                      <span>{edu.institution}</span>
                      {edu.score && <span className="font-bold text-slate-700">{edu.score}</span>}
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
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-3 pb-0.5 border-b border-slate-200">
                Selected Portfolio Projects
              </h4>
              <div className="space-y-4">
                {resumeData.projects.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-slate-950">
                      <span>{p.name} — <span className="text-slate-500 text-xs font-normal">{p.role}</span></span>
                      <span className="text-xs font-mono text-slate-500 font-medium">{p.duration}</span>
                    </div>
                    <div className="text-xs text-blue-700 font-mono">{p.tech}</div>
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
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2 pb-0.5 border-b border-slate-200">
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
