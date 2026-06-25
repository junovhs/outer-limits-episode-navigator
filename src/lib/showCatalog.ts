import { extractThemes } from "./themes";
import type { EpisodeView, Show } from "../types/show";

const showModules = import.meta.glob<Show>("../data/shows/*.json", {
  eager: true,
  import: "default",
});

export function getShows(): Show[] {
  return Object.values(showModules).sort((a, b) => a.title.localeCompare(b.title));
}

export function getDefaultShow(): Show {
  const [show] = getShows();

  if (!show) {
    throw new Error("No show data found in src/data/shows.");
  }

  return show;
}

export function toEpisodeViews(show: Show): EpisodeView[] {
  return show.seasons.flatMap((season) =>
    season.episodes.map((episode) => ({
      ...episode,
      showSlug: show.slug,
      showTitle: show.title,
      showVersion: show.version,
      year: season.years,
      themes: extractThemes(episode.summary),
    })),
  );
}
