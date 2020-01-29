/**
 * This 7 kyu kata (shorturl.at/nEQ15) involves the use of one of JavaScript's String methods...
 * the repeat() method. I'll attempt this again sometime in the future to 
 * balance readability with efficiency.
 */

function explode(s) {
  let arr = s.split('');
  let result = "";
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      arr[i] = "";
    }
    
    arr[i] = arr[i].repeat(arr[i]);
  }
  
  result = arr.join('');
  return result;
}