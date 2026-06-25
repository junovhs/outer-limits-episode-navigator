type SearchControlProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchControl({ value, onChange }: SearchControlProps) {
  return (
    <div className="control-group">
      <label htmlFor="searchInput">Keyword Search</label>
      <input
        id="searchInput"
        type="text"
        value={value}
        placeholder="alien, time, robot..."
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
