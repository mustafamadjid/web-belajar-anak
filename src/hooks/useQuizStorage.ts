import { useCallback, useState } from "react";
import { getQuizState, markQuizSubmitted, saveQuizAnswer, setQuizState } from "../lib/storage";
import type { ChapterId, OptionId, StoredQuizState } from "../types/quiz";

export function useQuizStorage(chapterId: ChapterId) {
  const [state, setState] = useState<StoredQuizState>(() => getQuizState(chapterId) ?? { chapterId, answers: {} });

  const setAnswer = useCallback(
    (questionId: string, answer: OptionId) => {
      saveQuizAnswer(chapterId, questionId, answer);
      setState(getQuizState(chapterId) ?? { chapterId, answers: { [questionId]: answer } });
    },
    [chapterId],
  );

  const submit = useCallback(() => {
    if (!getQuizState(chapterId)) {
      setQuizState({ chapterId, answers: state.answers });
    }
    markQuizSubmitted(chapterId);
    setState(getQuizState(chapterId) ?? { chapterId, answers: state.answers, submittedAt: new Date().toISOString() });
  }, [chapterId, state.answers]);

  return {
    answers: state.answers,
    submittedAt: state.submittedAt,
    setAnswer,
    submit,
  };
}
