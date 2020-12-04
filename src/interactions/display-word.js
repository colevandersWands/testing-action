'use strict';

console.log('--- loading interaction -->');

/**
 * displays the saved word if there is one.
 * if there is no saved word, it tells the user so
 */
const displayWord = () => {
  if (favoriteWord === '') {
    alert('you do not have a favorite word');
    return;
  }

  const message = describeWord(favoriteWord, 'your favorite word is');
  alert(message);
};
