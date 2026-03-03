import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-black font-semibold hover:bg-gold-light shadow-[0_2px_8px_rgba(212,168,67,0.2)] hover:shadow-[0_4px_16px_rgba(212,168,67,0.3)]",
  ghost:
    "border border-gold/30 text-gold font-medium hover:bg-gold/[0.06] hover:border-gold/50",
  outline:
    "border border-border text-text-secondary font-medium hover:border-text-muted",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-10 py-4 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center uppercase tracking-[0.15em] transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
