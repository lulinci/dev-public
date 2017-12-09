// String manipulations
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