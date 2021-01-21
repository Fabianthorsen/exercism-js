//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (n) => {
  // Translation object with all baseline numerals
  const mapping = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = '';

  // For each number in the translation object,
  // if the remaining number is larger, append it to the roman translation
  for (let i in mapping) {
    while (n >= mapping[i]) {
      roman += i;
      n -= mapping[i];
    }
  }
  return roman;
};
