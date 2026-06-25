import type { EpisodeTheme } from "../types/show";

const themeKeywords = {
  "Aliens & Space": [
    "alien",
    "martian",
    "space",
    "ship",
    "shuttle",
    "mars",
    "venus",
    "wormhole",
    "abduct",
    "galaxy",
    "ufo",
  ],
  "AI & Robotics": [
    "android",
    "robot",
    "ai",
    "machine",
    "implant",
    "inhibitor",
    "nanobot",
    "holographic",
    "computer",
    "innobotics",
  ],
  "Time Travel": ["time", "time-travel", "traveler", "past", "future", "decade", "1969", "loops"],
  "Genetics & Mutations": [
    "gene",
    "clone",
    "dna",
    "mutant",
    "mutation",
    "virus",
    "plague",
    "sterile",
    "genetic",
    "resurrect",
    "regenerat",
  ],
  "Mind & Memory": [
    "mind",
    "memory",
    "brain",
    "psychic",
    "telepathy",
    "hallucination",
    "haunt",
    "sanity",
    "consciousness",
    "dream",
  ],
  "Death & Murder": ["kill", "murder", "dead", "death", "assassin", "execution", "doomsday", "hostage"],
  "Virtual Reality": ["virtual", "vr", "simulation", "cyber", "matrix", "hologram"],
} satisfies Record<Exclude<EpisodeTheme, "Miscellaneous">, string[]>;

export function extractThemes(summary: string): EpisodeTheme[] {
  const normalizedSummary = summary.toLowerCase();
  const themes = Object.entries(themeKeywords)
    .filter(([, keywords]) => keywords.some((keyword) => normalizedSummary.includes(keyword)))
    .map(([theme]) => theme as EpisodeTheme);

  return themes.length > 0 ? themes : ["Miscellaneous"];
}

export function getThemeOptions(episodes: Array<{ themes: EpisodeTheme[] }>): EpisodeTheme[] {
  return [...new Set(episodes.flatMap((episode) => episode.themes))].sort();
}
