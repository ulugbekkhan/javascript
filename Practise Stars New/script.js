"use strict";


let stars = "";

for (let i = 1; i < 5;) {

    i++;
    
    for (let u = 1; u < i; u++) {

        stars = stars + "*";
        
    }

    console.log(stars);
    stars = "";

}

for (let i = 5; i < 1;) {

    i--;

    for (let u = 1; u < i; u++) {

        stars = stars + "*";
        
    }

    console.log(stars);
    stars = "";
}