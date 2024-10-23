"use strict";


let numberOfSeries = prompt("Nechta serial ko'rdingiz?", )

if (numberOfSeries >= 10) {
    console.log("Siz serialchi zvezda ekansiz");
}
else if (numberOfSeries >= 5) {
    console.log("Siz klassik tomoshabin ekansiz");
} 
else {
    console.log("Siz kam serial ko'ribsiz");
}


let seriesDB = {

    count: numberOfSeries,

    series: {},

    actors: {},

    genres: [],

    private: Boolean(false),
}


let sample = 1;
let a = "";
let b = "";

while (sample < 3) {

    if ((b === null || b === "") && (a != null && a != "")) {

    }

    else {

    a = prompt("Oxirgi ko'rgan serialingiz?", "");

    if (a === null) {
        continue
    }
    else if (a === "") {
        continue
    }
    }


    b = prompt("Nechi baxo berasiz?", "");

    if (b === null) {
        continue
    }
    else if (b === "") {
        continue
    }

    seriesDB.series[a] = b;

    if (a != null && a != "" && b != null && b != "") {
        sample++;
        a = "";
        b = "";
    }
}

console.log(seriesDB);