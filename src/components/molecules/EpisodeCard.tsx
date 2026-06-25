import { ThemeTag } from "../atoms/ThemeTag";
import type { EpisodeView } from "../../types/show";

type EpisodeCardProps = {
  episode: EpisodeView;
};

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="episode-card">
      <div className="ep-rating">★ {episode.imdb_rating.toFixed(1)}</div>
      <div className="ep-id">
        {episode.id} // {episode.year}
      </div>
      <h3 className="ep-title">{episode.title}</h3>
      <p className="ep-summary">{episode.summary}</p>
      <div className="ep-themes">
        {episode.themes.map((theme) => (
          <ThemeTag key={theme} theme={theme} />
        ))}
      </div>
    </article>
  );
}
