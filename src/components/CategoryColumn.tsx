
import React from "react";
import { WordItem, WordCategory } from "../types";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryColumnProps {
  title: string;
  hebrewTitle: string;
  category: WordCategory;
  words: WordItem[];
  colorClass: string;
}

const CategoryColumn: React.FC<CategoryColumnProps> = ({
  title,
  hebrewTitle,
  category,
  words,
  colorClass,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className={`text-center mb-2 font-medium text-${colorClass} px-4 py-2 rounded-lg bg-${colorClass}/10 self-center`}>
        <span className="block text-sm">{title}</span>
        <span className="block text-base font-semibold">{hebrewTitle}</span>
      </div>
      
      <div className={`category-drop ${category}-category flex-1 overflow-y-auto`}>
        <AnimatePresence>
          {words.map((word) => (
            <motion.div
              key={word.id}
              className={`mb-2 p-3 rounded-lg bg-white shadow-sm border border-${colorClass}/30`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              dir="auto"
            >
              <div className="text-sm font-medium">{word.english}</div>
              <div className="text-xs text-slate-600">{word.hebrew}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CategoryColumn;
