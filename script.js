// complete the given function

function palindrome(str) {
  let lowerStr = str.toLowerCase();
  let reversed = lowerStr.split('').reverse().join('');
  return lowerStr === reversed;
}
module.exports = palindrome
