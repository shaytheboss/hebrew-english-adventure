
import React, { useState, useEffect } from "react";
import { WordItem, WordCategory, GameState } from "../types";
import { getShuffledWordList, getCategoryInHebrew } from "../data/wordList";
import WordCard from "../components/WordCard";
import CategoryColumn from "../components/CategoryColumn";
import FeedbackOverlay from "../components/FeedbackOverlay";
import ScoreDisplay from "../components/ScoreDisplay";
import GameComplete from "../components/GameComplete";
import { motion } from "framer-motion";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    wordList: [],
    currentWord: null,
    categorizedWords: {
      verbs: [],
      adjectives: [],
      nouns: [],
    },
    feedback: {
      visible: false,
      isCorrect: false,
    },
    remainingWords: [],
    gameComplete: false,
  });

  const initializeGame = () => {
    const shuffledWords = getShuffledWordList();
    setGameState({
      score: 0,
      wordList: shuffledWords,
      currentWord: shuffledWords[0],
      categorizedWords: {
        verbs: [],
        adjectives: [],
        nouns: [],
      },
      feedback: {
        visible: false,
        isCorrect: false,
      },
      remainingWords: shuffledWords.slice(1),
      gameComplete: false,
    });
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCategorySelect = (selectedCategory: WordCategory) => {
    if (!gameState.currentWord) return;

    const isCorrect = selectedCategory === gameState.currentWord.category;
    
    // Update score
    const newScore = isCorrect ? gameState.score + 1 : gameState.score;
    
    // Update categorized words
    const updatedCategorizedWords = { ...gameState.categorizedWords };
    updatedCategorizedWords[gameState.currentWord.category] = [
      ...updatedCategorizedWords[gameState.currentWord.category],
      gameState.currentWord,
    ];
    
    // Show feedback
    setGameState({
      ...gameState,
      feedback: {
        visible: true,
        isCorrect,
        correctCategory: isCorrect ? undefined : gameState.currentWord.category,
      },
      score: newScore,
      categorizedWords: updatedCategorizedWords,
    });
  };

  const handleFeedbackClose = () => {
    if (gameState.remainingWords.length === 0) {
      setGameState({
        ...gameState,
        feedback: {
          visible: false,
          isCorrect: false,
        },
        currentWord: null,
        gameComplete: true,
      });
    } else {
      setGameState({
        ...gameState,
        feedback: {
          visible: false,
          isCorrect: false,
        },
        currentWord: gameState.remainingWords[0],
        remainingWords: gameState.remainingWords.slice(1),
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      <motion.header 
        className="pt-10 pb-6 px-4 sm:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-primary mb-2">
            משחק הקטגוריות באנגלית
          </h1>
          <p className="text-slate-600 text-center max-w-lg mx-auto" dir="rtl">
            בחרו את הקטגוריה הנכונה לכל מילה: פעלים, שמות תואר או שמות עצם
          </p>
        </div>
      </motion.header>

      <main className="flex-1 px-4 sm:px-6 pb-10">
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ScoreDisplay 
              score={gameState.score} 
              totalWords={gameState.wordList.length}
              remainingWords={gameState.remainingWords.length + (gameState.currentWord ? 1 : 0)}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {gameState.currentWord && (
                <WordCard
                  word={gameState.currentWord}
                  onSelect={handleCategorySelect}
                />
              )}
            </motion.div>

            <motion.div 
              className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 h-96 sm:h-[28rem]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CategoryColumn
                title="Verbs"
                hebrewTitle="פעלים"
                category="verbs"
                words={gameState.categorizedWords.verbs}
                colorClass="verbs"
              />
              <CategoryColumn
                title="Adjectives"
                hebrewTitle="שמות תואר"
                category="adjectives"
                words={gameState.categorizedWords.adjectives}
                colorClass="adjectives"
              />
              <CategoryColumn
                title="Nouns"
                hebrewTitle="שמות עצם"
                category="nouns"
                words={gameState.categorizedWords.nouns}
                colorClass="nouns"
              />
            </motion.div>
          </div>
        </div>
      </main>

      <FeedbackOverlay
        isVisible={gameState.feedback.visible}
        isCorrect={gameState.feedback.isCorrect}
        correctCategory={gameState.feedback.correctCategory}
        onClose={handleFeedbackClose}
      />

      {gameState.gameComplete && (
        <GameComplete
          score={gameState.score}
          totalWords={gameState.wordList.length}
          onRestart={initializeGame}
        />
      )}
    </div>
  );
};

export default Index;
