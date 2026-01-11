import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, FileCode } from 'lucide-react';
import { 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiCplusplus,
  SiC,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'C++ (DSA)', icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', icon: FileCode, color: '#ED8B00' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'VS Code', icon: Code, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">My expertise</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-effect transition-all duration-300"
            >
              <h3 className="text-xl font-poppins font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <skill.icon 
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
