//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorPairs = []) => {
  // Array of relevant colors
  const colorArr = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  // We only care about the first two
  const [colorOne, colorTwo, ..._] = colorPairs;

  // Return the color-codes
  return colorArr.indexOf(colorOne) * 10 + colorArr.indexOf(colorTwo);
};
