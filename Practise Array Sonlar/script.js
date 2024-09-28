"use strict";


const openarray = [225, 34, 43, 348748437, 2, 873587398, 13, 89, 32];
const changearray = [];
// let sonlarniKiritish;
let yangi = 0;

// for (let i = 0; i < 2; i++) {

//     sonlarniKiritish = prompt("Istalgan son kiriting");

//     openarray[i] = sonlarniKiritish;
    
// }


for (let i = 0; i < openarray.length; i++) {

    let changednumberofindex = 0;

    let olingannumber = openarray[i];

    for (let g = 1; g < openarray.length; g++) {

        if (olingannumber < openarray[g] || openarray[g] === "") {
        }
        else {
            olingannumber = openarray[g]
            changednumberofindex = g;
        }

    }

    if (olingannumber === "") {    
    }
    else {
        changearray[yangi] = olingannumber;
        openarray[changednumberofindex] = "";
        yangi++;
    }

    if (changearray.length === openarray.length) {
        break;
    }
    else if (changearray.length != openarray.length && i == openarray.length-1) {
        i = -1;
    }
    
}

// console.log(openarray);
console.log(changearray);