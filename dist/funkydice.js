"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.funkydice = funkydice;

var _roll = require("./roll");

var _convertStringToCommands = require("./convertStringToCommands");

function funkydice(commandString) {
  const commands = (0, _convertStringToCommands.convertStringToCommands)(commandString); // if (commands.length > 0) return null

  return commands.map(command => (0, _roll.roll)(command));
}