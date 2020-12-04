'use strict';

console.log('--- loading render --> ');

/**
 * renders two strings into a before/after comparison
 * @param {string} beforeValue - string before transformation
 * @param {string} afterValue - string after transformation
 * @param {string} [description=''] - describing what changes were made
 * @returns {string} a formatted before/after message
 */
const beforeAndAfter = () => {};

{
  const consoleLog = console.log;
  console.log = () => {};

  try {
    console.assert(
      beforeAndAfter('', '') === 'before: ""\nafter: ""',
      'Test 0'
    );
    console.assert(
      beforeAndAfter('start', 'finish') === 'before: "start"\nafter: "finish"',
      'Test 1'
    );
    console.assert(
      beforeAndAfter('', '', 'all done!') ===
        'all done!\nbefore: ""\nafter: ""',
      'Test 2'
    );
    console.assert(
      beforeAndAfter('start', 'finish', 'all done!') ===
        'all done!\nbefore: "start"\nafter: "finish"',
      'Test 3'
    );
  } catch (err) {
    console.error(err);
  }

  console.log = consoleLog;
}
