// Example commandString:
// * 1d4,2d6-7
// * 2d6-7
// * 1d4
export function convertStringToCommands(commandString) {
    var seperatedCommandStrings = extractCommandsFromString(commandString);
    var commands = [];
    seperatedCommandStrings.forEach(function (value) {
        var result = extractCommandFromString(value);
        if (result) {
            commands.push(result);
        }
    });
    return commands;
}
// @todo should this return an array of type Command?
export function extractCommandsFromString(commandString) {
    return commandString.split(",");
}
export function extractCommandFromString(commandString) {
    var regex = /^([1-9]\d*)d([1-9]\d*)([+-]\d+)?$/gim;
    var regexResults = regex.exec(commandString);
    if (!regexResults)
        return undefined;
    return {
        amount: parseInt(regexResults[1], 10),
        faces: parseInt(regexResults[2], 10),
        modifier: extractModifierFromString(regexResults[3]),
    };
}
export function extractModifierFromString(modifierString) {
    var regex = /^([+-])(\d+)$/gim;
    var regexResults = regex.exec(modifierString);
    if (!regexResults)
        return undefined;
    var modifierType = undefined;
    if (regexResults[1] === "-") {
        modifierType = "-";
    }
    else if (regexResults[1] === "+") {
        modifierType = "+";
    }
    return {
        type: modifierType,
        value: parseInt(regexResults[2], 10),
    };
}
