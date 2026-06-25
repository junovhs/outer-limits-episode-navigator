import type { EpisodeTheme } from "../../types/show";

type ThemeTagProps = {
  theme: EpisodeTheme;
};

export function ThemeTag({ theme }: ThemeTagProps) {
  return <span className="theme-tag">{theme}</span>;
}
