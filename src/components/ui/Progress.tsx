type ProgressProps = {
  value: number;
};

export function Progress({ value }: ProgressProps) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-leaf-100">
      <div className="h-full rounded-full bg-leaf-300 transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
