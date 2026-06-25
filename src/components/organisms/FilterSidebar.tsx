import { SectionTitle } from "../atoms/SectionTitle";
import { CheckboxGroup } from "../molecules/CheckboxGroup";
import { RatingControl } from "../molecules/RatingControl";
import { SearchControl } from "../molecules/SearchControl";
import type { EpisodeTheme, NavigatorFilters } from "../../types/show";

type FilterSidebarProps = {
  filters: NavigatorFilters;
  seasons: number[];
  themes: EpisodeTheme[];
  onMinimumRatingChange: (value: number) => void;
  onReset: () => void;
  onSearchChange: (value: string) => void;
  onSeasonToggle: (season: number, checked: boolean) => void;
  onThemeToggle: (theme: EpisodeTheme, checked: boolean) => void;
};

export function FilterSidebar({
  filters,
  seasons,
  themes,
  onMinimumRatingChange,
  onReset,
  onSearchChange,
  onSeasonToggle,
  onThemeToggle,
}: FilterSidebarProps) {
  return (
    <aside className="sidebar" aria-label="Episode filters">
      <SectionTitle>Search Parameters</SectionTitle>
      <SearchControl value={filters.search} onChange={onSearchChange} />

      <SectionTitle>Filter By Rating</SectionTitle>
      <RatingControl value={filters.minimumRating} onChange={onMinimumRatingChange} />

      <SectionTitle>Filter By Season</SectionTitle>
      <CheckboxGroup
        options={seasons}
        variant="grid"
        getId={(season) => `season-${season}`}
        getLabel={(season) => `Season ${season}`}
        isSelected={(season) => filters.selectedSeasons.has(season)}
        onToggle={onSeasonToggle}
      />

      <SectionTitle>Filter By Theme</SectionTitle>
      <CheckboxGroup
        options={themes}
        getId={(theme) => `theme-${theme.replaceAll(" ", "-").replaceAll("&", "and")}`}
        getLabel={(theme) => theme}
        isSelected={(theme) => filters.selectedThemes.has(theme)}
        onToggle={onThemeToggle}
      />

      <button className="btn-clear" type="button" onClick={onReset}>
        [ Reset All Filters ]
      </button>
    </aside>
  );
}
