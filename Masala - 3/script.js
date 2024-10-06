"use strict";


function firstNonRepeatingCharacter(str) {
    
    for (let i = 0; i < str.length; i++) {

        if (str[i] == str[i + 1]) {
            i++;
        }
        else {
            return console.log(`Natija: ${str[i]}`);
        }

        if (i == str.length - 1 && str[i] == str[i - 1]) {
            return console.log(`Natija: null`);
        }
    }

}
firstNonRepeatingCharacter("abbggccdd");