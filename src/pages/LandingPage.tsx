import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EducationIllustration } from "../components/quiz/EducationIllustration";
import { Button } from "../components/ui/Button";
import { MobilePage } from "../components/layout/MobilePage";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <MobilePage>
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm font-black">IPAS Ceria</p>
          <p className="text-xs font-bold text-muted">Latihan</p>
        </div>
        <div className="rounded-full bg-white px-3 py-2 text-xs font-black text-leaf-700 shadow-card">Belajar</div>
      </header>

      <section className="mt-6">
        <EducationIllustration />
        <h1 className="mt-7 text-4xl font-black leading-[0.95] tracking-normal">Belajar IPAS Jadi Lebih Mudah</h1>
        <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-muted">
          Pilih bab, kerjakan soal, dan lihat hasil belajarmu secara langsung.
        </p>
        <Button className="mt-5 rounded-full px-5" onClick={() => navigate("/chapters")}>
          IPAS
          <ArrowRight size={18} />
        </Button>
      </section>

      <section className="mt-5 grid grid-cols-3 gap-3">
        <InfoPill icon={<Layers size={16} />} label="4 Bab" caption="pilihan" />
        <InfoPill icon={<BookOpen size={16} />} label="25 Soal" caption="per bab" />
        <InfoPill icon={<CheckCircle2 size={16} />} label="Hasil" caption="langsung" />
      </section>
    </MobilePage>
  );
}

function InfoPill({ icon, label, caption }: { icon: React.ReactNode; label: string; caption: string }) {
  return (
    <div className="rounded-2xl bg-white px-3 py-3 text-center shadow-card">
      <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">{icon}</div>
      <p className="text-xs font-black">{label}</p>
      <p className="text-[11px] font-semibold text-muted">{caption}</p>
    </div>
  );
}
