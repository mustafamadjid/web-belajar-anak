import { Progress } from "../ui/Progress";
import { TopBar } from "../layout/TopBar";

type ProgressHeaderProps = {
  title: string;
  currentNumber: number;
  total: number;
  onBack: () => void;
  onHome?: () => void;
};

export function ProgressHeader({ title, currentNumber, total, onBack, onHome }: ProgressHeaderProps) {
  return (
    <div className="sticky top-0 z-20 -mx-4 bg-leaf-50/95 px-4 pb-3 backdrop-blur">
      <TopBar title={title} subtitle={`Soal ${currentNumber} dari ${total}`} onBack={onBack} onHome={onHome} />
      <Progress value={(currentNumber / total) * 100} />
    </div>
  );
}
