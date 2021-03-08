import { roll, InterfaceResult } from "./roll";
import {
  convertStringToCommands,
  extractCommandFromString,
} from "./convertStringToCommands";

export function funkydice(commandString: string): InterfaceResult[] {
  const commands = convertStringToCommands(commandString);
  return commands.map((command) => roll(command));
}

export function funkydie(commandString: string): InterfaceResult | undefined {
  const command = extractCommandFromString(commandString);
  if (!command) return;
  return roll(command);
}
