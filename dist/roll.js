import { dice } from "./dice";
import { modify } from "./modify";
export function roll(command) {
    var rolls = dice(command.amount, command.faces);
    var total = rolls.reduce(function (acc, current) { return acc + current.result; }, 0);
    var totalModified = command.modifier
        ? modify(total, command.modifier)
        : total;
    return {
        command: command,
        rolls: rolls,
        total: total,
        totalModified: totalModified,
    };
}
