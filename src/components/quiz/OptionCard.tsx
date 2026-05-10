import type { QuestionOption } from "../../types/quiz";
import { cn } from "../../lib/cn";

type OptionCardProps = {
  option: QuestionOption;
  isSelected: boolean;
  onClick: () => void;
};

export function OptionCard({ option, isSelected, onClick }: OptionCardProps) {
  return (
    <button
      className={cn(
        "flex min-h-14 w-full items-center gap-3 rounded-2xl border bg-white px-3 py-3 text-left text-sm font-semibold shadow-sm transition",
        isSelected ? "border-leaf-500 bg-leaf-100 text-ink" : "border-leaf-100 hover:border-leaf-300",
      )}
      onClick={onClick}
      type="button"
    >
      <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black", isSelected ? "bg-leaf-500 text-white" : "bg-leaf-100 text-leaf-700")}>
        {option.id}
      </span>
      <span>{option.text}</span>
    </button>
  );
}
