export interface ParkItem {
  name: string;
  miles: string;
  type: string;
  url: string;
}

export const PARK_SPOTS: ParkItem[] = [
  {
    name: "W&OD Trail",
    miles: "45 mi",
    type: "Paved rail trail",
    url: "https://www.novaparks.com/parks/washington-and-old-dominion-railroad-regional-park",
  },
  {
    name: "Brambleton Community Park",
    miles: "3.2 mi loop",
    type: "Multi-use fields",
    url: "https://www.loudoun.gov/4379/Brambleton-Community-Park",
  },
  {
    name: "Claude Moore Park",
    miles: "357 acres",
    type: "Pool, courts, rec center",
    url: "https://www.loudoun.gov/1285/Claude-Moore-Park",
  },
  {
    name: "Ashburn Village Sports Pavilion",
    miles: "—",
    type: "Indoor & outdoor courts",
    url: "https://ashburnvillagesportspavilion.com/",
  },
  {
    name: "Hal & Berni Hanson Regional Park",
    miles: "2.8 mi",
    type: "Disc golf, trails",
    url: "https://www.loudoun.gov/5786/Hal-Berni-Hanson-Regional-Park",
  },
  {
    name: "Potomac Green Community Park",
    miles: "1.5 mi",
    type: "Playground, open lawns",
    url: "https://www.loudoun.gov/5390/Potomac-Green-Community-Park",
  },
];
