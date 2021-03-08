import { die } from "./die";
export function dice(amount, faces) {
    var results = [];
    for (var i = 0; i < amount; i++) {
        results.push(die(faces));
    }
    return results;
}
