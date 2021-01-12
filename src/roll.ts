import { dice } from "./dice";
import { RollResult } from "./die";
import { modify } from "./modify";
import { Command } from "./convertStringToCommands";

export interface InterfaceResult {
  command: Command;
  rolls: RollResult[];
  total: number;
  totalModified: number;
}

export function roll(command: Command): InterfaceResult {
  const rolls = dice(command.amount, command.faces);
  const total = rolls.reduce((acc, current) => acc + current.result, 0);
  const totalModified = command.modifier
    ? modify(total, command.modifier)
    : total;

  return {
    command,
    rolls,
    total,
    totalModified,
  } as InterfaceResult;
}
