"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modify = modify;

function modify(value, modifier) {
  if (isNaN(modifier.value)) return value;

  switch (modifier.type) {
    case "-":
      return value - modifier.value;

    case "+":
      return value - modifier.value;

    default:
      return value;
  }
}