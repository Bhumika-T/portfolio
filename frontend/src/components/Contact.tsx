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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target={contact.name !== 'Email' ? '_blank' : undefined}
              rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-5 group hover:glow-effect transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-poppins font-semibold text-lg">{contact.name}</h3>
                <p className="text-muted-foreground text-sm truncate">{contact.value}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
