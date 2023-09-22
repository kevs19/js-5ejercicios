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

