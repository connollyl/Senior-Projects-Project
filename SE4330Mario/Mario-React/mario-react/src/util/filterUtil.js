/**
 * Filters out an array for values that are not located inside the other array
 * @param {Array} arr array you are checking
 * @param {Array} otherArray the array you are checking against
 * @return {Array} array of all elements from the arr that are not also in the other array
 */
export const not = (arr, otherArray) => {
  return arr.filter(value => otherArray.indexOf(value) === -1);
};

/**
 * Filters out an array for values that are also located inside the other array
 * @param {Array} arr array you are checking
 * @param {Array} otherArray the array you are checking against
 * @return {Array} array of all elements from the arr that are also in the other array
 */
export const intersection = (arr, otherArr) => {
  return arr.filter(value => otherArr.indexOf(value) !== -1);
};
