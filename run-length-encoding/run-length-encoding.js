//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  // Declare parameters
  let n = string.length;
  let i = 0;
  let encoded = []; // Will contain encoded string

  while (i < n) {
    // Count the number of times that string appears in succession
    let count = 1;
    while (i < n - 1 && string[i] === string[i + 1]) {
      count++;
      i++;
    }
    i++;
    // Report number if it appears more than once in succession
    if (count > 1) {
      encoded.push(String(count) + string[i - 1]);
    } else {
      encoded.push(string[i - 1]);
    }
  }
  // Return encoding as a string
  return encoded.join('');
};

export const decode = (string) => {
  // Use regular expression to map over only int
  return string.replace(/(\d+)(\w)/g, function (m, n, c) {
    return new Array(parseInt(n, 10) + 1).join(c);
  });
};
