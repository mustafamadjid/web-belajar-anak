import { CheckCircle2, CircleAlert } from "lucide-react";
import { Button } from "../ui/Button";

type SubmitDialogProps = {
  open: boolean;
  answeredCount: number;
  totalQuestions: number;
  onCancel: () => void;
  onConfirm: () => void;
};

export function SubmitDialog({ open, answeredCount, totalQuestions, onCancel, onConfirm }: SubmitDialogProps) {
  if (!open) return null;

  const unanswered = totalQuestions - answeredCount;
  const isComplete = unanswered === 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/35 px-4 pb-4">
      <div className="w-full max-w-md rounded-t-[2rem] bg-white p-5 shadow-soft sm:rounded-[2rem]">
        <h2 className="text-2xl font-black">Kirim jawaban sekarang?</h2>
        <p className="mt-2 text-sm font-medium text-muted">Pastikan semua soal sudah dijawab. Setelah dikirim, jawaban tidak bisa diubah.</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-leaf-50 p-3 text-sm font-bold text-leaf-700">
            <CheckCircle2 className="mb-2" size={18} />
            Terjawab {answeredCount}/{totalQuestions}
          </div>
          <div className="rounded-2xl bg-coral-50 p-3 text-sm font-bold text-coral-600">
            <CircleAlert className="mb-2" size={18} />
            Belum {unanswered}
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <Button disabled={!isComplete} onClick={onConfirm}>
            Kirim Jawaban
          </Button>
          <Button onClick={onCancel} variant="ghost">
            Periksa Lagi
          </Button>
        </div>
      </div>
    </div>
  );
}
