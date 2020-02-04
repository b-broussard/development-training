/**
 * With a narrow set of possibilities for the input (10 <= n <= 99), this
 * problem asks for a simple way to find the sum of the two digits.
 */

function addTwoDigits(n) {
    let numArr = n.toString().split('').map(Number);
    
    function addDigits(sum, n) {
        return sum + n;
    }
    return numArr.reduce(addDigits);
}
