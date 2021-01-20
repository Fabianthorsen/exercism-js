//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  let count = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      count++;
      n /= 2;
    } else {
      count++;
      n *= 3;
      n += 1;
    }
  }
  return count;
};
