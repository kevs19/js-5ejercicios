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