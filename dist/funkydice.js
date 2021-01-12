import { roll } from "./roll";
import { convertStringToCommands } from "./convertStringToCommands";
export function funkydice(commandString) {
    var commands = convertStringToCommands(commandString);
    return commands.map(function (command) { return roll(command); });
}
