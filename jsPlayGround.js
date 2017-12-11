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
//reverseString("Hallo. I want to test, if this is working correctly. Is it casEsenSItive? ");


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

// console.log(palindrome("eye")); // true
// console.log(palindrome("_eye")); // true
// console.log(palindrome("eye 32e DFSD3#*")); //  false
// console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
// console.log(palindrome("almostomla")); // false
// console.log(palindrome("not a palindrome")); // false




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

//findLongestWord("The quick brown fox jumped over the lazy dog");



// Title Case a Sentence
// capitalize every 1st char of a word

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

//console.log(titleCase("I'm a little tea pot"));
//console.log(titleCase("sHoRt AnD sToUt"));

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




// check if a string ends with an other str.
//
function confirmEnding(str, target) {
  var a = str.substr(-target.length);
  if (a == target) {
    return true;
  } else
  return false;
}

//console.log(confirmEnding("Bastian", "n"));




// repeat str num times
function repeatStringNumTimes(str, num) {
  if (!(num <= 0)) {
    str = str.repeat(num);
  } else {
    str = '';
  }
  return str;
}

// console.log(repeatStringNumTimes("abc", 4));



// Truncate a string
//
function truncateString(str, num) {
  if (!(num <= 3)) {
    if (num < str.length){
    str = str.slice(0,num-3);
    str = str + '...';
    console.log(str);
    } else {
      str = str;
    }
  } else {
    str = str.slice(0,num);
    str = str + '...';
    console.log(str);
  }
  return str;
}

// truncateString("A-tisket a-tasket A green and yellow basket", 2);




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

// console.log(factorialize(5));


// Return largest number in Arrays
function largestOfFour(arr) {
  var max = [];
  for (i = 0; i < arr.length; i++) {
    max[i] = arr[i].sort(function(a,b) {
      return b - a;
    });
  }
  arr=[];
  for (j=0;j<max.length;j++){
    arr.push(max[j][0]);
  }
  console.log(arr);
  return arr;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// better
/* function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
} */



// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var a = [];
  var b = [];
  while ( !(arr.length==0) ) {
    a = [];
    a = arr.splice(0,size);
    b.push(a);
  }
  console.log(b);
  return b;

}

// chunkArrayInGroups(["a", "b", "c", "d"], 3);


// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function slasher(arr, howMany) {
  var a = [];
  a = arr.slice(howMany,arr.length);
  return a;
}

// console.log(slasher([1, 2, 3], 2));


/* MutationObserver
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */

function mutation(arr) {
  var a = arr[0];
  var b = arr[1];
  a = a.toLowerCase();
  b = b.toLowerCase();
  a = a.split('');
  b = b.split('');
  console.log(a);
  console.log(b);
  for (i=0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      return false;
    }
  }
  return true;
}

// console.log(mutation(["hello", "hel"]));


// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  var a = arr.filter(function(x) {
    if (x != false) {
      return x;
    };
  })
  console.log(a);
  return a;
}

// bouncer([7, "ate", "", false, 9]);



// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are 
// of the same value as these arguments.

/* function destroyer() {
  var a = arguments[0].slice(0);
  var b = [];
  for (var i = 1; i < arguments.length; i++) {
    b = a.filter(function(x){
      if (x != arguments[i]) {
        return x;
        };
      }
    );
  }
  console.log(a);
  console.log(b);
  return b;
} */

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr.push(num);
  var a = arr.sort(function(a, b) {
    return a - b;
  });
  return a.indexOf(num);
}

//console.log(getIndexToIns([40, 60, 30], 50));
//console.log(getIndexToIns([3, 10, 5], 3));





// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// in   ABCDEFGHIJKLMNOPQRSTUVWXYZ
// out  NOPQRSTUVWXYZABCDEFGHIJKLM

function rot13(str) {
  var inStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.-!?';
  var outStr = 'NOPQRSTUVWXYZABCDEFGHIJKLM ,.-!?';
  var end = '';
  for (i=0; i < str.length; i++) {
    var j = str.charAt(i);
    var orig = inStr.indexOf(j);
    var targ = outStr[orig];
    end = end + targ;
  }
  return end;
}

rot13("SERR PBQR PNZC");