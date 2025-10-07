 // 500
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) { //built-in object called the arguments object
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
 let x = findMax(1, 123, 500,3000, 115, 44, 88);
 console.log(x);