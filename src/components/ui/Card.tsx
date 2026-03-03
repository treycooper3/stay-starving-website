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
    "border border-gold/[0.06] bg-surface-card p-8 transition-all duration-500",
    hover && "hover:border-gold/20 hover:shadow-[0_4px_30px_rgba(212,168,67,0.06)]",
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
