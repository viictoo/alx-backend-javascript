import { sumMajorCredits, sumMinorCredits } from "./main";

describe('Credits functions', () => {
  describe('sumMajorCredits', () => {
    it('should correctly sum major credits', () => {
      const subject1 = { credits: 3 };
      const subject2 = { credits: 2 };

      const result = sumMajorCredits(subject1, subject2);

      expect(result.credits).toBe(5);
    });
  });

  describe('sumMinorCredits', () => {
    it('should correctly sum minor credits', () => {
      const subject1 = { credits: 1 };
      const subject2 = { credits: 4 };

      const result = sumMinorCredits(subject1, subject2);

      expect(result.credits).toBe(5);
    });
  });
});