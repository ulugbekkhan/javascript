"use strict";


const eskiArray = [];
const yangiArray = [];
let promptJavoblari;
let indexYangiArray = 0;

for (let i = 0; i < 20; i++) {

    promptJavoblari = +prompt("Istalgan son kiriting");

    eskiArray[i] = promptJavoblari;

}

console.log(yangiArray);

for (let i = 0; i < eskiArray.length; i++) {

    let tanlanganSon = eskiArray[i];

    let indexEskiArray = i;

    for (let u = 0; u < eskiArray.length; u++) {

        if (tanlanganSon < eskiArray[u] || eskiArray[u] === "") {
            
        }
        else {
            tanlanganSon = eskiArray[u];
            indexEskiArray = u;
        }
    }

    if (tanlanganSon === "") {

    }
    else {
        yangiArray[indexYangiArray] = tanlanganSon;
        eskiArray[indexEskiArray] = "";
        indexYangiArray++;
    }

    if (eskiArray.length === yangiArray.length) {
        break;
    }
    else if (eskiArray.length != yangiArray.length && i == eskiArray.length-1) {
        i = -1;
    }   
}

console.log(yangiArray);