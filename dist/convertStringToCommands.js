"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertStringToCommands = convertStringToCommands;

// 1d4,2d6-7
// 2d6-7
// -7
// Example commandString:
// * 1d4,2d6-7
// * 2d6-7
// * 1d4
function convertStringToCommands(commandString) {
  const seperatedCommandStrings = extractCommandsFromString(commandString);
  const commands = seperatedCommandStrings.map(command => extractCommandFromString(command));
  return commands;
}

function extractCommandsFromString(commandString) {
  return commandString.split(",");
}

function extractCommandFromString(commandString) {
  const regex = /^([1-9]\d*)d([1-9]\d*)([+-]\d+)?$/gim;
  const regexResults = regex.exec(commandString);
  if (!regexResults) return undefined;
  return {
    amount: parseInt(regexResults[1], 10),
    faces: parseInt(regexResults[2], 10),
    modifier: extractModifierFromString(regexResults[3])
  };
}

function extractModifierFromString(modifierString) {
  const regex = /^([+-])(\d+)$/gim;
  const regexResults = regex.exec(modifierString);
  if (!regexResults) return undefined;
  let modifierType = undefined;

  if (regexResults[1] === "-") {
    modifierType = "-";
  } else if (regexResults[1] === "+") {
    modifierType = "+";
  }

  return {
    type: modifierType,
    value: parseInt(regexResults[2], 10)
  };
}