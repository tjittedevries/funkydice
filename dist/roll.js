import { dice } from "./dice";
import { modify } from "./modify";
export function roll(command) {
    var rolls = dice(command.amount, command.faces);
    var totalUnmodified = rolls.reduce(function (acc, current) { return acc + current.result; }, 0);
    var total = command.modifier
        ? modify(totalUnmodified, command.modifier)
        : totalUnmodified;
    return {
        command: command,
        rolls: rolls,
        total: total,
        totalUnmodified: totalUnmodified,
    };
}
