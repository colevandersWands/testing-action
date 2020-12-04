'use strict';

console.log('--- loading logic --> ');

/**
 * repeats a string a given number of times
 * @param {string} [text=''] - the string to repeat
 * @param {number} [repetitions=1] - how many time to repeat the string
 * @returns {string} the repeated string
 */
const repeatString = () => {};

{
  const consoleLog = console.log;
  console.log = () => {};

  try {
    console.assert(repeatString('asdf') === 'asdf', 'Test 0 a');
    console.assert(repeatString() === '', 'Test 0 ');
    console.assert(repeatString('asdf', 0) === '', 'Test 1');
    console.assert(repeatString('asdf', 1) === 'asdf', 'Test 2');
    console.assert(repeatString('asdf', 2) === 'asdfasdf', 'Test 3');
    console.assert(repeatString('asdf', 3) === 'asdfasdfasdf', 'Test 4');
    console.assert(repeatString('', 0) === '', 'Test 5');
    console.assert(repeatString('', 1) === '', 'Test 6');
    console.assert(repeatString('', 2) === '', 'Test 7');
    console.assert(
      repeatString('mississippi', 7) ===
        'mississippimississippimississippimississippimississippimississippimississippi',
      'Test 8'
    );
  } catch (err) {
    console.error(err);
  }

  console.log = consoleLog;
}
