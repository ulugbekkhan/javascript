"use strict";


// const p = document.querySelectorAll("p")
// console.log(p);

// const script = document.createElement(`script`)
// script.src = `js/second.js`
// document.body.append(script)

function loadScript(src) {
    const script = document.createElement(`script`)
    script.src = src
    // script.async = false
    document.body.append(script)
}

loadScript(`js/second.js`)
loadScript(`js/third.js`)