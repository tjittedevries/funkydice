export function rollDiceFromString(commandString) {
  const commands = extractCommandsFromString(commandString);
  const results = commands.map((command) => rollCommand(command));

  const resultObj = {
    commandString,
    commands,
    results,
  };

  return resultObj;
}

function extractCommandsFromString(string) {
  const commands = string.split(",");
  return commands.map(extractCommandFromString);
}

function extractCommandFromString(commandString) {
  const regex = /^(\d+)d(\d+)([+-]?)(\d*)$/gim;
  const result = regex.exec(commandString);

  if (!result) return false;
  const obj = {
    commandString,
    diceAmount: parseInt(result[1], 10),
    diceSides: parseInt(result[2], 10),
    modifierType: result[3],
    modifierValue: result[4] ? parseInt(result[4], 10) : "",
  };

  return obj;
}

const rollDie = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

function rollCommand(command) {
  const resultObj = {
    command,
    result: 0,
    resultBeforeModifiers: 0,
    rolls: [],
    modifier: `${command.modifierType}${command.modifierValue}`,
  };

  for (let i = command.diceAmount; i--; ) {
    const result = rollDie(command.diceSides);
    resultObj.result += result;
    resultObj.rolls.push(result);
  }

  resultObj.resultBeforeModifiers = resultObj.result;

  if (command.modifierType && command.modifierValue) {
    if (command.modifierType === "+") {
      resultObj.result += command.modifierValue;
    }
    if (command.modifierType === "-") {
      resultObj.result -= command.modifierValue;
    }
  }

  return resultObj;
}

/*
  const bar = {
    commandString: "1d20+5",
    commands: [
      {
        diceAmount: 1,
        diceSides: 20,
        modifierType: "",
        modifierValue: "",
      },
    ],
    results: [
      {
        command: {
          diceAmount: 1,
          diceSides: 20,
          modifierType: "",
          modifierValue: "",
        },
        result: 0,
        resultBeforeModifiers: 0,
        rolls: [],
        modifier: ''
      }
    ]
  };
  */
