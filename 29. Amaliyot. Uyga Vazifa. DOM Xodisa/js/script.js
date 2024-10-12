"use strict";


const adv = document.querySelectorAll(`.promo__adv img`),
wrapper = document.querySelector(`.promo__bg`),
genre = wrapper.querySelector(`.promo__genre`),
seriesList = document.querySelectorAll(`.promo__interactive-item`),
addForm = document.querySelector(`form.add`),
inputVal = addForm.querySelector(`.adding__input`)
// checkbox = addForm.querySelector("[type=`checkbox`]")

const seriesDB = {
    series: [
        `Naruto`,
        `Kimetsu no Yaiba`,
        `Tokyo Ghoul`,
        `Death Note`,
        `Jujutsu Kaisen`
    ]
}
seriesDB.series.sort();


adv.forEach((item) => {
    item.remove()
});


genre.textContent = "Comedy"


wrapper.style.backgroundImage = `url("./img/1.jpg")`


for (let i = 0; i < seriesDB.series.length; i++) {
    seriesList[i].textContent = (`${i + 1} - `) + seriesDB.series[i]
}


addForm.addEventListener('submit', function (event) {
    event.preventDefault();
});