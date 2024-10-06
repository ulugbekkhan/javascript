"use strict";


const calc = [1, 2, 3]

function logger (x, y, z) {
    console.log(x + y + z);
}

logger(calc);
logger(...calc);



const arr = ["x", "y"]

const new_arr = [...arr]

console.log(arr);



const numbers = {
    x: 1,
    y: 2,
}

const new_numbers = { ...numbers }

new_numbers.x = 10;
new_numbers.y = 20;

console.log(numbers);
console.log(new_numbers);