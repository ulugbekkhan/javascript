"use strict";


function deepClone(obj) {

    let cloning = {}

    for (let key in obj) {
        cloning[key] = obj[key]
    }

    return cloning

};


const original = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};


const copy = deepClone(original);
// copy.address.city = "New City";

console.log(original); // Natija: "Wonderland"
console.log(copy);     // Natija: "New City"