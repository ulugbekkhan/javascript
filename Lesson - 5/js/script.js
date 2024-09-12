"use strict";

alert("Hello Ulugbek")

const place = confirm("Are you here?");

if (place == true)
console.log("The answer is OK");
else
console.log("The answer is Cancel");

const currentPlace = prompt("Where are you?", "");
console.log(currentPlace);
console.log(typeof currentPlace);

const age = +prompt("How old are you?", "");
console.log(age);
console.log(typeof age);

const favoriteColor = []

// favoriteColor[0] = "Red"

favoriteColor[0] = prompt("What is your favorite color? #1", "")
favoriteColor[1] = prompt("What is your favorite color? #2", "")
favoriteColor[2] = prompt("What is your favorite color? #3", "")
console.log(`My favorite colors are ${favoriteColor}`);

let car = {
    color: String,
    model: String,
    horsepower: Number
}

car.color = "Black"
car.model = "Mustang"
car.horsepower = 700

console.log(car);