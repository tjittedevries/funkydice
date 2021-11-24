import { IResult } from "./types";
import { extractCommandFromString } from "./extractCommandFromString";
import { totals, totalsD66 } from "./totals";
import { rolls } from "./rolls";
import { die, fateDie } from "./dice";

export function funkydie(commandString: string): IResult | undefined {
  const command = extractCommandFromString(commandString);
  if (!command) return undefined;

  const { amount, faces, modifier } = command;

  let rollResults: number[] = [];

  // Change die for Fate oll
  if (faces === "f") {
    rollResults = rolls(amount, fateDie());
  // Change die for D66 roll
  } else if (faces === 66) {
    rollResults = rolls(2, die(6));
  // Roll default
  } else {
    rollResults = rolls(amount, die(faces));
  }

  let total: number
  let totalUnmodified: number;

  // Calculate results for D66 roll
  if (faces === 66) {
    ({ total, totalUnmodified } = totalsD66(rollResults, modifier));
  // Calculate default
  } else {
    ({ total, totalUnmodified } = totals(rollResults, modifier));
  } 

  return {
    amount,
    faces,
    modifier,
    rolls: rollResults,
    total,
    totalUnmodified,
  };
}

export function funkydice(commandString: string): (IResult | undefined)[] {
  const commands = commandString.split(',');
  return commands.map((command) => funkydie(command));
}
