import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import SparkleField from './SparkleField';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6 overflow-hidden">
      <SparkleField count={30} />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <TextReveal delay={0.3}>
          <motion.p
            className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to something special
          </motion.p>
        </TextReveal>

        <TextReveal delay={0.6}>
          <h1 className="font-elegant text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
            A Universe Made
          </h1>
        </TextReveal>

        <TextReveal delay={0.9}>
          <h1 className="font-romantic text-6xl md:text-8xl lg:text-9xl sparkle-text mb-8">
            for Mahiya
          </h1>
        </TextReveal>

        <TextReveal delay={1.2}>
          <p className="font-modern text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12">
            Because you deserve more than just a "Happy Birthday" text.
            You deserve a whole experience. So here it is — 
            <span className="text-gold"> chaos, love, and everything in between</span>.
          </p>
        </TextReveal>

        <TextReveal delay={1.5}>
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 border border-border backdrop-blur-sm"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-muted-foreground font-modern text-sm">From</span>
            <span className="font-romantic text-xl text-gold">Hunzala</span>
            <span className="text-muted-foreground font-modern text-sm">with my 💖</span>
          </motion.div>
        </TextReveal>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            // animate={{ y: [0, 10, 0] }}
            // transition={{ duration: 1.5, repeat: Infinity }}
            // className="flex flex-col items-center gap-2"
          >
            {/* <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span> */}
            {/* <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div
                // animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                // transition={{ duration: 1.5, repeat: Infinity }}
                // className="w-1 h-2 bg-gold rounded-full"
              />
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
