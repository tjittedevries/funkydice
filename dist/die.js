export function die(faces) {
    if (faces === "f") {
        var randNum = rand(3);
        var fateResult = 0;
        if (randNum === 1) {
            fateResult = -1;
        }
        if (randNum === 3) {
            fateResult = 1;
        }
        return {
            faces: "f",
            result: fateResult,
        };
    }
    return {
        faces: faces,
        result: rand(faces),
    };
}
export function rand(faces) {
    return Math.floor(Math.random() * faces) + 1;
}
