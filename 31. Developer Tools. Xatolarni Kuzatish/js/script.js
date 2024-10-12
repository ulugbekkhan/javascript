"use strict";


function sayHello() {
    console.log(`Good Morning`);
    // debugger
}
sayHello();

function sayBye() {
    console.log(`Good Bye`);
}
sayBye();

const arr = [1, 34, -83, 17, -56, 98],
sorted = arr.sort(compareNum)

function compareNum(a, b) {
    return a - b
}
console.log(sorted);