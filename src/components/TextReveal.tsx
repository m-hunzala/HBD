import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
}

const TextReveal = ({ children, delay = 0, className = '', blur = true }: TextRevealProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 30,
        filter: blur ? 'blur(10px)' : 'blur(0px)'
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
