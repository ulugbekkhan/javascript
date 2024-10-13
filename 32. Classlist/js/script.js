"use script";


const btns = document.querySelectorAll(`button`)

console.log(btns[0].classList.length); // nechta class borligini ko'rsatadi
console.log(btns[0].classList.item(0)); // class ni indexlarini ko'rsatadi


// btns[1].classList.add(`blue`, `some`); // add metodi class/token qo'shadi
// btns[0].classList.remove(`blue`); remove metodi class/token ni o'chiradi 
// btns[0].classList.toggle(`blue`); // toggle metodi bor bo'lsa yo'q qiladi, yo'q bo'lsa bor qiladi


// btns[0].classList.add(`red`)

// returns true if the list contains a class
// if (btns[0].classList.contains(`red`)) {
//     console.log(`yeap`);
// };


// btns[0].addEventListener(`click`, () => {
//     // if (!btns[1].classList.contains(`red`)) {
//     //     btns[1].classList.add(`red`)
//     // } else {
//     //     btns[1].classList.remove(`red`)
//     // }

//     btns[1].classList.toggle(`red`)
// })