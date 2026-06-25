export type Season = {
  id: string;
  season: number;
  years: string;
  year_start: number;
  year_end: number;
  episode_count: number;
  episodes: Episode[];
};

export type Episode = {
  id: string;
  season: number;
  episode: number;
  absolute_episode: number;
  title: string;
  summary: string;
  imdb_rating: number;
};

export type Show = {
  slug: string;
  title: string;
  version: string;
  description: string;
  total_seasons: number;
  total_episodes: number;
  seasons: Season[];
};

export type EpisodeTheme =
  | "Aliens & Space"
  | "AI & Robotics"
  | "Time Travel"
  | "Genetics & Mutations"
  | "Mind & Memory"
  | "Death & Murder"
  | "Virtual Reality"
  | "Miscellaneous";

export type EpisodeView = Episode & {
  showSlug: string;
  showTitle: string;
  showVersion: string;
  year: string;
  themes: EpisodeTheme[];
};

export type NavigatorFilters = {
  search: string;
  minimumRating: number;
  selectedSeasons: Set<number>;
  selectedThemes: Set<EpisodeTheme>;
};
