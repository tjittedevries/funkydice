import { Modifier, ModifierType } from "./modify";

export interface Command {
  amount: number;
  faces: number;
  modifier?: Modifier;
}

// Example commandString:
// * 1d4,2d6-7
// * 2d6-7
// * 1d4
export function convertStringToCommands(commandString: string): Command[] {
  const seperatedCommandStrings = extractCommandsFromString(commandString);
  const commands: Command[] = [];

  seperatedCommandStrings.forEach((value) => {
    const result = extractCommandFromString(value);
    if (result) {
      commands.push(result);
    }
  });

  return commands;
}

// @todo should this return an array of type Command?
export function extractCommandsFromString(commandString: string): string[] {
  return commandString.split(",");
}

export function extractCommandFromString(
  commandString: string
): Command | undefined {
  const regex = /^([1-9]\d{0,2})d([1-9]\d{0,2})([+-]\d{0,3})?$/gim;
  const regexResults = regex.exec(commandString);

  if (!regexResults) return undefined;

  return {
    amount: parseInt(regexResults[1], 10),
    faces: parseInt(regexResults[2], 10),
    modifier: extractModifierFromString(regexResults[3]),
  } as Command;
}

export function extractModifierFromString(
  modifierString: string
): Modifier | undefined {
  const regex = /^([+-])(\d+)$/gim;
  const regexResults = regex.exec(modifierString);

  if (!regexResults) return undefined;

  const modifierType: ModifierType = regexResults[1] === "-" ? "-" : "+";

  return {
    type: modifierType,
    value: parseInt(regexResults[2], 10),
  } as Modifier;
}
