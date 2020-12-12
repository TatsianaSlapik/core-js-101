/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(str1, str2) {
  return str1.trim() + str2.trim();
  // throw new Error('Not implemented');
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
  // throw new Error('Not implemented');
}
/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
  // throw new Error('Not implemented');
}
/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} greeting
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(greeting) {
  return greeting.substring(7, greeting.length - 1);
  // throw new Error('Not implemented');
}
/**
 * Returns a first char of the given string.
 * @param {string} name
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(name) {
  return name.slice(0, 1);
  // throw new Error('Not implemented');
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(str) {
  return str.trim();
  // throw new Error('Not implemented');
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
  // throw new Error('Not implemented');
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} sourceStr
 * @param {string} inputStr
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(sourceStr, inputStr) {
  const indexInputStr = sourceStr.indexOf(inputStr);
  const lastIndexInputStr = indexInputStr + inputStr.length;
  return sourceStr.slice(0, indexInputStr) + sourceStr.slice(lastIndexInputStr, sourceStr.length);
  // throw new Error('Not implemented');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} tag
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(tag) {
  const newtag = tag.replace('<', '');
  return newtag.replace('>', '');
  // throw new Error('Not implemented');
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} specStr
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(specStr) {
  return specStr.toLocaleUpperCase();
// throw new Error('Not implemented');
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} emails
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(emails) {
  return emails.split(/;/);
  // throw new Error('Not implemented');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const topLeft = '┌';
  const topRight = '┐';
  const topBottom = '─';
  const rightLeft = '│';
  const bottomLeft = '└';
  const bottomRight = '┘';
  let result = '';

  for (let i = 0; i <= height - 1; i += 1) {
    for (let j = 0; j <= width - 1; j += 1) {
      if (i === 0 && j === 0) {
        result += topLeft;
      }
      if ((i === 0 || i === height - 1) && j > 0 && j < width - 1) {
        result += topBottom;
      }
      if (i === 0 && j === width - 1) {
        result += topRight;
      }
      if (i > 0 && i < height - 1 && (j === 0 || j === width - 1)) {
        result += rightLeft;
      }
      if (i > 0 && i < height - 1 && j > 0 && j < width - 1) {
        result += ' ';
      }
      if (i === height - 1 && j === 0) {
        result += bottomLeft;
      }
      if (i === height - 1 && j === width - 1) {
        result += bottomRight;
      }
    }
    result += '\n';
  }
  return result;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} beforeCoding
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(beforeCoding) {
  let result = '';
  let code = 0;
  for (let i = 0; i < beforeCoding.length; i += 1) {
    const before = beforeCoding[i].charCodeAt();
    if ((before < 97 || before > 122) && (before < 65 || before > 90)) {
      result += beforeCoding[i];
    } else {
      code = beforeCoding[i].charCodeAt() + 13;
      if (before >= 97 && before <= 122 && code > 122) {
        code = 97 + (code - 123);
      } else if (before >= 65 && before <= 90 && code > 90) {
        code = 65 + (code - 91);
      }
      result += `${String.fromCharCode(code)}`;
    }
  }


  return result;
  // throw new Error('Not implemented');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }
  return false;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} cards
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(cards) {
  return ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'].indexOf(cards);
  // throw new Error('Not implemented');
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
