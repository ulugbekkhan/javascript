"use strict";



const age = +prompt("How old are you?", "");



// if (age > 18) {
//     console.log("Welcome");
// } 
// else {
//     console.log("No Entry");    
// }



// if (age > 25) {
//     console.log("Horror Films");
// }
// else if (age > 18) {
//     console.log("Action Films");
// } 
// else {
//     console.log("Cartoons");
// }



age > 18 ? console.log("Action Films") : console.log("Cartoons");



const color = "red";

switch (color) {

    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Move");
        break;
    case "yellow":
        console.log("Slowly");
        break;
    default:
        console.log("Traffic Jam");
        break;
}