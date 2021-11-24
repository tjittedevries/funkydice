import { funkydice, funkydie } from './funkydice'

describe('Funkydie', () => {
  test('default roll', () => {
    const result = funkydie('2d20+3');
    expect(result!.amount).toBe(2)
    expect(result!.faces).toBe(20)
    expect(result!.modifier).toBe(3)
    expect(result!.rolls.length).toBe(2)
    expect(result!.totalUnmodified).toBeLessThanOrEqual(40)
    expect(result!.totalUnmodified).toBeGreaterThanOrEqual(2)
    expect(result!.total).toBeLessThanOrEqual(43)
    expect(result!.total).toBeGreaterThanOrEqual(5)
  });
  test('fate roll', () => {
    const result = funkydie('4df');
    expect(result!.amount).toBe(4)
    expect(result!.faces).toBe('f')
    expect(result!.modifier).toBe(0)
    expect(result!.rolls.length).toBe(4)
    expect(result!.totalUnmodified).toBeLessThanOrEqual(4)
    expect(result!.totalUnmodified).toBeGreaterThanOrEqual(-4)
    expect(result!.total).toBeLessThanOrEqual(4)
    expect(result!.total).toBeGreaterThanOrEqual(-4)
  });
  test('d66 roll', () => {
    const result = funkydie('1d66');
    expect(result!.amount).toBe(1)
    expect(result!.faces).toBe(66)
    expect(result!.modifier).toBe(0)
    expect(result!.rolls.length).toBe(2)
    expect(result!.totalUnmodified).toBeLessThanOrEqual(66)
    expect(result!.totalUnmodified).toBeGreaterThanOrEqual(11)
    expect(result!.total).toBeLessThanOrEqual(66)
    expect(result!.total).toBeGreaterThanOrEqual(11)
  });
});


describe('Funkydice', () => {
  test('roll multiple', () => {
    const result = funkydice('1d20,1d6')
    expect(result.length).toBe(2)
  });
});
