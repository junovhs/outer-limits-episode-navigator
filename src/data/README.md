# Show Data

The episode navigator reads editable show catalogs from `src/data/shows/*.json`.

To update an existing show, edit its JSON file directly. To add another show,
create a new JSON file in `src/data/shows/` using the same shape:

```json
{
  "slug": "show-slug",
  "title": "Show Title",
  "version": "optional version or run label",
  "description": "Short description",
  "total_seasons": 1,
  "total_episodes": 1,
  "seasons": [
    {
      "id": "S01",
      "season": 1,
      "years": "1995",
      "year_start": 1995,
      "year_end": 1995,
      "episode_count": 1,
      "episodes": [
        {
          "id": "S01E01",
          "season": 1,
          "episode": 1,
          "absolute_episode": 1,
          "title": "Episode title",
          "summary": "Episode summary",
          "imdb_rating": 7.0
        }
      ]
    }
  ]
}
```

The UI discovers these files automatically through `src/lib/showCatalog.ts`.
