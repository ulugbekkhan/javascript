"use strict";


// const now = new Date()
// const now = new Date(0)
// const now = new Date('0')

// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getUTCHours());

// console.log(now.setHours(20));
// console.log(now);


let start = new Date()

for (let i = 0; i < 100000; i++) {
    let some = i ** 3
}

let end = new Date()

alert(`Loop completed in ${end - start} milliseconds`)