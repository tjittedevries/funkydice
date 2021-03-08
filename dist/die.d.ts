export declare type TypeFaces = number | "f";
export interface RollResult {
    faces: TypeFaces;
    result: number;
}
export declare function die(faces: TypeFaces): RollResult;
export declare function rand(faces: number): number;
