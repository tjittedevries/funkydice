import { dice } from "./dice";
import { RollResult } from "./die";
import { modify } from "./modify";
import { Command } from "./convertStringToCommands";

export interface InterfaceResult {
  command: Command;
  rolls: RollResult[];
  total: number;
  totalUnmodified: number;
}

export function roll(command: Command): InterfaceResult {
  const rolls = dice(command.amount, command.faces);
  const totalUnmodified = rolls.reduce(
    (acc, current) => acc + current.result,
    0
  );
  const total = command.modifier
    ? modify(totalUnmodified, command.modifier)
    : totalUnmodified;

  return {
    command,
    rolls,
    total,
    totalUnmodified,
  } as InterfaceResult;
}
