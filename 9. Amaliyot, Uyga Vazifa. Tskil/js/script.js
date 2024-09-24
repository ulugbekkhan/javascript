"use strict";


let numberOfSeries = prompt("Nechta serial ko'rdingiz?", );

let seriesDB = {

    count: numberOfSeries,

    series: {},

    actors: {},

    genres: [],

    private: Boolean(false)
}

let a = prompt("Oxirgi ko'rgan serialingiz?", ""),
b = prompt("Nechi baxo berasiz?", ""),
c = prompt("Oxirgi ko'rgan serialingiz?", ""),
d = prompt("Nechi baxo berasiz?", "")

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);