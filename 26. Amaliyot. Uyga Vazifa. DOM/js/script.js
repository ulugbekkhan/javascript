"use strict";


const adv = document.querySelectorAll(`.promo__adv img`),
wrapper = document.querySelector(`.promo__bg`),
genre = wrapper.querySelector(`.promo__genre`),
seriesList = document.querySelector(`.promo__interactive-list`)


const seriesDB = {
    series: [
        `Naruto`,
        `Kimetsu no Yaiba`,
        `Tokyo Ghoul`,
        `Death Note`,
        `I want to eat your pancreas`
    ]
}


adv.forEach((item) => {
    item.remove()
})

genre.textContent = 'Comedy'

wrapper.style.backgroundImage = 'url("img/1.jpg")'

seriesList.innerHTML = ""

seriesDB.series.forEach((item, idx) => {
    seriesList.innerHTML += `
        <li class="promo__interactive-item">${idx + 1} ${item}
            <div class="delete"></div>
        </li>
    `
})