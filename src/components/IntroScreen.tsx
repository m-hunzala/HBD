import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SparkleField from './SparkleField';
import TextReveal from './TextReveal';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [stage, setStage] = useState(0);
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2500),
      setTimeout(() => setStage(3), 4500),
      setTimeout(() => setShowEnter(true), 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const mysteryTexts = [
    { text: "Yeh kya khul raha hai 👀", urdu: true },
    { text: "Shh... it's a secret", urdu: false },
    { text: "Made with chaos & love", urdu: false },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SparkleField count={60} />
      
      {/* Mysterious gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10 text-center px-6 max-w-xl">
        <AnimatePresence mode="wait">
          {stage >= 1 && stage < 4 && (
            <motion.div
              key={`stage-${stage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {stage >= 1 && (
                <TextReveal delay={0} className="text-gold text-sm tracking-[0.3em] uppercase font-modern">
                  {mysteryTexts[0].text}
                </TextReveal>
              )}
              
              {stage >= 2 && (
                <TextReveal delay={0.3}>
                  <h1 className="font-elegant text-5xl md:text-7xl text-foreground">
                    Something
                    <span className="block mt-2 sparkle-text font-romantic text-6xl md:text-8xl">
                      magical
                    </span>
                    awaits...
                  </h1>
                </TextReveal>
              )}
              
              {stage >= 3 && (
                <TextReveal delay={0.5} className="text-muted-foreground text-lg font-modern">
                  {mysteryTexts[2].text}
                </TextReveal>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showEnter && (
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onClick={onComplete}
              className="mt-12 group relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-gold to-primary opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative px-10 py-4 rounded-full bg-card border border-gold/30 backdrop-blur-md overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative font-elegant text-xl text-foreground group-hover:text-gold transition-colors">
                  Enter the Universe ✨
                </span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        />
      </div>
    </motion.div>
  );
};

export default IntroScreen;
