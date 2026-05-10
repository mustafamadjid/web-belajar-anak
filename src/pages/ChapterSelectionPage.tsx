import { useNavigate } from "react-router-dom";
import { MobilePage } from "../components/layout/MobilePage";
import { TopBar } from "../components/layout/TopBar";
import { ChapterCard } from "../components/quiz/ChapterCard";
import { chapters } from "../data/chapters";

export function ChapterSelectionPage() {
  const navigate = useNavigate();

  return (
    <MobilePage>
      <TopBar title="Pilih Bab IPAS" subtitle="Setiap bab berisi 25 soal latihan." onBack={() => navigate("/")} />
      <div className="space-y-4">
        {chapters.map((chapter) => (
          <ChapterCard chapter={chapter} key={chapter.id} onClick={() => navigate(`/quiz/${chapter.id}`)} />
        ))}
      </div>
    </MobilePage>
  );
}
