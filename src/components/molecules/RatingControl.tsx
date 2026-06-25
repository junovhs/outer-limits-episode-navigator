type RatingControlProps = {
  value: number;
  onChange: (value: number) => void;
};

export function RatingControl({ value, onChange }: RatingControlProps) {
  return (
    <div className="control-group">
      <label htmlFor="ratingSlider">
        Minimum IMDb Rating <span className="rating-display">{value.toFixed(1)}</span>
      </label>
      <input
        id="ratingSlider"
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}
