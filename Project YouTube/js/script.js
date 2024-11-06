"use strict"


let navbar = document.querySelector('.navbar')
let minimize_icon = document.querySelector('#minimize-icon')
let navbar_minimized = document.querySelector('.navbar-minimized')
let main_content = document.querySelector('.main-content')

let click_minimize_icon = 1

let feeds_names = document.querySelector('.feeds-names')
let feeds_button_right = document.querySelector('.feeds-button-right')
let feeds_filter = document.querySelector('.feeds-filter')
let feeds_button_left = document.querySelector('.feeds-button-left')

let click_left_scroll = 0
let click_right_scroll = 0
let scroll_right = 0


navbar.addEventListener('mouseover', () => {
    navbar.style.overflowY = 'scroll'
})
navbar.addEventListener('mouseout', () => {
    navbar.style.overflowY = 'hidden'
})


minimize_icon.addEventListener('click', () => {
    click_minimize_icon++
    if (click_minimize_icon % 2 == 0) {
        navbar.style.display = 'none'
        navbar_minimized.style.display = 'flex'
        main_content.style.width = '1278px'
        feeds_filter.style.width = '1278px'
        feeds_names.style.width = '1198px'

    }
    else {
        navbar.style.display = 'block'
        navbar_minimized.style.display = 'none'
        main_content.style.width = '1099px'
        feeds_filter.style.width = '1099px'
        feeds_names.style.width = '1020px'
    }
})


feeds_button_right.addEventListener('click', () => {

    click_left_scroll = click_left_scroll + 2
    scroll_right = scroll_right + 200

    if (scroll_right == 1000) {
        scroll_right = 800
    }
    else {
        if (click_left_scroll % 2 == 0) {
            feeds_button_left.style.display = 'block'
            feeds_names.style.width = '960px'
    
            feeds_names.scrollTo({
                top: 0,
                left: scroll_right,
                behavior: "smooth",
            })
        }
        else {
            console.log("error in right");
        }
    }
})


feeds_button_left.addEventListener('click', () => {

    click_right_scroll = click_right_scroll + 2
    scroll_right = scroll_right - 200

    if (scroll_right == 0) {
        feeds_names.scrollTo({
            top: 0,
            left: scroll_right,
            behavior: "smooth",
        })
        feeds_button_left.style.display = 'none'
        feeds_names.style.width = '1020px'
    }
    else {
        if (click_right_scroll % 2 == 0) {
            feeds_names.scrollTo({
                top: 0,
                left: scroll_right,
                behavior: "smooth",
            })
        }
        else {
            console.log("error in left");
        }
    }
})