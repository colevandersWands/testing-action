'use strict';

console.log('--- loading data --> ');

/* Program Data

  here you will declare the initial values for your program data
  depending on the program this may be primitives, arrays or objects

  careful!   should you use `let` or `const`?
  - is it a primitive value that changes?       `let`
  - is it an object or array that is replaced?  `let`
  - is it a primitive that never changes?       `const`
  - is it an object or array that is modified?  `const`

*/

/**
 * @type {string} - the user's saved word
 */
let favoriteWord = "";
console.assert(favoriteWord === '', 'initial value should be an empty string');
