import {
  Bus,
  Flame,
  Leaf,
  Phone,
  Newspaper,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  label: string;
  sub: string;
}

export const QUICK_LINKS: ServiceItem[] = [
  { icon: Bus,         label: "Transit & Metro",  sub: "Silver Line, bus routes, parking" },
  { icon: Flame,       label: "Public Safety",    sub: "Police, fire, emergency alerts" },
  { icon: Leaf,        label: "Parks & Rec",      sub: "Fields, pools, permits, programs" },
  { icon: Phone,       label: "City Services",    sub: "Report an issue, pay bills, permits" },
  { icon: Newspaper,   label: "Public Notices",   sub: "Meetings, zoning, announcements" },
  { icon: CalendarDays,label: "Event Permits",    sub: "Host an event in the city" },
];
