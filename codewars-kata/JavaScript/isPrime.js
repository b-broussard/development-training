/**
 * This 6 kyu kata (shorturl.at/MNPV9) calls for the implementation of a primality test 
 * that checks for divisibility by 2 or 3 before exploiting an observation that all primes 
 * greater than 6 are of the form 6k +/- 1. The following is based on the material presented
 * at https://en.wikipedia.org/wiki/Primality_test.
 */

function isPrime(num) {
  if (num <= 1) return false;
  else if (num <= 3) return true;
  
  // All primes greater than 6 have the form 6k +/- 1.
  // Ensure that "num" is not divisible by 2 or 3 first.
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
         return false;
    }
  }
     
  return true;
}