import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { MobilePage } from "../components/layout/MobilePage";
import { ProgressHeader } from "../components/quiz/ProgressHeader";
import { QuestionCard } from "../components/quiz/QuestionCard";
import { QuestionNavigator } from "../components/quiz/QuestionNavigator";
import { SubmitDialog } from "../components/quiz/SubmitDialog";
import { isChapterId } from "../data/chapters";
import { getAnsweredCount, getChapterById, getQuestionByNumber } from "../lib/quiz";
import { useQuizStorage } from "../hooks/useQuizStorage";
import type { Chapter } from "../types/quiz";

export function QuizPage() {
  const { chapterId } = useParams();

  if (!isChapterId(chapterId)) return <Navigate replace to="/chapters" />;

  const chapter = getChapterById(chapterId);
  if (!chapter) return <Navigate replace to="/chapters" />;

  return <QuizContent chapter={chapter} key={chapter.id} />;
}

function QuizContent({ chapter }: { chapter: Chapter }) {
  const navigate = useNavigate();
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const { answers, setAnswer, submit } = useQuizStorage(chapter.id);
  const question = getQuestionByNumber(chapter, currentNumber) ?? chapter.questions[0];
  const answeredCount = useMemo(() => getAnsweredCount(chapter, answers), [chapter, answers]);
  const isLast = currentNumber === chapter.questions.length;

  const confirmSubmit = () => {
    if (answeredCount !== chapter.questions.length) return;
    submit();
    navigate(`/result/${chapter.id}`);
  };

  return (
    <MobilePage className="pb-0">
      <ProgressHeader currentNumber={currentNumber} title={`Bab ${chapter.number}`} total={chapter.questions.length} onBack={() => navigate("/chapters")} onHome={() => navigate("/")} />
      <QuestionCard chapter={chapter} question={question} selectedAnswer={answers[question.id]} onSelectAnswer={(answer) => setAnswer(question.id, answer)} />
      {answers[question.id] ? null : <p className="mt-3 text-center text-xs font-bold text-muted">Pilih salah satu jawaban untuk soal ini.</p>}
      <QuestionNavigator
        canGoPrev={currentNumber > 1}
        isLast={isLast}
        onNext={() => setCurrentNumber((number) => Math.min(number + 1, chapter.questions.length))}
        onPrev={() => setCurrentNumber((number) => Math.max(number - 1, 1))}
        onSubmit={() => setIsSubmitOpen(true)}
      />
      <SubmitDialog
        answeredCount={answeredCount}
        onCancel={() => setIsSubmitOpen(false)}
        onConfirm={confirmSubmit}
        open={isSubmitOpen}
        totalQuestions={chapter.questions.length}
      />
    </MobilePage>
  );
}
