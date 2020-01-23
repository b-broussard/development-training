/**
 * This 6 kyu kata makes use of the fact that JavaScript stores numbers
 * as 64-bit floating point numbers, thus requiring precision when evaluating
 * whether the bouncing ball can be seen by the mother described in the kata's
 * description: shorturl.at/lqsFZ
 */

function bouncingBall(h, bounce, window) {
  if (h <= 0.0 || bounce <= 0.0 || bounce >= 1.0 || window >= h) {
    return -1;
  }
  
  let sightings = 0;
  for (let i = h; i > window.toPrecision(3); ) {
    // Because JavaScript stores numbers as 64-bit floats,
    // the ball's rebound height must be factored as below to ensure precision
    let reboundHeight = (i * bounce * 10) / 10;
    if (i >= window) {
      sightings += 1;
      if (reboundHeight > window) {
        sightings += 1;
      }
    }
    i = reboundHeight;
  }
  
  return sightings;
}