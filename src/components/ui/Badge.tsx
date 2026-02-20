import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "default" | "red";
  className?: string;
}

const variantStyles = {
  gold: "bg-gold/10 text-gold border-gold/20",
  default: "bg-surface border-border text-text-secondary",
  red: "bg-accent-red/10 text-accent-red border-accent-red/20",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
