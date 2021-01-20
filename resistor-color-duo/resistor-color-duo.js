//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorPairs = []) => {
  // Define color/code pairs
  const COLORS = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  // Declare empty list to hold the digits
  let resistorPair = [];

  // Iterate for two input-elements and store the code in variable
  colorPairs.every((color, idx) => {
    const lowerColor = color.toLowerCase();

    if (idx < 2) {
      resistorPair.push(COLORS[lowerColor]);
      return true;
    } else {
      return false;
    }
  });

  // Return the two-digit code as int
  return parseInt(resistorPair.join(''));
};
