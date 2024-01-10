interface MajorCredits {
  credits: number;
}

interface MinorCredits {
  credits: number;
}

interface Major extends MajorCredits {
  credits: number;
}

interface Minor extends MinorCredits {
  credits: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sumMajorCredits(subject1: Major, subject2: Major): Major {
  return {
    credits: subject1.credits + subject2.credits
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sumMinorCredits(subject1: Minor, subject2: Minor): Minor {
  return {
    credits: subject1.credits + subject2.credits
  }
}

const subject1: Minor = { credits: 1 };
const subject2: Minor = { credits: 4 };

const result = sumMinorCredits(subject1, subject2);
console.log(result);

const subject3: Major = { credits: 4 };
const subject4: Major = { credits: 23 };

const resul2 = sumMajorCredits(subject3, subject4);
console.log(resul2);