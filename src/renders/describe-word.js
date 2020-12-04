'use strict';

console.log('--- loading render --> ');

/**
 * a function to combine a word and a message into full description
 * @param {string} [word=''] - the word to render
 * @param {string} [message='here is a word'] - used to describe the word
 * @returns {string} a rendered message describing the word
 */
const describeWord = (word = '', message = 'here is a word') => {
  return `${message}: "${word}"`;
};

{
  const consoleLog = console.log;
  console.log = () => {};

  try {
    console.assert(describeWord() === 'here is a word: ""', 'Test 0');
    console.assert(
      describeWord('potato') === 'here is a word: "potato"',
      'Test 1'
    );
    console.assert(
      describeWord('potatoes', 'pre-chips') === 'pre-chips: "potatoes"',
      'Test 2'
    );
    console.assert(
      describeWord('JavaScript', 'what is your favorite language') ===
        'what is your favorite language: "JavaScript"',
      'Test 3'
    );
  } catch (err) {
    console.error(err);
  }

  console.log = consoleLog;
}
