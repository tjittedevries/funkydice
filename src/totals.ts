export function totals(rolls: number[], modifier: number) {
  const totalUnmodified = rolls.reduce((acc, current) => acc + current, 0);
  const total = totalUnmodified + modifier;

  return {
    total,
    totalUnmodified,
  };
}


export function totalsD66(rolls: number[], modifier: number) {
  const totalUnmodified = parseInt(`${rolls[0]}${rolls[1]}`, 10);
  const total = totalUnmodified + modifier;

  return {
    total,
    totalUnmodified,
  };
}


