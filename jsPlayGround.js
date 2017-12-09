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
