import { useMemo, useState } from "react";
import { BookOpen, RotateCcw } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { MobilePage } from "../components/layout/MobilePage";
import { TopBar } from "../components/layout/TopBar";
import { ReviewFilterTabs } from "../components/quiz/ReviewFilterTabs";
import { ReviewQuestionCard } from "../components/quiz/ReviewQuestionCard";
import { Button } from "../components/ui/Button";
import { isChapterId } from "../data/chapters";
import { getChapterById } from "../lib/quiz";
import { clearQuizState, getQuizState } from "../lib/storage";
import type { Chapter, ReviewFilter, StoredQuizState } from "../types/quiz";

export function ReviewPage() {
  const { chapterId } = useParams();

  if (!isChapterId(chapterId)) return <Navigate replace to="/chapters" />;

  const chapter = getChapterById(chapterId);
  if (!chapter) return <Navigate replace to="/chapters" />;

  const quizState = getQuizState(chapter.id);
  if (!quizState?.submittedAt) return <Navigate replace to="/chapters" />;

  return <ReviewContent chapter={chapter} quizState={quizState} />;
}

function ReviewContent({ chapter, quizState }: { chapter: Chapter; quizState: StoredQuizState }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<ReviewFilter>("all");

  const filteredQuestions = useMemo(() => {
    return chapter.questions.filter((question) => {
      const isCorrect = quizState.answers[question.id] === question.correctAnswer;
      if (filter === "correct") return isCorrect;
      if (filter === "wrong") return !isCorrect;
      return true;
    });
  }, [chapter.questions, filter, quizState.answers]);

  const resetAndGo = (path: string) => {
    clearQuizState(chapter.id);
    navigate(path);
  };

  return (
    <MobilePage>
      <TopBar title="Review Jawaban" subtitle="Lihat status tiap soal." onBack={() => navigate(`/result/${chapter.id}`)} onHome={() => navigate("/")} />
      <ReviewFilterTabs onChange={setFilter} value={filter} />
      <div className="space-y-3">
        {filteredQuestions.map((question) => (
          <ReviewQuestionCard key={question.id} question={question} selectedAnswer={quizState.answers[question.id]} />
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <Button onClick={() => resetAndGo("/chapters")} variant="secondary">
          <BookOpen size={17} />
          Pilih Bab Lain
        </Button>
        <Button onClick={() => resetAndGo(`/quiz/${chapter.id}`)} variant="ghost">
          <RotateCcw size={17} />
          Ulangi Latihan
        </Button>
      </div>
    </MobilePage>
  );
}
