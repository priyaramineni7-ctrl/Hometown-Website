export const NAV_LINKS = [
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
  { label: "Eat & Drink", href: "#eat-drink" },
  { label: "Parks", href: "#parks" },
  { label: "City Services", href: "#city-services" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number]["label"];
