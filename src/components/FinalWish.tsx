import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const FinalWish = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Decorative hearts */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-10 text-primary/30"
        >
          <Heart className="w-8 h-8 fill-current" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-10 text-gold/30"
        >
          <Stars className="w-6 h-6" />
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">The Birthday Wish</p>
          
          <h2 className="font-romantic text-5xl md:text-7xl sparkle-text mb-8">
            Happy Birthday, Mahiya
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6 mb-12"
        >
          <p className="font-elegant text-2xl md:text-3xl text-foreground leading-relaxed">
            To the person who makes chaos feel like home,
            <br />
            who turns ordinary moments into core memories,
            <br />
            and who somehow puts up with my absolute nonsense.
          </p>
          
          <p className="font-modern text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            You're not just my best friend — you're my favorite human, my 2am confidant, 
            my partner in crime, and the one person I never get tired of annoying.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12"
        >
          <p className="font-modern text-foreground leading-relaxed mb-4">
            On your special day, I wish you all the happiness that your pure heart deserves. 
            May your year be filled with success, laughter, and all the good things life has to offer. 
            But most importantly, may you always know that no matter what — I've got you. 
            Through the chaos, the drama, the tears, and the laughter.
          </p>
          <p className="font-romantic text-2xl text-gold">
            Always & forever, your baola bestie 💖
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1, type: 'spring' }}
          className="inline-block"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
            />
            <p className="relative font-elegant text-xl text-foreground bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full border border-gold/30">
              — With love, <span className="sparkle-text font-romantic text-2xl">Hunzala</span> 🌟
            </p>
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-muted-foreground font-modern text-sm italic"
        >
          "Yeh website nahi, ek yaad hai" ✨
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalWish;
