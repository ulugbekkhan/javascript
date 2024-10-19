"use strict";


let timer;
let show_time = document.querySelector('.show_time')
let button_start = document.querySelector('.button_start')

let arr_setting_time = []

let arr_seconds = [0, 0]
let arr_minutes = [0, 0]
let arr_hours = [0, 0]

let s = 0;
let m = 0;
let h = 0;

show_time.innerHTML = ""
html_class();


button_start.addEventListener('click', (event) => {

    answers_of_input_time();
    
    arr_hours[0] = arr_setting_time[0]
    arr_hours[1] = arr_setting_time[1]
    arr_minutes[0] = arr_setting_time[3]
    arr_minutes[1] = arr_setting_time[4]
    
    h = `${arr_hours[0]}${arr_hours[1]}`
    m = `${arr_minutes[0]}${arr_minutes[1]}`
    Number(h)
    Number(m)
    
    timer = setInterval(digits, 1000);
    
})


function digits() {
    if (s === 59) {
        s = 0
        arr_seconds[0] = s
        arr_seconds[1] = s
        html_class();

        if (m >= 59) {
            m = 0
            arr_minutes[0] = m
            arr_minutes[1] = m
            html_class();
            
            if (h >= 23) {
                h = 0
                arr_hours[0] = h
                arr_hours[1] = h
                html_class();
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

function value_current_time (answer) {
    answer = document.getElementById("current_time").value
    return answer
}

function answers_of_input_time() {
    for (let i = 0; i < value_current_time().length; i++) {
        arr_setting_time[i] = value_current_time()[i]
    }
}