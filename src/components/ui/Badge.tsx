import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full bg-leaf-100 px-3 py-1 text-xs font-bold text-leaf-700", className)}
      {...props}
    >
      {children}
    </span>
  );
}
