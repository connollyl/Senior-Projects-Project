import { formatPhoneNumber } from './formatUtil';

describe('Format Phone Numbers', () => {
  it('Should handle number clumps', () => {
    const mockPhone = '6667778888';
    expect(formatPhoneNumber(mockPhone)).toBe('(666) 777-8888');
  });
  it('Should handle truncated numbers', () => {
    const mockPhone = '666777888';
    expect(formatPhoneNumber(mockPhone)).toBe(null);
  });
  it('Should handle long numbers', () => {
    const mockPhone = '66677788889';
    expect(formatPhoneNumber(mockPhone)).toBe(null);
  });
  it('Should handle null case', () => {
    const mockPhone = '';
    expect(formatPhoneNumber(mockPhone)).toBe(null);
  });
});
