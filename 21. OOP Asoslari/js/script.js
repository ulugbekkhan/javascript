"use strict"


// const myname = "Ulugbek";
// const origin = new String ("Ulugbek") // old version

// console.log(myname);
// console.log(typeof myname);
// console.log(origin);
// console.log(typeof origin);



const car = {
    motor: "X",
    color: 'red',
    isAirBag: true,
    isSpeed: function() {
        console.log(320);
    }
}

const gm = {
    isAirBag: false
}


// old version prototype yasash
// gm.__proto__ = car
// console.log(gm);
// console.log(gm.color);


// new version 1 prototype yasash
Object.setPrototypeOf(gm, car)
console.log(gm);


// new version 2 obyekt yaratish
const bmw = Object.create(car)
console.log(bmw);