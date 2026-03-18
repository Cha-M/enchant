export const itemSlotKeyLabelPairs: [string, string][] = [
  ["helm", "Helm"],
  ["cuirass", "Cuirass"],
  ["greaves", "Greaves"],
  ["boots", "Boots"],
  ["shield", "Shield"],
  ["leftGauntlet", "Left Gauntlet"],
  ["rightGauntlet", "Right Gauntlet"],
  ["leftPauldron", "Left Pauldron"],
  ["rightPauldron", "Right Pauldron"],
  ["amulet", "Amulet"],
  ["ring", "Ring"],
  ["robe", "Robe"],
  ["shirt", "Shirt"],
  ["pants", "Pants"],
  ["skirt", "Skirt"],
  ["weapon", "Weapon"],
  ["belt", "Belt"],
];

export const itemArmourWeightClassKeyLabelPairs: [string, string][] = [
  ["light", "Light"],
  ["medium", "Medium"],
  ["heavy", "Heavy"],
];

export const itemWeaponSkillKeyLabelPairs: [string, string][] = [
  ["axe", "Axe"],
  ["blunt", "Blunt"],
  ["shortBlade", "Short Blade"],
  ["longBlade", "Long Blade"],
  ["marksman", "Marksman"],
  ["spear", "Spear"],
];

export interface Item {
  enchantPoints: number;
  icon?: string; // Will not be optional in future
  slot?:
    | "helm"
    | "cuirass"
    | "greaves"
    | "boots"
    | "shield"
    | "leftGauntlet"
    | "rightGauntlet"
    | "leftPauldron"
    | "rightPauldron"
    | "amulet"
    | "ring"
    | "robe"
    | "shirt"
    | "pants"
    | "skirt"
    | "weapon"
    | "belt";
  armourWeightClass?: "light" | "medium" | "heavy";
  weaponSkill?:
    | "axe"
    | "blunt"
    | "shortBlade"
    | "longBlade"
    | "marksman"
    | "spear";
}

export const items: Record<string, Item> = {
  // Armour (Base)
  // Light
  "Boiled Netch Leather Cuirass": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Boiled_Netch_Leather_Cuirass.png",
  },
  "Chitin Cuirass": {
    enchantPoints: 10,
    slot: "cuirass",
    icon: "/icons/items/Chitin_Cuirass.png",
  },
  "Glass Cuirass": {
    enchantPoints: 12,
    slot: "cuirass",
    icon: "/icons/items/Glass_Cuirass.png",
  },
  "Imperial Newtscale Cuirass": {
    enchantPoints: 10,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Newtscale_Cuirass.png",
  },
  "Imperial Studded Leather Cuiras": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Studded_Leather_Cuirass.png",
  },
  "Netch Leather Cuirass": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Netch_Leather_Cuirass.png",
  },
  "Nordic Bearskin Cuirass": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Nordic_Bearskin_Cuirass.png",
  },
  "Nordic Fur Cuirass": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Nordic_Fur_Cuirass.png",
  },
  "Boiled Netch Leather Helm": {
    enchantPoints: 7.5,
    slot: "helm",
    icon: "/icons/items/Boiled_Netch_Leather_Helm.png",
  },
  "Chitin Helm": {
    enchantPoints: 12.5,
    slot: "helm",
    icon: "/icons/items/Chitin_Helm.png",
  },
  "Chitin Mask Helm": {
    enchantPoints: 12.5,
    slot: "helm",
    icon: "/icons/items/Chitin_Helm.png",
  },
  "Colovian Fur Helm": {
    enchantPoints: 7.5,
    slot: "helm",
    icon: "/icons/items/Colovian_Fur_Helm.png",
  },
  "Glass Helm": {
    enchantPoints: 15,
    slot: "helm",
    icon: "/icons/items/Glass_Helm.png",
  },
  "Morag Tong Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Morag_Tong_Helm.png",
  },
  "Netch Leather Helm": {
    enchantPoints: 7.5,
    slot: "helm",
    icon: "/icons/items/Netch_Leather_Helm.png",
  },
  "Nordic Fur Helm": {
    enchantPoints: 7.5,
    slot: "helm",
    icon: "/icons/items/Nordic_Fur_Helm.png",
  },
  "Redoran Watchman's Helm": {
    enchantPoints: 12.5,
    slot: "helm",
    icon: "/icons/items/Redoran_Watchman's_Helm.png",
  },
  "Telvanni Cephalopod Helm": {
    enchantPoints: 100,
    slot: "helm",
    icon: "/icons/items/Telvanni_Cephalopod_Helm.png",
  },
  "Telvanni Dust Adept Helm": {
    enchantPoints: 25,
    slot: "helm",
    icon: "/icons/items/Telvanni_Dust_Adept_Helm.png",
  },
  "Telvanni Mole Crab Helm": {
    enchantPoints: 50,
    slot: "helm",
    icon: "/icons/items/Telvanni_Mole_Crab_Helm.png",
  },
  "Chitin Left Pauldron": {
    enchantPoints: 1,
    slot: "leftPauldron",
    icon: "/icons/items/Chitin_Pauldron.png",
  },
  "Chitin Right Pauldron": {
    enchantPoints: 1,
    slot: "rightPauldron",
    icon: "/icons/items/Chitin_Pauldron.png",
  },
  "Glass Left Pauldron": {
    enchantPoints: 1.5,
    slot: "leftPauldron",
    icon: "/icons/items/Glass_Pauldron.png",
  },
  "Glass Right Pauldron": {
    enchantPoints: 1.5,
    slot: "rightPauldron",
    icon: "/icons/items/Glass_Pauldron.png",
  },
  "Netch Leather Left Pauldron": {
    enchantPoints: 1,
    slot: "leftPauldron",
    icon: "/icons/items/Netch_Leather_Pauldron.png",
  },
  "Netch Leather Right Pauldron": {
    enchantPoints: 1,
    slot: "rightPauldron",
    icon: "/icons/items/Netch_Leather_Pauldron.png",
  },
  "Nordic Fur Left Pauldron": {
    enchantPoints: 1,
    slot: "leftPauldron",
    icon: "/icons/items/Nordic_Fur_Pauldron.png",
  },
  "Nordic Fur Right Pauldron": {
    enchantPoints: 1,
    slot: "rightPauldron",
    icon: "/icons/items/Nordic_Fur_Pauldron.png",
  },
  "Chitin Greaves": {
    enchantPoints: 1.3,
    slot: "greaves",
    icon: "/icons/items/Chitin_Greaves.png",
  },
  "Glass Greaves": {
    enchantPoints: 10,
    slot: "greaves",
    icon: "/icons/items/Glass_Greaves.png",
  },
  "Netch Leather Greaves": {
    enchantPoints: 1,
    slot: "greaves",
    icon: "/icons/items/Netch_Leather_Greaves.png",
  },
  "Nordic Fur Greaves": {
    enchantPoints: 1,
    slot: "greaves",
    icon: "/icons/items/Nordic_Fur_Greaves.png",
  },
  "Chitin Boots": {
    enchantPoints: 4.4,
    slot: "boots",
    icon: "/icons/items/Chitin_Boots.png",
  },
  "Glass Boots": {
    enchantPoints: 10,
    slot: "boots",
    icon: "/icons/items/Glass_Boots.png",
  },
  "Heavy Leather Boots": {
    enchantPoints: 2.6,
    slot: "boots",
    icon: "/icons/items/Heavy_Leather_Boots.png",
  },
  "Netch Leather Boots": {
    enchantPoints: 2.6,
    slot: "boots",
    icon: "/icons/items/Netch_Leather_Boots.png",
  },
  "Nordic Fur Boots": {
    enchantPoints: 2.6,
    slot: "boots",
    icon: "/icons/items/Nordic_Fur_Boots.png",
  },
  "Chitin Left Gauntlet": {
    enchantPoints: 10,
    slot: "leftGauntlet",
    icon: "/icons/items/Chitin_Gauntlet.png",
  },
  "Chitin Right Gauntlet": {
    enchantPoints: 10,
    slot: "rightGauntlet",
    icon: "/icons/items/Chitin_Gauntlet.png",
  },
  "Cloth Left Bracer": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Cloth_Bracer.png",
  },
  "Cloth Right Bracer": {
    enchantPoints: 6,
    slot: "rightGauntlet",
    icon: "/icons/items/Cloth_Bracer.png",
  },
  "Left Glass Bracer": {
    enchantPoints: 10,
    slot: "leftGauntlet",
    icon: "/icons/items/Glass_Bracer.png",
  },
  "Right Glass Bracer": {
    enchantPoints: 10,
    slot: "rightGauntlet",
    icon: "/icons/items/Glass_Bracer.png",
  },
  "Left Leather Bracer": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Leather_Bracer.png",
  },
  "Right Leather Bracer": {
    enchantPoints: 6,
    slot: "rightGauntlet",
    icon: "/icons/items/Leather_Bracer.png",
  },
  "Nordic Fur Left Bracer": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Nordic_Fur_Bracer.png",
  },
  "Nordic Fur Right Bracer": {
    enchantPoints: 6,
    slot: "rightGauntlet",
    icon: "/icons/items/Nordic_Fur_Bracer.png",
  },
  "Netch Leather Left Gauntlet": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Netch_Leather_Gauntlet.png",
  },
  "Netch Leather Right Gauntlet": {
    enchantPoints: 6,
    slot: "rightGauntlet",
    icon: "/icons/items/Netch_Leather_Gauntlet.png",
  },
  "Nordic Fur Left Gauntlet": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Nordic_Fur_Gauntlet.png",
  },
  "Nordic Fur Right Gauntlet": {
    enchantPoints: 6,
    slot: "rightGauntlet",
    icon: "/icons/items/Nordic_Fur_Gauntlet.png",
  },
  "Chitin Shield": {
    enchantPoints: 25,
    slot: "shield",
    icon: "/icons/items/Chitin_Shield.png",
  },
  "Glass Shield": {
    enchantPoints: 30,
    slot: "shield",
    icon: "/icons/items/Glass_Shield.png",
  },
  "Netch Leather Shield": {
    enchantPoints: 15,
    slot: "shield",
    icon: "/icons/items/Netch_Leather_Shield.png",
  },
  "Nordic Leather Shield": {
    enchantPoints: 15,
    slot: "shield",
    icon: "/icons/items/Nordic_Leather_Shield.png",
  },
  "Chitin Tower Shield": {
    enchantPoints: 37.5,
    slot: "shield",
    icon: "/icons/items/Chitin_Tower_Shield.png",
  },
  "Glass Tower Shield": {
    enchantPoints: 45,
    slot: "shield",
    icon: "/icons/items/Glass_Tower_Shield.png",
  },
  "Netch Leather Tower Shield": {
    enchantPoints: 22.5,
    slot: "shield",
    icon: "/icons/items/Netch_Leather_Tower_Shield.png",
  },
  // Medium
  "Nordic Ringmail Cuirass": {
    enchantPoints: 14,
    slot: "cuirass",
    icon: "/icons/items/Nordic_Ringmail_Cuirass.png",
  },
  "Imperial Chain Cuirass": {
    enchantPoints: 14,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Chain_Cuirass.png",
  },
  "Bonemold Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Bonemold_Cuirass.png",
  },
  "Armun-An Bonemold Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Bonemold_Cuirass.png",
  },
  "Gah-Julan Bonemold Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Gah-Julan_Bonemold_Cuirass.png",
  },
  "Imperial Dragonscale Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Dragonscale_Cuirass.png",
  },
  "Orcish Cuirass": {
    enchantPoints: 24,
    slot: "cuirass",
    icon: "/icons/items/Orcish_Cuirass.png",
  },
  "Dreugh Cuirass": {
    enchantPoints: 18,
    slot: "cuirass",
    icon: "/icons/items/Dreugh_Cuirass.png",
  },
  "Indoril Cuirass": {
    enchantPoints: 18,
    slot: "cuirass",
    icon: "/icons/items/Indoril_Cuirass.png",
  },
  "Bonemold Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Bonemold_Helm.png",
  },
  "Redoran Founder's Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Bonemold_Helm.png",
  },
  "Dreugh Helm": {
    enchantPoints: 22.5,
    slot: "helm",
    icon: "/icons/items/Dreugh_Helm.png",
  },
  "Imperial Chain Coif": {
    enchantPoints: 17.5,
    slot: "helm",
    icon: "/icons/items/Imperial_Chain_Coif.png",
  },
  "Imperial Dragonscale Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Imperial_Dragonscale_Helm.png",
  },
  "Indoril Helmet": {
    enchantPoints: 22.5,
    slot: "helm",
    icon: "/icons/items/Indoril_Helmet.png",
  },
  "Orcish Helm": {
    enchantPoints: 30,
    slot: "helm",
    icon: "/icons/items/Orcish_Helm.png",
  },
  "Gondolier's Helm": {
    enchantPoints: 10,
    slot: "helm",
    icon: "/icons/items/Gondolier's_Helm.png",
  },
  "Native Armun-An Bonemold Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Native_Armun-An_Bonemold_Helm.png",
  },
  "Native Chuzei Bonemold Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Native_Chuzei_Bonemold_Helm.png",
  },
  "Native Gah-Julan Bonemold Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Native_Gah-Julan_Bonemold_Helm.png",
  },
  "Redoran Master Helm": {
    enchantPoints: 22.5,
    slot: "helm",
    icon: "/icons/items/Redoran_Master_Helm.png",
  },
  "Bonemold L Pauldron": {
    enchantPoints: 1.6,
    slot: "leftPauldron",
    icon: "/icons/items/Bonemold_Pauldron.png",
  },
  "Bonemold R Pauldron": {
    enchantPoints: 1.6,
    slot: "rightPauldron",
    icon: "/icons/items/Bonemold_Pauldron.png",
  },
  "Armun-An Bonemold L Pauldron": {
    enchantPoints: 1.6,
    slot: "leftPauldron",
    icon: "/icons/items/Armun-An_Bonemold_Pauldron.png",
  },
  "Armun-An Bonemold R Pauldron": {
    enchantPoints: 1.6,
    slot: "rightPauldron",
    icon: "/icons/items/Armun-An_Bonemold_Pauldron.png",
  },
  "Gah-Julan Bonemold L Pauldron": {
    enchantPoints: 1.6,
    slot: "leftPauldron",
    icon: "/icons/items/Gah-Julan_Bonemold_Pauldron.png",
  },
  "Gah-Julan Bonemold R Pauldron": {
    enchantPoints: 1.6,
    slot: "rightPauldron",
    icon: "/icons/items/Gah-Julan_Bonemold_Pauldron.png",
  },
  "Indoril Left Pauldron": {
    enchantPoints: 1,
    slot: "leftPauldron",
    icon: "/icons/items/Indoril_Pauldron.png",
  },
  "Indoril Right Pauldron": {
    enchantPoints: 1,
    slot: "rightPauldron",
    icon: "/icons/items/Indoril_Pauldron.png",
  },
  "Orcish Left Pauldron": {
    enchantPoints: 2.4,
    slot: "leftPauldron",
    icon: "/icons/items/Orcish_Pauldron.png",
  },
  "Orcish Right Pauldron": {
    enchantPoints: 2.4,
    slot: "rightPauldron",
    icon: "/icons/items/Orcish_Pauldron.png",
  },
  "Bonemold Greaves": {
    enchantPoints: 2,
    slot: "greaves",
    icon: "/icons/items/Bonemold_Greaves.png",
  },
  "Imperial Chain Greaves": {
    enchantPoints: 7,
    slot: "greaves",
    icon: "/icons/items/Imperial_Chain_Greaves.png",
  },
  "Orcish Greaves": {
    enchantPoints: 3,
    slot: "greaves",
    icon: "/icons/items/Orcish_Greaves.png",
  },
  "Bonemold Boots": {
    enchantPoints: 7,
    slot: "boots",
    icon: "/icons/items/Bonemold_Boots.png",
  },
  "Indoril Boots": {
    enchantPoints: 2.6,
    slot: "boots",
    icon: "/icons/items/Indoril_Boots.png",
  },
  "Orcish Boots": {
    enchantPoints: 10.5,
    slot: "boots",
    icon: "/icons/items/Orcish_Boots.png",
  },
  "Bonemold Left Bracer": {
    enchantPoints: 16,
    slot: "leftGauntlet",
    icon: "/icons/items/Bonemold_Bracer.png",
  },
  "Bonemold Right Bracer": {
    enchantPoints: 16,
    slot: "rightGauntlet",
    icon: "/icons/items/Bonemold_Bracer.png",
  },
  "Indoril Left Gauntlet": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Indoril_Gauntlet.png",
  },
  "Indoril Right Gauntlet": {
    enchantPoints: 6,
    slot: "leftGauntlet",
    icon: "/icons/items/Indoril_Gauntlet.png",
  },
  "Orcish Left Bracer": {
    enchantPoints: 24,
    slot: "leftGauntlet",
    icon: "/icons/items/Orcish_Bracer.png",
  },
  "Orcish Right Bracer": {
    enchantPoints: 24,
    slot: "rightGauntlet",
    icon: "/icons/items/Orcish_Bracer.png",
  },
  "Bonemold Shield": {
    enchantPoints: 40,
    slot: "shield",
    icon: "/icons/items/Bonemold_Shield.png",
  },
  "Dreugh Shield": {
    enchantPoints: 45,
    slot: "shield",
    icon: "/icons/items/Dreugh_Shield.png",
  },
  "Indoril Shield": {
    enchantPoints: 45,
    slot: "shield",
    icon: "/icons/items/Indoril_Shield.png",
  },
  "Bonemold Tower Shield": {
    enchantPoints: 60,
    slot: "shield",
    icon: "/icons/items/Bonemold_Tower_Shield.png",
  },
  "Dragonscale Tower Shield": {
    enchantPoints: 60,
    slot: "shield",
    icon: "/icons/items/Dragonscale_Tower_Shield.png",
  },
  "Orcish Tower Shield": {
    enchantPoints: 90,
    slot: "shield",
    icon: "/icons/items/Orcish_Tower_Shield.png",
  },
  "Hlaalu Guard Shield": {
    enchantPoints: 60,
    slot: "shield",
    icon: "/icons/items/Hlaalu_Guard_Shield.png",
  },
  "Redoran Guard Shield": {
    enchantPoints: 60,
    slot: "shield",
    icon: "/icons/items/Redoran_Guard_Shield.png",
  },
  "Telvanni Guard Shield": {
    enchantPoints: 60,
    slot: "shield",
    icon: "/icons/items/Telvanni_Guard_Shield.png",
  },
  // Heavy
  "Iron Cuirass": {
    enchantPoints: 20,
    slot: "cuirass",
    icon: "/icons/items/Iron_Cuirass.png",
  },
  "Steel Cuirass": {
    enchantPoints: 20,
    slot: "cuirass",
    icon: "/icons/items/Steel_Cuirass.png",
  },
  "Nordic Iron Cuirass": {
    enchantPoints: 20,
    slot: "cuirass",
    icon: "/icons/items/Nordic_Iron_Cuirass.png",
  },
  "Imperial Steel Cuirass": {
    enchantPoints: 20,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Steel_Cuirass.png",
  },
  "Nordic Trollbone Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Nordic_Trollbone_Cuirass.png",
  },
  "Imperial Silver Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Silver_Cuirass.png",
  },
  "Imperial Templar Knight Cuirass": {
    enchantPoints: 20,
    slot: "cuirass",
    icon: "/icons/items/Imperial_Templar_Knight_Cuirass.png",
  },
  "Duke's Guard Silver Cuirass": {
    enchantPoints: 16,
    slot: "cuirass",
    icon: "/icons/items/Duke's_Guard_Silver_Cuirass.png",
  },
  "Dwemer Cuirass": {
    enchantPoints: 20,
    slot: "cuirass",
    icon: "/icons/items/Dwemer_Cuirass.png",
  },
  "Ebony Cuirass": {
    enchantPoints: 40,
    slot: "cuirass",
    icon: "/icons/items/Ebony_Cuirass.png",
  },
  "Daedric Cuirass": {
    enchantPoints: 60,
    slot: "cuirass",
    icon: "/icons/items/Daedric_Cuirass.png",
  },
  "Dwemer Helm": {
    enchantPoints: 25,
    slot: "helm",
    icon: "/icons/items/Dwemer_Helm.png",
  },
  "Ebony Closed Helm": {
    enchantPoints: 50,
    slot: "helm",
    icon: "/icons/items/Ebony_Closed_Helm.png",
  },
  "Imperial Silver Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Imperial_Silver_Helm.png",
  },
  "Imperial Steel Helmet": {
    enchantPoints: 25,
    slot: "helm",
    icon: "/icons/items/Imperial_Steel_Helmet.png",
  },
  "Iron Helmet": {
    enchantPoints: 2.5,
    slot: "helm",
    icon: "/icons/items/Iron_Helmet.png",
  },
  "Steel Helm": {
    enchantPoints: 25,
    slot: "helm",
    icon: "/icons/items/Steel_Helm.png",
  },
  "Imperial Templar Helmet": {
    enchantPoints: 25,
    slot: "helm",
    icon: "/icons/items/Imperial_Templar_Helmet.png",
  },
  "Daedric Face of God": {
    enchantPoints: 75,
    slot: "helm",
    icon: "/icons/items/Daedric_Face_of_God.png",
  },
  "Daedric Face of Inspiration": {
    enchantPoints: 75,
    slot: "helm",
    icon: "/icons/items/Daedric_Face_of_Inspiration.png",
  },
  "Daedric Face of Terror": {
    enchantPoints: 75,
    slot: "helm",
    icon: "/icons/items/Daedric_Face_of_Terror.png",
  },
  "Nordic Iron Helm": {
    enchantPoints: 25,
    slot: "helm",
    icon: "/icons/items/Nordic_Iron_Helm.png",
  },
  "Nordic Trollbone Helm": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Nordic_Trollbone_Helm.png",
  },
  "Dwemer Left Pauldron": {
    enchantPoints: 4,
    slot: "leftPauldron",
    icon: "/icons/items/Dwemer_Pauldron.png",
  },
  "Dwemer Right Pauldron": {
    enchantPoints: 4,
    slot: "rightPauldron",
    icon: "/icons/items/Dwemer_Pauldron.png",
  },
  "Daedric Left Pauldron": {
    enchantPoints: 6,
    slot: "leftPauldron",
    icon: "/icons/items/Daedric_Pauldron.png",
  },
  "Daedric Right Pauldron": {
    enchantPoints: 6,
    slot: "rightPauldron",
    icon: "/icons/items/Daedric_Pauldron.png",
  },
  "Ebony Left Pauldron": {
    enchantPoints: 4,
    slot: "leftPauldron",
    icon: "/icons/items/Ebony_Pauldron.png",
  },
  "Ebony Right Pauldron": {
    enchantPoints: 4,
    slot: "rightPauldron",
    icon: "/icons/items/Ebony_Pauldron.png",
  },
  "Imperial Chain Left Pauldron": {
    enchantPoints: 7,
    slot: "leftPauldron",
    icon: "/icons/items/Imperial_Chain_Pauldron.png",
  },
  "Imperial Chain Right Pauldron": {
    enchantPoints: 7,
    slot: "rightPauldron",
    icon: "/icons/items/Imperial_Chain_Pauldron.png",
  },
  "Imperial Steel Left Pauldron": {
    enchantPoints: 2,
    slot: "leftPauldron",
    icon: "/icons/items/Imperial_Steel_Pauldron.png",
  },
  "Imperial Steel Right Pauldron": {
    enchantPoints: 2,
    slot: "rightPauldron",
    icon: "/icons/items/Imperial_Steel_Pauldron.png",
  },
  "Imperial Templar Left Pauldron": {
    enchantPoints: 2,
    slot: "leftPauldron",
    icon: "/icons/items/Imperial_Templar_Pauldron.png",
  },
  "Imperial Templar Right Pauldron": {
    enchantPoints: 2,
    slot: "rightPauldron",
    icon: "/icons/items/Imperial_Templar_Pauldron.png",
  },
  "Iron Left Pauldron": {
    enchantPoints: 2,
    slot: "leftPauldron",
    icon: "/icons/items/Iron_Pauldron.png",
  },
  "Iron Right Pauldron": {
    enchantPoints: 2,
    slot: "rightPauldron",
    icon: "/icons/items/Iron_Pauldron.png",
  },
  "Steel Left Pauldron": {
    enchantPoints: 2,
    slot: "leftPauldron",
    icon: "/icons/items/Steel_Pauldron.png",
  },
  "Steel Right Pauldron": {
    enchantPoints: 2,
    slot: "rightPauldron",
    icon: "/icons/items/Steel_Pauldron.png",
  },
  "Daedric Greaves": {
    enchantPoints: 7.5,
    slot: "greaves",
    icon: "/icons/items/Daedric_Greaves.png",
  },
  "Dwemer Greaves": {
    enchantPoints: 2.5,
    slot: "greaves",
    icon: "/icons/items/Dwemer_Greaves.png",
  },
  "Ebony Greaves": {
    enchantPoints: 5,
    slot: "greaves",
    icon: "/icons/items/Ebony_Greaves.png",
  },
  "Imperial Steel Greaves": {
    enchantPoints: 2.5,
    slot: "greaves",
    icon: "/icons/items/Imperial_Steel_Greaves.png",
  },
  "Imperial Templar Greaves": {
    enchantPoints: 2.5,
    slot: "greaves",
    icon: "/icons/items/Imperial_Templar_Greaves.png",
  },
  "Iron Greaves": {
    enchantPoints: 2.5,
    slot: "greaves",
    icon: "/icons/items/Iron_Greaves.png",
  },
  "Steel Greaves": {
    enchantPoints: 2.5,
    slot: "greaves",
    icon: "/icons/items/Steel_Greaves.png",
  },
  "Daedric Boots": {
    enchantPoints: 26.3,
    slot: "boots",
    icon: "/icons/items/Daedric_Boots.png",
  },
  "Dwemer Boots": {
    enchantPoints: 8.8,
    slot: "boots",
    icon: "/icons/items/Dwemer_Boots.png",
  },
  "Ebony Boots": {
    enchantPoints: 17.5,
    slot: "boots",
    icon: "/icons/items/Ebony_Boots.png",
  },
  "Imperial Steel Boots": {
    enchantPoints: 8.8,
    slot: "boots",
    icon: "/icons/items/Imperial_Steel_Boots.png",
  },
  "Imperial Templar Boots": {
    enchantPoints: 8.8,
    slot: "boots",
    icon: "/icons/items/Imperial_Templar_Boots.png",
  },
  "Iron Boots": {
    enchantPoints: 2.6,
    slot: "boots",
    icon: "/icons/items/Iron_Boots.png",
  },
  "Steel Boots": {
    enchantPoints: 8.8,
    slot: "boots",
    icon: "/icons/items/Steel_Boots.png",
  },
  "Dwemer Left Bracer": {
    enchantPoints: 20,
    slot: "leftGauntlet",
    icon: "/icons/items/Dwemer_Bracer.png",
  },
  "Dwemer Right Bracer": {
    enchantPoints: 20,
    slot: "rightGauntlet",
    icon: "/icons/items/Dwemer_Bracer.png",
  },
  "Ebony Left Bracer": {
    enchantPoints: 40,
    slot: "leftGauntlet",
    icon: "/icons/items/Ebony_Bracer.png",
  },
  "Ebony Right Bracer": {
    enchantPoints: 40,
    slot: "rightGauntlet",
    icon: "/icons/items/Ebony_Bracer.png",
  },
  "Iron Left Bracer": {
    enchantPoints: 20,
    slot: "leftGauntlet",
    icon: "/icons/items/Iron_Bracer.png",
  },
  "Iron Right Bracer": {
    enchantPoints: 20,
    slot: "rightGauntlet",
    icon: "/icons/items/Iron_Bracer.png",
  },
  "Imperial Templar Left Bracer": {
    enchantPoints: 20,
    slot: "leftGauntlet",
    icon: "/icons/items/Imperial_Templar_Bracer.png",
  },
  "Imperial Templar Right Bracer": {
    enchantPoints: 20,
    slot: "rightGauntlet",
    icon: "/icons/items/Imperial_Templar_Bracer.png",
  },
  "Iron Left Gauntlet": {
    enchantPoints: 2.5,
    slot: "leftGauntlet",
    icon: "/icons/items/Iron_Gauntlet.png",
  },
  "Iron Right Gauntlet": {
    enchantPoints: 1,
    slot: "rightGauntlet",
    icon: "/icons/items/Iron_Gauntlet.png",
  },
  "Daedric Left Gauntlet": {
    enchantPoints: 60,
    slot: "leftGauntlet",
    icon: "/icons/items/Daedric_Gauntlet.png",
  },
  "Daedric Right Gauntlet": {
    enchantPoints: 60,
    slot: "rightGauntlet",
    icon: "/icons/items/Daedric_Gauntlet.png",
  },
  "Imperial Steel Left Gauntlet": {
    enchantPoints: 20,
    slot: "leftGauntlet",
    icon: "/icons/items/Imperial_Steel_Gauntlet.png",
  },
  "Imperial Steel Right Gauntlet": {
    enchantPoints: 20,
    slot: "rightGauntlet",
    icon: "/icons/items/Imperial_Steel_Gauntlet.png",
  },
  "Steel Left Gauntlet": {
    enchantPoints: 20,
    slot: "leftGauntlet",
    icon: "/icons/items/Steel_Gauntlet.png",
  },
  "Steel Right Gauntlet": {
    enchantPoints: 20,
    slot: "rightGauntlet",
    icon: "/icons/items/Steel_Gauntlet.png",
  },
  "Daedric Shield": {
    enchantPoints: 150,
    slot: "shield",
    icon: "/icons/items/Daedric_Shield.png",
  },
  "Dwemer Shield": {
    enchantPoints: 50,
    slot: "shield",
    icon: "/icons/items/Dwemer_Shield.png",
  },
  "Ebony Shield": {
    enchantPoints: 100,
    slot: "shield",
    icon: "/icons/items/Ebony_Shield.png",
  },
  "Iron Shield": {
    enchantPoints: 50,
    slot: "shield",
    icon: "/icons/items/Iron_Shield.png",
  },
  "Nordic Trollbone Shield": {
    enchantPoints: 40,
    slot: "shield",
    icon: "/icons/items/Nordic_Trollbone_Shield.png",
  },
  "Steel Shield": {
    enchantPoints: 50,
    slot: "shield",
    icon: "/icons/items/Steel_Shield.png",
  },
  "Daedric Tower Shield": {
    enchantPoints: 225,
    slot: "shield",
    icon: "/icons/items/Daedric_Tower_Shield.png",
  },
  "Ebony Tower Shield": {
    enchantPoints: 150,
    slot: "shield",
    icon: "/icons/items/Ebony_Tower_Shield.png",
  },
  "Imperial Shield": {
    enchantPoints: 50,
    slot: "shield",
    icon: "/icons/items/Imperial_Shield.png",
  },
  "Iron Tower Shield": {
    enchantPoints: 75,
    slot: "shield",
    icon: "/icons/items/Iron_Tower_Shield.png",
  },
  "Steel Tower Shield": {
    enchantPoints: 75,
    slot: "shield",
    icon: "/icons/items/Steel_Tower_Shield.png",
  },
  // Weapons (Base)
  "Chitin War Axe": {
    enchantPoints: 2.5,
    slot: "weapon",
    icon: "/icons/items/Chitin_War_Axe.png",
  },
  "Iron War Axe": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Iron_War_Axe.png",
  },
  "Steel Axe": {
    enchantPoints: 4.5,
    slot: "weapon",
    icon: "/icons/items/Steel_War_Axe.png",
  },
  "Steel War Axe": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Steel_War_Axe.png",
  },
  "Silver War Axe": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Silver_War_Axe.png",
  },
  "Dwarven War Axe": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Dwarven_War_Axe.png",
  },
  "Glass War Axe": {
    enchantPoints: 3,
    slot: "weapon",
    icon: "/icons/items/Glass_War_Axe.png",
  },
  "Ebony War Axe": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Ebony_War_Axe.png",
  },
  "Daedric War Axe": {
    enchantPoints: 15,
    slot: "weapon",
    icon: "/icons/items/Daedric_War_Axe.png",
  },
  "Miner's Pick": {
    enchantPoints: 1,
    slot: "weapon",
    icon: "/icons/items/Miner's_Pick.png",
  },
  "Iron Battle Axe": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Iron_Battle_Axe.png",
  },
  "Nordic Battle Axe": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Nordic_Battle_Axe.png",
  },
  "Steel Battle Axe": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Battle_Axe.png",
  },
  "Dwarven Battle Axe": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Battle_Axe.png",
  },
  "Orcish Battle Axe": {
    enchantPoints: 8,
    slot: "weapon",
    icon: "/icons/items/Orcish_Battle_Axe.png",
  },
  "Daedric Battle Axe": {
    enchantPoints: 16.5,
    slot: "weapon",
    icon: "/icons/items/Daedric_Battle_Axe.png",
  },
  "Chitin Club": {
    enchantPoints: 2,
    slot: "weapon",
    icon: "/icons/items/Chitin_Club.png",
  },
  "Iron Club": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Iron_Club.png",
  },
  "Steel Club": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Steel_Club.png",
  },
  "Spiked Club": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Spiked_Club.png",
  },
  "Dreugh Club": {
    enchantPoints: 3.6,
    slot: "weapon",
    icon: "/icons/items/Dreugh_Club.png",
  },
  "Daedric Club": {
    enchantPoints: 12,
    slot: "weapon",
    icon: "/icons/items/Daedric_Club.png",
  },
  "Iron Mace": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Iron_Mace.png",
  },
  "Steel Mace": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Steel_Mace.png",
  },
  "Dwarven Mace": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Mace.png",
  },
  "Ebony Mace": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Ebony_Mace.png",
  },
  "Daedric Mace": {
    enchantPoints: 15,
    slot: "weapon",
    icon: "/icons/items/Daedric_Mace.png",
  },
  "Iron Warhammer": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Iron_Warhammer.png",
  },
  "Steel Warhammer": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Warhammer.png",
  },
  "Dwarven Warhammer": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Warhammer.png",
  },
  "Orc Warhammer": {
    enchantPoints: 6.6,
    slot: "weapon",
    icon: "/icons/items/Orc_Warhammer.png",
  },
  "Sixth House Bell Hammer": {
    enchantPoints: 10.5,
    slot: "weapon",
    icon: "/icons/items/Sixth_House_Bell_Hammer.png",
  },
  "Daedric Warhammer": {
    enchantPoints: 16.5,
    slot: "weapon",
    icon: "/icons/items/Daedric_Warhammer.png",
  },
  "Wooden Staff": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Wooden_Staff.png",
  },
  "Steel Staff": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Steel_Staff.png",
  },
  "Silver Staff": {
    enchantPoints: 5.6,
    slot: "weapon",
    icon: "/icons/items/Silver_Staff.png",
  },
  "Dreugh Staff": {
    enchantPoints: 6.3,
    slot: "weapon",
    icon: "/icons/items/Dreugh_Staff.png",
  },
  "Glass Staff": {
    enchantPoints: 4.2,
    slot: "weapon",
    icon: "/icons/items/Glass_Staff.png",
  },
  "Ebony Staff": {
    enchantPoints: 90,
    slot: "weapon",
    icon: "/icons/items/Ebony_Staff.png",
  },
  "Daedric Staff": {
    enchantPoints: 21,
    slot: "weapon",
    icon: "/icons/items/Daedric_Staff.png",
  },
  "Chitin Dagger": {
    enchantPoints: 1,
    slot: "weapon",
    icon: "/icons/items/Chitin_Dagger.png",
  },
  "Iron Dagger": {
    enchantPoints: 2,
    slot: "weapon",
    icon: "/icons/items/Iron_Dagger.png",
  },
  "Chitin Shortsword": {
    enchantPoints: 2,
    slot: "weapon",
    icon: "/icons/items/Chitin_Shortsword.png",
  },
  "Iron Tanto": {
    enchantPoints: 2.2,
    slot: "weapon",
    icon: "/icons/items/Iron_Tanto.png",
  },
  "Steel Dagger": {
    enchantPoints: 2,
    slot: "weapon",
    icon: "/icons/items/Steel_Dagger.png",
  },
  "Iron Shortsword": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Iron_Shortsword.png",
  },
  "Iron Wakizashi": {
    enchantPoints: 4.5,
    slot: "weapon",
    icon: "/icons/items/Iron_Wakizashi.png",
  },
  "Steel Tanto": {
    enchantPoints: 2.2,
    slot: "weapon",
    icon: "/icons/items/Steel_Tanto.png",
  },
  "Imperial Shortsword": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Imperial_Shortsword.png",
  },
  "Silver Dagger": {
    enchantPoints: 1.6,
    slot: "weapon",
    icon: "/icons/items/Silver_Dagger.png",
  },
  "Steel Shortsword": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Steel_Shortsword.png",
  },
  "Steel Wakizashi": {
    enchantPoints: 4.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Wakizashi.png",
  },
  "Silver Shortsword": {
    enchantPoints: 3.6,
    slot: "weapon",
    icon: "/icons/items/Silver_Shortsword.png",
  },
  "Dwarven Shortsword": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Shortsword.png",
  },
  "Glass Dagger": {
    enchantPoints: 1.2,
    slot: "weapon",
    icon: "/icons/items/Glass_Dagger.png",
  },
  "Daedric Dagger": {
    enchantPoints: 6,
    slot: "weapon",
    icon: "/icons/items/Daedric_Dagger.png",
  },
  "Ebony Shortsword": {
    enchantPoints: 8,
    slot: "weapon",
    icon: "/icons/items/Ebony_Shortsword.png",
  },
  "Daedric Tanto": {
    enchantPoints: 6.6,
    slot: "weapon",
    icon: "/icons/items/Daedric_Tanto.png",
  },
  "Daedric Shortsword": {
    enchantPoints: 12,
    slot: "weapon",
    icon: "/icons/items/Daedric_Shortsword.png",
  },
  "Daedric Wakizashi": {
    enchantPoints: 13.5,
    slot: "weapon",
    icon: "/icons/items/Daedric_Wakizashi.png",
  },
  "Iron Saber": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Iron_Saber.png",
  },
  "Iron Broadsword": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Iron_Broadsword.png",
  },
  "Iron Longsword": {
    enchantPoints: 6,
    slot: "weapon",
    icon: "/icons/items/Iron_Longsword.png",
  },
  "Steel Saber": {
    enchantPoints: 5.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Saber.png",
  },
  "Steel Broadsword": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Imperial_Broadsword.png",
  },
  "Imperial Broadsword": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Imperial_Broadsword.png",
  },
  "Steel Longsword": {
    enchantPoints: 6,
    slot: "weapon",
    icon: "/icons/items/Steel_Longsword.png",
  },
  "Nordic Broadsword": {
    enchantPoints: 6,
    slot: "weapon",
    icon: "/icons/items/Nordic_Broadsword.png",
  },
  "Steel Katana": {
    enchantPoints: 6,
    slot: "weapon",
    icon: "/icons/items/Steel_Katana.png",
  },
  "Silver Longsword": {
    enchantPoints: 4.8,
    slot: "weapon",
    icon: "/icons/items/Silver_Longsword.png",
  },
  "Glass Longsword": {
    enchantPoints: 3.6,
    slot: "weapon",
    icon: "/icons/items/Glass_Longsword.png",
  },
  "Ebony Broadsword": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Ebony_Broadsword.png",
  },
  "Ebony Longsword": {
    enchantPoints: 12,
    slot: "weapon",
    icon: "/icons/items/Ebony_Longsword.png",
  },
  "Daedric Longsword": {
    enchantPoints: 18,
    slot: "weapon",
    icon: "/icons/items/Daedric_Longsword.png",
  },
  "Daedric Katana": {
    enchantPoints: 18,
    slot: "weapon",
    icon: "/icons/items/Daedric_Katana.png",
  },
  "Iron Claymore": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Iron_Claymore.png",
  },
  "Steel Claymore": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Steel_Claymore.png",
  },
  "Nordic Claymore": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Nordic_Claymore.png",
  },
  "Steel Dai-katana": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Steel_Dai-katana.png",
  },
  "Silver Claymore": {
    enchantPoints: 5.6,
    slot: "weapon",
    icon: "/icons/items/Silver_Claymore.png",
  },
  "Dwarven Claymore": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Claymore.png",
  },
  Foeburner: {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Claymore.png",
  },
  "Glass Claymore": {
    enchantPoints: 4.2,
    slot: "weapon",
    icon: "/icons/items/Glass_Claymore.png",
  },
  "Daedric Claymore": {
    enchantPoints: 21,
    slot: "weapon",
    icon: "/icons/items/Daedric_Claymore.png",
  },
  "Daedric Dai-katana": {
    enchantPoints: 21,
    slot: "weapon",
    icon: "/icons/items/Daedric_Dai-katana.png",
  },
  "Chitin Spear": {
    enchantPoints: 2.5,
    slot: "weapon",
    icon: "/icons/items/Chitin_Spear.png",
  },
  "Iron Spear": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Iron_Spear.png",
  },
  "Steel Spear": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Steel_Spear.png",
  },
  "Iron Halberd": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Iron_Halberd.png",
  },
  "Steel Halberd": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Steel_Halberd.png",
  },
  "Silver Spear": {
    enchantPoints: 4,
    slot: "weapon",
    icon: "/icons/items/Silver_Spear.png",
  },
  "Dwarven Spear": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Spear.png",
  },
  "Dwarven Halberd": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Halberd.png",
  },
  "Ebony Spear": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Ebony_Spear.png",
  },
  "Glass Halberd": {
    enchantPoints: 3,
    slot: "weapon",
    icon: "/icons/items/Glass_Halberd.png",
  },
  "Daedric Spear": {
    enchantPoints: 15,
    slot: "weapon",
    icon: "/icons/items/Daedric_Spear.png",
  },
  "Chitin Short Bow": {
    enchantPoints: 1,
    slot: "weapon",
    icon: "/icons/items/Chitin_Short_Bow.png",
  },
  "Short Bow": {
    enchantPoints: 2,
    slot: "weapon",
    icon: "/icons/items/Short_Bow.png",
  },
  "Long Bow": {
    enchantPoints: 3.5,
    slot: "weapon",
    icon: "/icons/items/Long_Bow.png",
  },
  "Steel Longbow": {
    enchantPoints: 3.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Longbow.png",
  },
  "Bonemold Long Bow": {
    enchantPoints: 40,
    slot: "weapon",
    icon: "/icons/items/Bonemold_Long_Bow.png",
  },
  "Daedric Long Bow": {
    enchantPoints: 10.5,
    slot: "weapon",
    icon: "/icons/items/Daedric_Long_Bow.png",
  },
  "Steel Crossbow": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Steel_Crossbow.png",
  },
  "Dwarven Crossbow": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Crossbow.png",
  },
  "Iron Throwing Knife": {
    enchantPoints: 1.5,
    slot: "weapon",
    icon: "/icons/items/Iron_Throwing_Knife.png",
  },
  "Chitin Throwing Star": {
    enchantPoints: 0.7,
    slot: "weapon",
    icon: "/icons/items/Chitin_Throwing_Star.png",
  },
  "Steel Throwing Knife": {
    enchantPoints: 1.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Throwing_Knife.png",
  },
  "Steel Dart": {
    enchantPoints: 1.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Dart.png",
  },
  "Steel Throwing Star": {
    enchantPoints: 1.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Throwing_Star.png",
  },
  "Silver Dart": {
    enchantPoints: 1.2,
    slot: "weapon",
    icon: "/icons/items/Silver_Dart.png",
  },
  "Silver Throwing Star": {
    enchantPoints: 1.2,
    slot: "weapon",
    icon: "/icons/items/Silver_Throwing_Star.png",
  },
  "Glass Throwing Knife": {
    enchantPoints: 0.9,
    slot: "weapon",
    icon: "/icons/items/Glass_Throwing_Knife.png",
  },
  "Glass Throwing Star": {
    enchantPoints: 0.9,
    slot: "weapon",
    icon: "/icons/items/Glass_Throwing_Star.png",
  },
  "Ebony Dart": {
    enchantPoints: 3,
    slot: "weapon",
    icon: "/icons/items/Ebony_Dart.png",
  },
  "Ebony Throwing Star": {
    enchantPoints: 3,
    slot: "weapon",
    icon: "/icons/items/Ebony_Throwing_Star.png",
  },
  "Daedric Dart": {
    enchantPoints: 4.5,
    slot: "weapon",
    icon: "/icons/items/Daedric_Dart.png",
  },
  // Clothing (Base)
  "Common Amulet": {
    enchantPoints: 1,
    slot: "amulet",
    icon: "/icons/items/Common_Amulet.png",
  },
  "Expensive Amulet": {
    enchantPoints: 15,
    slot: "amulet",
    icon: "/icons/items/Expensive_Amulet.png",
  },
  "Extravagant Sapphire Amulet": {
    enchantPoints: 60,
    slot: "amulet",
    icon: "/icons/items/Extravagant_Amulet.png",
  },
  "Extravagant Ruby Amulet": {
    enchantPoints: 60,
    slot: "amulet",
    icon: "/icons/items/Extravagant_Amulet.png",
  },
  "Exquisite Amulet": {
    enchantPoints: 120,
    slot: "amulet",
    icon: "/icons/items/Exquisite_Amulet.png",
  },
  "Common Belt": {
    enchantPoints: 1,
    slot: "belt",
    icon: "/icons/items/Common_Belt.png",
  },
  "Expensive Belt": {
    enchantPoints: 5,
    slot: "belt",
    icon: "/icons/items/Expensive_Belt.png",
  },
  "Extravagant Belt": {
    enchantPoints: 20,
    slot: "belt",
    icon: "/icons/items/Extravagant_Belt.png",
  },
  "Exquisite Belt": {
    enchantPoints: 40,
    slot: "belt",
    icon: "/icons/items/Exquisite_Belt.png",
  },
  "Imperial Belt": {
    enchantPoints: 0.5,
    slot: "belt",
    icon: "/icons/items/Common_Belt.png",
  },
  "Imperial Templar Belt": {
    enchantPoints: 10,
    slot: "belt",
    icon: "/icons/items/Imperial_Templar_Belt.png",
  },
  "Indoril Belt": {
    enchantPoints: 0.5,
    slot: "belt",
    icon: "/icons/items/Indoril_Belt.png",
  },
  "Common Left Glove": {
    enchantPoints: 1,
    slot: "leftGauntlet",
    icon: "/icons/items/Common_Glove.png",
  },
  "Common Right Glove": {
    enchantPoints: 1,
    slot: "rightGauntlet",
    icon: "/icons/items/Common_Glove.png",
  },
  "Expensive Left Glove": {
    enchantPoints: 5,
    slot: "leftGauntlet",
    icon: "/icons/items/Expensive_Glove.png",
  },
  "Expensive Right Glove": {
    enchantPoints: 5,
    slot: "rightGauntlet",
    icon: "/icons/items/Expensive_Glove.png",
  },
  "Extravagant Left Glove": {
    enchantPoints: 20,
    slot: "leftGauntlet",
    icon: "/icons/items/Extravagant_Glove.png",
  },
  "Extravagant Right Glove": {
    enchantPoints: 20,
    slot: "rightGauntlet",
    icon: "/icons/items/Extravagant_Glove.png",
  },
  "Common Pants": {
    enchantPoints: 2,
    slot: "pants",
    icon: "/icons/items/Common_Pants.png",
  },
  "Expensive Pants": {
    enchantPoints: 7.5,
    slot: "pants",
    icon: "/icons/items/Expensive_Pants.png",
  },
  "Extravagant Pants": {
    enchantPoints: 30,
    slot: "pants",
    icon: "/icons/items/Extravagant_Pants.png",
  },
  "Exquisite Pants": {
    enchantPoints: 60,
    slot: "pants",
    icon: "/icons/items/Exquisite_Pants.png",
  },
  "Common Ring": {
    enchantPoints: 1,
    slot: "ring",
    icon: "/icons/items/Common_Ring.png",
  },
  "Expensive Ring": {
    enchantPoints: 15,
    slot: "ring",
    icon: "/icons/items/Expensive_Ring.png",
  },
  "Extravagant Ring": {
    enchantPoints: 60,
    slot: "ring",
    icon: "/icons/items/Extravagant_Ring.png",
  },
  "Exquisite Ring": {
    enchantPoints: 120,
    slot: "ring",
    icon: "/icons/items/Exquisite_Ring.png",
  },
  "Common Robe": {
    enchantPoints: 1,
    slot: "robe",
    icon: "/icons/items/Common_Robe.png",
  },
  "Expensive Robe": {
    enchantPoints: 5,
    slot: "robe",
    icon: "/icons/items/Expensive_Robe.png",
  },
  "Extravagant Robe": {
    enchantPoints: 20,
    slot: "robe",
    icon: "/icons/items/Extravagant_Robe.png",
  },
  "Exquisite Robe": {
    enchantPoints: 40,
    slot: "robe",
    icon: "/icons/items/Exquisite_Robe.png",
  },
  "Common Shirt": {
    enchantPoints: 2,
    slot: "shirt",
    icon: "/icons/items/Common_Shirt.png",
  },
  "Gondolier Shirt": {
    enchantPoints: 10,
    slot: "shirt",
    icon: "/icons/items/Gondolier_Shirt.png",
  },
  "Expensive Shirt": {
    enchantPoints: 7.5,
    slot: "shirt",
    icon: "/icons/items/Expensive_Shirt.png",
  },
  "Extravagant Shirt": {
    enchantPoints: 30,
    slot: "shirt",
    icon: "/icons/items/Extravagant_Shirt.png",
  },
  "Exquisite Shirt": {
    enchantPoints: 60,
    slot: "shirt",
    icon: "/icons/items/Exquisite_Shirt.png",
  },
  "Common Shoes": {
    enchantPoints: 1,
    slot: "boots",
    icon: "/icons/items/Common_Shoes.png",
  },
  "Expensive Shoes": {
    enchantPoints: 5,
    slot: "boots",
    icon: "/icons/items/Expensive_Shoes.png",
  },
  "Extravagant Shoes": {
    enchantPoints: 20,
    slot: "boots",
    icon: "/icons/items/Extravagant_Shoes.png",
  },
  "Exquisite Shoes": {
    enchantPoints: 40,
    slot: "boots",
    icon: "/icons/items/Exquisite_Shoes.png",
  },
  "Common Skirt": {
    enchantPoints: 2,
    slot: "skirt",
    icon: "/icons/items/Common_Skirt.png",
  },
  "Expensive Skirt": {
    enchantPoints: 7.5,
    slot: "skirt",
    icon: "/icons/items/Expensive_Skirt.png",
  },
  "Extravagant Skirt": {
    enchantPoints: 30,
    slot: "skirt",
    icon: "/icons/items/Extravagant_Skirt.png",
  },
  "Exquisite Skirt": {
    enchantPoints: 60,
    slot: "skirt",
    icon: "/icons/items/Exquisite_Skirt.png",
  },
  "Imperial Skirt": {
    enchantPoints: 0.5,
    slot: "skirt",
    icon: "/icons/items/Imperial_Skirt.png",
  },
  "Imperial Templar Skirt": {
    enchantPoints: 0.5,
    slot: "skirt",
    icon: "/icons/items/Imperial_Templar_Skirt.png",
  },
  // Armour (Plugins)
  // Light
  "Domina Cuirass": {
    enchantPoints: 12,
    slot: "cuirass",
    icon: "/icons/items/Domina_Cuirass.png",
  },
  "Domina Helmet": {
    enchantPoints: 4,
    slot: "helm",
    icon: "/icons/items/Domina_Helmet.png",
  },
  "Domina Left Pauldron": {
    enchantPoints: 4,
    slot: "leftPauldron",
    icon: "/icons/items/Domina_Pauldron.png",
  },
  "Domina Right Pauldron": {
    enchantPoints: 4,
    slot: "rightPauldron",
    icon: "/icons/items/Domina_Pauldron.png",
  },
  "Domina Greaves": {
    enchantPoints: 4,
    slot: "greaves",
    icon: "/icons/items/Domina_Greaves.png",
  },
  "Domina Boots": {
    enchantPoints: 6,
    slot: "boots",
    icon: "/icons/items/Domina_Boots.png",
  },
  "Domina Left Gauntlet": {
    enchantPoints: 8,
    slot: "leftGauntlet",
    icon: "/icons/items/Domina_Gauntlet.png",
  },
  "Domina Right Gauntlet": {
    enchantPoints: 8,
    slot: "rightGauntlet",
    icon: "/icons/items/Domina_Gauntlet.png",
  },
  // Medium
  "Adamantium Cuirass": {
    enchantPoints: 30,
    slot: "cuirass",
    icon: "/icons/items/Adamantium_Cuirass.png",
  },
  "Adamantium Left Pauldron": {
    enchantPoints: 3,
    slot: "leftPauldron",
    icon: "/icons/items/Adamantium_Pauldron.png",
  },
  "Adamantium Right Pauldron": {
    enchantPoints: 10,
    slot: "rightPauldron",
    icon: "/icons/items/Adamantium_Pauldron.png",
  },
  "Adamantium Greaves": {
    enchantPoints: 3,
    slot: "greaves",
    icon: "/icons/items/Adamantium_Greaves.png",
  },
  "Adamantium Boots": {
    enchantPoints: 10,
    slot: "boots",
    icon: "/icons/items/Adamantium_Boots.png",
  },
  "Adamantium Left Bracer": {
    enchantPoints: 10,
    slot: "leftGauntlet",
    icon: "/icons/items/Adamantium_Bracer.png",
  },
  "Adamantium Right Bracer": {
    enchantPoints: 10,
    slot: "rightGauntlet",
    icon: "/icons/items/Adamantium_Bracer.png",
  },
  "Adamantium Helm of Tohan": {
    enchantPoints: 150,
    slot: "helm",
    icon: "/icons/items/Adamantium_Helm.png",
  },
  "Gold Armor Cuirass": {
    enchantPoints: 14,
    slot: "cuirass",
    icon: "/icons/items/Gold_Armor_Cuirass.png",
  },
  "Gold Armor Helmet": {
    enchantPoints: 9,
    slot: "helm",
    icon: "/icons/items/Gold_Armor_Helmet.png",
  },
  "Gold Armor Left Pauldron": {
    enchantPoints: 5,
    slot: "leftPauldron",
    icon: "/icons/items/Gold_Armor_Pauldron.png",
  },
  "Gold Armor Right Pauldron": {
    enchantPoints: 5,
    slot: "rightPauldron",
    icon: "/icons/items/Gold_Armor_Pauldron.png",
  },
  // Armour (Tribunal)
  // Light
  "Dark Brotherhood Helm": {
    enchantPoints: 17.5,
    slot: "helm",
    icon: "/icons/items/Dark_Brotherhood_Helm.png",
  },
  "Dark Brotherhood Cuirass": {
    enchantPoints: 10,
    slot: "cuirass",
    icon: "/icons/items/Dark_Brotherhood_Cuirass.png",
  },
  "Dark Brotherhood Left Pauldron": {
    enchantPoints: 1.2,
    slot: "leftPauldron",
    icon: "/icons/items/Dark_Brotherhood_Pauldron.png",
  },
  "Dark Brotherhood Right Pauldron": {
    enchantPoints: 1.2,
    slot: "rightPauldron",
    icon: "/icons/items/Dark_Brotherhood_Pauldron.png",
  },
  "Dark Brotherhood Greaves": {
    enchantPoints: 5,
    slot: "greaves",
    icon: "/icons/items/Dark_Brotherhood_Greaves.png",
  },
  "Dark Brotherhood Boots": {
    enchantPoints: 3,
    slot: "boots",
    icon: "/icons/items/Dark_Brotherhood_Boots.png",
  },
  "Dark Brotherhood Left Gauntlet": {
    enchantPoints: 10,
    slot: "leftGauntlet",
    icon: "/icons/items/Dark_Brotherhood_Gauntlet.png",
  },
  "Dark Brotherhood Right Gauntlet": {
    enchantPoints: 10,
    slot: "rightGauntlet",
    icon: "/icons/items/Dark_Brotherhood_Gauntlet.png",
  },
  "Goblin Buckler": {
    enchantPoints: 10,
    slot: "shield",
    icon: "/icons/items/Goblin_Buckler.png",
  },
  // Medium
  "Adamantium Helm": {
    enchantPoints: 50,
    slot: "helm",
    icon: "/icons/items/Adamantium_Helm.png",
  },
  "Royal Guard Helm": {
    enchantPoints: 30,
    slot: "helm",
    icon: "/icons/items/Royal_Guard_Helm.png",
  },
  "Royal Guard Cuirass": {
    enchantPoints: 25,
    slot: "cuirass",
    icon: "/icons/items/Royal_Guard_Cuirass.png",
  },
  "Royal Guard Left Pauldron": {
    enchantPoints: 3,
    slot: "leftPauldron",
    icon: "/icons/items/Royal_Guard_Pauldron.png",
  },
  "Royal Guard Right Pauldron": {
    enchantPoints: 3,
    slot: "rightPauldron",
    icon: "/icons/items/Royal_Guard_Pauldron.png",
  },
  "Royal Guard Greaves": {
    enchantPoints: 4,
    slot: "greaves",
    icon: "/icons/items/Royal_Guard_Greaves.png",
  },
  "Royal Guard Boots": {
    enchantPoints: 15,
    slot: "boots",
    icon: "/icons/items/Royal_Guard_Boots.png",
  },
  "Royal Guard Left Gauntlet": {
    enchantPoints: 12,
    slot: "leftGauntlet",
    icon: "/icons/items/Royal_Guard_Gauntlet.png",
  },
  "Royal Guard Right Gauntlet": {
    enchantPoints: 12,
    slot: "rightGauntlet",
    icon: "/icons/items/Royal_Guard_Gauntlet.png",
  },
  // Heavy
  "Dwemer Battle Shield": {
    enchantPoints: 50,
    slot: "shield",
    icon: "/icons/items/Dwemer_Battle_Shield.png",
  },
  "Her Hand's Helmet": {
    enchantPoints: 65,
    slot: "helm",
    icon: "/icons/items/Her_Hand's_Helmet.png",
  },
  "Her Hand's Cuirass": {
    enchantPoints: 55,
    slot: "cuirass",
    icon: "/icons/items/Her_Hand's_Cuirass.png",
  },
  "Her Hand's Left Pauldron": {
    enchantPoints: 5,
    slot: "leftPauldron",
    icon: "/icons/items/Her_Hand's_Pauldron.png",
  },
  "Her Hand's Right Pauldron": {
    enchantPoints: 5,
    slot: "rightPauldron",
    icon: "/icons/items/Her_Hand's_Pauldron.png",
  },
  "Her Hand's Greaves": {
    enchantPoints: 6,
    slot: "greaves",
    icon: "/icons/items/Her_Hand's_Greaves.png",
  },
  "Her Hand's Boots": {
    enchantPoints: 20,
    slot: "boots",
    icon: "/icons/items/Her_Hand's_Boots.png",
  },
  "Her Hand's Left Gauntlet": {
    enchantPoints: 50,
    slot: "leftGauntlet",
    icon: "/icons/items/Her_Hand's_Gauntlet.png",
  },
  "Her Hand's Right Gauntlet": {
    enchantPoints: 50,
    slot: "rightGauntlet",
    icon: "/icons/items/Her_Hand's_Gauntlet.png",
  },
  "Her Hand's Shield": {
    enchantPoints: 50,
    slot: "shield",
    icon: "/icons/items/Her_Hand's_Shield.png",
  },
  // Weapons (Tribunal)
  "Admantium Axe": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Adamantium_Axe.png",
  },
  "Adamantium Claymore": {
    enchantPoints: 15,
    slot: "weapon",
    icon: "/icons/items/Adamantium_Claymore.png",
  },
  "Adamantium Mace": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Adamantium_Mace.png",
  },
  "Adamantium Shortsword": {
    enchantPoints: 6,
    slot: "weapon",
    icon: "/icons/items/Adamantium_Shortsword.png",
  },
  "Adamantium Spear": {
    enchantPoints: 8,
    slot: "weapon",
    icon: "/icons/items/Adamantium_Spear.png",
  },
  "A Carved Ebony Dart": {
    enchantPoints: 3,
    slot: "weapon",
    icon: "/icons/items/Ebony_Dart.png",
  },
  "Dwarven Dart": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Dwarven_Dart.png",
  },
  "Spring Dart": {
    enchantPoints: 1.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Dart.png",
  },
  "Fine Spring Dart": {
    enchantPoints: 1.5,
    slot: "weapon",
    icon: "/icons/items/Steel_Dart.png",
  },
  "Ebony Scimitar": {
    enchantPoints: 80,
    slot: "weapon",
    icon: "/icons/items/Ebony_Scimitar.png",
  },
  "Goblin Sword": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Goblin_Sword.png",
  },
  "Goblin Club": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Goblin_Club.png",
  },
  // Clothing (Tribunal)
  // "Common Pants (Tribunal)": { enchantPoints: 2 },
  // "Expensive Pants (Tribunal)": { enchantPoints: 7.5 },
  // "Common Shirt (Tribunal)": { enchantPoints: 2 },
  "Expensive Shirt (Tribunal)": {
    enchantPoints: 10,
    slot: "shirt",
    icon: "/icons/items/Expensive_Shirt_Mournhold.png",
  },
  // "Common Shoes (Tribunal)": { enchantPoints: 1 },
  // "Expensive Shoes (Tribunal)": { enchantPoints: 5 },
  // "Common Skirt (Tribunal)": { enchantPoints: 2 },
  // "Expensive Skirt (Tribunal)": { enchantPoints: 7.5 },
  // Armour (Bloodmoon)
  // Light
  "Wolf Boots": {
    enchantPoints: 2,
    slot: "boots",
    icon: "/icons/items/Wolf_Boots.png",
  },
  "Wolf Cuirass": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Wolf_Cuirass.png",
  },
  "Wolf Greaves": {
    enchantPoints: 4.5,
    slot: "greaves",
    icon: "/icons/items/Wolf_Greaves.png",
  },
  "Wolf Helmet": {
    enchantPoints: 2,
    slot: "helm",
    icon: "/icons/items/Wolf_Helmet.png",
  },
  "Wolf Left Gauntlet": {
    enchantPoints: 1,
    slot: "leftGauntlet",
    icon: "/icons/items/Wolf_Gauntlet.png",
  },
  "Wolf Right Gauntlet": {
    enchantPoints: 1,
    slot: "rightGauntlet",
    icon: "/icons/items/Wolf_Gauntlet.png",
  },
  "Wolf Left Pauldron": {
    enchantPoints: 1.6,
    slot: "leftPauldron",
    icon: "/icons/items/Wolf_Pauldron.png",
  },
  "Wolf Right Pauldron": {
    enchantPoints: 1.6,
    slot: "rightPauldron",
    icon: "/icons/items/Wolf_Pauldron.png",
  },
  "Wolf Shield": {
    enchantPoints: 5,
    slot: "shield",
    icon: "/icons/items/Wolf_Shield.png",
  },
  "Riekling Shield": {
    enchantPoints: 8,
    slot: "shield",
    icon: "/icons/items/Riekling_Shield.png",
  },
  // Medium
  "Bear Boots": {
    enchantPoints: 2,
    slot: "boots",
    icon: "/icons/items/Bear_Boots.png",
  },
  "Bear Cuirass": {
    enchantPoints: 6,
    slot: "cuirass",
    icon: "/icons/items/Bear_Cuirass.png",
  },
  "Bear Greaves": {
    enchantPoints: 4.5,
    slot: "greaves",
    icon: "/icons/items/Bear_Greaves.png",
  },
  "Bear Helmet": {
    enchantPoints: 2,
    slot: "helm",
    icon: "/icons/items/Bear_Helmet.png",
  },
  "Bear Left Gauntlet": {
    enchantPoints: 1,
    slot: "leftGauntlet",
    icon: "/icons/items/Bear_Gauntlet.png",
  },
  "Bear Right Gauntlet": {
    enchantPoints: 1,
    slot: "rightGauntlet",
    icon: "/icons/items/Bear_Gauntlet.png",
  },
  "Bear Left Pauldron": {
    enchantPoints: 1.6,
    slot: "leftPauldron",
    icon: "/icons/items/Bear_Pauldron.png",
  },
  "Bear Right Pauldron": {
    enchantPoints: 1.6,
    slot: "rightPauldron",
    icon: "/icons/items/Bear_Pauldron.png",
  },
  "Bear Shield": {
    enchantPoints: 2,
    slot: "shield",
    icon: "/icons/items/Bear_Shield.png",
  },
  "Ice Armor Boots": {
    enchantPoints: 10,
    slot: "boots",
    icon: "/icons/items/Ice_Boots.png",
  },
  "Ice Armor Cuirass": {
    enchantPoints: 18,
    slot: "cuirass",
    icon: "/icons/items/Ice_Cuirass.png",
  },
  "Ice Armor Greaves": {
    enchantPoints: 10,
    slot: "greaves",
    icon: "/icons/items/Ice_Greaves.png",
  },
  "Ice Armor Helmet": {
    enchantPoints: 17.5,
    slot: "helm",
    icon: "/icons/items/Ice_Helmet.png",
  },
  "Ice Armor Left Gauntlet": {
    enchantPoints: 10,
    slot: "leftGauntlet",
    icon: "/icons/items/Ice_Gauntlet.png",
  },
  "Ice Armor Right Gauntlet": {
    enchantPoints: 10,
    slot: "rightGauntlet",
    icon: "/icons/items/Ice_Gauntlet.png",
  },
  "Ice Armor Left Pauldron": {
    enchantPoints: 1.8,
    slot: "leftPauldron",
    icon: "/icons/items/Ice_Pauldron.png",
  },
  "Ice Armor Right Pauldron": {
    enchantPoints: 1.8,
    slot: "rightPauldron",
    icon: "/icons/items/Ice_Pauldron.png",
  },
  "Ice Shield": {
    enchantPoints: 40,
    slot: "shield",
    icon: "/icons/items/Ice_Shield.png",
  },
  // Heavy
  "Nordic Mail Boots": {
    enchantPoints: 8.5,
    slot: "boots",
    icon: "/icons/items/Nordic_Mail_Boots.png",
  },
  "Nordic Mail Cuirass": {
    enchantPoints: 30,
    slot: "cuirass",
    icon: "/icons/items/Nordic_Mail_Cuirass.png",
  },
  "Nordic Mail Greaves": {
    enchantPoints: 8,
    slot: "greaves",
    icon: "/icons/items/Nordic_Mail_Greaves.png",
  },
  "Nordic Mail Helmet": {
    enchantPoints: 20,
    slot: "helm",
    icon: "/icons/items/Nordic_Mail_Helmet.png",
  },
  "Nordic Mail Left Gauntlet": {
    enchantPoints: 10,
    slot: "leftGauntlet",
    icon: "/icons/items/Nordic_Mail_Gauntlet.png",
  },
  "Nordic Mail Right Gauntlet": {
    enchantPoints: 10,
    slot: "rightGauntlet",
    icon: "/icons/items/Nordic_Mail_Gauntlet.png",
  },
  "Nordic Mail Left Pauldron": {
    enchantPoints: 10,
    slot: "leftPauldron",
    icon: "/icons/items/Nordic_Mail_Pauldron.png",
  },
  "Nordic Mail Right Pauldron": {
    enchantPoints: 10,
    slot: "rightPauldron",
    icon: "/icons/items/Nordic_Mail_Pauldron.png",
  },
  "Nordic Mail Shield": {
    enchantPoints: 10,
    slot: "shield",
    icon: "/icons/items/Nordic_Mail_Shield.png",
  },
  // Weapons (Bloodmoon)
  "Huntsman Axe": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Huntsman_Axe.png",
  },
  "Huntsman War Axe": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Huntsman_War_Axe.png",
  },
  "Stalhrim War Axe": {
    enchantPoints: 25,
    slot: "weapon",
    icon: "/icons/items/Stalhrim_War_Axe.png",
  },
  "Nordic Silver Axe": {
    enchantPoints: 6.5,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Axe.png",
  },
  "Nordic Silver Battleaxe": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Battleaxe.png",
  },
  "Stalhrim Mace": {
    enchantPoints: 20,
    slot: "weapon",
    icon: "/icons/items/Ice_Mace.png",
  },
  "Nordic Silver Mace": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Mace.png",
  },
  "Huntsman Crossbow": {
    enchantPoints: 10,
    slot: "weapon",
    icon: "/icons/items/Huntsman_Crossbow.png",
  },
  "Huntsman Longsword": {
    enchantPoints: 5,
    slot: "weapon",
    icon: "/icons/items/Huntsman_Longsword.png",
  },
  "Stalhrim Longsword": {
    enchantPoints: 8,
    slot: "weapon",
    icon: "/icons/items/Ice_Longsword.png",
  },
  "Nordic Silver Longsword": {
    enchantPoints: 8,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Longsword.png",
  },
  "Riekling Blade": {
    enchantPoints: 3.5,
    slot: "weapon",
    icon: "/icons/items/Riekling_Blade.png",
  },
  "Rusted Riekling Blade": {
    enchantPoints: 3.5,
    slot: "weapon",
    icon: "/icons/items/Riekling_Blade.png",
  },
  "Nordic Silver Claymore": {
    enchantPoints: 15,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Claymore.png",
  },
  "Stalhrim Dagger": {
    enchantPoints: 6.5,
    slot: "weapon",
    icon: "/icons/items/Ice_Dagger.png",
  },
  "Nordic Silver Dagger": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Dagger.png",
  },
  "Nordic Silver Shortsword": {
    enchantPoints: 7,
    slot: "weapon",
    icon: "/icons/items/Nordic_Silver_Shortsword.png",
  },
  "Riekling Lance": {
    enchantPoints: 8,
    slot: "weapon",
    icon: "/icons/items/Riekling_Lance.png",
  },
  "Huntsman Spear": {
    enchantPoints: 8.5,
    slot: "weapon",
    icon: "/icons/items/Huntsman_Spear.png",
  },
  // Clothing (Bloodmoon)
  "Left Glove (Bloodmoon 1)": {
    enchantPoints: 2,
    slot: "leftGauntlet",
    icon: "/icons/items/Common_Glove_Bloodmoon_1.png",
  },
  "Right Glove (Bloodmoon 1)": {
    enchantPoints: 2,
    slot: "rightGauntlet",
    icon: "/icons/items/Common_Glove_Bloodmoon_1.png",
  },
  "Left Glove (Bloodmoon 2)": {
    enchantPoints: 1,
    slot: "leftGauntlet",
    icon: "/icons/items/Common_Glove_Bloodmoon_2.png",
  },
  "Right Glove (Bloodmoon 2)": {
    enchantPoints: 1,
    slot: "rightGauntlet",
    icon: "/icons/items/Common_Glove_Bloodmoon_2.png",
  },
  // "Common Pants": { enchantPoints: 2 },
  "Common Robe (Bloodmoon)": {
    enchantPoints: 5,
    slot: "robe",
    icon: "/icons/items/Common_Robe_Bloodmoon.png",
  },
  "Glenmoril Witch Robe": {
    enchantPoints: 1,
    slot: "robe",
    icon: "/icons/items/Glenmoril_Witch_Robe.png",
  },
  // "Common Shirt": { enchantPoints: 2 },
  // "Common Shoes": { enchantPoints: 1 },
};
