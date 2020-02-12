/** 
 * The objective of this 5 kyu kata is to apply the rules of Pig Latin to all 
 * word characters, leaving punctuation untouched.
 */

const pigIt = (str) => {    
  return str.split(" ").map(word =>
      /\w/.test(word) ? word.replace(word, word.substring(1, word.length) + word.charAt(0) + "ay") : word).join(' ');
}
