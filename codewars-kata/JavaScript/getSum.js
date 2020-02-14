/** 
 * The object of this 7 kyu kata is to return the sum of all integers between
 * and inclusive of "a" and "b".
 * 
 * My solution here is a bit long though iterative, which is good for the case 
 * when two integers with a wide range are called for by tests. Possible values
 * in this kata's test cases spanned from -600 to 600, so a recursive approach 
 * would have created a very deep stack indeed.
 */

const getSum = (a,b) => {
   if (a === b) return a;
   else if (Math.abs(a - b) !== 1) {
     let sum = 0;
     if (a > b) {
       while (a >= b) {
         sum += a;
         a--;
       }
     } else if (a < b) {
       while (b >= a) {
         sum += b;
         b--;
       }
     }

     return sum;
   }
   
   return a + b;
}
