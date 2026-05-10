import type { OptionId, Question, Chapter } from "../../types/quiz";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { EducationIllustration } from "./EducationIllustration";
import { OptionCard } from "./OptionCard";

type QuestionCardProps = {
  chapter: Chapter;
  question: Question;
  selectedAnswer?: OptionId;
  onSelectAnswer: (answer: OptionId) => void;
};

export function QuestionCard({ chapter, question, selectedAnswer, onSelectAnswer }: QuestionCardProps) {
  return (
    <Card className="p-4">
      <Badge>IPAS - Bab {chapter.number}</Badge>
      <h2 className="mt-4 text-lg font-black leading-snug">{question.question}</h2>
      <div className="mt-4">
        <EducationIllustration chapter={chapter} compact />
      </div>
      <div className="mt-4 space-y-3">
        {question.options.map((option) => (
          <OptionCard key={option.id} isSelected={selectedAnswer === option.id} option={option} onClick={() => onSelectAnswer(option.id)} />
        ))}
      </div>
    </Card>
  );
}
