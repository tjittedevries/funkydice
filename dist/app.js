"use strict";

var _stringDice = require("./stringDice");

const writeMessage = message => {
  console.log(message);
};

writeMessage("Hello, World!" + (0, _stringDice.stringDice)());