
import React from "react";
import { motion } from "framer-motion";

interface ScoreDisplayProps {
  score: number;
  totalWords: number;
  remainingWords: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ 
  score, 
  totalWords,
  remainingWords
}) => {
  const progress = ((totalWords - remainingWords) / totalWords) * 100;
  
  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-slate-200">
      <div className="flex items-center">
        <div className="mr-3">
          <span className="text-xs text-slate-500 block">ניקוד</span>
          <motion.span 
            key={score}
            className="text-xl font-semibold text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {score}
          </motion.span>
        </div>
      </div>
      
      <div className="flex-1 mx-4">
        <div className="text-xs text-slate-500 mb-1">התקדמות</div>
        <div className="w-full bg-slate-100 rounded-full h-2.5">
          <motion.div 
            className="bg-primary h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
      <div className="text-right">
        <span className="text-xs text-slate-500 block">נשארו</span>
        <motion.span 
          key={remainingWords}
          className="text-lg font-medium text-slate-700"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {remainingWords}
        </motion.span>
      </div>
    </div>
  );
};

export default ScoreDisplay;
