"use strict";


method();


function method () {
    
    let son_kiritish = +prompt("Son kiriting");

    const bir_xonali_sonlar = ["no'l", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
    const ikki_xonali_sonlar = ["o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];
    const uch_xonali_sonlar = ["bir yuz", "ikki yuz", "uch yuz", "to'rt yuz", "besh yuz", "olti yuz", "yetti yuz", "sakkiz yuz", "to'qqiz yuz"];


    if (son_kiritish >= 0 && son_kiritish <= 9) {
        console.log(bir_xonali_sonlar[son_kiritish]);
    }


    else if (son_kiritish >= 10 && son_kiritish <= 99) {

        let ikki_xonali_butunson = onlik_butunson_olish(son_kiritish);

        let ikki_xonali_qoldiq = son_kiritish % 10;
        
        if (ikki_xonali_qoldiq === 0) {
            console.log(ikki_xonali_sonlar[ikki_xonali_butunson - 1]);
        }
        else {
            console.log(ikki_xonali_sonlar[ikki_xonali_butunson - 1] + " " + bir_xonali_sonlar[ikki_xonali_qoldiq]);
        }
    }

    
    else if (son_kiritish >= 100 && son_kiritish <= 999) {

        let uch_xonali_butunson = yuzlik_butunson_olish(son_kiritish);
        
        let uch_xonali_ikki_xonali_butunson = yuzlik_onlik_butunson_olish(son_kiritish)

        let uch_xonali_qoldiq = son_kiritish % 10;

        if (uch_xonali_qoldiq === 0 && uch_xonali_ikki_xonali_butunson === 0) {
            console.log(uch_xonali_sonlar[uch_xonali_butunson - 1]);
        }
        else if ((son_kiritish % 10) === 0) {
            console.log(uch_xonali_sonlar[uch_xonali_butunson - 1] + " " + ikki_xonali_sonlar[uch_xonali_ikki_xonali_butunson - 1]);
        }
        else {
            console.log(uch_xonali_sonlar[uch_xonali_butunson - 1] + " " + ikki_xonali_sonlar[uch_xonali_ikki_xonali_butunson - 1] + " " + bir_xonali_sonlar[uch_xonali_qoldiq]);
        }

    }

}


function onlik_butunson_olish (number) {
    
    let onlik_butunson_qoldiq = number % 10;

    let qoldiq_ayirish = number - onlik_butunson_qoldiq;

    let onlik_butunson = qoldiq_ayirish / 10;

    return onlik_butunson;   
}


function yuzlik_butunson_olish (number) {

    let yuzlik_butunson_qoldiq = number % 100;

    let qoldiq_ayirish = number - yuzlik_butunson_qoldiq;

    let yuzlik_butunson = qoldiq_ayirish / 100;

    return yuzlik_butunson;
}


function yuzlik_onlik_butunson_olish (number) {

    let yuzlik_onlik_butunson_qoldiq = number % 10;

    let qoldiq_ayirish_bolish = (number - yuzlik_onlik_butunson_qoldiq) / 10;

    let yuzlik_onlik_butunson = qoldiq_ayirish_bolish % 10;

    return yuzlik_onlik_butunson

}