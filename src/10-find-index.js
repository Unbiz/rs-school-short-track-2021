/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    const currentIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[currentIndex] === value) {
      return currentIndex;
    }
    if (array[currentIndex] < value) {
      leftIndex = currentIndex + 1;
    }
    if (array[currentIndex] > value) {
      rightIndex = currentIndex - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
