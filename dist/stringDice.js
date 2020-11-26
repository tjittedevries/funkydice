"use strict";

var _die = require("./die");

var _dice = require("./dice");

var _roll = require("./roll");

var _convertStringToCommands = require("./convertStringToCommands");

console.log("die", (0, _die.die)(6));
console.log("dice", (0, _dice.dice)(4, 6));
console.log("convertStringToCommands", (0, _convertStringToCommands.convertStringToCommands)("1d20"));
console.log("convertStringToCommands", (0, _convertStringToCommands.convertStringToCommands)("1d20-10"));
console.log("convertStringToCommands", (0, _convertStringToCommands.convertStringToCommands)("14d12,1d20-10"));
const command = (0, _convertStringToCommands.convertStringToCommands)("1d4");
console.log("roll", (0, _roll.roll)(command[0]));