export interface Modifier {
  type: ModifierType;
  value: number;
}

export type ModifierType = "-" | "+";

export function modify(value: number, modifier: Modifier): number {
  if (isNaN(modifier.value)) return value;

  switch (modifier.type) {
    case "-":
      return value - modifier.value;

    case "+":
      return value + modifier.value;

    default:
      return value;
  }
}
