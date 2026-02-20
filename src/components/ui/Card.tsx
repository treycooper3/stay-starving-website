import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, href, className, hover = true }: CardProps) {
  const classes = cn(
    "rounded-lg border border-border bg-surface-elevated p-6 transition-all duration-300",
    hover && "hover:border-gold/50 hover:glow-gold",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
