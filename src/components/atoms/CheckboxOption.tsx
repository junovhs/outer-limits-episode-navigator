type CheckboxOptionProps = {
  checked: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => void;
};

export function CheckboxOption({ checked, id, label, onChange }: CheckboxOptionProps) {
  return (
    <label className="checkbox-item" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span>{label}</span>
    </label>
  );
}
