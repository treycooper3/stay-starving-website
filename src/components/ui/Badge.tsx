import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "default" | "red";
  className?: string;
}

const variantStyles = {
  gold: "bg-gold/[0.06] text-gold/70 border-gold/10",
  default: "bg-surface border-border text-text-secondary",
  red: "bg-accent-red/10 text-accent-red border-accent-red/20",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
