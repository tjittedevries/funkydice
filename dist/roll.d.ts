import { RollResult } from "./die";
import { Command } from "./convertStringToCommands";
export interface InterfaceResult {
    command: Command;
    rolls: RollResult[];
    total: number;
    totalModified: number;
}
export declare function roll(command: Command): InterfaceResult;
