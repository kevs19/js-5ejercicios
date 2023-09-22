/* 
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/

let segundos = prompt("Por favor introduzca los segundos");
segundos = Number(segundos);
let tiempo = segundos * 1000
const alarma = () => {
    setTimeout(() => {
        console.log("Alarma")
    }, tiempo);
}