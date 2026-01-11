import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bhumika T. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
