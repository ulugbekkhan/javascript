"use strict";


alert("Hello Ulugbek");



const place = confirm("Are you here?");



if (place == true)
console.log("The answer is OK");
else
console.log("The answer is Cancel");



const currentPlace = prompt("Where are you?", "");
console.log(currentPlace);
console.log(typeof currentPlace);



// agar prompt ni oldiga "+" belgisini qo'ysak,
// string type ni number type ga o'zgartiradi

const addition = +prompt("qo'shish", "");
console.log(addition + 100);
console.log(typeof addition);

const subtraction = +prompt("ayirish", "");
console.log(subtraction - 100);
console.log(typeof subtraction);



const favoriteFood = ["chuchvara", "manti", "somsa"]
console.log(favoriteFood[2]);

const favoriteGames = []
favoriteGames[0] = "DOTA 2"
favoriteGames[1] = "CS 2"
favoriteGames[2] = "NFSMW"
console.log(favoriteGames);

const favoriteColor = []
favoriteColor[0] = prompt("What is your favorite color? #1", "")
favoriteColor[1] = prompt("What is your favorite color? #2", "")
favoriteColor[2] = prompt("What is your favorite color? #3", "")
console.log(`My favorite colors are ${favoriteColor}`);



let car = {
    color: String,
    model: String,
    horsepower: Number
}

console.log(car);

car.color = "Black"
car.model = "Mustang"
car.horsepower = 700

console.log(car);