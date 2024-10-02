"use strict";


let harf = prompt("harf kiriting");


function unli_harflarni_tekshirish (string) {

    const unli_harflarni_saqlash = ["u", "e", "o", "a", "i"];
    
    let unli_yoki_undosh = Boolean;

    for (let i = 0; i < unli_harflarni_saqlash.length; i++) {

        if (unli_harflarni_saqlash[i].includes(string)) {
            console.log("unli harf:", string);
            unli_yoki_undosh = true;
            break;
        }
        else {
            unli_yoki_undosh = false;
        }
    }

    if (unli_yoki_undosh === false) {
        console.log("undosh harf:", string);
    }
    else {
    }

}
unli_harflarni_tekshirish(harf);