import type { Chapter, ChapterId } from "../types/quiz";
import { bab1Questions } from "./questions/bab1";
import { bab2Questions } from "./questions/bab2";
import { bab3Questions } from "./questions/bab3";
import { bab4Questions } from "./questions/bab4";

export const chapters: Chapter[] = [
  {
    id: "bab-1",
    number: 1,
    title: "Melihat Karena Cahaya, Mendengar Karena Bunyi",
    shortTitle: "Cahaya dan Bunyi",
    description: "Sifat cahaya, mata, telinga, dan bunyi",
    iconName: "eye",
    accentColor: "#6faf5f",
    questions: bab1Questions,
  },
  {
    id: "bab-2",
    number: 2,
    title: "Harmoni dalam Ekosistem",
    shortTitle: "Ekosistem",
    description: "Rantai makanan, energi, dan keseimbangan alam",
    iconName: "leaf",
    accentColor: "#f59e45",
    questions: bab2Questions,
  },
  {
    id: "bab-3",
    number: 3,
    title: "Magnet, Listrik, dan Teknologi untuk Kehidupan",
    shortTitle: "Magnet dan Listrik",
    description: "Magnet, sumber listrik, energi, dan teknologi",
    iconName: "zap",
    accentColor: "#f1bd4b",
    questions: bab3Questions,
  },
  {
    id: "bab-4",
    number: 4,
    title: "Ayo Berkenalan dengan Bumi Kita",
    shortTitle: "Bumi Kita",
    description: "Lapisan bumi, atmosfer, siklus air, dan lempeng",
    iconName: "globe",
    accentColor: "#78c5d3",
    questions: bab4Questions,
  },
];

export const chapterIds = chapters.map((chapter) => chapter.id);

export function isChapterId(value: string | undefined): value is ChapterId {
  return chapterIds.includes(value as ChapterId);
}
