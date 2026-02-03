import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-glow hover:shadow-gold transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-gold" />
        ) : (
          <Sun className="w-5 h-5 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
