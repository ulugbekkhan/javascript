"use strict";


// setTimeout(() => {
//     console.log('setting');
// }, 3000)


// setTimeout((text) => {
//     console.log(text);
// }, 3000, 'set time out')



// const btn = document.querySelector('#btn')

// let timerId
// let i = 0

// btn.addEventListener('click', () => {
//     // timerId = setTimeout(logger, 2000)
//     timerId = setInterval(logger, 2000)
// })

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId)
//     }
//     console.log('set time out', i);
//     i++
// }



// let id = setInterval(function log() {
//     console.log("Hello Log");
//     id = setTimeout(log, 500)
// }, 500)



const btn = document.querySelector('#btn')

function myAnimation() {
    const car = document.querySelector('.car')
    let pos = 0

    const timerId = setInterval(frame, 1)

    function frame() {
        if (pos === 700) {
            clearInterval(timerId)
        }
        else {
            pos++
            car.style.left = pos + 'px'
        }
    }
}
btn.addEventListener('click', myAnimation)