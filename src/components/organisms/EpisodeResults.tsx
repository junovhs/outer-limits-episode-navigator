import { EpisodeCard } from "../molecules/EpisodeCard";
import type { EpisodeView } from "../../types/show";

type EpisodeResultsProps = {
  episodes: EpisodeView[];
  totalCount: number;
};

export function EpisodeResults({ episodes, totalCount }: EpisodeResultsProps) {
  return (
    <section className="main-content" aria-live="polite">
      <div className="results-info">
        Displaying {episodes.length} of {totalCount} episodes.
      </div>
      <div className="episode-grid">
        {episodes.length > 0 ? (
          episodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)
        ) : (
          <div className="no-results">[ Signal Lost // No Episodes Match Current Parameters ]</div>
        )}
      </div>
    </section>
  );
}
