// interface RollsResult {
//   result: number;
//   rolls: RollResult[];
// }
export function die(faces) {
    return {
        faces: faces,
        result: Math.floor(Math.random() * faces) + 1,
    };
}
