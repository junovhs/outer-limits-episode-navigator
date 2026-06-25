import type { EpisodeView, NavigatorFilters } from "../types/show";

export function filterEpisodes(episodes: EpisodeView[], filters: NavigatorFilters): EpisodeView[] {
  return episodes
    .filter((episode) => matchesRating(episode, filters.minimumRating))
    .filter((episode) => matchesSeason(episode, filters.selectedSeasons))
    .filter((episode) => matchesTheme(episode, filters.selectedThemes))
    .filter((episode) => matchesSearch(episode, filters.search))
    .sort(byRatingThenOrder);
}

function matchesRating(episode: EpisodeView, minimumRating: number): boolean {
  return episode.imdb_rating >= minimumRating;
}

function matchesSeason(episode: EpisodeView, selectedSeasons: Set<number>): boolean {
  return selectedSeasons.size === 0 || selectedSeasons.has(episode.season);
}

function matchesTheme(episode: EpisodeView, selectedThemes: Set<string>): boolean {
  return selectedThemes.size === 0 || episode.themes.some((theme) => selectedThemes.has(theme));
}

function matchesSearch(episode: EpisodeView, search: string): boolean {
  if (!search) {
    return true;
  }

  const query = search.toLowerCase();
  return [episode.id, episode.title, episode.summary, episode.year].some((value) =>
    value.toLowerCase().includes(query),
  );
}

function byRatingThenOrder(a: EpisodeView, b: EpisodeView): number {
  return b.imdb_rating - a.imdb_rating || a.absolute_episode - b.absolute_episode;
}
