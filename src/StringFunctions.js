
// 1. + (Concatenation Operator)==================================================

let first = "Hello";
let second = "World";
let result = first + " " + second; // "Hello World"
 console.log( result);

// 2. concat()==========================================================================

let str1 = "JavaScript";
let str2 = " is fun";
let sentence = str1.concat(str2, " to learn!");

console.log(sentence);


// 3. Template Literals (Backticks ` `)======================================================


let name = "Darling";
let age = 20;
let intro = `Hi, I'm ${name} and I'm ${age} years old.`;

console.log(intro);


// 4. toUpperCase()==========================================

let text = "hello world";
console.log(text.toUpperCase());  // "HELLO WORLD"


// 5. toLowerCase()===========================================

let text1 = "HELLO WORLD";
console.log(text1.toLowerCase());  // "hello world"


// 6. trim()=============================================

let tex = "   hello   ";
console.log(tex.trim());  // "hello"


// 7. trimStart() / trimEnd()===============================

let tex1 = "   hello   ";
console.log(tex1.trimStart()); // "hello   "
console.log(tex1.trimEnd());   // "   hello"


// 8. padStart()=================================

// Define a string variable
let stone = "Soul";

// Use the padStart() method to add padding characters "Mind "
//to the beginning of the string 'stone'
stone = stone.padStart(9, "Mind ");

// Output the resulting string after padding
console.log(stone);


// 9 padEnd() =============================================

// Define a string variable
let stone1 = "Soul";

// Use the padEnd() method to add padding characters
//" Power" to the end of the string 'stone'
stone1 = stone1.padEnd(10, " Power");

// Output the resulting string after padding
console.log(stone1);


// 10 repeat()===================================================

let laugh = "ha";
console.log(laugh.repeat(3));  // "hahaha"


// 11. replace() / replaceAll()==========================================

let text5 = "I like cats. Cats are cute.";
console.log(text5.replace("cats", "dogs"));
// "I like dogs. Cats are cute."

console.log(text5.replaceAll("Cats", "Dogs"));
// "I like cats. Dogs are cute."


// 12. slice()==========================================================

let text6 = "JavaScript";
console.log(text6.slice(0, 4));  // "Java"
console.log(text6.slice(4));     // "Script"


// 13. substring()=====================================================
let t = "JavaScript";
console.log(t.substring(0, 4));  // "Java"


// 14. substr() ⚠️ (deprecated)=======================================
let text7 = "JavaScript";
console.log(text7.substr(4, 6));  // "Script"


// 15. join() (Array Method)==========================================

let arr = ["apple", "banana", "cherry"];
let text33 = arr.join(" -- ");
console.log(text33);  // "apple - banana - cherry"


// 16. includes()====================================================

let text22 = "JavaScript is fun";
console.log(text22.includes("funs")); // true


// 17. startsWith() / endsWith()======================================

let text11 = "Hello World";
console.log(text11.startsWith("Hello")); // true
console.log(text11.endsWith("World"));   // true


// 20 String at()

let text111 = "W3Schools";
let character = text111.at(0);