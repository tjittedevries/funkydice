import { die } from "./die";
import { dice } from "./dice";
import { roll } from "./roll";
import { convertStringToCommands } from "./convertStringToCommands";

console.log("die", die(6));
console.log("dice", dice(4, 6));
console.log("convertStringToCommands", convertStringToCommands("1d20"));
console.log("convertStringToCommands", convertStringToCommands("1d20-10"));
console.log(
  "convertStringToCommands",
  convertStringToCommands("14d12,1d20-10")
);

const command = convertStringToCommands("1d4");
console.log("roll", roll(command[0]));
