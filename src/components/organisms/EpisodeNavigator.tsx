import { useMemo, useState } from "react";
import { EpisodeResults } from "./EpisodeResults";
import { FilterSidebar } from "./FilterSidebar";
import { filterEpisodes } from "../../lib/filterEpisodes";
import { getThemeOptions } from "../../lib/themes";
import type { EpisodeTheme, EpisodeView, NavigatorFilters, Show } from "../../types/show";

type EpisodeNavigatorProps = {
  episodes: EpisodeView[];
  show: Show;
};

const emptyFilters = (): NavigatorFilters => ({
  search: "",
  minimumRating: 0,
  selectedSeasons: new Set<number>(),
  selectedThemes: new Set<EpisodeTheme>(),
});

export function EpisodeNavigator({ episodes, show }: EpisodeNavigatorProps) {
  const [filters, setFilters] = useState<NavigatorFilters>(() => emptyFilters());
  const seasonOptions = useMemo(() => show.seasons.map((season) => season.season), [show.seasons]);
  const themeOptions = useMemo(() => getThemeOptions(episodes), [episodes]);
  const filteredEpisodes = useMemo(() => filterEpisodes(episodes, filters), [episodes, filters]);

  return (
    <>
      <header>
        <h1>{show.title}</h1>
        <div className="subtitle">
          // Episode Navigation Interface // {show.version} // {show.total_seasons} Seasons //{" "}
          {show.total_episodes} Episodes //
        </div>
      </header>

      <main className="layout-container">
        <FilterSidebar
          filters={filters}
          seasons={seasonOptions}
          themes={themeOptions}
          onMinimumRatingChange={(minimumRating) => updateFilters({ minimumRating })}
          onReset={() => setFilters(emptyFilters())}
          onSearchChange={(search) => updateFilters({ search })}
          onSeasonToggle={toggleSeason}
          onThemeToggle={toggleTheme}
        />
        <EpisodeResults episodes={filteredEpisodes} totalCount={episodes.length} />
      </main>
    </>
  );

  function updateFilters(nextFilters: Partial<NavigatorFilters>) {
    setFilters((currentFilters) => ({ ...currentFilters, ...nextFilters }));
  }

  function toggleSeason(season: number, checked: boolean) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      selectedSeasons: toggleSetValue(currentFilters.selectedSeasons, season, checked),
    }));
  }

  function toggleTheme(theme: EpisodeTheme, checked: boolean) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      selectedThemes: toggleSetValue(currentFilters.selectedThemes, theme, checked),
    }));
  }
}

function toggleSetValue<T>(set: Set<T>, value: T, checked: boolean): Set<T> {
  const nextSet = new Set(set);

  if (checked) {
    nextSet.add(value);
  } else {
    nextSet.delete(value);
  }

  return nextSet;
}
