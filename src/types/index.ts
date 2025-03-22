
export type WordCategory = "verbs" | "adjectives" | "nouns";

export interface WordItem {
  english: string;
  hebrew: string;
  category: WordCategory;
  id: string;
}

export interface GameState {
  score: number;
  wordList: WordItem[];
  currentWord: WordItem | null;
  categorizedWords: {
    verbs: WordItem[];
    adjectives: WordItem[];
    nouns: WordItem[];
  };
  feedback: {
    visible: boolean;
    isCorrect: boolean;
    correctCategory?: WordCategory;
  };
  remainingWords: WordItem[];
  gameComplete: boolean;
}
