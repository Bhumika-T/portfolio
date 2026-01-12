import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Smooth curved scroll indicator on the right side */}
      <motion.div
        className="fixed right-6 top-0 h-screen z-50 hidden lg:flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <svg
          width="60"
          height="100%"
          viewBox="0 0 60 1000"
          preserveAspectRatio="none"
          className="filter drop-shadow-lg"
          style={{ minHeight: '100vh' }}
        >
          <defs>
            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(187, 94%, 43%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.8" />
            </linearGradient>

            <filter id="scrollGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background track - smooth curve */}
          <path
            d="M 30 0 Q 45 250 30 500 Q 15 750 30 1000"
            stroke="rgba(59, 130, 246, 0.15)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />

          {/* Animated filled track */}
          <motion.path
            d="M 30 0 Q 45 250 30 500 Q 15 750 30 1000"
            stroke="url(#scrollGradient)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            filter="url(#scrollGlow)"
            strokeDasharray={`${scrollProgress * 10} 1000`}
            transition={{ duration: 0.1 }}
          />

          {/* Animated glowing orb at scroll position */}
          <motion.g
            animate={{
              y: scrollProgress * 10,
            }}
            transition={{ duration: 0.1 }}
          >
            {/* Outer glow ring */}
            <motion.circle
              cx="30"
              cy="0"
              r="12"
              fill="none"
              stroke="hsl(187, 94%, 43%)"
              strokeWidth="2"
              opacity="0.4"
              animate={{ r: [12, 18, 12] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Middle glow circle */}
            <motion.circle
              cx="30"
              cy="0"
              r="10"
              fill="none"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth="1.5"
              opacity="0.6"
              animate={{ r: [10, 15, 10] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            />

            {/* Center filled circle */}
            <circle
              cx="30"
              cy="0"
              r="7"
              fill="hsl(59, 100%, 50%)"
              filter="url(#scrollGlow)"
            />

            {/* Core bright center */}
            <circle cx="30" cy="0" r="4" fill="white" opacity="0.9" />
          </motion.g>

          {/* Section markers dots */}
          {[0, 16.67, 33.33, 50, 66.67, 83.33].map((position, index) => (
            <motion.circle
              key={index}
              cx="30"
              cy={position * 10}
              r="3.5"
              fill="rgba(59, 130, 246, 0.3)"
              animate={{
                r: scrollProgress > position ? 5 : 3.5,
                fill: scrollProgress > position ? 'hsl(217, 91%, 60%)' : 'rgba(59, 130, 246, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Mobile version - elegant vertical line */}
      <motion.div
        className="fixed right-0 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary z-50 lg:hidden"
        style={{
          height: `${scrollProgress}%`,
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(187, 94, 43, 0.4)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Mobile glow effect */}
      <motion.div
        className="fixed right-0 top-0 w-1.5 pointer-events-none z-40 lg:hidden"
        style={{
          height: `${scrollProgress}%`,
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4), transparent)',
          filter: 'blur(3px)',
        }}
      />
    </>
  );
};

export default ScrollProgress;
