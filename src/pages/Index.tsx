import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from '../components/IntroScreen';
import ThemeToggle from '../components/ThemeToggle';
import HeroSection from '../components/HeroSection';
import StoryTimeline from '../components/StoryTimeline';
import GameSection from '../components/GameSection';
import FinalWish from '../components/FinalWish';
import MahiyaChatbot from '../components/MahiyaChatbot';
import QuizGame from '../components/QuizGame';
import MemoryGame from '../components/MemoryGame';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showMemory, setShowMemory] = useState(false);

  useEffect(() => {
    // Apply dark mode by default
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Intro Screen */}
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!showIntro && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            {/* Hero Section */}
            <HeroSection />

            {/* Story Timeline */}
            <StoryTimeline />

            {/* Games Section */}
            <GameSection
              onQuizClick={() => setShowQuiz(true)}
              onMemoryClick={() => setShowMemory(true)}
            />

            {/* Final Birthday Wish */}
            <FinalWish />

            {/* Footer */}
            <footer className="py-8 text-center border-t border-border">
              <p className="text-muted-foreground font-modern text-sm">
                Made with chaos & love for <span className="text-gold">Mahiya</span> 💖
              </p>
              <p className="text-muted-foreground/50 text-xs mt-2">
                © {new Date().getFullYear()} — A Hunzala Production
              </p>
            </footer>

            {/* Chatbot */}
            <MahiyaChatbot />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Quiz Game Modal */}
      <AnimatePresence>
        {showQuiz && <QuizGame onClose={() => setShowQuiz(false)} />}
      </AnimatePresence>

      {/* Memory Game Modal */}
      <AnimatePresence>
        {showMemory && <MemoryGame onClose={() => setShowMemory(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
