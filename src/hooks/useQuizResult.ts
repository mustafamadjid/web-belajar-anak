import { calculateQuizResult } from "../lib/quiz";
import type { Chapter, OptionId } from "../types/quiz";

export function useQuizResult(chapter: Chapter, answers: Record<string, OptionId>) {
  return calculateQuizResult(chapter, answers);
}
