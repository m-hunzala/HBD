import { motion } from 'framer-motion';
import { Gamepad2, Brain, ChevronDown } from 'lucide-react';

interface GameSectionProps {
  onQuizClick: () => void;
  onMemoryClick: () => void;
}

const GameSection = ({ onQuizClick, onMemoryClick }: GameSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Let's Play</p>
          <h2 className="font-elegant text-4xl md:text-5xl text-foreground mb-4">
            Fun <span className="sparkle-text">Games</span> for You
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-modern">
            Because what's a birthday without some chaos and fun? 
          </p>
        </motion.div>

        {/* Game Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quiz Game */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={onQuizClick}
            className="group cursor-pointer p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all shadow-mystery"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-8 h-8 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-elegant text-2xl text-foreground mb-2">
                  How Well Do You Know Hunzala?
                </h3>
                <p className="text-muted-foreground font-modern text-sm">
                  Test your bestie knowledge with this chaotic quiz. 
                  Spoiler: It's harder than you think 😏
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all">
              <span className="font-modern text-sm">Start Quiz</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </div>
          </motion.div>

          {/* Memory Game */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={onMemoryClick}
            className="group cursor-pointer p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all shadow-mystery"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-elegant text-2xl text-foreground mb-2">
                  Guess The Memory
                </h3>
                <p className="text-muted-foreground font-modern text-sm">
                  Can you recognize our moments from just hints? 
                  Let's see if you remember 💭
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
              <span className="font-modern text-sm">Play Now</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </div>
          </motion.div>
        </div>

        {/* Fun teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-muted-foreground font-modern text-sm"
        >
          Pro tip: Don't embarrass yourself bestie 😂✨
        </motion.p>
      </div>
    </section>
  );
};

export default GameSection;
