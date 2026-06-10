import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import FeaturedProjects from './components/FeaturedProjects';
import Achievements from './components/Achievements';
import ResumePreview from './components/ResumePreview';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Read theme state on boot
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const cached = localStorage.getItem('khushi-portfolio-theme');
    if (cached) {
      return cached === 'dark';
    }
    // Default to light mode for beautiful professional readability
    return false;
  });

  // Sync theme with DOM context
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('khushi-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('khushi-portfolio-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-850 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans`}>
      
      {/* Sticky header (hidden on print) */}
      <div className="print:hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Main sections stack */}
      <main className="space-y-0">
        <div className="print:hidden">
          <Hero />
          <AboutMe />
          <Skills />
          <Timeline />
          <FeaturedProjects />
          <Achievements />
        </div>

        {/* Keep CV preview always available (useful for print stylesheets too) */}
        <ResumePreview />

        <div className="print:hidden">
          <ContactForm />
        </div>
      </main>

      {/* Footer controls (hidden on print) */}
      <div className="print:hidden">
        <Footer />
      </div>

    </div>
  );
}
