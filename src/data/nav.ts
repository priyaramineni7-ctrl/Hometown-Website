export const NAV_LINKS = [
  "News",
  "Events",
  "Eat & Drink",
  "Parks",
  "Getting Around",
  "City Services",
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
