//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Based on the Newton-Raphson root-finding method
// Takes in any positive integer N and the approximation/tolerance parameter T
export const squareRoot = (N, T = 1) => {
  // If N is negative then throw error and return.
  if (N < 1) {
    console.error('Enter positive integer.');
    return;
  }

  // Initialize X to be N
  let X = N;

  while (1) {
    // Calculate the root aproximation
    const root = 0.5 * (X + N / X);

    if (Math.abs(root - X) < T) {
      break;
    }

    // Update X if (root-X) !< T
    X = root;
  }
  return X;
};
