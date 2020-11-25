"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roll = roll;

var _dice = require("./dice");

var _modify = require("./modify");

function roll(command) {
  const rolls = (0, _dice.dice)(command.amount, command.faces);
  const total = rolls.reduce((acc, current) => acc + current.result, 0);
  const totalModified = command.modifier ? (0, _modify.modify)(total, command.modifier) : total;
  return {
    command,
    rolls,
    total,
    totalModified
  };
}