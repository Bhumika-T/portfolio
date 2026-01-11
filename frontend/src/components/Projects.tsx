import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, TrendingUp, Hand, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Stock Market Web Application',
    description:
      'A full-stack stock tracking web app that displays real-time stock data, price trends, and company insights with a clean dashboard UI.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: TrendingUp,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'ISL Translator (SilenceSpeaks)',
    description:
      'A real-time Indian Sign Language translator that converts gestures to text and speech using AI and computer vision, featuring a 3D avatar for enhanced accessibility.',
    techStack: ['React', 'Three.js', 'Flask', 'MongoDB', 'MediaPipe'],
    icon: Hand,
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'My personal developer portfolio showcasing projects, skills, and achievements with a modern glassmorphism UI design.',
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    icon: User,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">What I've built</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:glow-effect transition-all duration-500 hover:-translate-y-2">
                {/* Project Icon Header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center"
                  >
                    <project.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 rounded-full"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
