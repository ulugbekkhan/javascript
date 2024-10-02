"use strict";


let word = prompt("so'z kiriting");

function unli_harflarni_tekshirish (string) {

    const unli_harflarni_saqlash = ["u", "e", "o", "a", "i"];

    let u = 0;
    let unlilar_soni = 0;
    let undoshlar_soni = 0;
    let unli_yoki_undosh = Boolean;

    for (let i = 0; i < string.length; i++) { 

        for (u = 0; u < unli_harflarni_saqlash.length; u++) {

            if (unli_harflarni_saqlash[u].includes(string[i])) {
                unli_yoki_undosh = true;
                unlilar_soni++;
                break;
            }
            else {
                unli_yoki_undosh = false;
            }
        }

        u = 0;

        if (unli_yoki_undosh === false) {
            undoshlar_soni++;
        }
    }

    console.log("unlilar soni", unlilar_soni);
    console.log("undoshlar soni", undoshlar_soni);

}
unli_harflarni_tekshirish(word);