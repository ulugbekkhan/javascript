"use strict";



let stars = "";

let trio = 0;

let second = 0;

while (trio < 4) {

    trio++;

    while (second < trio) {
        stars = stars + "*";
        second++;
    }

    console.log(stars);
    
    second = 0;
    stars = "";

}

while (trio > 0) {
    
    trio--;

    while (second < trio) {
        stars = stars + "*";
        second++;
    }

    console.log(stars);
    
    second = 0;
    stars = ""

}