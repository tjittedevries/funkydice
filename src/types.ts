export interface IResult {
  amount: number;
  faces: number | "f";
  modifier: number;
  rolls: number[];
  total: number;
  totalUnmodified: number;
}

export type TResultTotals = Pick<IResult, "total" | "totalUnmodified">;

export interface ICommand {
  amount: number;
  faces: number | "f";
  modifier: number;
}

export type TDieFn = () => number;
