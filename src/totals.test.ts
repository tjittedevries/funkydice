import { totals, totalsD66 } from './totals'

describe('Totals', () => {
  test('default totals', () => {
    const rolls = [1,2,3]
    const result = totals(rolls, 5);
    expect(result.totalUnmodified).toBe(6);
    expect(result.total).toBe(11);
  })

  test('d66 totals', () => {
    const rolls = [4,5]
    const result = totalsD66(rolls, 2);
    expect(result.totalUnmodified).toBe(45);
    expect(result.total).toBe(47);
  })
})
