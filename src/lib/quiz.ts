import { chapters } from "../data/chapters";
import type { Chapter, ChapterId, OptionId, Question } from "../types/quiz";

export function getChapterById(chapterId: ChapterId | undefined) {
  return chapters.find((chapter) => chapter.id === chapterId);
}

export function getQuestionByNumber(chapter: Chapter, number: number) {
  return chapter.questions.find((question) => question.number === number);
}

export function getAnsweredCount(chapter: Chapter, answers: Record<string, OptionId>) {
  return chapter.questions.filter((question) => answers[question.id]).length;
}

export function getUnansweredQuestions(chapter: Chapter, answers: Record<string, OptionId>) {
  return chapter.questions.filter((question) => !answers[question.id]);
}

export function calculateQuizResult(chapter: Chapter, answers: Record<string, OptionId>) {
  const correctCount = chapter.questions.filter((question) => answers[question.id] === question.correctAnswer).length;
  const totalQuestions = chapter.questions.length;
  const wrongCount = totalQuestions - correctCount;

  return {
    totalQuestions,
    correctCount,
    wrongCount,
    score: Math.round((correctCount / totalQuestions) * 100),
  };
}

export function getQuestionReview(question: Question, selectedAnswer: OptionId | undefined) {
  return {
    selectedAnswer,
    correctAnswer: question.correctAnswer,
    isCorrect: selectedAnswer === question.correctAnswer,
  };
}

export function getMotivation(score: number) {
  if (score >= 80) return "Hebat! Pemahamanmu sudah kuat.";
  if (score >= 60) return "Bagus! Tinggal perkuat beberapa materi.";
  return "Tetap semangat! Yuk pelajari lagi bagian yang belum tepat.";
}
