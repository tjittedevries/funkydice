"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roll = roll;

var _die = require("./die");

function roll(amount, faces) {
  const results = [];

  for (let i = 0; i < amount; i++) {
    results.push((0, _die.die)(faces));
  }

  return results;
}