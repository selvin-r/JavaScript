
//======================Object Definitions==================================================

// Using an Object Literal==========================

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person.firstName + " " + person.lastName);


// Using the new Keyword===========================

const person1 = new Object({
  firstName: "selvin",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});

console.log(person1.firstName + " " + person1.lastName);

// Constructor Function (new)==========================================

function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
const car1 = new Car("Toyota", 2023);
console.log(" Brand :" +car1.brand + " Year :" + car1.year); // Output: Toyota

// Object.create()===============================================

const proto = {
  greet: function() { return "Hello, " + this.name; }
};
const user = Object.create(proto);
user.name = "Alex";
console.log(user.greet()); // Output: Hello, Alex

// 1. Accessing Object Properties========================================

let obj = { name: "Sourav", age: 23,fname: "selvin" };

// Using Dot Notation
console.log(obj.name);
console.log(obj.fname);

// Using Bracket Notation
console.log(obj["age"]);

// 2. Modifying Object Properties============================================

let obj1 = { name: "Sourav", age: 22 };
console.log(obj1);

obj1.age = 23;
obj1.name ="Boss";
console.log(obj1);

// 3. Adding Properties to an Object===================================
let obj2 = { model: "Tesla" };
obj2.color = "Red";
obj2.year=2026;

console.log(obj2);

// 4. Removing Properties from an Object===============================

let obj3 = { model: "Tesla", color: "Red" };
delete obj3.color;

console.log(obj3);

// 5. Checking if a Property Exists====================================

let obj4 = { model: "Tesla" };
console.log("color" in obj4);
console.log("model" in obj4);
console.log(obj4.hasOwnProperty("model"));

// 6. Iterating Through Object Properties=============================

let ob = { name: "Sourav", age: 23 };
for (let key in ob) {
  console.log(key + ": " + ob[key]);
}

// 7. Merging Objects===================================================


let obj11 = { name: "Sourav" };
let obj22 = { age: 23};
let obj44 ={year : 2002};

let obj33 = { ...obj11, ...obj22 ,...obj44 };
console.log(obj33);