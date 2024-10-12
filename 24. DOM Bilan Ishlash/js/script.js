"use strict";


// old way
const box = document.getElementsByClassName("box")
console.log(box);

const buttons = document.getElementsByTagName("button")
// const buttons = document.getElementsByTagName("button")[0]
console.log(buttons);

const circles = document.getElementsByClassName("circle")
// const circles = document.getElementsByClassName("circle")[1]
console.log(circles);


// new way
const wrapper = document.querySelector(".wrapper")
console.log(wrapper);

const heart = document.querySelector(".heart")
// const heart = wrapper.querySelector(".heart")
console.log(heart);

const hearts = document.querySelectorAll(".heart")
console.log(hearts);

hearts.forEach((item) => {
    console.log(item);
})