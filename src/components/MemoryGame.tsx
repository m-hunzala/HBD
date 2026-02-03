import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, ChevronRight } from 'lucide-react';

interface Memory {
  id: number;
  hint: string;
  memory: string;
  reaction: string;
}

const memories: Memory[] = [
  {
    id: 1,
    hint: "Late night... phone... and 'tu sun na'...",
    memory: "Those 2am calls where you both say 'okay bye' 47 times but never actually hang up 📞",
    reaction: "Hehe... guilty as charged! 😭💕",
  },
  {
    id: 2,
    hint: "A place... chai... and deep talks...",
    memory: "The chai dates where the chai got cold because the gossip was too hot ☕",
    reaction: "THE ACCURACY! That poor chai 😂",
  },
  {
    id: 3,
    hint: "An exam... stress... and one chaotic friend...",
    memory: "When Hunzala tried to 'calm you down' before exams but made it 10x more chaotic",
    reaction: "Why is he like this?! But also... it worked? 🤷‍♀️✨",
  },
  {
    id: 4,
    hint: "A joke... that ONLY makes sense to you two...",
    memory: "That inside joke that makes zero sense to everyone else but sends you both into orbit 🚀",
    reaction: "If they don't get it, they don't get it 💅",
  },
  {
    id: 5,
    hint: "A moment when everything felt okay...",
    memory: "Those comfortable silences where you don't need to say anything but everything's understood 🌙",
    reaction: "Bestie telepathy hits different 🥺",
  },
];

interface MemoryGameProps {
  onClose: () => void;
}

const MemoryGame = ({ onClose }: MemoryGameProps) => {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showReaction, setShowReaction] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setTimeout(() => setShowReaction(true), 800);
  };

  const handleNext = () => {
    if (currentMemory < memories.length - 1) {
      setCurrentMemory((prev) => prev + 1);
      setIsRevealed(false);
      setShowReaction(false);
    } else {
      onClose();
    }
  };

  const memory = memories[currentMemory];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-lg bg-card rounded-2xl border border-border shadow-mystery overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-gold/20 to-primary/20 border-b border-border">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-elegant text-2xl text-foreground">Guess The Memory 💭</h2>
              <p className="text-sm text-muted-foreground mt-1">Can you recognize these moments?</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-8">
            {memories.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentMemory
                    ? 'bg-gold'
                    : index < currentMemory
                    ? 'bg-primary'
                    : 'bg-muted'
                }`}
                animate={index === currentMemory ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMemory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              {/* Hint */}
              <div className="mb-8">
                <p className="text-sm text-gold uppercase tracking-wider mb-3">The Hint</p>
                <p className="font-elegant text-2xl text-foreground italic">"{memory.hint}"</p>
              </div>

              {/* Memory Card */}
              <motion.div
                className="relative min-h-[140px] p-6 rounded-xl bg-muted/50 border border-border mb-6"
                animate={!isRevealed ? { rotateY: [0, 5, -5, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AnimatePresence mode="wait">
                  {!isRevealed ? (
                    <motion.div
                      key="hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-full"
                    >
                      <EyeOff className="w-8 h-8 text-muted-foreground mb-3" />
                      <p className="text-muted-foreground font-modern">Memory hidden...</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="revealed"
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      className="space-y-4"
                    >
                      <p className="font-modern text-foreground leading-relaxed">{memory.memory}</p>
                      
                      <AnimatePresence>
                        {showReaction && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold font-romantic text-lg"
                          >
                            {memory.reaction}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Action Button */}
              {!isRevealed ? (
                <motion.button
                  onClick={handleReveal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 mx-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-modern hover:bg-primary-glow transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  Reveal Memory
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleNext}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 mx-auto px-8 py-3 bg-gold text-background rounded-full font-modern hover:opacity-90 transition-opacity"
                >
                  {currentMemory < memories.length - 1 ? (
                    <>
                      Next Memory
                      <ChevronRight className="w-5 h-5" />
                    </>
                  ) : (
                    'Finish ✨'
                  )}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemoryGame;
