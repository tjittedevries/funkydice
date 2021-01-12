import { Modifier } from "./modify";
export interface Command {
    amount: number;
    faces: number;
    modifier?: Modifier;
}
export declare function convertStringToCommands(commandString: string): Command[];
export declare function extractCommandsFromString(commandString: string): string[];
export declare function extractCommandFromString(commandString: string): Command | undefined;
export declare function extractModifierFromString(modifierString: string): Modifier | undefined;
