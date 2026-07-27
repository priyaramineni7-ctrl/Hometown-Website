export interface NewsItem {
  tag: string;
  headline: string;
  time: string;
  url: string;
}

export const NEWS: NewsItem[] = [
  {
    tag: "Infrastructure",
    headline:
      "Report links Loudoun County data center grid demand to power flickering across half the U.S.",
    time: "1 day ago",
    url: "https://www.nbcwashington.com/news/local/northern-virginia/how-loudoun-county-data-centers-are-linked-to-power-flickering-across-half-the-u-s/4134124/",
  },
  {
    tag: "Food & Drink",
    headline: "One Loudoun expansion brings Bartaco to Ashburn",
    time: "3 days ago",
    url: "https://theburn.com/2026/07/23/update-on-new-bartaco-coming-to-loudoun-county/",
  },
  {
    tag: "Business",
    headline: "Tune Up The Manly Salon officially opens its doors in Ashburn",
    time: "4 days ago",
    url: "https://theburn.com/2026/07/22/tune-up-salon-for-men-opens-its-doors-in-ashburn/",
  },
  {
    tag: "Community",
    headline:
      "Ashburn homeowner continues fight against planned 185-foot transmission line for data centers",
    time: "6 days ago",
    url: "https://www.wusa9.com/article/news/local/virginia/ashburn-homeowner-fights-transmission-line-power-data-center/65-4d8c773f-7388-43cb-8802-d4124f3b0720",
  },
];
