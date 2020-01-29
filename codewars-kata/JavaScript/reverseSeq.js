/**
 * Rightly tagged with the keyword "Fundamentals", this 8 kyu kata was super simple and
 * took the least time to complete out of all others. I'd hazard a guess of 1 minute,
 * 25 seconds. Find it here: (shorturl.at/lvMP6)
 */

const reverseSeq = n => {
  let arrSeq = []
  
  for (let i = n; i > 0; i--) {
    arrSeq.push(i);
  }
  
  return arrSeq;
};