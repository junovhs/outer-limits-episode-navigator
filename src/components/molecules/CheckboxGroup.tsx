import { CheckboxOption } from "../atoms/CheckboxOption";

type CheckboxGroupProps<T extends string | number> = {
  getId: (option: T) => string;
  getLabel: (option: T) => string;
  isSelected: (option: T) => boolean;
  onToggle: (option: T, checked: boolean) => void;
  options: T[];
  variant?: "grid" | "stack";
};

export function CheckboxGroup<T extends string | number>({
  getId,
  getLabel,
  isSelected,
  onToggle,
  options,
  variant = "stack",
}: CheckboxGroupProps<T>) {
  return (
    <div className={variant === "grid" ? "checkbox-grid" : "checkbox-stack"}>
      {options.map((option) => (
        <CheckboxOption
          key={String(option)}
          id={getId(option)}
          label={getLabel(option)}
          checked={isSelected(option)}
          onChange={(checked) => onToggle(option, checked)}
        />
      ))}
    </div>
  );
}
