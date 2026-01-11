import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
              {/* Gradient border background */}
              <div className="absolute inset-0 rounded-full p-1 gradient-border">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              {/* Profile image */}
              <img
                src="/profile-photo.jpg"
                alt="Bhumika T"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl glow-effect"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Bhumika T</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold text-muted-foreground mb-6"
          >
            Software Developer | Full Stack Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Building scalable web apps and intelligent systems with clean code and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <a href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-full px-8 py-6 text-lg font-semibold border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <a href="/Bhumika_resume.pdf" download="Bhumika_resume.pdf">
                <span className="flex items-center gap-2">
                  Download Resume
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
