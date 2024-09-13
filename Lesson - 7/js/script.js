"use strict";



console.log(6 + + "abdusamatov");

console.log(6 + "7");
console.log(6 + 7);
console.log(6 + + 7);
console.log(6 + + "7");



let eto = 10; //increment
let ken = 10; //decrement

eto++;
ken--;

console.log(eto);
console.log(ken);



let incr = 10;
let decr = 10;

console.log(++incr);
console.log(--decr);


// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);



console.log(10 % 3); //percentage



console.log(5 * 5 == 25);
console.log(5 * 5 == "25");
console.log(5 * 5 === "25");



// && - va. Hammasi true bo'lishi kk, agar 1 ta false bor bo'lsa false qaytadi
// || - yoki. Hammasi false bo'lishi kk, agar 1 ta true bor bo'lsa true qaytadi
// ! - qiymatni teskarisiga aylantiradi, false ni true ga, true ni false ga

const isAge1 = true;
const isClose1 = true;
const isChecked1 = false;
console.log(isAge1 && isClose1 && !isChecked1);

const isAge2 = false;
const isClose2 = false;
const isChecked2 = true;
console.log(isAge2 || isClose2 || !isChecked2);

const isChecked = true
console.log(!isChecked);



console.log(2 + 2 * 2 === 8); // false
console.log(2 + 2 * 2 === 6); // true

console.log(2 + 2 * 2 != 8); // true
console.log(2 + 2 * 2 != 6); // false

console.log(2 + 2 * 2 != "8"); // true
console.log(2 + 2 * 2 != "6"); // false

console.log(2 + 2 * 2 !== "6"); // qiymati hamda ma'lumotini tekshiryapmiz