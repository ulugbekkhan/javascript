"use strict";


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];

let array_save_1 = []
let array_save_2 = []

let natija = {}

function groupBy(arr, key) {
   
    for (let value of arr) {

        if (value[key] == 25) {
            array_save_1.push(value);
        }
        else if (value[key] == 30) {
            array_save_2.push(value);
        }

    }

    natija[25] = array_save_1
    natija[30] = array_save_2
    
    return natija

}
console.log(groupBy(users, "age"));

// Natija: { 25: [{name: "Alice", age: 25}, {name: "Charlie", age: 25}], 
//           30: [{name: "Bob", age: 30}, {name: "David", age: 30}] }