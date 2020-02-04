/**
 * Today's kata is a puzzle that requires at least one full submission before
 * one could see what is really happening in the tests. This function
 * capitalizes the last character in every word within the passed string.
 */

function capitalizeLast(s){
  return s.split(' ').map(word => 
    word.substring(0, word.length - 1) +
    word.charAt(word.length - 1).toUpperCase()).join(' ');
}
