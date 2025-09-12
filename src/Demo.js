
const arr =[1,2,3,4,5,6,7,8,9];

  let even = arr.filter(a => a%2===0);


  console.log(even);

// Declare 2D array using literal
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1 (first row, first column)
console.log(matrix[1][2]); // 6 (second row, third column)

// Using Array constructor
let matrix2 = new Array(
  [10, 20],
  [30, 40]
);
console.log(matrix2[1][0]); // 30

// 2d Looping-------------------------------------------------------------------------------------------------------

let matrixe = [
  [1,2],
  [3,4]
];

for (let i = 0; i < matrixe.length; i++) {          // rows
  for (let j = 0; j < matrixe[i].length; j++) {   // columns
    console.log(matrixe[i][j]);
  }
}


/// Any value in arrays--------------------------------------------------------------------------------------------

let mixedArray = [
  "Alice",                // String
  25,                     // Number
  true,                   // Boolean
  undefined,              // Undefined
  null,                   // Null
  1234567890123n,          // BigInt
  Symbol('id'),            // Symbol
  { name: "John", age: 20 }, // Object
  [1, 2, 3],               // Array
  function() {             // Function
    return "Hello!";
  },
  "A"                      // Character (string of length 1)
];

// Print each value and its type
mixedArray.forEach(item => {
  console.log(item, "=>", typeof item);
});
