import { rand } from './rand'

describe('Rand', () => {
  test('random number generator', () => {
    const result = rand(6)
    expect(result).toBeLessThan(7)
    expect(result).toBeGreaterThan(0)
  });
});
