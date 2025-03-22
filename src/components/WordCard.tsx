
import React from "react";
import { WordItem, WordCategory } from "../types";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Volume2 } from "lucide-react";

interface WordCardProps {
  word: WordItem;
  onSelect: (category: WordCategory) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onSelect }) => {
  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.english);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <motion.div
      className="word-card animate-scale-in"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      dir="auto"
    >
      <div className="card-content space-y-4">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-semibold text-primary tracking-tight">
            {word.english}
          </h2>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full p-2" 
            onClick={speakWord}
            aria-label="Speak word"
            title="Speak word"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xl font-medium text-slate-700">{word.hebrew}</p>
        
        <div className="grid grid-cols-3 gap-2 w-full mt-6">
          <button
            onClick={() => onSelect("verbs")}
            className="px-3 py-2 bg-verbs/10 hover:bg-verbs/20 text-verbs border border-verbs/30 rounded-lg transition-colors duration-200"
          >
            Verbs
          </button>
          <button
            onClick={() => onSelect("adjectives")}
            className="px-3 py-2 bg-adjectives/10 hover:bg-adjectives/20 text-adjectives border border-adjectives/30 rounded-lg transition-colors duration-200"
          >
            Adjectives
          </button>
          <button
            onClick={() => onSelect("nouns")}
            className="px-3 py-2 bg-nouns/10 hover:bg-nouns/20 text-nouns border border-nouns/30 rounded-lg transition-colors duration-200"
          >
            Nouns
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WordCard;
