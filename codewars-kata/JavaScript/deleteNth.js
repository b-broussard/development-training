/**
 * A refreshing challenge compared to some I completed immediately beforehand,
 * this 6 kyu kata requires that array elements be removed if they occur more
 * than n times. As of this writing, there are a surprisingly great number of
 * fast ways to do so, so I'll be coming back to this one again in the future.
 */

function deleteNth(arr,n) {
  let result = [];
  let count = [];

  for (let i = 0; i < arr.length; i++) {
    (count[arr[i]] === undefined) ? count[arr[i]] = 1 : count[arr[i]] += 1;
    if (count[arr[i]] <= n) {
      result.push(arr[i]);
    }
  }

  return result;
}