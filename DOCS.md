<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [data.js](#srcdatajs)
- [interactions](#interactions)
  - [clear-word.js](#srcinteractionsclear-wordjs)
  - [display-word.js](#srcinteractionsdisplay-wordjs)
  - [remove-vowels-or-consonants.js](#srcinteractionsremove-vowels-or-consonantsjs)
  - [repeat-word-or-characters.js](#srcinteractionsrepeat-word-or-charactersjs)
  - [reverse-word.js](#srcinteractionsreverse-wordjs)
  - [set-word.js](#srcinteractionsset-wordjs)
- [logic](#logic)
  - [remove-characters.js](#srclogicremove-charactersjs)
  - [repeat-characters.js](#srclogicrepeat-charactersjs)
  - [repeat-string.js](#srclogicrepeat-stringjs)
  - [reverse-string.js](#srclogicreverse-stringjs)
- [prompts](#prompts)
  - [choose-from-options.js](#srcpromptschoose-from-optionsjs)
  - [enter-number.js](#srcpromptsenter-numberjs)
  - [enter-word.js](#srcpromptsenter-wordjs)
- [renders](#renders)
  - [before-and-after.js](#srcrendersbefore-and-afterjs)
  - [describe-word.js](#srcrendersdescribe-wordjs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# [./src/data.js](./src/data.js?study)

<a name="favoriteWord"></a>

## favoriteWord : <code>string</code>

- the user's saved word

---

# Interactions

These functions' role is to implement entire user interactions.
They will use the _prompts_ and _renders_ to interact with the user, and _logic_ to process user data.

You will call interaction functions from your UI using the `onclick` attribute.

Here are some general rules for your interaction functions:

- they should not take any arguments
- they should not return any values
- they can use functions declared in `/logic`, `/prompts` and `/renders`
- they can read and modify data variables stored in data.js

---

## [./src/interactions/clear-word.js](./src/interactions/clear-word.js?study)

<a name="clearWord"></a>

## clearWord()

if there is a favorite word, the user is asked to confirm before clearing it.
if there is no saved word the user is told there is no word to clear

---

## [./src/interactions/display-word.js](./src/interactions/display-word.js?study)

<a name="displayWord"></a>

## displayWord()

displays the saved word if there is one.
if there is no saved word, it tells the user so

---

## [./src/interactions/remove-vowels-or-consonants.js](./src/interactions/remove-vowels-or-consonants.js?study)

<a name="removeVowelsOrConsonants"></a>

## removeVowelsOrConsonants()

allows a user to see their word with all the vowels or all the consonants removed

---

## [./src/interactions/repeat-word-or-characters.js](./src/interactions/repeat-word-or-characters.js?study)

<a name="repeatWordOrCharacters"></a>

## repeatWordOrCharacters()

allows a user to see either the whole word repeated, or their word with each character repeated.
if there is no word, the user is told so

---

## [./src/interactions/reverse-word.js](./src/interactions/reverse-word.js?study)

<a name="reverseWord"></a>

## reverseWord()

allows a user to set a new value for the saved word.
if there's already a saved word, they are asked to confirm replacing it

---

## [./src/interactions/set-word.js](./src/interactions/set-word.js?study)

<a name="setWord"></a>

## setWord()

allows a user to set a new value for the saved word.
if there is no saved word, the user is told so and the interaction ends.
if there is a saved word, the user is asked to confirm replacing it.
if the user confirms, they enter a new word that replaces the old one.

[TOP](#DOCS)

---

---

# Logic

these functions' role is to process and transform data. Logic functions are your standard "coding challenge" type function. In goes some data, out comes some new data.

Here are some general rules for your logic functions:

- they always need at least one argument
- they will always return a value
- they only use console.log
- they cannot use prompt, alert, or confirm

---

## [./src/logic/remove-characters.js](./src/logic/remove-characters.js?study)

<a name="removeCharacters"></a>

## removeCharacters([text], [charactersToRemove]) ⇒ <code>string</code>

removes all the provided characters from a string

**Returns**: <code>string</code> - new string with all provided characters removed

| Param                | Type                | Default                               | Description                    |
| -------------------- | ------------------- | ------------------------------------- | ------------------------------ |
| [text]               | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | text to remove characters from |
| [charactersToRemove] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | string of characters to remove |

---

## [./src/logic/repeat-characters.js](./src/logic/repeat-characters.js?study)

<a name="repeatCharacters"></a>

## repeatCharacters([text], [repetitions]) ⇒ <code>string</code>

repeats each character in a string a given number of times

**Returns**: <code>string</code> - the string with each character repeated

| Param         | Type                | Default                               | Description                            |
| ------------- | ------------------- | ------------------------------------- | -------------------------------------- |
| [text]        | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | the string of characters to repeat     |
| [repetitions] | <code>number</code> | <code>1</code>                        | how many time to repeat each character |

---

## [./src/logic/repeat-string.js](./src/logic/repeat-string.js?study)

<a name="repeatString"></a>

## repeatString([text], [repetitions]) ⇒ <code>string</code>

repeats a string a given number of times

**Returns**: <code>string</code> - the repeated string

| Param         | Type                | Default                               | Description                        |
| ------------- | ------------------- | ------------------------------------- | ---------------------------------- |
| [text]        | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | the string to repeat               |
| [repetitions] | <code>number</code> | <code>1</code>                        | how many time to repeat the string |

---

## [./src/logic/reverse-string.js](./src/logic/reverse-string.js?study)

<a name="reverseString"></a>

## reverseString([str]) ⇒ <code>string</code>

reverses a string

**Returns**: <code>string</code> - the reversed string

| Param | Type                | Default                               | Description           |
| ----- | ------------------- | ------------------------------------- | --------------------- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | the string to reverse |

[TOP](#DOCS)

---

---

# Prompts

these functions' role is to gather and validate user input
we'll call these functions "prompts".

Here are some general rules for your prompt functions:

- they don't always need an argument
- they will always return a value
- they must use at least one prompt() or confirm()
- they can also use alert & console.log

---

## [./src/prompts/choose-from-options.js](./src/prompts/choose-from-options.js?study)

<a name="chooseFromOptions"></a>

## chooseFromOptions([options], [instructions]) ⇒ <code>string</code>

presents a user with a list of options
continually prompts the user until they select an option from the list

**Returns**: <code>string</code> - the selected option

| Param          | Type                              | Default                                        | Description                        |
| -------------- | --------------------------------- | ---------------------------------------------- | ---------------------------------- |
| [options]      | <code>Array.&lt;string&gt;</code> | <code>[&#x27;yes&#x27;, &#x27;no&#x27;]</code> | the options a user can select from |
| [instructions] | <code>string</code>               | <code>&quot;&#x27;pick one&#x27;&quot;</code>  | to explain the options to the user |

---

## [./src/prompts/enter-number.js](./src/prompts/enter-number.js?study)

<a name="enterNumber"></a>

## enterNumber([message]) ⇒ <code>number</code>

prompts the user for a number, casts and validates their input
it will prompt the user until a valid number is entered

**Returns**: <code>number</code> - a number cast from the user input (never NaN)

| Param     | Type                | Default                                             | Description                    |
| --------- | ------------------- | --------------------------------------------------- | ------------------------------ |
| [message] | <code>string</code> | <code>&quot;&#x27;enter a number&#x27;&quot;</code> | the text displayed to the user |

---

## [./src/prompts/enter-word.js](./src/prompts/enter-word.js?study)

<a name="enterWord"></a>

## enterWord([message]) ⇒ <code>string</code>

a function that prompts the user to enter a word
if the user enters nothing or cancels, it will prompt them again
the input must contain only letters or hyphens, otherwise the user is prompted again

**Returns**: <code>string</code> - the user input, it will not be empty

| Param     | Type                | Default                                           | Description                           |
| --------- | ------------------- | ------------------------------------------------- | ------------------------------------- |
| [message] | <code>string</code> | <code>&quot;&#x27;enter a word&#x27;&quot;</code> | what the user will read in the prompt |

[TOP](#DOCS)

---

---

# Renders

These functions' role is to format data so it's nice for users to read.

Here are some general rules for your render functions:

- they always need at least one argument (you need some data to display!)
- they will return a formatted version of your data
- they can only use console.log
- they cannot use prompt, alert or confirm (you will alert the return value)

---

## [./src/renders/before-and-after.js](./src/renders/before-and-after.js?study)

<a name="beforeAndAfter"></a>

## beforeAndAfter(beforeValue, afterValue, [description]) ⇒ <code>string</code>

renders two strings into a before/after comparison

**Returns**: <code>string</code> - a formatted before/after message

| Param         | Type                | Default                               | Description                       |
| ------------- | ------------------- | ------------------------------------- | --------------------------------- |
| beforeValue   | <code>string</code> |                                       | string before transformation      |
| afterValue    | <code>string</code> |                                       | string after transformation       |
| [description] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | describing what changes were made |

---

## [./src/renders/describe-word.js](./src/renders/describe-word.js?study)

<a name="describeWord"></a>

## describeWord([word], [message]) ⇒ <code>string</code>

a function to combine a word and a message into full description

**Returns**: <code>string</code> - a rendered message describing the word

| Param     | Type                | Default                                             | Description               |
| --------- | ------------------- | --------------------------------------------------- | ------------------------- |
| [word]    | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code>               | the word to render        |
| [message] | <code>string</code> | <code>&quot;&#x27;here is a word&#x27;&quot;</code> | used to describe the word |

[TOP](#DOCS)

---

<!-- END DOCS -->
