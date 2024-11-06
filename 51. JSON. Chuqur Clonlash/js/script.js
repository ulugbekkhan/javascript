"use strict"


// JSON.Stringify() = objectni JSON formatga o'girib beradi
// JSON.parse() = JSON formatni objectga o'birib beradi

// const car = {
//     name: 'Merc',
//     color: 'red',
//     number: 719
// }

// const ObjToJSON = JSON.stringify(car)
// console.log(ObjToJSON);

// const JSONToObj = JSON.parse(ObjToJSON)
// console.log(JSONToObj);


// Chuqur Clonlash

// const car = {
//     name: 'Merc',
//     color: 'red',
//     number: 719,
//     extra: {
//         isAirbag: false,
//         tires: 5
//     }
// }
// console.log(car);

// const clone = JSON.parse(JSON.stringify(car))
// clone.extra.tires = 10
// console.log(clone);