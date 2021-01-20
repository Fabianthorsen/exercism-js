//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  // In case string
  const yearInt = parseInt(year);
  console.log(yearInt, year);

  // Check if the conditions are true
  if (yearInt % 4 === 0) {
    if (yearInt % 100 === 0) {
      if (yearInt % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};
