/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfDigits = [];
  const nStr = n.toString();
  for (let i = 0; i < nStr.length; i += 1) {
    const subStr = nStr.substring(0, i) + nStr.substring(i + 1, nStr.length);
    arrOfDigits.push(parseInt(subStr, 10));
  }
  return Math.max(...arrOfDigits);
}

module.exports = deleteDigit;
