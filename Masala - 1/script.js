"use strict";


let final = [];
let inside = [];
let inside_inside = [];

function flattenArray(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "object") {

            inside = Object.values(arr[i])

            for (let u = 0; u < inside.length; u++) {

                if (typeof inside[u] === "object") {

                    inside_inside = Object.values(inside[u])

                    for (let g = 0; g < inside_inside.length; g++) {

                        final.push(inside_inside[g]);
                    }

                }
                else {
                    final.push(inside[u]);
                }

            }
        }
        else {
            final.push(arr[i]);
        }

    }
}
flattenArray([1, [2, [3, 4], 5], 6]);

console.log(final);