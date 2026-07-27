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
  url: string;
}

export const QUICK_LINKS: ServiceItem[] = [
  {
    icon: Bus,
    label: "Transit & Metro",
    sub: "Silver Line, bus routes, parking",
    url: "https://www.loudoun.gov/Transit",
  },
  {
    icon: Flame,
    label: "Public Safety",
    sub: "Police, fire, emergency alerts",
    url: "https://www.loudoun.gov/296/Public-Safety-Emergency",
  },
  {
    icon: Leaf,
    label: "Parks & Rec",
    sub: "Fields, pools, permits, programs",
    url: "https://www.loudoun.gov/4119/Parks-Recreation-Community-Services",
  },
  {
    icon: Phone,
    label: "City Services",
    sub: "Report an issue, pay bills, permits",
    url: "https://www.loudoun.gov/5336/Online-County-Services",
  },
  {
    icon: Newspaper,
    label: "Public Notices",
    sub: "Meetings, zoning, announcements",
    url: "https://www.loudounnow.com/public_notices/",
  },
  {
    icon: CalendarDays,
    label: "Event Permits",
    sub: "Host an event in the city",
    url: "https://www.loudoun.gov/827/Special-Events-Planning",
  },
];
