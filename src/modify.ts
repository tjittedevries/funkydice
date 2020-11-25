export interface Modifier {
  type: ModifierType;
  value: number;
}

export type ModifierType = "-" | "+" | undefined;

export function modify(value: number, modifier: Modifier): number {
  switch (modifier.type) {
    case "-":
      return value - modifier.value;

    case "+":
      return value - modifier.value;

    default:
      return value;
  }
}
