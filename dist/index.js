'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// interface RollsResult {
//   result: number;
//   rolls: RollResult[];
// }
function die(faces) {
    return {
        faces: faces,
        result: Math.floor(Math.random() * faces) + 1,
    };
}

function dice(amount, faces) {
    var results = [];
    for (var i = 0; i < amount; i++) {
        results.push(die(faces));
    }
    return results;
}

function modify(value, modifier) {
    if (isNaN(modifier.value))
        return value;
    switch (modifier.type) {
        case "-":
            return value - modifier.value;
        case "+":
            return value + modifier.value;
        default:
            return value;
    }
}

function roll(command) {
    var rolls = dice(command.amount, command.faces);
    var totalUnmodified = rolls.reduce(function (acc, current) { return acc + current.result; }, 0);
    var total = command.modifier
        ? modify(totalUnmodified, command.modifier)
        : totalUnmodified;
    return {
        command: command,
        rolls: rolls,
        total: total,
        totalUnmodified: totalUnmodified,
    };
}

// Example commandString:
// * 1d4,2d6-7
// * 2d6-7
// * 1d4
function convertStringToCommands(commandString) {
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
function extractCommandsFromString(commandString) {
    return commandString.split(",");
}
function extractCommandFromString(commandString) {
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
function extractModifierFromString(modifierString) {
    var regex = /^([+-])(\d+)$/gim;
    var regexResults = regex.exec(modifierString);
    if (!regexResults)
        return undefined;
    var modifierType = regexResults[1] === "-" ? "-" : "+";
    return {
        type: modifierType,
        value: parseInt(regexResults[2], 10),
    };
}

function funkydice(commandString) {
    var commands = convertStringToCommands(commandString);
    return commands.map(function (command) { return roll(command); });
}
function funkydie(commandString) {
    var command = extractCommandFromString(commandString);
    if (!command)
        return;
    return roll(command);
}

exports.funkydice = funkydice;
exports.funkydie = funkydie;
