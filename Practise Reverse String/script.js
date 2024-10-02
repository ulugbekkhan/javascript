"use strict";


let word = prompt("istalgan so'z yozing");
let word_reverse = ""; 


function doing_reverse() {

    for (let i = 1; i <= word.length; i++) {

        word_reverse = word_reverse + word[word.length - i];

    }

    console.log(word_reverse);
}
doing_reverse();