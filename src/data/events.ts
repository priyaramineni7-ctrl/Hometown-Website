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
    day: "Sunday",
    title: "Brambleton Farmers Market",
    location: "Brambleton Town Center Plaza",
    time: "9:00 am – 1:00 pm",
    category: "Weekly",
    img: "https://images.unsplash.com/photo-1526399743290-f73cb4022f48?w=600&h=400&fit=crop&auto=format",
    alt: "People browsing a farmers market stall",
  },
  {
    date: { month: "AUG", day: "07" },
    day: "Friday",
    title: "Loudoun County Fair",
    location: "Loudoun County Fairgrounds (Leesburg)",
    time: "9:00 am – 10:00 pm",
    category: "Annual",
    img: "https://bloximages.newyork1.vip.townnews.com/loudountimes.com/content/tncms/assets/v3/editorial/e/11/e11d1ff8-892a-11e8-8004-333731a9a939/5b4cec581c4d7.image.jpg",
    alt: "Crowd gathered at the Loudoun County Fair",
  },
  {
    date: { month: "AUG", day: "14" },
    day: "Friday",
    title: "Movies on the Green",
    location: "Brambleton Town Center Lawn",
    time: "Dusk · Every Friday",
    category: "Weekly",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzlmDxYEqPAJksRt8xfyOq0dxlRV3AClcfKeZZekfndMpiCMQW1nc288&s=10",
    alt: "Families watching an outdoor movie on the lawn",
  },
  {
    date: { month: "OCT", day: "10" },
    day: "Saturday",
    title: "Ashburn Fall Festival",
    location: "The Plaza at One Loudoun",
    time: "10:00 am – 5:00 pm",
    category: "Annual",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/Rrkw4l-2vI4sAq0rApj-CA/1000s.jpg",
    alt: "Fall festival at The Plaza at One Loudoun",
  },
];
