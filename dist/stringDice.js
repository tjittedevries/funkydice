"use strict";

var _die = require("./die");

var _dice = require("./dice");

var _convertStringToCommands = require("./convertStringToCommands");

console.log("die", (0, _die.die)(6));
console.log("dice", (0, _dice.dice)(4, 6));
console.log("convertStringToCommands", (0, _convertStringToCommands.convertStringToCommands)("1d20"));
console.log("convertStringToCommands", (0, _convertStringToCommands.convertStringToCommands)("1d20-10"));