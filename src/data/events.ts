export interface EventItem {
  date: { month: string; day: string };
  day: string;
  title: string;
  location: string;
  time: string;
  category: string;
  img: string;
  alt: string;
}

export const EVENTS: EventItem[] = [
  {
    date: { month: "AUG", day: "02" },
    day: "Saturday",
    title: "Brambleton Farmers Market",
    location: "Brambleton Town Center Plaza",
    time: "8:00 am – 12:00 pm",
    category: "Weekly",
    img: "https://images.unsplash.com/photo-1526399743290-f73cb4022f48?w=600&h=400&fit=crop&auto=format",
    alt: "People browsing a farmers market stall",
  },
  {
    date: { month: "AUG", day: "08" },
    day: "Friday",
    title: "Loudoun County Fair",
    location: "Loudoun County Fairgrounds",
    time: "All day · Jul 31 – Aug 8",
    category: "Annual",
    img: "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?w=600&h=400&fit=crop&auto=format",
    alt: "Crowd gathered at an outdoor festival",
  },
  {
    date: { month: "AUG", day: "15" },
    day: "Friday",
    title: "Movies at Town Center",
    location: "Brambleton Town Center Lawn",
    time: "Dusk · Every Friday",
    category: "Weekly",
    img: "https://images.unsplash.com/photo-1656401992374-5ce15b9a11fa?w=600&h=400&fit=crop&auto=format",
    alt: "Concert crowd raising hands at an outdoor event",
  },
  {
    date: { month: "OCT", day: "11" },
    day: "Saturday",
    title: "Ashburn Fall Festival",
    location: "One Loudoun Amphitheater",
    time: "10:00 am – 6:00 pm",
    category: "Annual",
    img: "https://images.unsplash.com/photo-1658227665335-9cc3da774f99?w=600&h=400&fit=crop&auto=format",
    alt: "Performer on stage at an outdoor event",
  },
];
