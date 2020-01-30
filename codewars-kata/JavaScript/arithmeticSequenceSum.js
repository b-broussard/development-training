/**
 * This 7 kyu kata calls for a function which finds the arithmetic series of 
 * a given set of integers.
 */

function arithmeticSequenceSum(a, r, n) {
  return n * (a + (a + r * (n - 1))) / 2;
}