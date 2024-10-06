"use strict"


const first_name = "ulugbek";
const name_copy = new String (first_name) // old version

console.log(first_name);
console.log(typeof first_name);
console.log(name_copy);
console.log(typeof name_copy);



const car = {
    motor: "X",
    color: red,
    isAirBag: true,
    isSpeed: function() {
        console.log(320);
    }
}

const gm = {
    isAirBag: false
}


// old version
gm.__proto__ = car
console.log(gm);
console.log(gm.color);
gm.isSpeed();


// new version 1
Object.setPrototypeOf(gm, car)
console.log(gm);

// obyekt yaratish
const bmw = Object.create(car)
console.log(bmw);