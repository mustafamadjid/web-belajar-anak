import { Check, X } from "lucide-react";
import { getMotivation } from "../../lib/quiz";
import type { QuizResult } from "../../types/quiz";
import { Card } from "../ui/Card";

type ResultSummaryProps = {
  result: QuizResult;
};

export function ResultSummary({ result }: ResultSummaryProps) {
  return (
    <Card className="overflow-hidden p-5 text-center">
      <p className="text-sm font-bold text-muted">Skor</p>
      <p className="mt-1 text-6xl font-black text-coral-500">{result.score}</p>
      <div className="mx-auto my-4 h-1.5 w-28 rounded-full bg-leaf-300" />
      <p className="mx-auto max-w-xs text-sm font-semibold text-muted">{getMotivation(result.score)}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-emerald-50 p-3 text-sm font-black text-emerald-600">
          <Check className="mx-auto mb-1" size={18} />
          {result.correctCount} benar
        </div>
        <div className="rounded-2xl bg-rose-50 p-3 text-sm font-black text-rose-500">
          <X className="mx-auto mb-1" size={18} />
          {result.wrongCount} salah
        </div>
      </div>
    </Card>
  );
}
