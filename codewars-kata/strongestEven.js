/**
 * This kata presents the challenge of searching within a range of integers 
 * for a single even number that can divide by two until reaching an odd number.
 * More details can be found here:
 * shorturl.at/mFPV5
 * 
 * My solution is adapted from one written for a redistributed version of this 
 * kata, and is hosted here: shorturl.at/hoCE2
 */

function strongestEven(n, m) {
    // If the strongest number is tied with another in strength,
    // return the smallest of the two
    if (m - n < 1) {
      return n;
    }  
    
    return 2 * strongestEven((n + (n % 2)) / 2, (m - (m % 2)) / 2);
}