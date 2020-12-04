'use strict';

console.log('--- loading prompt --> ');

/**
 * presents a user with a list of options
 * continually prompts the user until they select an option from the list
 * @param {string[]} [options=['yes', 'no']] - the options a user can select from
 * @param {string} [instructions='pick one'] - to explain the options to the user
 * @returns {string} the selected option
 */
const chooseFromOptions = (options = ['yes', 'no'], instructions = 'pick one') => {
  // 1. render the options message for the user
  // 2. begin an I/O loop
  //  a. prompt the user with the message
  //  b. continue if the user input is empty
  //  c. continue if the user input is not in the options array
  //  d. ask the user to confirm their choice
 
  let userOption = '';
  let userInput = '';
  // 1. render the options message for the user
  const optionMessage = 'choose an option from the array option \n\n "' + options + '"';
  console.log(optionMessage);
  // 2. begin an I/O loop
  while (true) {
    //  a. prompt the user with the message
    const promptMessage = 'enter your option from the option array \n\n "' + options + '"'
    userInput = prompt(promptMessage);

    //  b. continue if the user input is empty
    if (userInput === '') {
      alert('you enter nothing , Why ?');
      continue;
    }
    //  c. continue if the user input is not in the options array
    if (!options.includes(userInput)) {
      alert('you did not enter an option from the array options');
      continue;
    }
    //  d. ask the user to confirm their choice
    const confirmMesseage = ' your option "' + userInput + '" is it correct';
    let userConfrim = confirm(confirmMesseage);
    if (userConfrim) {
      userOption = userInput;
      break;
    } else {
      alert('then what is your options');
      continue;
    }
  }
  return userOption;
  //const chooseBetween = `do you want to remove all vowels or all consonants?\n- "vowels"\n- "consonants"`;
  
};

{
  // store I/O functions and console.log for later
  const consoleLog = console.log;
  const globalPrompt = prompt;
  const globalConfirm = confirm;
  const globalAlert = alert;
  // over-write non-interactive I/O with empty functions
  alert = () => {};
  console.log = () => {};
  // a function that simulates a user inputting a series of values
  const mockUser = (values, index = 0) => () => values[index++];

  try {
    prompt = mockUser(['yes']);
    confirm = mockUser([true]);
    console.assert(chooseFromOptions() === 'yes', 'Test 0 a');

    prompt = mockUser(['no']);
    confirm = mockUser([true]);
    console.assert(chooseFromOptions() === 'no', 'Test 0 b');

    prompt = mockUser(['x', 'y', 'b', 'c']);
    confirm = mockUser([false, true]);
    console.assert(chooseFromOptions(['a', 'b', 'c']) === 'c', 'Test 1');

    prompt = mockUser(['dogs', 'mice', 'dogs']);
    confirm = mockUser([false, true]);
    console.assert(chooseFromOptions(['cats', 'dogs']) === 'dogs', 'Test 2');

    prompt = mockUser(['white chocolte', 'white chocolate', 'dark chocolate']);
    confirm = mockUser([false, true]);
    console.assert(
      chooseFromOptions([
        'white chocolate',
        'milk chocolate',
        'dark chocolate',
      ]) === 'dark chocolate',
      'Test 3'
    );
  } catch (err) {
    console.error(err);
  }

  // reassign the global functions now that testing is over
  prompt = globalPrompt;
  confirm = globalConfirm;
  alert = globalAlert;
  console.log = consoleLog;
}
