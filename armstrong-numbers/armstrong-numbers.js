//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  // Declare list of numbers and initiate the cumulative sum at 0
  let numList = String(number).split('');
  let cumNum = 0;

  // Iterate over each digit and power, add to cumulative sum
  numList.forEach((num) => {
    cumNum += Math.pow(num, numList.length);
  });

  // Logical check
  return cumNum === number;
};
