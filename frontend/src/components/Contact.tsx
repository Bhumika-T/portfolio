import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    value: 'bhumibhumikat6@gmail.com',
    href: 'mailto:bhumibhumikat6@gmail.com',
    icon: Mail,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Twitter/X',
    value: '@Bhumika27_2005',
    href: 'https://x.com/Bhumika27_2005',
    icon: Twitter,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'LinkedIn',
    value: 'Bhumika T',
    href: 'https://www.linkedin.com/in/bhumika-t-01b650313',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'GitHub',
    value: 'Bhumika-T',
    href: 'https://github.com/Bhumika-T',
    icon: Github,
    color: 'from-gray-600 to-gray-800',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container dark:bg-background/70 light:bg-white/40 dark:backdrop-blur-sm light:backdrop-blur-sm" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Get in touch</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactLinks.map((contact) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target={contact.name !== 'Email' ? '_blank' : undefined}
              rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-5 group transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary"
            >
              <motion.div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0`}
                whileHover={{ 
                  scale: 1.15,
                  rotateY: 10,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${contact.color}, transparent)`,
                    filter: 'blur(8px)',
                  }}
                />
                <contact.icon className="w-7 h-7 text-white relative z-10" />
              </motion.div>
              <div className="flex-grow min-w-0">
                <motion.h3 
                  className="font-poppins font-semibold text-lg group-hover:text-primary transition-colors"
                >
                  {contact.name}
                </motion.h3>
                <motion.p className="text-muted-foreground text-sm truncate">
                  {contact.value}
                </motion.p>
              </div>
              <motion.div
                animate={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
