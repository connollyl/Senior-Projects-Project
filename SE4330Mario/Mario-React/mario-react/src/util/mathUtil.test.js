import { calculatePercent } from './mathUtil';

describe('Calculate percentages', () => {
  it('Should handle normal cases', () => {
    expect(calculatePercent(4, 1)).toBe(25);
  });
  it('Should handle zero cases', () => {
    expect(calculatePercent(4, 0)).toBe(0);
  });
  it('Should handle zero total', () => {
    expect(calculatePercent(0, 0)).toBe(0);
  });
});
