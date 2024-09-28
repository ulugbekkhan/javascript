"use strict";


function EvenOddNumbers100 (i) {

    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i + " even");
        }
        else {
            console.log(i + " odd");
        }
    }
}
EvenOddNumbers100();