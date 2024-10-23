"use strict";


let numberOfSeries = "";

let seriesDB = {

    count: Number,  

    series: {},

    actors: {},

    genres: [],

    private: Boolean,
}

showDB();


function showDB () {

    const permission = confirm("Savollarga javob berasizmi?")

    if (permission != true) {
        console.log("Hidden");
        return
    }

        startApp();
        
        rememberMySeries();
        
        writeGenres();

        console.log(seriesDB);

}


function startApp() {
        
    while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
    }
    seriesDB.count = numberOfSeries;

    detectLevelSeries();
}


function rememberMySeries () {

    let a = "";
    let b = "";

    for (let i = 0; i < 2;) {

        if ((b === null || b === "") && (a != null && a != "")) {
            
        } 

        else {
            a = prompt("Oxirgi ko'rgan serialingiz?");

            if (a === null) {
                continue;
            }
            else if (a === "") {
                continue;
            }
        }

        b = prompt("Nechi baxo berasz?");

            if (b === null) {
                continue;
            }
            else if (b === "") {
                continue;
            }

        seriesDB.series[a] = b;

        if (a != null && a != "" && b != null && b != "") {
            i++;
            a = "";
            b = "";
        }
    }
}


function writeGenres () {
    for (let g = 0; g <= 2; g++) {
        const favoriteGenres = prompt(`Yaxshi ko'rgan janringiz ${g + 1}`);
        seriesDB.genres[g] = favoriteGenres;

        if (favoriteGenres != null && favoriteGenres != "" && isNaN(favoriteGenres)) {
            seriesDB.genres[g] = favoriteGenres;
        }
        else {
            console.log("Error in writeGenres");
            g--;
        }
    }
}


function detectLevelSeries () {
    if (numberOfSeries < 5) {
        console.log("Kam serial ko'ribsiz");
    } 
    else if (numberOfSeries >= 5 && numberOfSeries < 10) {
        console.log("Siz klassik tomoshabin ekansiz");
    } 
    else if (numberOfSeries >= 10) {
        console.log("Siz serialchi zvezda ekansiz");
    }
}