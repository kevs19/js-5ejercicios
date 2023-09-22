/**Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */
var palabra = prompt("ingrese una palabra ");
const regex = /[a-z]/g;

palabra = palabra.toLowerCase();
palabra = palabra.match(regex);
palabraAlreves = [...palabra];
palabraAlreves = palabraAlreves.reverse();
console.log(palabra.join());
console.log(palabraAlreves.join());

for(let i = 0; i < palabra.length; i++){
    if(palabra[i] != palabraAlreves[i]) {
        console.log("falso")
    }console.log("verdadero")
}

