"use strict";


let unite = []

function mergeSortedArrays(arr1, arr2) {

    unite = [...arr1, ...arr2]

    return sort_numbers(unite)

}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 



function sort_numbers (eskiArray) {
    
    const yangiArray = [];
    let indexYangiArray = 0;

    for (let i = 0; i < eskiArray.length; i++) {

        let tanlanganSon = eskiArray[i];
    
        let indexEskiArray = i;
    
        for (let u = 0; u < eskiArray.length; u++) {
    
            if (tanlanganSon < eskiArray[u] || eskiArray[u] === "") {
                
            }
            else {
                tanlanganSon = eskiArray[u];
                indexEskiArray = u;
            }
        }
    
        if (tanlanganSon === "") {
    
        }
        else {
            yangiArray[indexYangiArray] = tanlanganSon;
            eskiArray[indexEskiArray] = "";
            indexYangiArray++;
        }
    
        if (eskiArray.length === yangiArray.length) {
            break;
        }
        else if (eskiArray.length != yangiArray.length && i == eskiArray.length-1) {
            i = -1;
        }   
    }

    return yangiArray
}