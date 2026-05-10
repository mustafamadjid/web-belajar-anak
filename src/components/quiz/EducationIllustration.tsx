import type { Chapter } from "../../types/quiz";

type EducationIllustrationProps = {
  chapter?: Chapter;
  compact?: boolean;
};

export function EducationIllustration({ chapter, compact = false }: EducationIllustrationProps) {
  const accent = chapter?.accentColor ?? "#ff735f";

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-leaf-100 ${compact ? "h-28" : "h-44"}`}>
      <div className="absolute -right-10 -top-8 h-24 w-36 rounded-full bg-leaf-200" />
      <div className="absolute bottom-4 left-8 h-4 w-28 rounded-full bg-leaf-300/40" />
      <div className="absolute left-10 top-10 h-16 w-24 -rotate-6 rounded-xl bg-[#65bdd0] shadow-card" />
      <div className="absolute left-16 top-16 h-8 w-14 rounded-lg bg-white/60" />
      <div className="absolute right-11 top-10 h-20 w-12 rotate-6 rounded-lg" style={{ backgroundColor: accent }} />
      <div className="absolute right-16 top-20 h-3 w-3 rounded-full bg-leaf-700" />
      <div className="absolute right-7 bottom-6 h-16 w-16 rounded-[50%_50%_45%_45%] bg-leaf-700" />
      <div className="absolute right-14 bottom-3 h-9 w-3 rounded-full bg-[#8a5b3c]" />
      <div className="absolute left-8 top-8 h-4 w-4 rounded-full bg-[#f4d565]" />
      <div className="absolute left-5 bottom-12 h-10 w-3 -rotate-12 rounded-full bg-leaf-500" />
      <div className="absolute left-10 bottom-12 h-11 w-3 -rotate-45 rounded-full bg-leaf-500" />
      <div className="absolute left-24 bottom-14 h-10 w-3 rotate-45 rounded-full bg-leaf-500" />
    </div>
  );
}
