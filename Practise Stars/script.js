"use strict";



let numberofstars = 7;

let stars = "";

let firstwhile = 0;

let secondwhile = 0;


let empty = "";

let thirdwhile = 0;

let decr = (numberofstars/2);


while (firstwhile < numberofstars) {

    firstwhile++;

    while (secondwhile < firstwhile) {
        stars = stars + "*";
        secondwhile++;
    }

    while (decr > thirdwhile) {
        empty = empty + " ";
        thirdwhile++;
    }

    console.log(empty + stars);
    
    empty = ""
    thirdwhile = 0;
    decr--;

    stars = "";
    secondwhile = 0;

    firstwhile++;

}

firstwhile--;
decr = 2;

while (firstwhile > 0) {

    firstwhile = firstwhile - 2;

    while (secondwhile < firstwhile) {
        stars = stars + "*";
        secondwhile++;
    }

    while (decr > thirdwhile) {
        empty = empty + " ";
        thirdwhile++;
    }

    console.log(empty + stars);

    empty = ""
    thirdwhile = 0;
    decr++;

    stars = "";
    secondwhile = 0;

}