/** 
 * Remember the "covfefe" mania? This kata is loosely based on that historic
 * tweet. Instead of correcting the word, it just transforms every instance
 * of "coverage" to "covfefe", or adds "covfefe" to the end of the returned
 * string if "coverage" is not found.
 */

function covfefe(str){
  return str.match(/coverage/g) ? str.replace(/coverage/g, "covfefe") : str + " covfefe";
}
