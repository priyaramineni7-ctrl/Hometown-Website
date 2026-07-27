export interface NewsItem {
  tag: string;
  headline: string;
  time: string;
}

export const NEWS: NewsItem[] = [
  {
    tag: "Infrastructure",
    headline:
      "Silver Line Phase 2 ridership up 34% — Ashburn Station among top performers in Loudoun",
    time: "2 hours ago",
  },
  {
    tag: "Community",
    headline:
      "Brambleton Town Center's summer concert series announces full lineup through September",
    time: "Yesterday",
  },
  {
    tag: "Parks",
    headline:
      "New 12-mile trail extension connecting Brambleton to W&OD Trail breaks ground this fall",
    time: "3 days ago",
  },
  {
    tag: "Food & Drink",
    headline:
      "Lost Rhino Brewing opens second taproom in One Loudoun after record-breaking expansion",
    time: "1 week ago",
  },
];
