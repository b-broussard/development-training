/** 
 * Today's kata was the first of its kind for me: it involved extending the
 * built-in Array.prototype object to carry out what a current mutating Array 
 * method (i.e. Array.prototype.splice()) can accomplish already. I would say
 * that the main lesson here lies in the process of extending JavaScript
 * objects (albeit ones I don't own, which I'm very keen on avoiding for
 * moral reasons well-established elsewhere) with new methods, with the nice
 * bonus of learning about a powerful built-in Array method.
 *
 * The following function, which adds a value as an element without 
 * removing any other value, is thus rendered non-enumerable:
 */

Object.defineProperty(Array.prototype, "insert", {
  enumerable: false,
  value: function(index, value) {
    //insert at the specified index without removing or replacing any value
    this.splice(index, 0, value);
    return this;
  }  
});
