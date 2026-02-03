import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Trophy, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  funnyResponse: { correct: string; wrong: string };
}

const questions: Question[] = [
  {
    id: 1,
    question: "Hunzala ka favorite excuse when he's late?",
    options: [
      '"Traffic tha yaar"',
      '"Alarm nahi baja"',
      '"Main toh ready tha, you didn\'t remind me"',
      '"Bhai 5 minutes"',
    ],
    correctIndex: 3,
    funnyResponse: {
      correct: "Aye haye! You really do know him well 😭💖",
      wrong: "Girl... it's ALWAYS '5 minutes' with this guy 🤦‍♂️",
    },
  },
  {
    id: 2,
    question: "What would Hunzala most likely say during a crisis?",
    options: [
      '"Chill yaar sab theek ho jayega"',
      '"YEH KYA HO RAHA HAI"',
      '"Main kuch nahi kiya"',
      '"Tera nahi mera scene hai"',
    ],
    correctIndex: 0,
    funnyResponse: {
      correct: "You get him! That unbothered energy 😌✨",
      wrong: "Nope! He's the 'sab theek ho jayega' guy always 😂",
    },
  },
  {
    id: 3,
    question: "How does Hunzala react when Mahiya is upset?",
    options: [
      'Pretends not to notice',
      'Immediately goes into fix-it mode',
      'Makes a dumb joke to lighten mood',
      'Both B and C simultaneously',
    ],
    correctIndex: 3,
    funnyResponse: {
      correct: "EXACTLY! Chaos + care = Hunzala's love language 💕",
      wrong: "It's both bestie! He panics AND makes jokes lol",
    },
  },
  {
    id: 4,
    question: "Hunzala's love language is definitely:",
    options: [
      'Cooking elaborate meals',
      'Writing poetry',
      'Acts of chaos + being there when it matters',
      'Sending good morning texts',
    ],
    correctIndex: 2,
    funnyResponse: {
      correct: "YESSSS you know the vibe! Chaotic but reliable 🌟",
      wrong: "Poetry? Cooking? Girl it's CHAOS WITH LOVE 😂💖",
    },
  },
  {
    id: 5,
    question: "Complete this: When Mahiya and Hunzala are together...",
    options: [
      'They study productively',
      'They become absolutely unhinged',
      'They have deep philosophical talks only',
      'They sit in silence peacefully',
    ],
    correctIndex: 1,
    funnyResponse: {
      correct: "LMAOOO bestie energy = unhinged behavior 🤪",
      wrong: "Productive? Peaceful? In THIS friendship? 😭😂",
    },
  },
];

interface QuizGameProps {
  onClose: () => void;
}

const QuizGame = ({ onClose }: QuizGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (index === questions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setIsGameComplete(true);
        setShowResult(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowFeedback(false);
    setIsGameComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "BESTIE GOALS! You know him perfectly 💖";
    if (percentage >= 80) return "Omg you really ARE best friends 🥺";
    if (percentage >= 60) return "Pretty good! The bond is real ✨";
    if (percentage >= 40) return "Hmm... time for more bonding sessions? 😏";
    return "Girl... do you even know him? JK JK 😂💕";
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctIndex;

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
        <div className="p-6 bg-gradient-to-r from-primary/20 to-gold/20 border-b border-border">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-elegant text-2xl text-foreground">How Well Do You Know Hunzala?</h2>
              <p className="text-sm text-muted-foreground mt-1">Let's test this friendship 👀</p>
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
          <AnimatePresence mode="wait">
            {!isGameComplete ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span className="text-gold">Score: {score}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-gold"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-elegant text-xl text-foreground mb-6">{question.question}</h3>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        selectedAnswer === null
                          ? 'border-border hover:border-gold/50 hover:bg-muted/50'
                          : selectedAnswer === index
                          ? index === question.correctIndex
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-red-500 bg-red-500/10'
                          : index === question.correctIndex
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-border opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-modern">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-modern text-sm text-foreground">{option}</span>
                        {selectedAnswer !== null && index === question.correctIndex && (
                          <Check className="w-5 h-5 text-green-500 ml-auto" />
                        )}
                        {selectedAnswer === index && index !== question.correctIndex && (
                          <X className="w-5 h-5 text-red-500 ml-auto" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-4 p-4 rounded-xl ${
                        isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
                      }`}
                    >
                      <p className="text-sm font-modern">
                        {isCorrect ? question.funnyResponse.correct : question.funnyResponse.wrong}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                >
                  <Trophy className="w-16 h-16 text-gold mx-auto mb-4" />
                </motion.div>
                <h3 className="font-elegant text-3xl text-foreground mb-2">Quiz Complete!</h3>
                <p className="text-2xl font-elegant sparkle-text mb-4">
                  {score} / {questions.length}
                </p>
                <p className="text-muted-foreground font-modern mb-6">{getScoreMessage()}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={resetGame}
                    className="flex items-center gap-2 px-6 py-3 bg-muted rounded-full hover:bg-muted/80 transition-colors font-modern text-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Play Again
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-glow transition-colors font-modern text-sm"
                  >
                    Continue ✨
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuizGame;
