import { roll } from "./roll";
import { convertStringToCommands, extractCommandFromString, } from "./convertStringToCommands";
export function funkydice(commandString) {
    var commands = convertStringToCommands(commandString);
    return commands.map(function (command) { return roll(command); });
}
export function funkydie(commandString) {
    var command = extractCommandFromString(commandString);
    if (!command)
        return;
    return roll(command);
}
