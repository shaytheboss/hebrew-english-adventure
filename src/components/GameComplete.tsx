
import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface GameCompleteProps {
  score: number;
  totalWords: number;
  onRestart: () => void;
}

const GameComplete: React.FC<GameCompleteProps> = ({ 
  score, 
  totalWords,
  onRestart
}) => {
  const percentage = Math.round((score / totalWords) * 100);
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full text-center mx-4 border border-slate-200"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300, delay: 0.1 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            damping: 12, 
            stiffness: 200, 
            delay: 0.3 
          }}
          className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
        >
          <Trophy className="h-10 w-10 text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold mb-2"
        >
          סיימת את המשחק!
        </motion.h2>
        
        <motion.div 
          className="text-5xl font-bold my-6 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {percentage}%
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-slate-600 mb-6"
          dir="rtl"
        >
          ענית נכון על {score} מתוך {totalWords} מילים
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={onRestart}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full"
        >
          שחק שוב
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default GameComplete;
