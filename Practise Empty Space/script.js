"use strict";


let kiritish = prompt("space ishlatib so'zlar yozing");


function spacelarni_olish () {

    let qayta_yozish = "";

    for (let i = 0; i < kiritish.length; i++) {

        if (kiritish[i] === " ") {
        
        }
        else {
            qayta_yozish = qayta_yozish + kiritish[i]
        }
    }

    console.log(qayta_yozish);

}
spacelarni_olish();