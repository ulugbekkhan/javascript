"use strict";


const wrapper = document.querySelector('.btn-block'),
btns = document.querySelectorAll('button')

wrapper.addEventListener('click', (event) => {
    // console.log(event.target);
    // console.dir(event.target);

    // if (event.target && event.target.tagName == 'BUTTON') {
    if (event.target && event.target.classList.contains('blue')) {
        console.log('btn-click');
    }
});

// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log('clicked')
//     })
// })

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)