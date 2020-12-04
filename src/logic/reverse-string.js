'use strict';

console.log('--- loading logic --> ');

/**
 * reverses a string
 * @param {string} [str=''] - the string to reverse
 * @returns {string} the reversed string
 */
const reverseString = () => {};

{
  const consoleLog = console.log;
  console.log = () => {};

  try {
    console.assert(reverseString() === '', 'Test 0');
    console.assert(reverseString('') === '', 'Test 1');
    console.assert(reverseString('asdf') === 'fdsa', 'Test 2');
    console.assert(reverseString('1234') === '4321', 'Test 3');
    console.assert(reverseString('Robert') === 'treboR', 'Test 4');
    console.assert(reverseString('racecar') === 'racecar', 'Test 5');
  } catch (err) {
    console.error(err);
  }

  console.log = consoleLog;
}
