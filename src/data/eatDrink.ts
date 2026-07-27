export interface RestaurantItem {
  name: string;
  type: string;
  neighborhood: string;
  note: string;
  url: string;
}

export const EAT_DRINK: RestaurantItem[] = [
  {
    name: "Blue Ridge Grill",
    type: "American",
    neighborhood: "Brambleton",
    note: "Northern Virginia comfort food — crab cakes, prime rib, and a menu built for family dinners.",
    url: "https://brgrill.com/brambleton/",
  },
  {
    name: "Lost Rhino Brewing",
    type: "Craft Brewery",
    neighborhood: "Ashburn",
    note: "Loudoun County's original craft brewery. 20+ rotating taps, live music weekends.",
    url: "https://lostrhino.com/",
  },
  {
    name: "Ashburn Biryani Grill",
    type: "Indian",
    neighborhood: "Ashburn",
    note: "Aromatic biryanis and tandoor classics, with generous vegetarian and halal options.",
    url: "https://biryanigrill.com/ashburn",
  },
  {
    name: "Brambleton Farmers Market",
    type: "Weekend Market",
    neighborhood: "Brambleton Town Center",
    note: "Local produce, fresh-baked bread, artisan goods, run by EatLoco. Sundays 9am–1pm.",
    url: "https://eatloco.org/brambleton-2/",
  },
  {
    name: "Ford's Fish Shack",
    type: "Seafood",
    neighborhood: "Ashburn",
    note: "The area's most beloved local spot for New England–style seafood.",
    url: "https://fordsfishshack.com/locations/ashburn/",
  },
  {
    name: "Ahso Restaurant",
    type: "New American",
    neighborhood: "Brambleton",
    note: "Upscale bistro with seasonal, locally sourced plates and thoughtful wine pairings.",
    url: "https://www.ahsoresto.com/",
  },
];
