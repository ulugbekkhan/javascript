"use strict";


// setTimeout(() => {
//     console.log('setting');
// }, 3000)


// setTimeout((text) => {
//     console.log(text);
// }, 3000, 'set time out')



const btn = document.querySelector('#btn')

let timerId;
let i = 0

btn.addEventListener('click', () => {
    // timerId = setTimeout(logger, 1000)
    timerId = setInterval(logger, 500)
})


function logger() {
    if (i === 3) {
        clearInterval(timerId)
    }
    console.log('set time out');
    i++
}



let id = setInterval(function log() {
    console.log("Hello Log");
    id = setTimeout(log, 500)
}, 500)