"use strict";



const user = "Ulugbek";

console.log(user.length);

const arr = [1, 2, 3, 4];

console.log(arr.length);

console.log(user[3]);
console.log(arr[2]);

console.log(user.toUpperCase());

const uppercaseUser = user.toUpperCase();

console.log(uppercaseUser);
console.log(user);



const greeting = "Hello World";

console.log(greeting.indexOf("r"));

console.log(greeting.slice(8));
console.log(greeting.slice(6, 11));
console.log(greeting.substring(6, 11));



const num = 8.8;
console.log(Math.round(num));

const borderWidth = "13.8px"
console.log(parseInt(borderWidth));
console.log(parseFloat(borderWidth));