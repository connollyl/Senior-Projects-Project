/* eslint-disable */
import { not, intersection } from './filterUtil';

describe('Not function on arrays', () => {
  it('Returns an array with objects that are not in the second array', () => {
    const mockA = [1, 2, 3, 4];
    const mockB = [4, 5, 6, 7];
    expect(not(mockA, mockB)).toStrictEqual([1, 2, 3]);
  });
});

describe('Not function with A empty', () => {
  it('Returns an empty array', () => {
    const mockA = [];
    const mockB = [4, 5, 6, 7];
    expect(not(mockA, mockB)).toStrictEqual([]);
  });
});

describe('Not function with B empty', () => {
  it('Returns A', () => {
    const mockA = [1, 2, 3, 4];
    const mockB = [];
    expect(not(mockA, mockB)).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('Not function with 2 empty arrays', () => {
  it('Returns an empty array', () => {
    const mockA = [];
    const mockB = [];
    expect(not(mockA, mockB)).toStrictEqual([]);
  });
});

describe('Not function with 2 unique arrays', () => {
  it('Returns A', () => {
    const mockA = [1, 2, 3, 4];
    const mockB = [5, 6, 7, 8];
    expect(not(mockA, mockB)).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('Intersection function on arrays', () => {
  it('Returns an array with objects that are in the second array', () => {
    const mockA = [1, 2, 3, 4];
    const mockB = [1, 2, 3];
    expect(intersection(mockA, mockB)).toStrictEqual([1, 2, 3]);
  });
});

describe('Intersection function with A empty', () => {
  it('Returns an empty array', () => {
    const mockA = [];
    const mockB = [1, 2, 3];
    expect(intersection(mockA, mockB)).toStrictEqual([]);
  });
});

describe('Intersection function with B empty', () => {
  it('Returns an empty array', () => {
    const mockA = [1, 2, 3, 4];
    const mockB = [];
    expect(intersection(mockA, mockB)).toStrictEqual([]);
  });
});

describe('Intersection function with 2 empty arrays', () => {
  it('Returns an empty array', () => {
    const mockA = [];
    const mockB = [];
    expect(intersection(mockA, mockB)).toStrictEqual([]);
  });
});

describe('Intersection function 2 unique arrays', () => {
  it('Returns an empty array', () => {
    const mockA = [1, 2, 3, 4];
    const mockB = [5, 6, 7];
    expect(intersection(mockA, mockB)).toStrictEqual([]);
  });
});