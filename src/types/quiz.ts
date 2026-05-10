export type ChapterId = "bab-1" | "bab-2" | "bab-3" | "bab-4";

export type OptionId = "A" | "B" | "C" | "D";

export type QuestionOption = {
  id: OptionId;
  text: string;
};

export type Question = {
  id: string;
  chapterId: ChapterId;
  number: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: OptionId;
  explanation?: string;
  image?: string;
};

export type Chapter = {
  id: ChapterId;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  iconName: "eye" | "leaf" | "zap" | "globe";
  accentColor: string;
  questions: Question[];
};

export type StoredQuizState = {
  chapterId: ChapterId;
  answers: Record<string, OptionId>;
  submittedAt?: string;
};

export type QuizResult = {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  score: number;
};

export type ReviewFilter = "all" | "correct" | "wrong";
