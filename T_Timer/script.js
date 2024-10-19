"use strict";

let timer;
let show_time = document.querySelector('.show-time')

let hours_inc_btn = document.querySelector('#hours-inc')
let hours_decr_btn = document.querySelector('#hours-decr')
let minutes_inc_btn = document.querySelector('#minutes-inc')
let minutes_decr_btn = document.querySelector('#minutes-decr')
let seconds_inc_btn = document.querySelector('#seconds-inc')
let seconds_decr_btn = document.querySelector('#seconds-decr')

let hours_click = 0;
let minutes_click = 0;
let seconds_click = 0;

let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let resetBtn = document.querySelector('#reset')

let arr_hours = [0, 0]
let arr_minutes = [0, 0]
let arr_seconds = [0, 0]

let s = 0;
let m = 0;
let h = 0;

show_time.innerHTML = ""
html_class();



hours_inc_btn.addEventListener('click', function() {
    hours_click++
    if (hours_click === 24) {
        hours_click = 23
    }

    if (hours_click <= 9 && hours_click >= 0 ) {
        arr_hours[1]++;
        html_class();
    }
    else if (hours_click >= 10 && hours_click <= 23) {
        arr_hours[0] = onlik_butunson_olish(hours_click)
        arr_hours[1] = hours_click % 10
        html_class();
    }
    h = `${arr_hours[0]}${arr_hours[1]}`
});
hours_decr_btn.addEventListener('click', function() {
    hours_click--
    if (hours_click === -1) {
        hours_click = 0
    }
    else {   
        if (arr_hours[0] === 0 && arr_hours[1] === 0) {
        }
        else if (hours_click <= 9 && hours_click >= 0) {
            arr_hours[1]--;
            if (hours_click === 9) {
                arr_hours[0] = 0                   
                arr_hours[1] = 9
                html_class();
            }
            html_class();
        }
        else if (hours_click >= 10 && hours_click <= 23) {
            arr_hours[0] = onlik_butunson_olish(hours_click)
            arr_hours[1] = hours_click % 10
            html_class();
        }
    }
    h = `${arr_hours[0]}${arr_hours[1]}`
});



minutes_inc_btn.addEventListener('click', function() {
    minutes_click++
    if (minutes_click === 60) {
        minutes_click = 59
    }

    if (minutes_click <= 9) {
        arr_minutes[1]++;
        html_class();
    }
    else if (minutes_click >= 10 && minutes_click <= 59) {
        arr_minutes[0] = onlik_butunson_olish(minutes_click)
        arr_minutes[1] = minutes_click % 10
        html_class();
    }
    m = `${arr_minutes[0]}${arr_minutes[1]}`
});
minutes_decr_btn.addEventListener('click', function() {
    minutes_click--
    if (minutes_click === -1) {
        minutes_click = 0
    }
    else {
        if (arr_minutes[0] === 0 && arr_minutes[1] === 0) {
        }

        if (minutes_click <= 9 && minutes_click > -1) {
            arr_minutes[1]--;
            if (minutes_click === 9) {
                arr_minutes[0] = 0                   
                arr_minutes[1] = 9
                html_class();
            }
            html_class();
        }
        else if (minutes_click >= 10 && minutes_click <= 59) {
            arr_minutes[0] = onlik_butunson_olish(minutes_click)
            arr_minutes[1] = minutes_click % 10
            html_class();
        }
    }
    m = `${arr_minutes[0]}${arr_minutes[1]}`
});



seconds_inc_btn.addEventListener('click', function() {
    seconds_click++
    if (seconds_click === 60) {
        seconds_click = 59
    }

    if (seconds_click <= 9) {
        arr_seconds[1]++;
        html_class();
    }
    else if (seconds_click >= 10 && seconds_click <= 59) {
        arr_seconds[0] = onlik_butunson_olish(seconds_click)
        arr_seconds[1] = seconds_click % 10
        html_class();
    }
    s = `${arr_seconds[0]}${arr_seconds[1]}`
});
seconds_decr_btn.addEventListener('click', function() {
    seconds_click--
    if (seconds_click === -1) {
        seconds_click = 0
    }
    else {
        if (arr_minutes[0] === 0 && arr_minutes[1] === 0) {
        }

        if (seconds_click <= 9 && seconds_click > -1) {
            arr_seconds[1]--;
            if (seconds_click === 9) {
                arr_seconds[0] = 0                   
                arr_seconds[1] = 9
                html_class();
            }
            html_class();
        }
        else if (seconds_click >= 10 && seconds_click <= 59) {
            arr_seconds[0] = onlik_butunson_olish(seconds_click)
            arr_seconds[1] = seconds_click % 10
            html_class();
        }
    }
    s = `${arr_seconds[0]}${arr_seconds[1]}`
});



startBtn.addEventListener('click', function() {
    console.log(h, m, s);
    if (h === 0 && m === 0 && s === 0) {
    }
    else if (arr_hours[0] == 0&& arr_hours[1] == 0 && arr_minutes[0] == 0 && arr_minutes[1] == 0 && arr_seconds[0] == 0 && arr_seconds[1] == 0) {
    }
    else {
        timer = setInterval(digits, 1);
        digits();
    }
});

stopBtn.addEventListener('click', function() {
    clearInterval(timer)
});

resetBtn.addEventListener('click', function() {
    s = 0;
    m = 0;
    h = 0;
    
    arr_hours = [0, 0]
    arr_minutes = [0, 0]
    arr_seconds = [0, 0]
    
    html_class();
    clearInterval(timer)
});



function digits() {
    if (s === 0) {
        s = 60
        arr_seconds[0] = 0
        arr_seconds[1] = 0
        html_class();

        if (m === 0) {
            m = 60
            arr_minutes[0] = 0
            arr_minutes[1] = 0
            html_class();

            if (h === 0) {
                clearInterval(timer)
            }
            else {
                h--
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
            m--
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
        s--
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


function onlik_butunson_olish (number) {
    
    let onlik_butunson_qoldiq = number % 10;

    let qoldiq_ayirish = number - onlik_butunson_qoldiq;

    let onlik_butunson = qoldiq_ayirish / 10;

    return onlik_butunson;   
}


function html_class() {
    show_time.innerHTML = ` <div class="show-time">
    ${arr_hours[0]}${arr_hours[1]}:${arr_minutes[0]}${arr_minutes[1]}:${arr_seconds[0]}${arr_seconds[1]}
    </div> `
}