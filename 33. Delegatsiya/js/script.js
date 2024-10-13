"use strict";


const wrapper = document.querySelector('.btn-block'),
btns = document.querySelectorAll('button')


const btn_red = document.createElement('button')
btn_red.classList.add('red')
wrapper.append(btn_red)


wrapper.addEventListener('click', (event) => {

    // console.log(event.target);
    // console.dir(event.target);

    if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('red')) {
        console.log('clicked');
    }

});


// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log('btns clicked')
//     })
// })