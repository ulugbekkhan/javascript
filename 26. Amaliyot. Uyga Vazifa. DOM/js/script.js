"use strict";


const adv = document.querySelectorAll(`.promo__adv img`),
wrapper = document.querySelector(`.promo__bg`),
genre = document.querySelector(`.promo__genre`),
seriesList = document.querySelectorAll(`.promo__interactive-item`)


const seriesDB = {
    series: [
        `Naruto`,
        `Kimetsu no Yaiba`,
        `Tokyo Ghoul`,
        `Death Note`,
        `I want to eat your pancreas`
    ]
}


adv.forEach(item => {
    item.remove()
});

wrapper.style.backgroundImage = `url("./img/1.jpg")`

genre.textContent = "Comedy"

for (let i = 0; i < seriesList.length; i++) {
    seriesList[i].textContent = (`${i + 1} - `) + seriesDB.series[i]
}