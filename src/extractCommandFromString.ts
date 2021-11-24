import { ICommand } from "./types";

export function extractCommandFromString(
  commandString: string
): ICommand | undefined {
  const regex = /^([1-9]\d*)d([1-9]\d*|f)([+-]\d+)?$/gim;
  const regexResults = regex.exec(commandString);

  if (!regexResults) return undefined;

  const faces = regexResults[2] === "f" ? "f" : parseInt(regexResults[2], 10);
  const amount = parseInt(regexResults[1], 10);
  const modifier = regexResults[3] ? parseInt(regexResults[3], 10) : 0;

  return {
    amount,
    faces,
    modifier,
  };
}
