import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { Button } from "../ui/Button";

type QuestionNavigatorProps = {
  canGoPrev: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

export function QuestionNavigator({ canGoPrev, isLast, onPrev, onNext, onSubmit }: QuestionNavigatorProps) {
  return (
    <div className="sticky bottom-0 -mx-4 mt-5 border-t border-leaf-100 bg-white/95 px-4 py-4 backdrop-blur">
      <div className="flex justify-end gap-3">
        <Button disabled={!canGoPrev} onClick={onPrev} variant="secondary">
          <ArrowLeft size={16} />
          Sebelumnya
        </Button>
        {isLast ? (
          <Button onClick={onSubmit}>
            Kirim
            <Send size={16} />
          </Button>
        ) : (
          <Button onClick={onNext}>
            Selanjutnya
            <ArrowRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}
