import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Get to know me</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="font-semibold text-foreground">Software Developer</span> and{' '}
              <span className="font-semibold text-foreground">Information Science Engineering</span> student 
              who loves crafting elegant digital solutions. I turn complex problems into simple, impactful experiences through clean code and creative thinking.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in <span className="font-semibold text-primary">full-stack web development</span> and{' '}
              <span className="font-semibold text-primary">Data Structures & Algorithms</span>, I build scalable applications with the MERN stack and architect robust systems that solve real-world challenges.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on learning new technologies, collaborating with amazing teams, and delivering products that make a difference. Let's create something extraordinary together!
            </p>
          </div>

          {/* Key Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 glass-card rounded-2xl"
          >
            <h3 className="text-xl font-poppins font-semibold mb-4">What I Bring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--gradient-primary)' }} />
                <span className="text-muted-foreground">Clean, scalable code architecture</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--gradient-primary)' }} />
                <span className="text-muted-foreground">Fast problem-solving abilities</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--gradient-primary)' }} />
                <span className="text-muted-foreground">Collaborative team experience</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--gradient-primary)' }} />
                <span className="text-muted-foreground">Quick learner & adaptability</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--gradient-primary)' }} />
                <span className="text-muted-foreground">Attention to performance & UX</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--gradient-primary)' }} />
                <span className="text-muted-foreground">Passion for innovation</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
