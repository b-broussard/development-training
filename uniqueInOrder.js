/* 
The following is my first solution to the 6 kyu Codewars kata found here:
shorturl.at/cFNO4
*/

const uniqueInOrder = (iterable) => {
  if (typeof(iterable) === 'string') {
    const stringArray = iterable.split("")
    let prevChar = ""
    let result = []
    
    // Check if successive characters are unique, and add to a separate array if so
    stringArray.forEach( (currentChar) => {
      if (prevChar != currentChar) {
        result.push(currentChar)
        prevChar = currentChar
      }
      console.log(result)
    })
    return result
  }
  
  if (iterable instanceof Array) {
    const numberArray = iterable
    let prevValue = ""
    
    numberArray.forEach( (value) => {
      if (prevValue === value) {
        numberArray.splice(numberArray.indexOf(value), 1)
      }
      prevValue = value
    })
    return numberArray
  }
}

/* 
The following is my second solution for the same kata. It has been refactored 
for brevity and efficiency.
*/

const uniqueInOrder = (iterable) => {
  let prev = ""
  let result = []
    
  // Check if successive characters are unique, and add to a separate array if so
  for(let current in iterable) {
    if (prev !== iterable[current]) {
      result.push(prev = iterable[current])
    }
  }
  return result  
}