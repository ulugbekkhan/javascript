"use strict";


class Car {
    constructor(name, color, speed) {
        this.name = name
        this.color = color
        this.speed = speed
    }

    calcSpeed() {
        return this.speed * 10
    }
}


const merc = new Car('Merc', 'Black', 200)
const bmw = new Car('BMW', 'Blue', 100)

console.log(merc);
console.log(bmw);
console.log(merc.calcSpeed());
console.log(bmw.calcSpeed());


class Spark extends Car {
    constructor (name, color, speed,isAirbag, extraTires) {
        super(name, color, speed)
        this.isAirbag = isAirbag
        this.extraTires = extraTires
    }

    logger() {
        console.log(`Name of car is ${this.name}. It's color is ${this.color}. Does it have an airbag? ${this.isAirbag}. How many extra tires does it have? ${this.extraTires}`);
    }
}

const aboutcar = new Spark('Spark', 'white', 13, true, 1)
aboutcar.logger()
console.log(aboutcar.calcSpeed());

console.log(aboutcar);