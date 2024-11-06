"use strict"


const uzs = document.querySelector('#uzs'),
usd = document.querySelector('#usd')

uzs.addEventListener('input', (e) => {

    const request = new XMLHttpRequest

    request.open('GET', 'json/current.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send()

    // mana shu 3 ta settings muhim va bizga javoblar qaytaradi
    // so'rovning statusini qaytaradi 200-success, 404-not found, 500-server error, 400-client error
    
    // status bu - son, masalan, 200, 404, 500, 400
    // statusText - yozuv, masalan, Success, Not Found, Bad Gateway
    // response - serverdan kelgan javob
    // readyState - xolatni aniqlab beradi

    //  Value   State	             Description
    //  0	    UNSENT	             Client has been created. open() not called yet.
    //  1	    OPENED	             open() has been called.
    //  2	    HEADERS_RECEIVED     send() has been called, and headers and status are available.
    //  3	    LOADING	             Downloading; responseText holds partial data.
    //  4	    DONE	             The operation is complete.

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response)
            usd.value = (+uzs.value / data.current.usd).toFixed(2)
        }
        else {
            usd.value = 'something went wrong'
        }
    })

    // request.addEventListener('load', () => {
    //     if (request.status === 200) {
    //         // console.log(request.response);
    //         const data = JSON.parse(request.response)
    //         usd.value = (+uzs.value / data.current.usd).toFixed(2)
    //     }
    //     else {
    //         usd.value = 'something went wrong'
    //     }
    // })

})