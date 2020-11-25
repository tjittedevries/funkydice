"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.die = die;

// interface RollsResult {
//   result: number;
//   rolls: RollResult[];
// }
function die(faces) {
  return {
    faces,
    result: Math.floor(Math.random() * faces) + 1
  };
}