'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to see their word with all the vowels or all the consonants removed
 */
const removeVowelsOrConsonants = () => {
  // 1. if there is no saved word, call displayWord and exit early
  // 2. use chooseBetween to let the user select 'vowels' or 'consonants'
  // 3. use removeCharacters to create a new string
  //  remove all vowels (lower and upper case) if the user selected "vowels"
  //  remove all consonants (lower and upper case) if the user selected "consonants"
  // 4. render a final before/after message with favoriteWord and the new string from ^ up there
  // 5. alert the rendered message

  favoriteWord = 'test me'; //to test
  if (favoriteWord === '') {
    displayWord();
  } else {

    const chooseBetween = `do you want to remove all vowels or all consonants?\n- "vowels"\n- "consonants"`
    //prompt
    //const askToConfirm = prompt(chooseBetween);
    //if (!askToConfirm) return;

    // const reversedString = reverseString(favoriteWord);
    // const description = 'your favorite word reversed';
    // //render
    // const render = beforeAndAfter(favoriteWord, reversedString, description);
    alert(render);
  }
};
