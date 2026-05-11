import type { ChapterId, OptionId, Question } from "../../types/quiz";

type QuestionSeed = {
  question: string;
  options: [string, string, string, string];
  correctAnswer: OptionId;
  explanation: string;
  image?: string;
};

export function createQuestions(chapterId: ChapterId, seeds: QuestionSeed[]): Question[] {
  return seeds.map((seed, index) => ({
    id: `${chapterId}-q${index + 1}`,
    chapterId,
    number: index + 1,
    question: seed.question,
    options: seed.options.map((text, optionIndex) => ({
      id: ["A", "B", "C", "D"][optionIndex] as OptionId,
      text,
    })),
    correctAnswer: seed.correctAnswer,
    explanation: seed.explanation,
    image: seed.image,
  }));
}
