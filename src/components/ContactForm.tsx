import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Github, Linkedin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate real SMTP network roundtrip
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-all duration-300 relative">
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2"
          >
            LET'S COLLABORATE
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct contact info pointers */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-850 dark:to-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white">Contact Information</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I am highly receptive to full-time roles, internship openings, and engineering collaborations. Reach out via email or by completing this visual contact form!
              </p>

              <div className="space-y-4 pt-4">
                {/* Email pointer */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-100/30 dark:border-slate-700/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 font-medium uppercase tracking-wider">EMAIL ME</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-805 dark:text-slate-200 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location Pointer */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-purple-50 dark:bg-slate-800 rounded-xl text-purple-600 dark:text-purple-400 border border-purple-100/30 dark:border-slate-700/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 font-medium uppercase tracking-wider">LOCATION REPRESENTATIVE</div>
                    <span className="text-sm font-semibold text-slate-805 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Opportunity pointer */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-indigo-50 dark:bg-slate-800 rounded-xl text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-slate-700/30">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 font-medium uppercase tracking-wider">OPPORTUNITIES</div>
                    <span className="text-sm font-semibold text-slate-805 dark:text-slate-200">
                      Software Internships / Dev Roles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social connections bar */}
            <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-6 mt-6">
              <h5 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-3">Connect on Social Matrices</h5>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-slate-800 hover:text-blue-600 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200/50 dark:border-slate-700/30 shadow-sm transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-slate-800 hover:text-blue-600 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200/50 dark:border-slate-700/30 shadow-sm transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 p-8 rounded-3xl shadow-lg flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === 'submitted' ? (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="inline-flex p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 mb-2 border border-emerald-500/20 shadow-inner">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white">Message Transmitted!</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out, Khushi will establish manual verification contact with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="p-2 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-inputs"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 text-left"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-850 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="e.g. Emily Watson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-slate-50 border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-850 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="e.g. emily.watson@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      Message Body
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-850 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      placeholder="Share project parameters or query specifics..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {/* Submit trigger button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-blue-600 over-indigo-650 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
