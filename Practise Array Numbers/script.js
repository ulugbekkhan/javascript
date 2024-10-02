"use strict";


const openarray = [];
const changearray = [];
let sonlarniKiritish;
let yangi = 0;

for (let i = 0; i < 20; i++) {

    sonlarniKiritish = +prompt("Istalgan son kiriting");

    openarray[i] = sonlarniKiritish;
    
}
console.log(openarray);

for (let i = 0; i < openarray.length; i++) {

    let olingannumber = openarray[i];

    let changednumberofindex = i;

    for (let g = 0; g < openarray.length; g++) {

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

console.log(changearray);