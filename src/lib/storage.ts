import type { ChapterId, OptionId, StoredQuizState } from "../types/quiz";

const QUIZ_STORAGE_PREFIX = "ipas-quiz";

export function getQuizStorageKey(chapterId: ChapterId) {
  return `${QUIZ_STORAGE_PREFIX}:${chapterId}`;
}

export function getQuizState(chapterId: ChapterId): StoredQuizState | null {
  try {
    const raw = localStorage.getItem(getQuizStorageKey(chapterId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredQuizState;
    if (parsed.chapterId !== chapterId || typeof parsed.answers !== "object") return null;
    return parsed;
  } catch {
    clearQuizState(chapterId);
    return null;
  }
}

export function setQuizState(state: StoredQuizState) {
  localStorage.setItem(getQuizStorageKey(state.chapterId), JSON.stringify(state));
}

export function saveQuizAnswer(chapterId: ChapterId, questionId: string, answer: OptionId) {
  const current = getQuizState(chapterId) ?? { chapterId, answers: {} };
  setQuizState({
    ...current,
    answers: {
      ...current.answers,
      [questionId]: answer,
    },
  });
}

export function markQuizSubmitted(chapterId: ChapterId) {
  const current = getQuizState(chapterId);
  if (!current) return;
  setQuizState({
    ...current,
    submittedAt: new Date().toISOString(),
  });
}

export function clearQuizState(chapterId: ChapterId) {
  localStorage.removeItem(getQuizStorageKey(chapterId));
}
