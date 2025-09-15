

// Functions --------------------------------------------------------


// one Type-----------------------------------------------------------------------

function f(a,b) {

  return a + b;

}

console.log(f(30,40));
console.log(f(4,40));
console.log(f(40,90));

// other Type--------------------------------------------------------------------

function f1() {

  return "Hello World!";

}
console.log(f1());

// inside other Functions

// Inside an object (method)----------------------------------------------------------------
const calculator = {
  multiply: function (x, y) {
    return x * y;
  }
};

console.log(calculator.multiply(4, 5)); // 20


// Built-in function----------------------------------------------------------------------------------------------
// alert("This is an alert!");

// User-defined function
function sayName(name) {
  console.log("My name is " + name);
}
sayName("Darling");

// 1. Function Declaration (Named Function)==================================================================================

function greet() {
  console.log("Hello!");
}
greet();


//2. Function Expression========================================================================================================

const greetr = function() {
  console.log("Ohhhh My Goddddddd");
};
greetr();


// 3. Arrow Function (ES6)==========================================================================

const greet2 = () => {
  console.log("Hello! selvinaaaaaaaaa");
};
greet2();

// 4. Anonymous Function===============================================================================

setTimeout(function() {
  console.log("Hello after 2 sec");
}, 1000);

// <==============================>

const greet3 = function() {
  return "Hi there!";
};
console.log(greet3()); // Hi there!


// 5. Immediately Invoked Function Expression (IIFE)===========================

(function() {
  console.log("I run immediately!");
})();


// 6. Callback Function==============================================

function num(n, callback) {
  return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));


// 7. Constructor Function======================================

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Hyfa Chellam ", 22);
console.log(user.name,user.age); // Neha


// ⚡ Advanced / Less Common Types

// ⚡ 1. Generator Functions=========================================


function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yiel
}

const gen = numberGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4


// ⚡ 2. Async Functions===========================================

// async function fetchData() {
//   let response = await fetch("https://api.example.com/data");
//   let data = await response.json();
//   console.log(data);
// }
//
// fetchData();


// 3 Higher-Order Function=========================================

function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const value = multiplyBy(2);
console.log( " Higher-Order Function " +value(5)); // 10


// 4 Nested Functions==========================================

function outerFun(a,) {
  function innerFun(b) {
    return a + b;
  }
  return innerFun;
}

const addTen = outerFun(10);
console.log(" Nested Functions " +addTen(5));

// 5 Pure Functions===============================================

function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(2, 3));


// // Default Parameter Function====================================
//
// function greet(name = "Guest") {
//   return "Hello, " + name;
// }
// console.log(greet());      // Hello, Guest
// console.log(greet("Aman"));// Hello, Aman


// Rest Parameter Function================================

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10