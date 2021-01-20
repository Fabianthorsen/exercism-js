//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
  // This will contain the reversed word
  let reversed = [];
  let wordList = word.split('');

  // Appending the last index to the first position and so on
  for (let i = wordList.length - 1; i >= 0; i--) {
    reversed.push(wordList[i]);
  }

  // Returning the reverse word
  return reversed.join('');
};
