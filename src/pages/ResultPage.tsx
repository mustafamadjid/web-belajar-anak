import { BookOpen, RotateCcw } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { MobilePage } from "../components/layout/MobilePage";
import { TopBar } from "../components/layout/TopBar";
import { ResultSummary } from "../components/quiz/ResultSummary";
import { Button } from "../components/ui/Button";
import { isChapterId } from "../data/chapters";
import { calculateQuizResult, getChapterById } from "../lib/quiz";
import { clearQuizState, getQuizState } from "../lib/storage";

export function ResultPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  if (!isChapterId(chapterId)) return <Navigate replace to="/chapters" />;

  const chapter = getChapterById(chapterId);
  if (!chapter) return <Navigate replace to="/chapters" />;

  const quizState = getQuizState(chapter.id);
  if (!quizState?.submittedAt) return <Navigate replace to={`/quiz/${chapter.id}`} />;

  const result = calculateQuizResult(chapter, quizState.answers);

  const resetAndGo = (path: string) => {
    clearQuizState(chapter.id);
    navigate(path);
  };

  return (
    <MobilePage>
      <TopBar title="Hasil Latihan" subtitle={`Bab ${chapter.number} selesai dikerjakan.`} onBack={() => resetAndGo("/chapters")} onHome={() => navigate("/")} />
      <div className="mb-4 rounded-3xl bg-leaf-100 p-4">
        <p className="text-lg font-black">Hebat!</p>
        <p className="text-sm font-semibold text-muted">Kamu sudah menyelesaikan seluruh soal. Lanjutkan ritmenya.</p>
      </div>
      <ResultSummary result={result} />
      <div className="mt-5 flex flex-col gap-3">
        <Button onClick={() => navigate(`/review/${chapter.id}`)}>Lihat Review Jawaban</Button>
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
