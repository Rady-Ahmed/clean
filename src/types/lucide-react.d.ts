declare module "lucide-react" {
  import * as React from "react";
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }
  export type LucideIcon = React.FC<LucideProps>;

  export const Phone: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const MapPin: LucideIcon;
  export const Clock: LucideIcon;
  export const Sparkles: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Home: LucideIcon;
  export const Wind: LucideIcon;
  export const Droplets: LucideIcon;
  export const Bug: LucideIcon;
  export const Building2: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Info: LucideIcon;

  export const CheckCircle: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const CalendarCheck2: LucideIcon;
  export const ThumbsUp: LucideIcon;
  export const Star: LucideIcon;
  export const Award: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const HeartHandshake: LucideIcon;
}
