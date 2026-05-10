import type { ReviewFilter } from "../../types/quiz";
import { cn } from "../../lib/cn";

const filters: Array<{ id: ReviewFilter; label: string }> = [
  { id: "all", label: "Semua" },
  { id: "correct", label: "Benar" },
  { id: "wrong", label: "Salah" },
];

type ReviewFilterTabsProps = {
  value: ReviewFilter;
  onChange: (value: ReviewFilter) => void;
};

export function ReviewFilterTabs({ value, onChange }: ReviewFilterTabsProps) {
  return (
    <div className="sticky top-[76px] z-10 -mx-4 mb-4 flex gap-2 bg-leaf-50/95 px-4 py-2 backdrop-blur">
      {filters.map((filter) => (
        <button
          className={cn(
            "rounded-full px-4 py-2 text-xs font-black transition",
            value === filter.id ? "bg-ink text-white" : "bg-white text-muted shadow-sm",
          )}
          key={filter.id}
          onClick={() => onChange(filter.id)}
          type="button"
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
