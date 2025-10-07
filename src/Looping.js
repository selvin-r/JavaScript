

// 4. JavaScript for-in Loop-----------------------------------------

const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// 5. for...of loop-------------------------------------------

const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

 // 6 ForEach Looping----------------------------------------------

const nums = [1, 2, 3];

nums.forEach(function (n) {
    console.log(n * 2);
});

const arr =[1, 2, 3];

for (const arrKey in arr) {
  console.log(arr[arrKey]);

}