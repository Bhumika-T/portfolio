import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      {/* Background gradient orbs for light theme */}
      {theme === 'light' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }} />
        </div>
      )}
      {/* Background gradient orbs for dark theme */}
      {theme === 'dark' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
          <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-9s' }} />
        </div>
      )}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
