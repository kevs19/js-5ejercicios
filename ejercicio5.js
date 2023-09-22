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