"use strict";


const arr = [21, 2, 43, 4, 85, 6];


arr.sort(compareFn);
// arr.sort((a, b) => a - b);
console.log(arr);

function compareFn(a, b) {
    return a - b;
}


// arr.forEach(function (item, index, array) {
//     console.log(`${index} ${item} into array ${array}`);
// });

// arr[99] = 0;
// console.log(arr);

// arr.pop();
// arr.push(7);

// arr.shift();
// arr.unshift(0);

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) {
//     console.log(value);
// }


// const movies = prompt("What's your favorite movies?");

// const user_movies = movies.split(", ");
// user_movies.sort();

// console.log(user_movies);
// console.log(user_movies.join("- "));