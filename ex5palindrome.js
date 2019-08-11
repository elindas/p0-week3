
function palindrome(kata) {
  var i = kata.length - 1;
  var k = 0;
  while (i > k) {
    if (kata.charAt(k++) !== kata.charAt(i--)) 
    return false;
  }

  return true;
  // atau dengan bulit in
  // return kata === kata.split('').reverse().join(''); 
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

