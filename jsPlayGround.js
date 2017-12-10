// String manipulations...
//
// reverse a string
function reverseString(str) {
  var c = str.split('');
  c = c.reverse();
  str = c.join('');
  console.log(str);
  return str;
}
// testing the reverseString()
reverseString("Hallo. I want to test, if this is working correctly. Is it casEsenSItive? ");


// Check for Palindromes
//
function palindrome(str) {
  var a = str.toLowerCase();
  var exp = /\W/gi;
  a = a.replace(exp,'');
  a = a.replace('_','');
  var aspl = a.split('');

  var b = aspl;
  var r = aspl.slice().reverse();  // USE slice() because the original is modified

  r = r.join('');
  b = b.join('');
  if (r == b) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("eye 32e DFSD3#*")); //  false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("almostomla")); // false
console.log(palindrome("not a palindrome")); // false

// Find the Longest Word in a String
//

function findLongestWord(str) {
  var a = str.split(' '||',');
  var max = 0;
  for (i=0;i<a.length;i++) {
    if(max<a[i].length)
    max = a[i].length;
  }
  console.log(max);
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// Title Case a Sentence
// capitalize every 1st char of a word

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

/* The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.
Lowercase the whole string using str.toLowerCase().
Replace every word’s first character to uppercase using .replace.
Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
Regex explanation:
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
The g modifier searches for other such word pattern in the whole string and replaces them.
This solution works with national symbols and accented letters as illustrated by following examples
international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’ */


// Math manipulations
//
// Factorialize a Number num! 5! = 5*4*3*2*1 = 120
function factorialize(num) {
  let a = 1;
  for (var i = num; i > 0; i--) {
    a = a * i;
  }
  num = a;
  return num;
}

console.log(factorialize(5));
