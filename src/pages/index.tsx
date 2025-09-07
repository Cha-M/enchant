import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useCallback, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Effect {
  skill: string;
  baseCost: number;
  hasMagnitude: boolean;
  hasDuration: boolean;
  hasArea: boolean;
}

// const effects: Effect[] = [{effect: "Absorb Attribute", skill: "Mysticism", baseCost: 2, hasMagnitude: true}, {effect: "Absorb Fatigue", skill: "Mysticism", baseCost: 4, hasMagnitude: true}, {effect: "Absorb Health", skill: "Mysticism", baseCost: 8, hasMagnitude: true}, {effect: "Absorb Magicka", skill: "Mysticism", baseCost: 8, hasMagnitude: true}, {effect: "Absorb Skill", skill: "Mysticism", baseCost: 2, hasMagnitude: true}, {effect: "Almsivi Intervention", skill: "Mysticism", baseCost: 150, hasMagnitude: false}, {effect: "Blind", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Bound Battle Axe", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Boots", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Cuirass", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Dagger", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Gloves", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Helm", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Longbow", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Longsword", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Mace", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Shield", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Bound Spear", skill: "Conjuration", baseCost: 2, hasMagnitude: true}, {effect: "Burden", skill: "Alteration", baseCost: 1, hasMagnitude: true}, {effect: "Call Bear", skill: "Conjuration", baseCost: 30, hasMagnitude: true}, {effect: "Call Wolf", skill: "Conjuration", baseCost: 30, hasMagnitude: true}, {effect: "Calm Creature", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Calm Humanoid", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Chameleon", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Charm", skill: "Illusion", baseCost: 5, hasMagnitude: true}, {effect: "Command Creature", skill: "Conjuration", baseCost: 15, hasMagnitude: true}, {effect: "Command Humanoid", skill: "Conjuration", baseCost: 15, hasMagnitude: true}, {effect: "Corprus", skill: "Destruction", baseCost: 2500, hasMagnitude: false}, {effect: "Cure Blight Disease", skill: "Restoration", baseCost: 2000, hasMagnitude: false}, {effect: "Cure Common Disease", skill: "Restoration", baseCost: 300, hasMagnitude: false}, {effect: "Cure Corprus Disease", skill: "Restoration", baseCost: 2500, hasMagnitude: false}, {effect: "Cure Paralyzation", skill: "Restoration", baseCost: 100, hasMagnitude: false}, {effect: "Cure Poison", skill: "Restoration", baseCost: 100, hasMagnitude: false}, {effect: "Damage Attribute", skill: "Destruction", baseCost: 8, hasMagnitude: true}, {effect: "Damage Fatigue", skill: "Destruction", baseCost: 4, hasMagnitude: true}, {effect: "Damage Health", skill: "Destruction", baseCost: 8, hasMagnitude: true}, {effect: "Damage Magicka", skill: "Destruction", baseCost: 8, hasMagnitude: true}, {effect: "Damage Skill", skill: "Destruction", baseCost: 8, hasMagnitude: true}, {effect: "Demoralize Creature", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Demoralize Humanoid", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Detect Animal", skill: "Mysticism", baseCost: 0.75, hasMagnitude: true}, {effect: "Detect Enchantment", skill: "Mysticism", baseCost: 1, hasMagnitude: true}, {effect: "Detect Key", skill: "Mysticism", baseCost: 1, hasMagnitude: true}, {effect: "Disintegrate Armor", skill: "Destruction", baseCost: 6, hasMagnitude: true}, {effect: "Disintegrate Weapon", skill: "Destruction", baseCost: 6, hasMagnitude: true}, {effect: "Dispel", skill: "Mysticism", baseCost: 5, hasMagnitude: true}, {effect: "Divine Intervention", skill: "Mysticism", baseCost: 150, hasMagnitude: false}, {effect: "Drain Attribute", skill: "Destruction", baseCost: 1, hasMagnitude: true}, {effect: "Drain Fatigue", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Drain Health", skill: "Destruction", baseCost: 4, hasMagnitude: true}, {effect: "Drain Magicka", skill: "Destruction", baseCost: 4, hasMagnitude: true}, {effect: "Drain Skill", skill: "Destruction", baseCost: 1, hasMagnitude: true}, {effect: "Feather", skill: "Alteration", baseCost: 1, hasMagnitude: true}, {effect: "Fire Damage", skill: "Destruction", baseCost: 5, hasMagnitude: true}, {effect: "Fire Shield", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Fortify Attack", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Fortify Attribute", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Fortify Fatigue", skill: "Restoration", baseCost: 0.5, hasMagnitude: true}, {effect: "Fortify Health", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Fortify Magicka", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Fortify Maximum Magicka", skill: "Restoration", baseCost: 4, hasMagnitude: true}, {effect: "Fortify Skill", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Frenzy Creature", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Frenzy Humanoid", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Frost Damage", skill: "Destruction", baseCost: 5, hasMagnitude: true}, {effect: "Frost Shield", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Invisibility", skill: "Illusion", baseCost: 20, hasMagnitude: false}, {effect: "Jump", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Levitate", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Light", skill: "Illusion", baseCost: 0.2, hasMagnitude: true}, {effect: "Lightning Shield", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Lock", skill: "Alteration", baseCost: 2, hasMagnitude: true}, {effect: "Mark", skill: "Mysticism", baseCost: 350, hasMagnitude: false}, {effect: "Night Eye", skill: "Illusion", baseCost: 0.2, hasMagnitude: true}, {effect: "Open", skill: "Alteration", baseCost: 6, hasMagnitude: true}, {effect: "Paralyze", skill: "Illusion", baseCost: 40, hasMagnitude: false}, {effect: "Poison", skill: "Destruction", baseCost: 9, hasMagnitude: true}, {effect: "Rally Creature", skill: "Illusion", baseCost: 0.2, hasMagnitude: true}, {effect: "Rally Humanoid", skill: "Illusion", baseCost: 0.2, hasMagnitude: true}, {effect: "Recall", skill: "Mysticism", baseCost: 350, hasMagnitude: false}, {effect: "Reflect", skill: "Mysticism", baseCost: 10, hasMagnitude: true}, {effect: "Remove Curse", skill: "Restoration", baseCost: 15, hasMagnitude: true}, {effect: "Resist Blight Disease", skill: "Restoration", baseCost: 5, hasMagnitude: true}, {effect: "Resist Common Disease", skill: "Restoration", baseCost: 2, hasMagnitude: true}, {effect: "Resist Corprus Disease", skill: "Restoration", baseCost: 5, hasMagnitude: true}, {effect: "Resist Fire", skill: "Restoration", baseCost: 2, hasMagnitude: true}, {effect: "Resist Frost", skill: "Restoration", baseCost: 2, hasMagnitude: true}, {effect: "Resist Magicka", skill: "Restoration", baseCost: 2, hasMagnitude: true}, {effect: "Resist Normal Weapons", skill: "Restoration", baseCost: 5, hasMagnitude: true}, {effect: "Resist Paralysis", skill: "Restoration", baseCost: 0.2, hasMagnitude: true}, {effect: "Resist Poison", skill: "Restoration", baseCost: 2, hasMagnitude: true}, {effect: "Resist Shock", skill: "Restoration", baseCost: 2, hasMagnitude: true}, {effect: "Restore Attribute", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Restore Fatigue", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Restore Health", skill: "Restoration", baseCost: 5, hasMagnitude: true}, {effect: "Restore Magicka", skill: "Restoration", baseCost: 5, hasMagnitude: true}, {effect: "Restore Skill", skill: "Restoration", baseCost: 1, hasMagnitude: true}, {effect: "Sanctuary", skill: "Illusion", baseCost: 1, hasMagnitude: true}, {effect: "Shield", skill: "Alteration", baseCost: 2, hasMagnitude: true}, {effect: "Shock Damage", skill: "Destruction", baseCost: 7, hasMagnitude: true}, {effect: "Silence", skill: "Illusion", baseCost: 40, hasMagnitude: false}, {effect: "Slowfall", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Soultrap", skill: "Mysticism", baseCost: 2, hasMagnitude: false}, {effect: "Sound", skill: "Illusion", baseCost: 3, hasMagnitude: true}, {effect: "Spell Absorption", skill: "Mysticism", baseCost: 10, hasMagnitude: true}, {effect: "Stunted Magicka", skill: "Destruction", baseCost: 1, hasMagnitude: true}, {effect: "Summon Ancestral Ghost", skill: "Conjuration", baseCost: 7, hasMagnitude: true}, {effect: "Summon Bonelord", skill: "Conjuration", baseCost: 25, hasMagnitude: true}, {effect: "Summon Bonewalker", skill: "Conjuration", baseCost: 13, hasMagnitude: true}, {effect: "Summon Bonewolf", skill: "Conjuration", baseCost: 30, hasMagnitude: true}, {effect: "Summon Centurion Sphere", skill: "Conjuration", baseCost: 25, hasMagnitude: true}, {effect: "Summon Clannfear", skill: "Conjuration", baseCost: 22, hasMagnitude: true}, {effect: "Summon Daedroth", skill: "Conjuration", baseCost: 32, hasMagnitude: true}, {effect: "Summon Dremora", skill: "Conjuration", baseCost: 28, hasMagnitude: true}, {effect: "Summon Fabricant", skill: "Conjuration", baseCost: 10, hasMagnitude: true}, {effect: "Summon Flame Atronach", skill: "Conjuration", baseCost: 23, hasMagnitude: true}, {effect: "Summon Frost Atronach", skill: "Conjuration", baseCost: 27, hasMagnitude: true}, {effect: "Summon Golden Saint", skill: "Conjuration", baseCost: 55, hasMagnitude: true}, {effect: "Summon Greater Bonewalker", skill: "Conjuration", baseCost: 15, hasMagnitude: true}, {effect: "Summon Hunger", skill: "Conjuration", baseCost: 29, hasMagnitude: true}, {effect: "Summon Scamp", skill: "Conjuration", baseCost: 12, hasMagnitude: true}, {effect: "Summon Skeletal Minion", skill: "Conjuration", baseCost: 13, hasMagnitude: true}, {effect: "Summon Storm Atronach", skill: "Conjuration", baseCost: 38, hasMagnitude: true}, {effect: "Summon Winged Twilight", skill: "Conjuration", baseCost: 52, hasMagnitude: true}, {effect: "Sun Damage", skill: "Destruction", baseCost: 1, hasMagnitude: true}, {effect: "Swift Swim", skill: "Alteration", baseCost: 2, hasMagnitude: true}, {effect: "Telekinesis", skill: "Mysticism", baseCost: 1, hasMagnitude: true}, {effect: "Turn Undead", skill: "Conjuration", baseCost: 0.2, hasMagnitude: true}, {effect: "Vampirism", skill: "Destruction", baseCost: 5, hasMagnitude: true}, {effect: "Water Breathing", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Water Walking", skill: "Alteration", baseCost: 3, hasMagnitude: true}, {effect: "Weakness to Blight Disease", skill: "Destruction", baseCost: 4, hasMagnitude: true}, {effect: "Weakness to Common Disease", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Weakness to Corprus Disease", skill: "Destruction", baseCost: 4, hasMagnitude: true}, {effect: "Weakness to Fire", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Weakness to Frost", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Weakness to Magicka", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Weakness to Normal Weapons", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Weakness to Poison", skill: "Destruction", baseCost: 2, hasMagnitude: true}, {effect: "Weakness to Shock", skill: "Destruction", baseCost: 2, hasMagnitude: true}];
const effects: Record<string, Effect> = {
  "Absorb Attribute": {
    skill: "Mysticism",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Absorb Fatigue": {
    skill: "Mysticism",
    baseCost: 4,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Absorb Health": {
    skill: "Mysticism",
    baseCost: 8,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Absorb Magicka": {
    skill: "Mysticism",
    baseCost: 8,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Absorb Skill": {
    skill: "Mysticism",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Almsivi Intervention": {
    skill: "Mysticism",
    baseCost: 150,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  Blind: {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Bound Battle Axe": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Boots": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Cuirass": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Dagger": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Gloves": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Helm": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Longbow": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Longsword": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Mace": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Shield": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Bound Spear": {
    skill: "Conjuration",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  Burden: {
    skill: "Alteration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Call Bear": {
    skill: "Conjuration",
    baseCost: 30,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Call Wolf": {
    skill: "Conjuration",
    baseCost: 30,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Calm Creature": {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Calm Humanoid": {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Chameleon: {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Charm: {
    skill: "Illusion",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Command Creature": {
    skill: "Conjuration",
    baseCost: 15,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Command Humanoid": {
    skill: "Conjuration",
    baseCost: 15,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Cure Blight Disease": {
    skill: "Restoration",
    baseCost: 2000,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  "Cure Common Disease": {
    skill: "Restoration",
    baseCost: 300,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  "Cure Paralyzation": {
    skill: "Restoration",
    baseCost: 100,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  "Cure Poison": {
    skill: "Restoration",
    baseCost: 100,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  "Damage Attribute": {
    skill: "Destruction",
    baseCost: 8,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Damage Fatigue": {
    skill: "Destruction",
    baseCost: 4,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Damage Health": {
    skill: "Destruction",
    baseCost: 8,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Damage Magicka": {
    skill: "Destruction",
    baseCost: 8,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Damage Skill": {
    skill: "Destruction",
    baseCost: 8,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Demoralize Creature": {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Demoralize Humanoid": {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Detect Animal": {
    skill: "Mysticism",
    baseCost: 0.75,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: false,
  },
  "Detect Enchantment": {
    skill: "Mysticism",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: false,
  },
  "Detect Key": {
    skill: "Mysticism",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: false,
  },
  "Disintegrate Armor": {
    skill: "Destruction",
    baseCost: 6,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Disintegrate Weapon": {
    skill: "Destruction",
    baseCost: 6,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Dispel: {
    skill: "Mysticism",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: false,
    hasArea: true,
  },
  "Divine Intervention": {
    skill: "Mysticism",
    baseCost: 150,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  "Drain Attribute": {
    skill: "Destruction",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Drain Fatigue": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Drain Health": {
    skill: "Destruction",
    baseCost: 4,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Drain Magicka": {
    skill: "Destruction",
    baseCost: 4,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Drain Skill": {
    skill: "Destruction",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Feather: {
    skill: "Alteration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fire Damage": {
    skill: "Destruction",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fire Shield": {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fortify Attack": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fortify Attribute": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fortify Fatigue": {
    skill: "Restoration",
    baseCost: 0.5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fortify Health": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fortify Magicka": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Fortify Skill": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Frenzy Creature": {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Frenzy Humanoid": {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Frost Damage": {
    skill: "Destruction",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Frost Shield": {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Invisibility: {
    skill: "Illusion",
    baseCost: 20,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: true,
  },
  Jump: {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Levitate: {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Light: {
    skill: "Illusion",
    baseCost: 0.2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Lightning Shield": {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Lock: {
    skill: "Alteration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: false,
    hasArea: true,
  },
  Mark: {
    skill: "Mysticism",
    baseCost: 350,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  "Night Eye": {
    skill: "Illusion",
    baseCost: 0.2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Open: {
    skill: "Alteration",
    baseCost: 6,
    hasMagnitude: true,
    hasDuration: false,
    hasArea: true,
  },
  Paralyze: {
    skill: "Illusion",
    baseCost: 40,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: true,
  },
  Poison: {
    skill: "Destruction",
    baseCost: 9,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Rally Creature": {
    skill: "Illusion",
    baseCost: 0.2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Rally Humanoid": {
    skill: "Illusion",
    baseCost: 0.2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Recall: {
    skill: "Mysticism",
    baseCost: 350,
    hasMagnitude: false,
    hasDuration: false,
    hasArea: false,
  },
  Reflect: {
    skill: "Mysticism",
    baseCost: 10,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Blight Disease": {
    skill: "Restoration",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Common Disease": {
    skill: "Restoration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Fire": {
    skill: "Restoration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Frost": {
    skill: "Restoration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Magicka": {
    skill: "Restoration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Normal Weapons": {
    skill: "Restoration",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Paralysis": {
    skill: "Restoration",
    baseCost: 0.2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Poison": {
    skill: "Restoration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Resist Shock": {
    skill: "Restoration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Restore Attribute": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Restore Fatigue": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Restore Health": {
    skill: "Restoration",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Restore Magicka": {
    skill: "Restoration",
    baseCost: 5,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Restore Skill": {
    skill: "Restoration",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Sanctuary: {
    skill: "Illusion",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Shield: {
    skill: "Alteration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Shock Damage": {
    skill: "Destruction",
    baseCost: 7,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Silence: {
    skill: "Illusion",
    baseCost: 40,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: true,
  },
  Slowfall: {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Soultrap: {
    skill: "Mysticism",
    baseCost: 2,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  Sound: {
    skill: "Illusion",
    baseCost: 3,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Spell Absorption": {
    skill: "Mysticism",
    baseCost: 10,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Summon Ancestral Ghost": {
    skill: "Conjuration",
    baseCost: 7,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Bonelord": {
    skill: "Conjuration",
    baseCost: 25,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Bonewalker": {
    skill: "Conjuration",
    baseCost: 13,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Bonewolf": {
    skill: "Conjuration",
    baseCost: 30,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Centurion Sphere": {
    skill: "Conjuration",
    baseCost: 25,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Clannfear": {
    skill: "Conjuration",
    baseCost: 22,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Daedroth": {
    skill: "Conjuration",
    baseCost: 32,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Dremora": {
    skill: "Conjuration",
    baseCost: 28,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Fabricant": {
    skill: "Conjuration",
    baseCost: 10,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Flame Atronach": {
    skill: "Conjuration",
    baseCost: 23,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Frost Atronach": {
    skill: "Conjuration",
    baseCost: 27,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Golden Saint": {
    skill: "Conjuration",
    baseCost: 55,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Greater Bonewalker": {
    skill: "Conjuration",
    baseCost: 15,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Hunger": {
    skill: "Conjuration",
    baseCost: 29,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Scamp": {
    skill: "Conjuration",
    baseCost: 12,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Skeletal Minion": {
    skill: "Conjuration",
    baseCost: 13,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Storm Atronach": {
    skill: "Conjuration",
    baseCost: 38,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Summon Winged Twilight": {
    skill: "Conjuration",
    baseCost: 52,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: false,
  },
  "Swift Swim": {
    skill: "Alteration",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  Telekinesis: {
    skill: "Mysticism",
    baseCost: 1,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Turn Undead": {
    skill: "Conjuration",
    baseCost: 0.2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Water Breathing": {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: true,
  },
  "Water Walking": {
    skill: "Alteration",
    baseCost: 3,
    hasMagnitude: false,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Blight Disease": {
    skill: "Destruction",
    baseCost: 4,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Common Disease": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Fire": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Frost": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Magicka": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Normal Weapons": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Poison": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
  "Weakness to Shock": {
    skill: "Destruction",
    baseCost: 2,
    hasMagnitude: true,
    hasDuration: true,
    hasArea: true,
  },
};

const targetMultipliers: Record<string, number> = {
  Touch: 1,
  Self: 1,
  Target: 1.5,
};

interface RowData {
  index: number;
  effect: string;
  min?: number;
  max?: number;
  duration?: number;
  area?: number;
  target: "Touch" | "Self" | "Target" | "Constant Effect";
  cost: number;
  multiplier: number;
  compoundedCost: number;
}

export default function Home() {
  const [rows, setRows] = useState<RowData[]>([
    {
      index: 0,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Attribute",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
    {
      index: 1,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Fatigue",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
    {
      index: 2,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Health",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
    {
      index: 3,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Magicka",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newEffect, setNewEffect] = useState<RowData>();

  const updateCosts = () =>
    setRows((currentRows) =>
      currentRows.map((row) => {
        const baseCost = effects[row.effect].baseCost;

        const min = effects[row.effect].hasMagnitude ? row.min! : 1;
        const max = effects[row.effect].hasMagnitude ? row.max! : 1;
        const duration = effects[row.effect].hasDuration ? row.duration! : 1;
        const area = effects[row.effect].hasArea ? row.area! : 0;

        const newCost =
          row.target === "Constant Effect"
            ? baseCost * (((min + max) * 100 + area) / 40)
            : targetMultipliers[row.target] *
              baseCost *
              (((min + max) * duration + area) / 40);

        const newMultiplier = currentRows.length - row.index;
        const newCompoundedCost = newCost * newMultiplier;
        return {
          ...row,
          cost: newCost,
          multiplier: newMultiplier,
          compoundedCost: newCompoundedCost,
        };
      })
    );

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {isModalOpen && (
          <div>
            <div className="flex flex-col">
              <h2 className="text-l font-bold mb-4">Create Effect</h2>
              <table>
                <thead>
                  <tr>
                    <th>Effect</th>
                    <th>Target</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Duration</th>
                    <th>Area</th>
                    <th>Cost</th>
                    <th>Multiplier</th>
                    <th>Compounded Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        value={newEffect?.effect || "Absorb Attribute"}
                        onChange={(e) =>
                          setNewEffect((prev) => ({
                            ...prev!,
                            effect: e.target.value,
                          }))
                        }
                      >
                        {Object.keys(effects).map((effectName) => (
                          <option key={effectName} value={effectName}>
                            {effectName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        value={newEffect?.target || "Touch"}
                        onChange={(e) =>
                          setNewEffect((prev) => ({
                            ...prev!,
                            target: e.target.value as RowData["target"],
                          }))
                        }
                      >
                        <option value="Touch">Touch</option>
                        <option value="Target">Target</option>
                        <option value="Self">Self</option>
                        <option value="Constant Effect">Constant Effect</option>
                      </select>
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect?.effect]?.hasMagnitude ? (
                        <input
                          type="number"
                          value={newEffect?.min || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              min: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect?.effect]?.hasMagnitude ? (
                        <input
                          type="number"
                          value={newEffect?.max || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              max: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect?.effect]?.hasDuration ? (
                        <input
                          type="number"
                          value={newEffect?.duration || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              duration: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect?.effect]?.hasArea ? (
                        <input
                          type="number"
                          value={newEffect?.area || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              area: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>{newEffect?.cost || 0}</td>
                    <td>{newEffect?.multiplier || 0}</td>
                    <td>{newEffect?.compoundedCost || 0}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button
                  onClick={() =>
                    {setRows((prevRows) => [
                      ...prevRows,
                      { ...newEffect!, index: prevRows.length },
                    ])
                    setNewEffect(undefined);
                    setIsModalOpen(false);
                    updateCosts();}
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-end"
                >
                  Add Effect
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-end"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Effect</th>
              <th>Target</th>
              <th>Min</th>
              <th>Max</th>
              <th>Duration</th>
              <th>Area</th>
              <th>Cost</th>
              <th>Multiplier</th>
              <th>Compounded Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(
              ({
                index,
                effect,
                target,
                min,
                max,
                duration,
                area,
                cost,
                multiplier,
                compoundedCost,
              }) => (
                <tr key={index}>
                  <td>{effect}</td>
                  <td>{target}</td>
                  <td>{min}</td>
                  <td>{max}</td>
                  <td>{duration}</td>
                  <td>{area}</td>
                  <td>{cost}</td>
                  <td>{multiplier}</td>
                  <td>{compoundedCost}</td>
                  <th>
                    <button
                      onClick={() => {
                        setRows((prevRows) =>
                          prevRows
                            .filter((row) => row.index !== index)
                            .map((row, i) => ({ ...row, index: i }))
                        );
                      }}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Remove
                    </button>
                  </th>
                </tr>
              )
            )}
            <tr>
              <td>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Add Effect
                </button>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {Math.ceil(
                  rows.reduce((sum, item) => sum + item.compoundedCost, 0)
                )}
              </td>
              <th></th>
            </tr>
          </tbody>
        </table>
        <button
          onClick={updateCosts}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Costs
        </button>
      </main>
    </div>
  );
}
