/**
 * This 7 kyu kata (shorturl.at/ctuNR) presents a simple, predictable series of
 * shrinking numbers which are to be summed up and returned as a String.
 */

function seriesSum(n)
{
  if (n === 0) {
    return '0.00';
  }
  
  let sum = 1.00;
  for (let i = 1; i < n; i++) {
    sum += 1.00 / (1 + 3.00 * i);
  }
  
  return sum.toPrecision(3);
}


/**
 * With a slight change in style and simplification of number values (since JavaScript
 * stores all numbers as 64-bit floats anyway), the following is my refactor of
 * the above:
 */

const seriesSum = n => {
  if (n === 0) {
    return '0.00';
  }
  
  let sum = 1;
  for (let i = sum; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  
  return sum.toPrecision(3);
}