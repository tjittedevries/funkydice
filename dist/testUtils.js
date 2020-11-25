"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expectBetween = expectBetween;

function expectBetween(value, max) {
  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThanOrEqual(max);
}