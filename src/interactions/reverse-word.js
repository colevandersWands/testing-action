'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to set a new value for the saved word.
 * If there's already a saved word, they are asked to confirm replacing it
 * uses reverse-string.js
 */

const reverseWord = () => {
  // 1. if there is no saved word, call displayWord and exit early
  // 2. use reverseString to reverse the favorite word
  // 3. render a final before/after message with favoriteWord and the new string from ^ up there
  // 4. alert the rendered message

  //favoriteWord = 'test me'; //to test
  if (favoriteWord === '') {
    displayWord();
  } else {
    //confirm
    const askToConfirm = confirm('do you want to proceed?');
    if (!askToConfirm) return;

    const reversedString = reverseString(favoriteWord);
    const description = 'your favorite word reversed';
    //render
    const render = beforeAndAfter(favoriteWord, reversedString, description);
    alert(render);
  }
};