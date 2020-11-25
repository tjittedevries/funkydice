import { Modifier } from "./modify";

export interface Commands {
  [index: number]: Command | undefined;
}

export interface Command {
  amount: number;
  faces: number;
  modifier?: Modifier;
}

export function rollCommand(command: Command) {}
