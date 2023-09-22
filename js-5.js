/**User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/

let name = prompt("Please enter your name");
let age = prompt("Please enter your age");
let favoriteMovies =prompt("Please enter your favorite movies separate with ,");
let arrayFavoriteMovie = favoriteMovies.split(",");
let movies = 0;

console.log("hi "+name);
console.log("favorite movies");
while (movies < arrayFavoriteMovie.length){
    console.log(arrayFavoriteMovie[movies]+"is one of my favorites");
    movies++;
}




/**
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */


let numeros = prompt("Please enter 10 numbers separate with ,");
let  numeroMayor = 0;
numeros=numeros.split(",");
numeros.forEach((numero)=>{
    numero=Number(numero);
    console.log(numero + ">"+ numeroMayor+ ":" + numero + ">" + numeroMayor)
    if (numero > numeroMayor){
        numeroMayor = numero;
    }
})
console.log("El numero mayor de "+ numeros.join() + " es " + numeroMayor);

/* 
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/

let segundos = prompt("Por favor introduzca los segundos");
segundos = Number(segundos);

const alarm = () => {
    setTimeout(() => console.log("hora de ir a la cama"+ segundos*(1000)));
}

/**Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */

const palindromo = () => {
    let palabra = prompt("Ingrese una palabra ");
    const regex = /[a-z]/g;

    palabra = palabra.toLowerCase();
    palabra = palabra.toUpperCase();
    palabra = palabra.match(regex);
    palabraAlreves = [...palabra];
    palabraAlreves = palabraAlreves.reverse();
    console.log(palabra.join());
    console.log(palabraAlreves.join());

    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] != palabraAlreves[i]) {
            return `La palabra introducida es palindromo? : ${false}`;
        }
    }

    return `La palabra introducida es palíndromo : ${true}`
}

/**
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */


let nummero = prompt("Ingrese un número");
let resultado = 0;

function factorial(nummero) {
    if(nummero == 0){
        return 1;
    } else {
        return resultado = nummero * factorial(nummero-1);
    }
}
console.log(factorial(nummero));
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