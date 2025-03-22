
import React from "react";
import { WordItem, WordCategory } from "../types";
import { motion } from "framer-motion";

interface WordCardProps {
  word: WordItem;
  onSelect: (category: WordCategory) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onSelect }) => {
  return (
    <motion.div
      className="word-card animate-scale-in"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      dir="auto"
    >
      <div className="card-content space-y-4">
        <h2 className="text-2xl font-semibold text-primary tracking-tight">
          {word.english}
        </h2>
        <p className="text-xl font-medium text-slate-700">{word.hebrew}</p>
        
        <div className="grid grid-cols-3 gap-2 w-full mt-6">
          <button
            onClick={() => onSelect("verbs")}
            className="px-3 py-2 bg-verbs/10 hover:bg-verbs/20 text-verbs border border-verbs/30 rounded-lg transition-colors duration-200"
          >
            פעלים
          </button>
          <button
            onClick={() => onSelect("adjectives")}
            className="px-3 py-2 bg-adjectives/10 hover:bg-adjectives/20 text-adjectives border border-adjectives/30 rounded-lg transition-colors duration-200"
          >
            שמות תואר
          </button>
          <button
            onClick={() => onSelect("nouns")}
            className="px-3 py-2 bg-nouns/10 hover:bg-nouns/20 text-nouns border border-nouns/30 rounded-lg transition-colors duration-200"
          >
            שמות עצם
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WordCard;
