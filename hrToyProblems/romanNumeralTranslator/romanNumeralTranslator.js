// from Hack Reactor Toy Problems
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') { return null; }
  return romanNumeral.split('').map((romanLetter) => { return DIGIT_VALUES[romanLetter] })
    .map((value, index, array) => array[index + 1] && array[index + 1] > value ? -value : value)
    .reduce((accu, value) => accu + value, 0)
};
