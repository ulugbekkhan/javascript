"use strict";


// old way
const number = new Function()
console.dir(number);


function Car(name, color, mph) {
    this.name = name
    this.color = color
    this.mph = mph
    this.isAirbag = true
    this.speed = function() {
        console.log(`Speed of car ${this.name} is ${this.mph}`);
    }
}

const bmw = new Car('bmw', 'red', 400)
const merc = new Car('merc', 'black', 413)
bmw.speed()
merc.speed()


Car.prototype.sayHello = function() {
    console.log(`Car name of ${this.name} say hello`);
}
bmw.sayHello()
merc.sayHello()
console.log(bmw);
console.log(merc);