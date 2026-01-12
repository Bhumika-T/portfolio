import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="resume" className="py-24 relative">
      <div className="section-container sticky top-0 z-10 bg-background/80 dark:bg-background/70 light:bg-white/80 backdrop-blur light:backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 light:supports-[backdrop-filter]:bg-white/60" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">My credentials</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center glow-effect">
            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--gradient-primary)' }}>
              <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Want to know more about my experience?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download my resume to see my complete educational background, work experience, 
              achievements, and technical skills.
            </p>

            <Button
              size="lg"
              className="group rounded-full px-8 py-6 text-lg font-semibold cursor-pointer"
              style={{ background: 'var(--gradient-primary)' }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Bhumika_resume.pdf';
                link.download = 'Bhumika_resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
