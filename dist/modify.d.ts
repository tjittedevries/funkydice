export interface Modifier {
    type: ModifierType;
    value: number;
}
export declare type ModifierType = "-" | "+" | undefined;
export declare function modify(value: number, modifier: Modifier): number;
