import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("rounded-3xl border border-white/80 bg-white shadow-card", className)} {...props}>
      {children}
    </div>
  );
}
