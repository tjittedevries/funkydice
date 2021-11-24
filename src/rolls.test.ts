import { rolls } from './rolls'

describe('Rolls', () => {
  test('default rolls', () => {
    const dieFn = () => 1;
    const result = rolls(5, dieFn)

    expect(result).toStrictEqual([1,1,1,1,1])
  });
});
