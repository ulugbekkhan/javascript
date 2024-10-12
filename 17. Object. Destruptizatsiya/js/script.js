"use strict";


const theif = {
    jacket: "black",
    height: 1.7,
    colors: {
        hair: "grey",
        style: "curley",
    },
    how_out: function () {
        console.log("he was fast");
    },
};

// theif.how_out();


// delete theif.jacket;
// console.log(theif);


// Destruptizatsiya
// const { hair, style } = theif;
// console.log(hair);
// console.log(style);


// console.log(Object.values(theif));
// console.log(Object.keys(theif));
// console.log(Object.keys(theif).length);


// object bilan ishlaganda for da in ishlatiladi
// array bilan ishlaganda for da of ishlatiladi

for (let key in theif) {

    if (typeof theif[key] === "object") {

        for (let i in theif[key]) {

            console.log(`Property ${key} has value ${theif[key] [i]}`);
        }
    }
    else {
        console.log(`${key} is ${theif[key]}`);
    }

}