import {
  Building2,
  Play,
  Bot,
  GraduationCap,
  Shirt,
  TrendingUp,
  Heart,
  Home,
  Drone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  Play,
  Bot,
  GraduationCap,
  Shirt,
  TrendingUp,
  Heart,
  Home,
  Drone,
};

interface DivisionIconProps {
  name: string;
  size?: number;
  className?: string;
  containerClassName?: string;
}

export default function DivisionIcon({
  name,
  size = 22,
  className,
  containerClassName,
}: DivisionIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;

  return (
    <div
      className={cn(
        "relative w-14 h-14 border border-gold/15 bg-gradient-to-br from-gold/[0.06] to-transparent flex items-center justify-center transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.06)]",
        containerClassName
      )}
    >
      {/* Corner accent — top left */}
      <span className="absolute top-0 left-0 w-3 h-[1px] bg-gold/40" />
      <span className="absolute top-0 left-0 w-[1px] h-3 bg-gold/40" />
      <Icon size={size} className={cn("text-gold/80", className)} />
    </div>
  );
}
