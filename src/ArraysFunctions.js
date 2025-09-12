// ArraysFunctions

 // 1. length


let arr = [10, 20, 30];
console.log(arr.length); // 3


// 2. push(value)
let arr1 = [1, 2];
arr1.push(3);
console.log(arr1); // [1, 2, 3]


// 3. pop()

let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2]

// 4. unshift(value)

let arr3 = [2, 3];
arr3.unshift(1,4);
console.log(arr3); // [1, 2, 3]

// 5. shift()

let arr4 = [1, 2, 3];
arr4.shift();
console.log(arr4); // [2, 3]

// 6. indexOf(value)

let arr5 = ["a","b","c"];
console.log(arr5.indexOf("b")); // 1

// 7. lastIndexOf(value)

let arr6 = ["a","b","a"];
console.log(arr6.lastIndexOf("a")); // 2

// 8. includes(value)

let arr7 = [1,2,3];
console.log(arr7.includes(4)); // true

// 9. join(separator)
let ar = ["a","b","c"];
console.log(ar.join("--")); // "a-b-c"


// 10. concat(arr2)

let a = [1,2];
let b = [3,4];
console.log(a.concat(b)); // [1,2,3,4]


// 11. slice(start,end)

let ar1 = [1,2,3,4];
console.log(ar1.slice(1,3)); // [2,3]


// 12. splice(start, deleteCount, ...items)

let ar2 = [1,2,3,4];
ar2.splice(1,2,"a","b");
console.log(ar2); // [1,"a","b",4]


// 13. reverse()

let ar3 = [1,2,3];
ar3.reverse();
console.log(ar3); // [3,2,1]


// 14. sort()

let ar4 = [4,1,3,2];
ar4.sort();
console.log(ar4); // [1,2,3,4]  (as strings)

// callback functions-----------------------------------------------------------------------------------------------------------------

// 15. map(callback)

let ar5= [1,2,3];
let doubled = ar5.map(x => x*2);
console.log(doubled); // [2,4,6]


// 16. filter(callback)

let ar6 = [1,2,3,4];
let even = ar6.filter(x => x%2==0);
console.log(even); // [2,4]


// 17. forEach(callback)

let ar7 = [1,2,3];
ar7.forEach(x => console.log(x*2));
// 2 4 6


// 18. reduce(callback, initial)

let ad = [1,2,3];
let sum = ad.reduce((a,b) => a+b, 0);
console.log(sum); // 6


// 19. find(callback)

let ad1 = [1,2,3,4];
console.log(ad1.find(x => x>2)); // 3


// 20. findIndex(callback)

let ad2 = [1,2,3,4];
console.log(ad2.findIndex(x => x>3)); // 2


// 21 some() Method (Arrays)
let numbers = [10, 25, 30, 40];

// Check if any number is greater than 35
let result = numbers.some(function(num) {
  return num > 30;
});

console.log(result); // true
