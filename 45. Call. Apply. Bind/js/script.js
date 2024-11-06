"use strict";


// call, apply

// function logger() {
//     console.log(this);
// }
// const car = {
//     name: 'BMW',
//     color: 'Black'
// }
// logger.call(car)
// logger()


// function logger(speed) {
//     console.log(this);
//     console.log(`My car is ${this.name}. It's color is ${this.color}. Max speed is ${speed}`);
// }

// const car = {
//     name: 'Merc',
//     color: 'Black'
// }

// logger.call(car, 300)
// logger.apply(car, [300])


// bind // yangi function qaytaradi

// function calc(number) {
//     return this * number
// }
// const multiply2 = calc.bind(2)
// console.log(multiply2(10));
// console.log(multiply2(15));


// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//     console.log(this);
// })

// const btn = document.querySelector('button')
// btn.addEventListener('click', function() {
//     console.log(this);
// })


// const btn = document.querySelector('button')

// btn.addEventListener('click', function() {
//     this.style.width = '200px'
// })
// // btn.addEventListener('click', (e) => {
// //     e.target.style.width = '200px'
// // })


// const obj = {
//     x: 10,
//     y: 15,
//     sum: function() {
//         const logger = () => {
//             console.log(this);
//             console.log(this.x);
//         }
//         logger()
//     },
// }
// obj.sum()

// strelkali function hech qanday contextga ega emas
// u xar doim o'zini tepasidagi contextga qaram bo'ladi

// const calc = (a) => a + 10
// console.log(calc(10));