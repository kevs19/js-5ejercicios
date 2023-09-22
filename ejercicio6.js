/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]]; */

const arrayTest = [1,[2, 3, [4, 5, [6]]]];
const result = [];

function flatten (array) {
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === 'number') {
            result.push(array[i]);
            //console.log(result)
        } else {
            return flatten(array[i])
        }
    }
    //return result;
}

flatten(arrayTest);
console.log(result);