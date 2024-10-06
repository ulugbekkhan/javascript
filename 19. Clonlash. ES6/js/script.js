"use strict";


// const number = {
//     x: 10,
//     y: 5,
// }

// const new_number = number;

// new_number.x = 15;

// console.log(number);
// console.log(new_number);





// function nusxa (obj) {
    
//     let obj_nusxa = {}

//     for (let key in obj) {
//         obj_nusxa[key] = obj[key]
//     }

//     return obj_nusxa
// }

// const numbers = {
//     x: 1,
//     y: 2,
//     z: {
//         a: 3,
//         b: 4,
//     },
// }

// const new_numbers = nusxa(numbers)

// new_numbers.x = 10
// new_numbers.y = 20
// new_numbers.z.a = 30
// new_numbers.z.b = 40

// console.log(numbers);
// console.log(new_numbers);





// const numbers = {
//     x: 1,
//     y: 2,
//     z: {
//         a: 3,
//         b: 4,
//     },
// }

// const new_numbers = Object.assign({}, numbers)

// new_numbers.x = 10;
// new_numbers.y = 20;
// new_numbers.z.a = 30;
// new_numbers.z.b = 40;

// console.log(numbers);
// console.log(new_numbers);





// const numbers = {
//     x: 1,
//     y: 2,
//     z: {
//         a: 3,
//         b: 4,
//     },
// }

// const add_number = {
//     z: 7
// }

// const all_numbers = Object.assign(add_number, numbers)

// console.log(all_numbers);





// Slice

// const arr = [1, 2, 3];

// const numbers = arr.slice();

// numbers[1] = "myname";

// console.log(arr);
// console.log(numbers);



// // Spread

// const liverpool = ["Salah", "Mane"]
// const mancity = ["Mahrez"]

// const mix_players = [...liverpool, ...mancity]

// console.log(mix_players);