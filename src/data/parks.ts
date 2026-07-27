export interface ParkItem {
  name: string;
  miles: string;
  type: string;
}

export const PARK_SPOTS: ParkItem[] = [
  { name: "W&OD Trail",                       miles: "45 mi",        type: "Paved rail trail" },
  { name: "Brambleton Regional Park",          miles: "3.2 mi loop",  type: "Multi-use fields" },
  { name: "Claude Moore Park",                 miles: "40 acres",     type: "Pool, courts, rec center" },
  { name: "Ashburn Village Sports Pavilion",   miles: "—",            type: "Indoor & outdoor courts" },
  { name: "Hal & Berni Hanson Regional Park",  miles: "2.8 mi",       type: "Disc golf, trails" },
  { name: "Potomac View Park",                 miles: "1.5 mi",       type: "Playground, open lawns" },
];
