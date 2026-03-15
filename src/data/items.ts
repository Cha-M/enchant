export interface Item {
  enchantPoints: number;
  icon?: string; // Will not be optional in future
  slot?:
    | "Helm"
    | "Cuirass"
    | "Greaves"
    | "Boots"
    | "Shield"
    | "Left Gauntlet"
    | "Right Gauntlet"
    | "Left Pauldron"
    | "Right Pauldron"
    | "Amulet"
    | "Ring"
    | "Robe"
    | "Shirt"
    | "Pants"
    | "Skirt"
    | "Weapon"
    | "None";
}

export const items: Record<string, Item> = {
  // Armour
  "Boiled Netch Leather Cuirass": { enchantPoints: 6, slot: "Cuirass" },
  "Chitin Cuirass": { enchantPoints: 10, slot: "Cuirass" },
  "Glass Cuirass": { enchantPoints: 12, slot: "Cuirass" },
  "Imperial Newtscale Cuirass": { enchantPoints: 10, slot: "Cuirass" },
  "Imperial Studded Leather Cuirass": { enchantPoints: 6, slot: "Cuirass" },
  "Netch Leather Cuirass": { enchantPoints: 6, slot: "Cuirass" },
  "Nordic Bearskin Cuirass": { enchantPoints: 6, slot: "Cuirass" },
  "Nordic Fur Cuirass": { enchantPoints: 6, slot: "Cuirass" },
  "Boiled Netch Leather Helm": { enchantPoints: 7.5, slot: "Helm" },
  "Chitin Helm Chitin Mask Helm": { enchantPoints: 12.5, slot: "Helm" },
  "Colovian Fur Helm": { enchantPoints: 7.5, slot: "Helm" },
  "Glass Helm": { enchantPoints: 15, slot: "Helm" },
  "Morag Tong Helm": { enchantPoints: 20, slot: "Helm" },
  "Netch Leather Helm": { enchantPoints: 7.5, slot: "Helm" },
  "Nordic Fur Helm": { enchantPoints: 7.5, slot: "Helm" },
  "Redoran Watchman's Helm": { enchantPoints: 12.5, slot: "Helm" },
  "Telvanni Cephalopod Helm": { enchantPoints: 100, slot: "Helm" },
  "Telvanni Dust Adept Helm": { enchantPoints: 25, slot: "Helm" },
  "Telvanni Mole Crab Helm": { enchantPoints: 50, slot: "Helm" },
  "Chitin Left Pauldron": { enchantPoints: 1, slot: "Left Pauldron" },
  "Chitin Right Pauldron": {
    enchantPoints: 1,
    slot: "Right Pauldron",
  },
  "Glass Left Pauldron": { enchantPoints: 1.5, slot: "Left Pauldron" },
  "Glass Right Pauldron": {
    enchantPoints: 1.5,
    slot: "Right Pauldron",
  },
  "Netch Leather Left Pauldron": { enchantPoints: 1, slot: "Left Pauldron" },
  "Netch Leather Right Pauldron": {
    enchantPoints: 1,
    slot: "Right Pauldron",
  },
  "Nordic Fur Left Pauldron": { enchantPoints: 1, slot: "Left Pauldron" },
  "Nordic Fur Right Pauldron": {
    enchantPoints: 1,
    slot: "Right Pauldron",
  },
  "Chitin Greaves": { enchantPoints: 1.3, slot: "Greaves" },
  "Glass Greaves": { enchantPoints: 10, slot: "Greaves" },
  "Netch Leather Greaves": { enchantPoints: 1, slot: "Greaves" },
  "Nordic Fur Greaves": { enchantPoints: 1, slot: "Greaves" },
  "Chitin Boots": { enchantPoints: 4.4, slot: "Boots" },
  "Glass Boots": { enchantPoints: 10, slot: "Boots" },
  "Heavy Leather Boots": { enchantPoints: 2.6, slot: "Boots" },
  "Netch Leather Boots": { enchantPoints: 2.6, slot: "Boots" },
  "Nordic Fur Boots": { enchantPoints: 2.6, slot: "Boots" },
  "Chitin Left Gauntlet": {
    enchantPoints: 10,
    slot: "Left Gauntlet",
  },
  "Chitin Right Gauntlet": {
    enchantPoints: 10,
    slot: "Right Gauntlet",
  },
  "Cloth Left Bracer": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Cloth Right Bracer": {
    enchantPoints: 6,
    slot: "Right Gauntlet",
  },
  "Left Glass Bracer": {
    enchantPoints: 10,
    slot: "Left Gauntlet",
  },
  "Right Glass Bracer": {
    enchantPoints: 10,
    slot: "Right Gauntlet",
  },
  "Left Leather Bracer": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Right Leather Bracer": {
    enchantPoints: 6,
    slot: "Right Gauntlet",
  },
  "Nordic Fur Left Bracer": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Nordic Fur Right Bracer": {
    enchantPoints: 6,
    slot: "Right Gauntlet",
  },
  "Netch Leather Left Gauntlet": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Netch Leather Right Gauntlet": {
    enchantPoints: 6,
    slot: "Right Gauntlet",
  },
  "Nordic Fur Left Gauntlet Nordic Fur Right Gauntlet": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Chitin Shield": { enchantPoints: 25, slot: "Shield" },
  "Glass Shield": { enchantPoints: 30, slot: "Shield" },
  "Netch Leather Shield": { enchantPoints: 15, slot: "Shield" },
  "Nordic Leather Shield": { enchantPoints: 15, slot: "Shield" },
  "Chitin Tower Shield": { enchantPoints: 37.5, slot: "Shield" },
  "Glass Tower Shield": { enchantPoints: 45, slot: "Shield" },
  "Netch Leather Tower Shield": { enchantPoints: 22.5, slot: "Shield" },
  "Nordic Ringmail Cuirass": { enchantPoints: 14, slot: "Cuirass" },
  "Imperial Chain Cuirass": { enchantPoints: 14, slot: "Cuirass" },
  "Bonemold Cuirass Armun-An Bonemold Cuirass": {
    enchantPoints: 16,
    slot: "Cuirass",
  },
  "Gah-Julan Bonemold Cuirass": { enchantPoints: 16, slot: "Cuirass" },
  "Imperial Dragonscale Cuirass": { enchantPoints: 16, slot: "Cuirass" },
  "Orcish Cuirass": { enchantPoints: 24, slot: "Cuirass" },
  "Dreugh Cuirass": { enchantPoints: 18, slot: "Cuirass" },
  "Indoril Cuirass": { enchantPoints: 18, slot: "Cuirass" },
  "Bonemold Helm": { enchantPoints: 20, slot: "Helm" },
  "Redoran Founder's Helm": { enchantPoints: 20, slot: "Helm" },
  "Dreugh Helm": { enchantPoints: 22.5, slot: "Helm" },
  "Imperial Chain Coif": { enchantPoints: 17.5, slot: "Helm" },
  "Imperial Dragonscale Helm": { enchantPoints: 20, slot: "Helm" },
  "Indoril Helmet": { enchantPoints: 22.5, slot: "Helm" },
  "Orcish Helm": { enchantPoints: 30, slot: "Helm" },
  "Gondolier's Helm": { enchantPoints: 10, slot: "Helm" },
  "Native Armun-An Bonemold Helm": { enchantPoints: 20, slot: "Helm" },
  "Native Chuzei Bonemold Helm": { enchantPoints: 20, slot: "Helm" },
  "Native Gah-Julan Bonemold Helm": { enchantPoints: 20, slot: "Helm" },
  "Redoran Master Helm": { enchantPoints: 22.5, slot: "Helm" },
  "Bonemold L Pauldron Bonemold R Pauldron": {
    enchantPoints: 1.6,
    slot: "Left Pauldron",
  },
  "Armun-An Bonemold L Pauldron Armun-An Bonemold R Pauldron": {
    enchantPoints: 1.6,
    slot: "Left Pauldron",
  },
  "Gah-Julan Bonemold L Pauldron Gah-Julan Bonemold R Pauldron": {
    enchantPoints: 1.6,
    slot: "Left Pauldron",
  },
  "Indoril Left Pauldron": { enchantPoints: 1, slot: "Left Pauldron" },
  "Indoril Right Pauldron": { enchantPoints: 1, slot: "Right Pauldron" },
  "Orcish Left Pauldron Orcish Right Pauldron": {
    enchantPoints: 2.4,
    slot: "Left Pauldron",
  },
  "Bonemold Greaves": { enchantPoints: 2, slot: "Greaves" },
  "Imperial Chain Greaves": { enchantPoints: 7, slot: "Greaves" },
  "Orcish Greaves": { enchantPoints: 3, slot: "Greaves" },
  "Bonemold Boots": { enchantPoints: 7, slot: "Boots" },
  "Indoril Boots": { enchantPoints: 2.6, slot: "Boots" },
  "Orcish Boots": { enchantPoints: 10.5, slot: "Boots" },
  "Bonemold Left Bracer": {
    enchantPoints: 16,
    slot: "Left Gauntlet",
  },
  "Bonemold Right Bracer": {
    enchantPoints: 16,
    slot: "Right Gauntlet",
  },
  "Indoril Left Gauntlet": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Indoril Right Gauntlet": {
    enchantPoints: 6,
    slot: "Left Gauntlet",
  },
  "Orcish Left Bracer": {
    enchantPoints: 24,
    slot: "Left Gauntlet",
  },
  "Orcish Right Bracer": {
    enchantPoints: 24,
    slot: "Right Gauntlet",
  },
  "Bonemold Shield": { enchantPoints: 40, slot: "Shield" },
  "Dreugh Shield": { enchantPoints: 45, slot: "Shield" },
  "Indoril Shield": { enchantPoints: 45, slot: "Shield" },
  "Bonemold Tower Shield": { enchantPoints: 60, slot: "Shield" },
  "Dragonscale Tower Shield": { enchantPoints: 60, slot: "Shield" },
  "Orcish Tower Shield": { enchantPoints: 90, slot: "Shield" },
  "Hlaalu Guard Shield": { enchantPoints: 60, slot: "Shield" },
  "Redoran Guard Shield": { enchantPoints: 60, slot: "Shield" },
  "Telvanni Guard Shield": { enchantPoints: 60, slot: "Shield" },
  "Iron Cuirass": { enchantPoints: 20, slot: "Cuirass" },
  "Steel Cuirass": { enchantPoints: 20, slot: "Cuirass" },
  "Nordic Iron Cuirass": { enchantPoints: 20, slot: "Cuirass" },
  "Imperial Steel Cuirass": { enchantPoints: 20, slot: "Cuirass" },
  "Nordic Trollbone Cuirass": { enchantPoints: 16, slot: "Cuirass" },
  "Imperial Silver Cuirass": { enchantPoints: 16, slot: "Cuirass" },
  "Imperial Templar Knight Cuirass*": { enchantPoints: 20, slot: "Cuirass" },
  "Duke's Guard Silver Cuirass*": { enchantPoints: 16, slot: "Cuirass" },
  "Dwemer Cuirass": { enchantPoints: 20, slot: "Cuirass" },
  "Ebony Cuirass": { enchantPoints: 40, slot: "Cuirass" },
  "Daedric Cuirass": { enchantPoints: 60, slot: "Cuirass" },
  "Dwemer Helm": { enchantPoints: 25, slot: "Helm" },
  "Ebony Closed Helm": { enchantPoints: 50, slot: "Helm" },
  "Imperial Silver Helm": { enchantPoints: 20, slot: "Helm" },
  "Imperial Steel Helmet": { enchantPoints: 25, slot: "Helm" },
  "Iron Helmet": { enchantPoints: 2.5, slot: "Helm" },
  "Steel Helm": { enchantPoints: 25, slot: "Helm" },
  "Imperial Templar Helmet": { enchantPoints: 25, slot: "Helm" },
  "Daedric Face of God": { enchantPoints: 75, slot: "Helm" },
  "Daedric Face of Inspiration": { enchantPoints: 75, slot: "Helm" },
  "Daedric Face of Terror": { enchantPoints: 75, slot: "Helm" },
  "Nordic Iron Helm": { enchantPoints: 25, slot: "Helm" },
  "Nordic Trollbone Helm": { enchantPoints: 20, slot: "Helm" },
  "Dwemer Left Pauldron": {
    enchantPoints: 4,
    slot: "Left Pauldron",
  },
  "Dwemer Right Pauldron": {
    enchantPoints: 4,
    slot: "Right Pauldron",
  },
  "Daedric Left Pauldron": {
    enchantPoints: 6,
    slot: "Left Pauldron",
  },
  "Daedric Right Pauldron": {
    enchantPoints: 6,
    slot: "Right Pauldron",
  },
  "Ebony Left Pauldron": {
    enchantPoints: 4,
    slot: "Left Pauldron",
  },
  "Ebony Right Pauldron": {
    enchantPoints: 4,
    slot: "Right Pauldron",
  },
  "Imperial Chain Left Pauldron": {
    enchantPoints: 7,
    slot: "Left Pauldron",
  },
  "Imperial Chain Right Pauldron": {
    enchantPoints: 7,
    slot: "Right Pauldron",
  },
  "Imperial Steel Left Pauldron": {
    enchantPoints: 2,
    slot: "Left Pauldron",
  },
  "Imperial Steel Right Pauldron": {
    enchantPoints: 2,
    slot: "Right Pauldron",
  },
  "Imperial Templar Left Pauldron": {
    enchantPoints: 2,
    slot: "Left Pauldron",
  },
  "Imperial Templar Right Pauldron": {
    enchantPoints: 2,
    slot: "Right Pauldron",
  },
  "Iron Left Pauldron": {
    enchantPoints: 2,
    slot: "Left Pauldron",
  },
  "Iron Right Pauldron": {
    enchantPoints: 2,
    slot: "Right Pauldron",
  },
  "Steel Left Pauldron": {
    enchantPoints: 2,
    slot: "Left Pauldron",
  },
  "Steel Right Pauldron": {
    enchantPoints: 2,
    slot: "Right Pauldron",
  },
  "Daedric Greaves": { enchantPoints: 7.5, slot: "Greaves" },
  "Dwemer Greaves": { enchantPoints: 2.5, slot: "Greaves" },
  "Ebony Greaves": { enchantPoints: 5, slot: "Greaves" },
  "Imperial Steel Greaves": { enchantPoints: 2.5, slot: "Greaves" },
  "Imperial Templar Greaves": { enchantPoints: 2.5, slot: "Greaves" },
  "Iron Greaves": { enchantPoints: 2.5, slot: "Greaves" },
  "Steel Greaves": { enchantPoints: 2.5, slot: "Greaves" },
  "Daedric Boots": { enchantPoints: 26.3, slot: "Boots" },
  "Dwemer Boots": { enchantPoints: 8.8, slot: "Boots" },
  "Ebony Boots": { enchantPoints: 17.5, slot: "Boots" },
  "Imperial Steel Boots": { enchantPoints: 8.8, slot: "Boots" },
  "Imperial Templar Boots": { enchantPoints: 8.8, slot: "Boots" },
  "Iron Boots": { enchantPoints: 2.6, slot: "Boots" },
  "Steel Boots": { enchantPoints: 8.8, slot: "Boots" },
  "Dwemer Left Bracer": {
    enchantPoints: 20,
    slot: "Left Gauntlet",
  },
  "Dwemer Right Bracer": {
    enchantPoints: 20,
    slot: "Right Gauntlet",
  },
  "Ebony Left Bracer": {
    enchantPoints: 40,
    slot: "Left Gauntlet",
  },
  "Ebony Right Bracer": {
    enchantPoints: 40,
    slot: "Right Gauntlet",
  },
  "Iron Left Bracer": {
    enchantPoints: 20,
    slot: "Left Gauntlet",
  },
  "Iron Right Bracer": {
    enchantPoints: 20,
    slot: "Right Gauntlet",
  },
  "Imperial Templar Left Bracer": {
    enchantPoints: 20,
    slot: "Left Gauntlet",
  },
  "Imperial Templar Right Bracer": {
    enchantPoints: 20,
    slot: "Right Gauntlet",
  },
  "Iron Left Gauntlet": { enchantPoints: 2.5, slot: "Left Gauntlet" },
  "Iron Right Gauntlet": { enchantPoints: 1, slot: "Right Gauntlet" },
  "Daedric Left Gauntlet": {
    enchantPoints: 60,
    slot: "Left Gauntlet",
  },
  "Daedric Right Gauntlet": {
    enchantPoints: 60,
    slot: "Right Gauntlet",
  },
  "Imperial Steel Left Gauntlet": {
    enchantPoints: 20,
    slot: "Left Gauntlet",
  },
  "Imperial Steel Right Gauntlet": {
    enchantPoints: 20,
    slot: "Right Gauntlet",
  },
  "Steel Left Gauntlet": {
    enchantPoints: 20,
    slot: "Left Gauntlet",
  },
  "Steel Right Gauntlet": {
    enchantPoints: 20,
    slot: "Right Gauntlet",
  },
  "Daedric Shield": { enchantPoints: 150, slot: "Shield" },
  "Dwemer Shield": { enchantPoints: 50, slot: "Shield" },
  "Ebony Shield": { enchantPoints: 100, slot: "Shield" },
  "Iron Shield": { enchantPoints: 50, slot: "Shield" },
  "Nordic Trollbone Shield": { enchantPoints: 40, slot: "Shield" },
  "Steel Shield": { enchantPoints: 50, slot: "Shield" },
  "Daedric Tower Shield": { enchantPoints: 225, slot: "Shield" },
  "Ebony Tower Shield": { enchantPoints: 150, slot: "Shield" },
  "Imperial Shield": { enchantPoints: 50, slot: "Shield" },
  "Iron Tower Shield": { enchantPoints: 75, slot: "Shield" },
  "Steel Tower Shield": { enchantPoints: 75, slot: "Shield" },

  // Weapons
  "2": {
    enchantPoints: 150,
    icon: "/icons/2.jpg",
  },
  // Other
  "3": {
    enchantPoints: 50,
    icon: "/icons/3.jpg",
  },
};
