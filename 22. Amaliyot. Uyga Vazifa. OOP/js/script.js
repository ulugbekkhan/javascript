"use strict";



let seriesDB = {
    count: 0,  
    series: {},
    actors: {},
    genres: [],
    private: false,

    start_app: function () {
        seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
    
        while ( seriesDB.count == "" || seriesDB.count == null || isNaN(seriesDB.count) ) {
            seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "")
        }
    },

    remember_my_series: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Oxirgi ko'rgan serialingiz?"),
            b = prompt("Nechi baxo berasiz?")
    
            if (a !== null && b !== null && a !== "" && b !== "") {
                seriesDB.series[a] = b
                console.log("done");
            } else {
                console.log("error");
                i--
            }
        }
    },

    detect_level_series: function () {
        if (seriesDB.count < 5) {
            console.log("Kam serial ko'ribsiz");
        } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
            console.log("Siz klassik tomoshabin ekansiz");
        } else if (seriesDB >= 10) {
            console.log("Siz serialchi zvezda ekansiz");
        } else {
            console.log("error");
        }
    },

    showDB: function () {
        if (!seriesDB.private) {
            console.log(seriesDB);
        }
    },

    visibleDB: function () {
        if (seriesDB.private) {
            seriesDB.private = false
        } else {
            seriesDB.private = true
        }
    },

    write_genres: function () {
        // for (let i = 0; i < 3; i++) {
        //     const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, ``)
        //     if (genre == "" || genre == null) {
        //         i--;
        //     } else {
        //         seriesDB.genres[i] = genre
        //     }
        // }

        let genres = prompt(`Yaxshi ko'rgan janrlaringizni vergul yordamida yozing`)
        if (genres == "" || genres == null) {
            i--;
        } else {
            seriesDB.genres = genres.split(`, `)
            seriesDB.genres.sort()
        }


        seriesDB.genres.forEach((item, index) => {
            console.log(`Yaxshi ko'rgan janringiz ${index + 1} - ${item}`);
        });
    },
};


// seriesDB.start_app();
// seriesDB.remember_my_series();
// seriesDB.detect_level_series();
// seriesDB.showDB();
// seriesDB.write_genres();