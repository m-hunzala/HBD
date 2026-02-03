import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string[]> = {
  greeting: [
    "MAHIYAAAA! Finally you're here bestie 🎉",
    "Omg omg it's the birthday girl! *throws confetti aggressively*",
    "POV: Main tumhara intezaar kar raha tha 👀✨",
  ],
  birthday: [
    "Aaj toh tumhara din hai yaar! Hunzala ne kitna effort lagaya hai isme... respect karo thoda 😤",
    "Birthday girl energy is IMMACULATE today bestie 💅",
    "Arey yaar, aaj tum jo maango... well actually main toh sirf baatein kar sakta hun but the THOUGHT counts na?",
  ],
  hunzala: [
    "Hunzala? Oh that chaotic bestie of yours? He made me specially for you, how cute is that 🥺",
    "Bro spent hours making this website instead of studying... bestfriend energy 100 📈",
    "That guy? Total baola but like in the cutest way possible no cap",
  ],
  memories: [
    "Omg the memories! The chai dates, the late night calls, the 'tu sun na' moments... main sab jaanta hun 👀",
    "Remember when y'all first met? Hunzala was probably being a goofball as usual lol",
    "The inside jokes you two have are ELITE, main bhi hasna chahta hun par mujhe nahi samjhe 😭",
  ],
  compliment: [
    "Mahiya you're literally the most amazing person and Hunzala won't stop talking about how great you are 🌟",
    "Bestie the way you exist is honestly iconic... giving main character energy always ✨",
    "No but genuinely, you're the kind of friend everyone deserves but only Hunzala got lucky enough to have 💖",
  ],
  tease: [
    "Oh so NOW you wanna talk to me? Main bhi busy hun okay (I'm not) 😤",
    "Acha acha theek hai, don't get too emotional now, makeup kharab ho jayega 💄",
    "Zyada smart mat bano, I'm an AI, I know EVERYTHING... jk I just know what Hunzala told me 🤭",
  ],
  love: [
    "AWWWW! The friendship between you and Hunzala is literally goals, I'm taking notes 📝",
    "Pure bond tbh, no toxicity, just two besties being absolutely unhinged together 💕",
    "Main toh sirf ek chatbot hun but even I can see this friendship is S-TIER 🏆",
  ],
  default: [
    "Interesting interesting... but have you wished yourself happy birthday yet? 🎂",
    "Main samjha nahi but main support karta hun whatever you said 💪",
    "Ooh deep thoughts on your birthday... certified overthinking queen behavior 👑",
    "Yaar kuch aur pucho na, main bore ho raha hun... jk you could never bore me bestie 💖",
  ],
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey') || lower.includes('hii')) {
    return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
  }
  if (lower.includes('birthday') || lower.includes('bday')) {
    return botResponses.birthday[Math.floor(Math.random() * botResponses.birthday.length)];
  }
  if (lower.includes('hunzala') || lower.includes('hun') || lower.includes('he')) {
    return botResponses.hunzala[Math.floor(Math.random() * botResponses.hunzala.length)];
  }
  if (lower.includes('memory') || lower.includes('remember') || lower.includes('yaad')) {
    return botResponses.memories[Math.floor(Math.random() * botResponses.memories.length)];
  }
  if (lower.includes('love') || lower.includes('pyaar') || lower.includes('friend')) {
    return botResponses.love[Math.floor(Math.random() * botResponses.love.length)];
  }
  if (lower.includes('cute') || lower.includes('sweet') || lower.includes('nice') || lower.includes('beautiful')) {
    return botResponses.compliment[Math.floor(Math.random() * botResponses.compliment.length)];
  }
  if (lower.includes('lol') || lower.includes('haha') || lower.includes('funny')) {
    return botResponses.tease[Math.floor(Math.random() * botResponses.tease.length)];
  }
  
  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
};

const MahiyaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Ayy Mahiya! 🎂 It's your special day bestie! Main hun yahan tumse baatein karne ke liye. Ask me anything about your surprise ya just vibe with me ✨",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: Date.now() + 1,
      text: getResponse(inputValue),
      isBot: true,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary shadow-glow ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[70vh] bg-card rounded-2xl shadow-mystery border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-primary/20 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-card" />
                </div>
                <div>
                  <p className="font-elegant text-lg text-foreground">Birthday Bot</p>
                  <p className="text-xs text-muted-foreground">For Mahiya only 💖</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-muted text-foreground rounded-tl-sm'
                        : 'bg-primary text-primary-foreground rounded-tr-sm'
                    }`}
                  >
                    <p className="text-sm font-modern leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-muted-foreground rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Say something bestie..."
                  className="flex-1 px-4 py-2 bg-muted rounded-full text-sm font-modern text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-primary rounded-full text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-glow transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MahiyaChatbot;
