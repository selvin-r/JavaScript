
function reverseNum(num) {
  let reversed = 0;
  while (num != 0) {
    reversed = reversed * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNum(12345)); // Output: 54321


// Tow

function reverseNumber(n) {
  return Number(n.toString().split('').reverse().join(''));
}
console.log(reverseNumber(32243)); // Output: 34223


//3

let num = 12345;
let reversed = num.toString().split('').reverse().join('');
console.log(reversed);  // Output: 54321

