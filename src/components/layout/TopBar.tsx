import { ArrowLeft, LockKeyhole, X } from "lucide-react";
import { Button } from "../ui/Button";

type TopBarProps = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  onHome?: () => void;
};

export function TopBar({ title, subtitle, onBack, onHome }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 -mx-4 mb-4 bg-leaf-50/95 px-4 pb-3 pt-2 backdrop-blur">
      <div className="absolute -right-10 -top-10 h-24 w-36 rounded-full bg-leaf-200/70" />
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-2">
          {onBack ? (
            <Button
              aria-label="Kembali"
              className="h-9 min-h-9 w-9 shrink-0 rounded-full p-0"
              onClick={onBack}
              variant="ghost"
            >
              <ArrowLeft size={18} />
            </Button>
          ) : null}
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-black leading-tight">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-xs font-medium text-muted">{subtitle}</p>
            ) : null}
          </div>
        </div>
        {onHome ? (
          <Button
            aria-label="Tutup dan kembali ke beranda"
            className="h-9 min-h-9 w-9 shrink-0 rounded-full bg-white p-0 text-leaf-700 shadow-card"
            onClick={onHome}
            variant="ghost"
          >
            X
          </Button>
        ) : (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-leaf-700 shadow-card">
            <LockKeyhole size={16} />
          </div>
        )}
      </div>
    </header>
  );
}
