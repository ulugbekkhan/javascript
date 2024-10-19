"use strict";

let timer;
let show_time = document.querySelector('.show_time')

let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let resetBtn = document.querySelector('#reset')

let arr_hours = [0, 0]
let arr_minutes = [0, 0]
let arr_seconds = [0, 0]
let arr_milliseconds = [0, 0]

let s = 0;
let m = 0;
let h = 0;
let ms = 0;

show_time.innerHTML = ""
html_class();


startBtn.addEventListener('click', function() {
    timer = setInterval(digits, 10);
    digits();
});


stopBtn.addEventListener('click', function() {
    clearInterval(timer);
});


resetBtn.addEventListener('click', function() {
    s = 0;
    m = 0;
    h = 0;
    ms = 0;
    
    arr_hours = [0, 0]
    arr_minutes = [0, 0]
    arr_seconds = [0, 0]
    arr_milliseconds = [0, 0]
    
    html_class();
    clearInterval(timer);
});


function digits() {
    if (ms === 99) {
        ms = 0
        arr_milliseconds[0] = ms
        arr_milliseconds[1] = ms
        html_class();

        if (s === 59) {
            s = 0
            arr_seconds[0] = s
            arr_seconds[1] = s
            html_class();

            if (m === 59) {
                m = 0
                arr_minutes[0] = m
                arr_minutes[1] = m
                html_class();
                
                if (h === 24) {
                    clearInterval(timer)
                }
                else {
                    h++

                    if (h >= 10) {
                        arr_hours[0] = onlik_butunson_olish(h)
                        arr_hours[1] = h % 10
                        html_class();
                    }
                    else {
                        arr_hours = [0, h]
                        html_class();
                    }
                }
            }
            else {
                m++

                if (m >= 10) {
                    arr_minutes[0] = onlik_butunson_olish(m)  
                    arr_minutes[1] = m % 10
                    html_class();
                }
                else {
                    arr_minutes = [0, m]
                    html_class();
                }
            }
        }
        else {
            s++

            if (s >= 10) {
                arr_seconds[0] = onlik_butunson_olish(s)
                arr_seconds[1] = s % 10
                html_class();
            }
            else {
                arr_seconds = [0, s]
                html_class();
            }
        }
    }
    else {
        ms++

        if (ms >= 10) {
            arr_milliseconds[0] = onlik_butunson_olish(ms)
            arr_milliseconds[1] = ms % 10
            html_class();
        }
        else {
            arr_milliseconds = [0, ms]
            html_class();
        }
    }
}


function onlik_butunson_olish (number) {
    
    let onlik_butunson_qoldiq = number % 10;

    let qoldiq_ayirish = number - onlik_butunson_qoldiq;

    let onlik_butunson = qoldiq_ayirish / 10;

    return onlik_butunson;   
}


function html_class() {
    show_time.innerHTML = ` <div class="show-time">
    ${arr_hours[0]}${arr_hours[1]}:${arr_minutes[0]}${arr_minutes[1]}:${arr_seconds[0]}${arr_seconds[1]}:${arr_milliseconds[0]}${arr_milliseconds[1]}
    </div> `
}