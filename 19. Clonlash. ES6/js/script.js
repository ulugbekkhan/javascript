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
// }

// const new_numbers = nusxa(numbers)

// new_numbers.x = 10
// new_numbers.y = 20

// console.log(numbers);
// console.log(new_numbers);



// const numbers = {
//     x: 1,
//     y: 2,
// }

// const new_numbers = Object.assign({}, numbers)

// new_numbers.x = 10;
// new_numbers.y = 20;

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

// const add_numbers = {
//     z: 7
// }

// const all_numbers = Object.assign(numbers, add_numbers)

// console.log(all_numbers);



// Slice
// ham klonlaydi ham kerakli elementlarni kesib oladi

// const arr = [1, 2, 3];

// const numbers = arr.slice();
// // const numbers = arr.slice(0, 1);

// numbers[1] = 7;

// console.log(arr);
// console.log(numbers);



// Spread
// ham klonlaydi ham arraylarni qo'shadi

// const new_team_7 = ["Naruto", "Sasuke", "Sakura"]

// const new_sannin = [...new_team_7]
// console.log(new_sannin);


// const old_team_7 = ["Obito", "Kakashi", "Rin"]

// const team_7_members = [...new_team_7, ...old_team_7]
// console.log(team_7_members);