
import { WordItem, WordCategory } from "../types";
import { v4 as uuidv4 } from "uuid";

const rawWordList = [
  { english: "Beautiful", hebrew: "יפה", category: "adjectives" as WordCategory },
  { english: "break", hebrew: "לשבור", category: "verbs" as WordCategory },
  { english: "call", hebrew: "לצלצל", category: "verbs" as WordCategory },
  { english: "blanket", hebrew: "שמיכה", category: "nouns" as WordCategory },
  { english: "brush", hebrew: "להבריש", category: "verbs" as WordCategory },
  { english: "cry", hebrew: "לבכות", category: "verbs" as WordCategory },
  { english: "fast", hebrew: "מהיר", category: "adjectives" as WordCategory },
  { english: "important", hebrew: "חשוב", category: "adjectives" as WordCategory },
  { english: "like", hebrew: "לאהוב", category: "verbs" as WordCategory },
  { english: "hard", hebrew: "קשה", category: "adjectives" as WordCategory },
  { english: "nice", hebrew: "נחמד", category: "adjectives" as WordCategory },
  { english: "take care of", hebrew: "לטפל/לדאוג", category: "verbs" as WordCategory },
  { english: "pool", hebrew: "בריכה", category: "nouns" as WordCategory },
  { english: "put", hebrew: "לשים/להניח", category: "verbs" as WordCategory },
  { english: "special", hebrew: "מיוחד", category: "adjectives" as WordCategory },
  { english: "young", hebrew: "צעיר", category: "adjectives" as WordCategory },
  { english: "toy", hebrew: "צעצוע", category: "nouns" as WordCategory },
  { english: "win", hebrew: "לנצח/לזכות", category: "verbs" as WordCategory },
  { english: "use", hebrew: "להשתמש", category: "verbs" as WordCategory },
  { english: "wait", hebrew: "לחכות", category: "verbs" as WordCategory },
  { english: "wash", hebrew: "לשטוף/לרחוץ", category: "verbs" as WordCategory },
  { english: "hobby", hebrew: "תחביב", category: "nouns" as WordCategory },
  { english: "find", hebrew: "למצוא", category: "verbs" as WordCategory },
  { english: "give", hebrew: "לתת", category: "verbs" as WordCategory },
  { english: "learn", hebrew: "ללמוד", category: "verbs" as WordCategory },
  { english: "old", hebrew: "זקן/ישן", category: "adjectives" as WordCategory },
  { english: "tall", hebrew: "גבוה", category: "adjectives" as WordCategory },
  { english: "short", hebrew: "נמוך/קצר", category: "adjectives" as WordCategory },
  { english: "different", hebrew: "שונה", category: "adjectives" as WordCategory }
];

// Add unique IDs to each word
export const wordList: WordItem[] = rawWordList.map(word => ({
  ...word,
  id: uuidv4()
}));

// Fisher-Yates shuffle algorithm
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get a shuffled copy of the word list
export const getShuffledWordList = (): WordItem[] => {
  return shuffleArray(wordList);
};

// Get categories in Hebrew
export const getCategoryInHebrew = (category: WordCategory): string => {
  switch (category) {
    case "verbs":
      return "פעלים";
    case "adjectives":
      return "שמות תואר";
    case "nouns":
      return "שמות עצם";
    default:
      return "";
  }
};
