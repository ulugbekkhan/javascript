"use strict";


let numberOfSeries = prompt("Nechta o'yin ko'rdingiz?", )

let seriesDB = {

    count: numberOfSeries,

    series: {
        seriesAnswer: String,
        seriesMark: String
    },

    actors: {},

    genres: [],

    privat: Boolean(false)
}

let lastSerial = prompt("Oxirgi ko'rgan serialingiz?", "")
let yourMark = prompt("Nechi baxo berasiz?", "")

seriesDB.series.seriesAnswer = lastSerial;
seriesDB.series.seriesMark = yourMark;

console.log(seriesDB);