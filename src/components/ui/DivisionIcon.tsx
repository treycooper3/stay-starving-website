import {
  Building2,
  Play,
  Bot,
  GraduationCap,
  Shirt,
  TrendingUp,
  Heart,
  Home,
  Camera,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  Play,
  Bot,
  GraduationCap,
  Shirt,
  TrendingUp,
  Heart,
  Home,
  Camera,
};

export default function DivisionIcon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
