
import React from "react";
import { WordCategory } from "../types";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { getCategoryInHebrew } from "../data/wordList";

interface FeedbackOverlayProps {
  isVisible: boolean;
  isCorrect: boolean;
  correctCategory?: WordCategory;
  onClose: () => void;
}

const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({
  isVisible,
  isCorrect,
  correctCategory,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full mx-4"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          {isCorrect ? (
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <Check className="h-10 w-10 text-green-500" />
            </div>
          ) : (
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
              <X className="h-10 w-10 text-red-500" />
            </div>
          )}

          <h3 className="text-xl font-semibold mb-2">
            {isCorrect ? "כל הכבוד!" : "לא נכון..."}
          </h3>
          
          {!isCorrect && correctCategory && (
            <p className="text-slate-600 mb-4">
              הקטגוריה הנכונה היא:
              <span className="font-semibold block mt-1">
                {getCategoryInHebrew(correctCategory)}
              </span>
            </p>
          )}

          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            המשך
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackOverlay;
