import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type MobilePageProps = {
  children: ReactNode;
  className?: string;
};

export function MobilePage({ children, className }: MobilePageProps) {
  return (
    <main className="min-h-screen bg-[#f3f7e8] text-ink">
      <div className={cn("mx-auto min-h-screen w-full max-w-md overflow-hidden bg-leaf-50 px-4 pb-7 pt-5 shadow-soft sm:my-6 sm:min-h-[860px] sm:rounded-[2rem]", className)}>
        {children}
      </div>
    </main>
  );
}
