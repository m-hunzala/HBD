import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: 'gold' | 'burgundy' | 'cream';
}

const SparkleField = memo(({ count = 50, className = '' }: { count?: number; className?: string }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const colors: Sparkle['color'][] = ['gold', 'burgundy', 'cream'];
    const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setSparkles(newSparkles);
  }, [count]);

  const getColorClass = (color: Sparkle['color']) => {
    switch (color) {
      case 'gold': return 'bg-gold';
      case 'burgundy': return 'bg-primary';
      case 'cream': return 'bg-cream';
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className={`absolute rounded-full ${getColorClass(sparkle.color)}`}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0, 1, 0.8, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
});

SparkleField.displayName = 'SparkleField';

export default SparkleField;
