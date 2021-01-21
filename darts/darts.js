//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  // Declare the three cirlce radius
  const rInner = 1;
  const rMid = 5;
  const rOuter = 10;

  // Assuming that center is 0,0 -> Checking if dart is within each of the circles
  if (Math.pow(x - 0, 2) + Math.pow(y - 0, 2) <= Math.pow(rInner, 2)) {
    return 10;
  } else if (Math.pow(x - 0, 2) + Math.pow(y - 0, 2) <= Math.pow(rMid, 2)) {
    return 5;
  } else if (Math.pow(x - 0, 2) + Math.pow(y - 0, 2) <= Math.pow(rOuter, 2)) {
    return 1;
  } else {
    return 0;
  }
};
