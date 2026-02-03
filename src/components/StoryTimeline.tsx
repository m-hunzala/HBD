import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

interface MemoryCardData {
  id: number;
  title: string;
  description: string;
  icon: 'heart' | 'star' | 'sparkle';
  delay: number;
}

const memoryCards: MemoryCardData[] = [
  {
    id: 1,
    title: "The Beginning",
    description: "When our paths crossed and chaos entered both our lives. Who knew a random meeting would create such an unbreakable bond?",
    icon: 'sparkle',
    delay: 0.1,
  },
  {
    id: 2,
    title: "The Late Night Calls",
    description: "Those 2am conversations where we solved world problems, shared secrets, and said 'okay bye' about 47 times before actually hanging up.",
    icon: 'star',
    delay: 0.2,
  },
  {
    id: 3,
    title: "The Inside Jokes",
    description: "That one thing we laugh about that makes absolutely zero sense to anyone else. If you know, you know. If you don't... skill issue.",
    icon: 'heart',
    delay: 0.3,
  },
  {
    id: 4,
    title: "The Fights (and makeups)",
    description: "Those dramatic 'I'm never talking to you again' moments that lasted approximately 3 hours max. We're too attached to stay mad.",
    icon: 'sparkle',
    delay: 0.4,
  },
  {
    id: 5,
    title: "The Comfortable Silences",
    description: "When we don't need words because being together is enough. That's rare. That's special. That's us.",
    icon: 'star',
    delay: 0.5,
  },
  {
    id: 6,
    title: "The Future",
    description: "Whatever happens, wherever life takes us — you're stuck with me bestie. No refunds, no exchanges, just chaos and love forever.",
    icon: 'heart',
    delay: 0.6,
  },
];

const getIcon = (icon: MemoryCardData['icon']) => {
  switch (icon) {
    case 'heart': return Heart;
    case 'star': return Star;
    case 'sparkle': return Sparkles;
  }
};

const StoryTimeline = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h2 className="font-elegant text-4xl md:text-5xl text-foreground mb-4">
            Chapters of <span className="sparkle-text">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-modern">
            Every friendship has its moments. These are ours — messy, chaotic, and absolutely perfect.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent origin-top hidden md:block"
          />

          {/* Cards */}
          <div className="space-y-12">
            {memoryCards.map((card, index) => {
              const Icon = getIcon(card.icon);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: card.delay }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Mobile: Full width cards */}
                  {/* Desktop: Alternating sides */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-[calc(50%-40px)] p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors shadow-mystery group ${
                      isLeft ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-elegant text-xl text-foreground mb-2">{card.title}</h3>
                        <p className="text-muted-foreground font-modern text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline dot (desktop only) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: card.delay + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-gold hidden md:block"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
