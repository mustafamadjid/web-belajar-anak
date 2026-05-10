import { Check, X } from "lucide-react";
import type { OptionId, Question } from "../../types/quiz";
import { Card } from "../ui/Card";

type ReviewQuestionCardProps = {
  question: Question;
  selectedAnswer?: OptionId;
};

export function ReviewQuestionCard({ question, selectedAnswer }: ReviewQuestionCardProps) {
  const isCorrect = selectedAnswer === question.correctAnswer;
  const selectedText = question.options.find((option) => option.id === selectedAnswer)?.text ?? "Tidak dijawab";
  const correctText = question.options.find((option) => option.id === question.correctAnswer)?.text ?? "-";

  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${isCorrect ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"}`}>
          {question.number}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-black leading-snug">{question.question}</h3>
            <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-black ${isCorrect ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"}`}>
              {isCorrect ? <Check size={12} /> : <X size={12} />}
              {isCorrect ? "Benar" : "Salah"}
            </span>
          </div>
          <div className="mt-3 space-y-1 text-xs font-semibold text-muted">
            <p>Jawaban siswa: {selectedText}</p>
            <p className="text-emerald-600">Jawaban benar: {question.correctAnswer}. {correctText}</p>
          </div>
          {question.explanation ? <p className="mt-3 text-xs font-medium leading-relaxed text-muted">{question.explanation}</p> : null}
        </div>
      </div>
    </Card>
  );
}
