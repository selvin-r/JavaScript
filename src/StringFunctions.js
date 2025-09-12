
// 1 Length

let text = "Hello";
console.log(text.length); // 5


// 2. toUpperCase()

let str = "hello";
console.log(str.toUpperCase()); // "HELLO"

// 3. toLowerCase()

let st = "HELLO";
console.log(st.toLowerCase()); // "hello"


// 4. charAt(index)
let ch = "Java";
console.log(ch.charAt(2)); // "v"


// 6. lastIndexOf(value)

let i = "banana";
console.log(i.lastIndexOf("a")); // 5

// 7. includes(value)

let v = "Hello World";
console.log(v.includes("World")); // true

// 8. startsWith(value)

let start = "JavaScript";
console.log(start.startsWith("Java")); // true


// 9. endsWith(value)

let end = "Hello.js";
console.log(end.endsWith(".js")); // true


// 10. slice(start, end)

let sub = "banana";
console.log(sub.slice(1,5)); // "ana"



// 11. substring(start, end)

let nev = "banana";
console.log(nev.substring(1,4)); // "ana"


// 12. substr(start, length)


let old = "banana";
console.log(old.substr(1,3)); // "ana"


// 13. replace(old, new)

let rep = "hi hi";
console.log(rep.replace("hi","bye")); // "bye hi"


//14. replaceAll(old, new)
let all = "hi hi hi";
console.log(all.replaceAll("hi","bye")); // "bye bye bye"


// 15. split(separator)

let sp = "a,b,c";
console.log(sp.split(" ,")); // ["a","b","c"]


// 16. trim()

let trm = "  hello  ";
console.log(trm.trim()); // "hello"

// 17. trimStart()

let ts = "  hello  ";
console.log(ts.trimStart()); // "hello"


// 18. trimEnd()

let te = "hello  ";
console.log(te.trimEnd()); // "hello"


// 19. concat(str1, str2,...)

let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // "Hello World"


// 20. repeat(count)


let cou = "ha";
console.log(cou.repeat(2)); // "hahaha"


// 21 .at(index)

let word = "cat";

// Positive index
console.log(word.at(0));  // Output: "c"
console.log(word.at(1));  // Output: "a"
console.log(word.at(2));  // Output: "t"

// Negative index (from the end)
console.log(word.at(-1)); // Output: "t"
console.log(word.at(-2)); // Output: "a"
