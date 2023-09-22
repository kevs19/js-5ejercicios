/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]]; */

const arrayTest = [1,[2, 3, [4, 5, [6]]]];
const result = [];

function flatten (array) {
    for(let index = 0; index < array.length; index++){
        if(typeof(array[index]) == 'number') {
            result.push(array[index]);
        } else {
            return flatten(array[index])
        }
    }
}

flatten(arrayTest);
console.log(result);