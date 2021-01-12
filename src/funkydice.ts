import { roll, InterfaceResult } from "./roll";
import { convertStringToCommands } from "./convertStringToCommands";

export function funkydice(commandString: string): InterfaceResult[] {
  const commands = convertStringToCommands(commandString);
  return commands.map((command) => roll(command));
}
