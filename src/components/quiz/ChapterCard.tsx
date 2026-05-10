import { Eye, Globe2, Leaf, Zap } from "lucide-react";
import type { Chapter } from "../../types/quiz";

const iconMap = {
  eye: Eye,
  leaf: Leaf,
  zap: Zap,
  globe: Globe2,
};

type ChapterCardProps = {
  chapter: Chapter;
  onClick: () => void;
};

export function ChapterCard({ chapter, onClick }: ChapterCardProps) {
  const Icon = iconMap[chapter.iconName];

  return (
    <button
      className="group flex w-full items-center gap-4 rounded-3xl border border-white/80 bg-white p-4 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
      onClick={onClick}
      type="button"
    >
      <div className="flex h-14 w-10 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: chapter.accentColor }}>
        <Icon size={21} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-black">Bab {chapter.number}</p>
        <p className="line-clamp-2 text-sm font-semibold text-muted">{chapter.shortTitle}</p>
        <p className="mt-1 text-xs font-bold text-muted">{chapter.questions.length} soal</p>
      </div>
      <span className="rounded-full bg-coral-50 px-3 py-2 text-xs font-black text-coral-600 transition group-hover:bg-coral-500 group-hover:text-white">
        Mulai
      </span>
    </button>
  );
}
