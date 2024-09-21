"use strict";



function calc (a, b) {
    console.log(a + b);
}
calc (7, 9);



function fullName (name, surname) {
    console.log(`My fullname is ${name} ${surname}`);
}
fullName ("Ulug'bek", "Abdusamatov");



function calc (c, d) {
    return c + d;
}
console.log(calc(10, 5));
console.log(calc(17, 13));



function calc (e, f) {
    return e + f;
}
const sumofeandf = calc(10, 5);
console.log(sumofeandf);



const calculation = (g, h) => g + h;
console.log(calculation(10, 3));


const newcalc = (w) => {
    console.log("!");
    return w;
}