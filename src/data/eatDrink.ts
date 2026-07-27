export interface RestaurantItem {
  name: string;
  type: string;
  neighborhood: string;
  note: string;
}

export const EAT_DRINK: RestaurantItem[] = [
  {
    name: "Rasika Ashburn",
    type: "Modern Indian",
    neighborhood: "One Loudoun",
    note: "James Beard–recognized chef. The lamb chops are non-negotiable.",
  },
  {
    name: "Lost Rhino Brewing",
    type: "Craft Brewery",
    neighborhood: "Ashburn",
    note: "Loudoun County's original craft brewery. 20+ rotating taps, live music weekends.",
  },
  {
    name: "Belly of the Whale",
    type: "Cocktail Bar",
    neighborhood: "One Loudoun",
    note: "Inventive seasonal cocktails in a subterranean setting.",
  },
  {
    name: "Brambleton Farmers Market",
    type: "Weekend Market",
    neighborhood: "Brambleton Town Center",
    note: "Local produce, fresh-baked bread, artisan goods. Every Saturday 8am–noon.",
  },
  {
    name: "Ford's Fish Shack",
    type: "Seafood",
    neighborhood: "Ashburn",
    note: "The area's most beloved local spot for New England–style seafood.",
  },
  {
    name: "Alehouse 1776",
    type: "American Gastropub",
    neighborhood: "One Loudoun",
    note: "Craft cocktails and elevated bar food in the town square.",
  },
];
