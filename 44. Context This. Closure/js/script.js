// "use strict";


// context this - xar doim nimagadur qaram

// 1 // oddiy functionni contexti ya'ni this xar doim window global objectiga qaram bo'ladi
// agarda qat'iy rejim (use strict) yoqilgan bo'lsa, context undefinedga teng
function logger(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b
    }
    console.log(sum());
}
logger(1, 2)


// 2 // context this - objectni ichidagi metod objectni o'ziga teng
const obj = {
    x: 10,
    y: 15,
    sum: function() {
        console.log(this);   
    },
}
obj.sum()


// 3 // context this function constructorda yangi objectni nusxasiga teng
function Car(name, color) {
    this.name = name
    this.color = color
    this.isAirbag = true
}
const bmw = new Car('bmw', 'black')



// closure

// const a = 4

// function log() {
//     const a = 5
//     console.log(a);
// }
// log()