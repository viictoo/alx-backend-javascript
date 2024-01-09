/* eslint-disable */
import cleanSet from './8-clean_set';

describe('cleanSet', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('returns correct string when elements start with startString', () => {
    const set = new Set(['apple', 'ananas', 'ascii']);
    expect(cleanSet(set, 'a')).toBe('pple-nanas-scii');
  });
  it('returns correct string when elements do not start with startString', () => {
    const set = new Set(['apple', 'banana', 'cherry']);
    expect(cleanSet(set, 'b')).toBe('anana');
  });
 
  it('returns correct string when set is empty', () => {
    const set = new Set();
    expect(cleanSet(set, 'a')).toBe('');
  });
 
  it('returns correct string when startString is empty', () => {
    const set = new Set(['apple', 'banana', 'cherry']);
    expect(cleanSet(set, '')).toBe('');
  });
 
  it('returns correct string when set contains non-string elements', () => {
    const set = new Set([1, 'apple', true, 'ananas']);
    expect(cleanSet(set, 'a')).toBe('pple-nanas');
  });
});
